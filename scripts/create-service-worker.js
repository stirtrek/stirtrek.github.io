///
/// Because Service Workers need to specifically call out each asset to cache, we need to generate this dynamically.
/// Most of this file is just determining what files Hexo will create, and then putting them into the final serviceworker.js
///
hexo.extend.generator.register('create-service-worker', function (locals) {

    // Used to map the speakers and sessions together to figure out what pages will be cached
    let speakerAndSessionParser = require('./speakerAndSessionParser.js');

    // Template used to generate the final output
    let swStringBuilder = require('./service-worker-template.js');

    // I wish I knew how to load these from the config more gracefully than node code
    let fs = require('fs');
    let yaml = require('js-yaml');
    const years = yaml.load(fs.readFileSync('./_config.yml')).allYears;
    const currentYear = yaml.load(fs.readFileSync('./_config.yml')).currentYear;

    // Stash the pages here.
    let allPagesAndFiles = []

    // Add all the normal pages and posts. This will also grab other files like CSS that Hexo touches.
    // Note: it doesn't grab images. We'll do that at the end
    locals.pages.toArray().concat(locals.posts.toArray()).forEach(page => {
        if (page.path === "scripts/serviceworker.js") return;

        // Every URL should have a leading /
        let fixedString = page.path;
        if (fixedString[0] !== '/')
            fixedString = "/" + fixedString;

        // If it's an index.html, we need to load the associated / route as well. We also remove the last slash.
        if (fixedString.endsWith("index.html"))
            allPagesAndFiles.push(fixedString.substring(0, fixedString.length - 10));

        allPagesAndFiles.push(fixedString)
    });

    // Find all the magically generated pages
    years.forEach((year) => {
        let thisYearsFile = eval('locals.data.sessions' + year);
        let thisYearsSchedule = eval('locals.data.schedule' + year);

        if (!thisYearsFile || !thisYearsSchedule) return;

        console.log(`Generating speaker pages for ${year}`)

        let mappedSpeakers = speakerAndSessionParser.getSpeakersWithSessions(thisYearsFile, thisYearsSchedule, year);

        mappedSpeakers.forEach(speaker => {
            allPagesAndFiles.push(speaker.getSpeakerPageUrl());
        })
    })

    // Add our images and fonts. I don't know how to do this with hexo, so I'm just using some node
    const fs2 = require('fs');
    let directories = ['images/', 'icons/', 'fonts/', 'images/sponsors/'];
    // Add all speaker images by year
    years.forEach(year => directories.push(`images/speakers/${year}/`));

    directories.forEach(directory => {
        // Skip directories that don't match the current year
        if (!currentYear || !directory.includes(currentYear)) return;

        fs.readdirSync(`./source/${directory}`).forEach(file => {
            // If this isn't also a directory, add it
            if (!fs2.statSync(`./source/${directory}${file}`).isDirectory())
                allPagesAndFiles.push(directory + file);

        });
    })

    // Take all of the files we've found and put them into a string
    let allPagesAndFilesString = ""; // This will be put into the Service Worker template
    for (var x = 0; x < allPagesAndFiles.length; x++) {
        allPagesAndFilesString += `"${allPagesAndFiles[x]}"`; // format: "/some/path",

        // Safari seems to choke on trailing commas, so we insert them for all but the last item
        if (x < allPagesAndFiles.length - 1)
            allPagesAndFilesString += ",\r\n";
    }

    // Annoyingly, Safari seems to break on trailing commas. We'll get rid of the last one. And the carriage return.
    allPagesAndFilesString.substring(0, allPagesAndFilesString.length - 3);


    // Here's our lovely service worker template for us to insert the cache list in
    let serviceWorkerHTML = swStringBuilder.buildSWString(allPagesAndFilesString, Date.now().toString());

    return [{
        path: "/serviceworker.js",
        data: serviceWorkerHTML
    }]

});