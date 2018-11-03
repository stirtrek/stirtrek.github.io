hexo.extend.generator.register('speaker-page-creation', function(locals) {

    // Used to map the speakers and sessions together
    var speakerAndSessionParser = require('./speakerAndSessionParser.js');

    // I wish I knew how to load these from the config
    const years = ['2018','2019'];

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