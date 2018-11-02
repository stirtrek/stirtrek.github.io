hexo.extend.generator.register('session-page-creation', function(locals) {

    // TODO this should probably move to a config
    const years = ['2018'];

    // Stash the pages as they are created
    var sessionPages = []

    years.forEach((year) => {
        var thisYearsContent = eval('locals.data.sessions' + year);

        thisYearsContent.sessions.forEach((session) => {
            // Match speakers
            var speakers = thisYearsContent.speakers.
                filter((speaker) => speaker.sessions.includes(parseInt(session.id, 10))).
                map(function (speaker) {
                    return {
                        id: session.id,
                        firstName: speaker.firstName.replace(/[^a-zA-Z0-9-_\.]/g, ''),
                        lastName: speaker.lastName.replace(/[^a-zA-Z0-9-_\.]/g, ''),
                        tagLine: speaker.tagLine,
                        bio: speaker.bio,
                        profilePicture: speaker.profilePicture
                    }
                });

            sessionPages.push({
                path: `/Sessions/${year}/${session.id}.html`,
                data: {
                    title: session.title,
                    description: session.description,
                    year: year,
                    speakers: speakers
                },
                layout: ['sessionPage']
            });

        });
    });

    // Returning the array of pages will cause Hexo to combine the content with the template and generate them during `hexo generate`
    return sessionPages;

});