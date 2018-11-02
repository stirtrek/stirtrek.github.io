hexo.extend.generator.register('speaker-page-creation', function(locals) {

    // TODO this should probably move to a config
    const years = ['2018'];

    // Stash the pages as they are created
    var speakerPages = [];

    years.forEach((year) => {
        var thisYearsContent = eval('locals.data.sessions' + year);

        thisYearsContent.speakers.forEach((speaker) => {
            // Clean up special characters
            var firstName = speaker.firstName.replace(/[^a-zA-Z0-9-_\.]/g, '');
            var lastName = speaker.lastName.replace(/[^a-zA-Z0-9-_\.]/g, '');

            // Match talks
            var sessions = thisYearsContent.sessions.
                filter((session) => session.speakers.includes(speaker.id)).
                map(function (session) {
                    return {
                        id: session.id,
                        title: session.title,
                        description: session.description
                    }
                });

            speakerPages.push({
                path: `/Speakers/${year}/${firstName}-${lastName}.html`,
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    profilePicture: speaker.profilePicture,
                    tagLine: speaker.tagLine,
                    bio: speaker.bio,
                    sessions: sessions,
                    year: year,
                    title: firstName + " " + lastName
                },
                layout: ['speakerPage']
            });

        });
    });

    // Returning the array of pages will cause Hexo to combine the content with the template and generate them during `hexo generate`
    return speakerPages;

});