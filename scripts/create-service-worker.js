///
/// Because Service Workers need to specifically call out each asset to cache, we need to generate this dynamically.
/// Most of this file is just determining what files Hexo will create, and then putting them into the final serviceworker.js
///
hexo.extend.generator.register('create-service-worker', function(locals) {

    // Used to map the speakers and sessions together to figure out what pages will be cached
    let speakerAndSessionParser = require('./speakerAndSessionParser.js');

    // I wish I knew how to load these from the config more gracefully than node code
    let fs = require('fs');
    let yaml = require('js-yaml');
    const years = yaml.safeLoad(fs.readFileSync('./_config.yml')).allYears;

    // Stash the pages here.
    let allPagesAndFiles = []

    // Add all the normal pages and posts. This will also grab other files like CSS that Hexo touches.
    // Note: it doesn't grab images. We'll do that at the end
    locals.pages.toArray().concat(locals.posts.toArray()).forEach(page => {
        if(page.path === "scripts/serviceworker.js") return;

        // Every URL should have a leading /
        let fixedString = page.path;
        if(fixedString[0] !== '/')
            fixedString = "/" + fixedString;

        // If it's an index.html, we need to load the associated / route as well. We also remove the last slash.
        if(fixedString.endsWith("index.html"))
            allPagesAndFiles.push(fixedString.substring(0, fixedString.length - 10));

        allPagesAndFiles.push(fixedString)
    });

    // Find all the magically generated pages
    years.forEach((year) => {
        let thisYearsFile = eval('locals.data.sessions' + year);
        let thisYearsSchedule = eval('locals.data.schedule' + year);

        if(!thisYearsFile || !thisYearsSchedule) return;

        let mappedSpeakers = speakerAndSessionParser.getSpeakersWithSessions(thisYearsFile, thisYearsSchedule, year);

        mappedSpeakers.forEach(speaker => {
            allPagesAndFiles.push(speaker.getSpeakerPageUrl());
        })
    })

    // Add our images and fonts. I don't know how to do this with hexo, so I'm just using some node
    const fs2 = require('fs');
    let directories = ['/images/', '/icons/', '/fonts/', '/images/sponsors/'];
    // Add all speaker images by year
    years.forEach(year => directories.push(`/images/speakers/${year}/`));

    directories.forEach(directory => {
        fs.readdirSync(`./source/${directory}`).forEach(file => {
            // If this isn't also a directory, add it
             if(!fs2.statSync(`./source${directory}${file}`).isDirectory())
                allPagesAndFiles.push(directory + file);

        })
    
    })

    // Take all of the files we've found and put them into a string
    let allPagesAndFilesString = ""; // This will be put into the Service Worker template
    for(var x = 0; x < allPagesAndFiles.length; x++) {
        allPagesAndFilesString += `"${allPagesAndFiles[x]}"`; // format: "/some/path",

        // Safari seems to choke on trailing commas, so we insert them for all but the last item
        if(x < allPagesAndFiles.length - 1)
            allPagesAndFilesString += ",\r\n";
    }

    // Annoyingly, Safari seems to break on trailing commas. We'll get rid of the last one. And the carriage return.
    allPagesAndFilesString.substring(0, allPagesAndFilesString.length - 3);

    // Here's our lovely service worker template for us to insert the cache list in
    let serviceWorkerHTML = `
var CACHE = 'network-or-cache';

// On install, cache some resource.
self.addEventListener('install', function(evt) {
    console.log('The service worker is being installed.');

    // Ask the service worker to keep installing until the returning promise
    // resolves.
    evt.waitUntil(precache());
});

// On fetch, use cache but update the entry with the latest contents
// from the server.
self.addEventListener('fetch', function(evt) {
    // Try network and if it fails, go for the cached copy.
    evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
    return fromCache(evt.request);
    }));
});

// Open a cache and use 'addAll()' with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.
function precache() {
    return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
            ${allPagesAndFilesString}
        ]);
    });
  }
  
// Time limited network request. If the network fails or the response is not
// served before timeout, the promise is rejected.
function fromNetwork(request, timeout) {
    return new Promise(function (fulfill, reject) {
        // Reject in case of timeout.
        var timeoutId = setTimeout(reject, timeout);

        // Fulfill in case of success.
        fetch(request).then(function (response) {
            clearTimeout(timeoutId);

            fulfill(response);

        // Reject also if network fetch rejects.
        }, reject);
    });
}

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with 'undefined' as value.
function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
        return matching || Promise.reject('no-match');
        });
    });
};
`

    return [{
        path: "/serviceworker.js",
        data: serviceWorkerHTML
    }]

});