///
/// Script to automatically generate all of the individual speaker pages.
/// This creates an object with speaker and session data and then pushes it into Hexo to generate the html
///
hexo.extend.generator.register('speaker-page-creation', function(locals) {

    // Used to map the speakers and sessions together
    var speakerAndSessionParser = require('./speakerAndSessionParser.js');

    // Unsure how to get the config settings from Hexo, so just using some Node code
    let fs = require('fs');
    let yaml = require('js-yaml');
    const years = yaml.safeLoad(fs.readFileSync('./_config.yml')).allYears;

    // Stash the pages as they are created
    var speakerPages = [];

    years.forEach((year) => {
        var thisYearsFile = eval('locals.data.sessions' + year);

        var mappedSpeakers = speakerAndSessionParser.getSpeakersWithSessions(thisYearsFile, year);

        // Create a page for each speaker with his or her sessions
        mappedSpeakers.forEach(speaker => {
            speakerPages.push({
                path: speaker.getSpeakerPageUrl(),
                data: speaker.getBaseObject(),
                layout: ['speakerPage']
            })

        })
    });

    // Returning the array of pages will cause Hexo to combine the content with the template and generate them during `hexo generate`
    return speakerPages;

});