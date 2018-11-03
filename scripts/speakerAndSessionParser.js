module.exports ={
    getListOfSessions: function(sessionsDataFile, year) {
        return sessionsDataFile.speakers.map((speaker) => {
            // Clean up special characters
            var firstName = speaker.firstName.replace(/[^a-zA-Z0-9-_\.]/g, '');
            var lastName = speaker.lastName.replace(/[^a-zA-Z0-9-_\.]/g, '');

            // Match talks
            var sessions = sessionsDataFile.sessions.filter((session) => {
                // Some sessions (e.g. lunch) have no speakers
                if (session.speakers.length === 0)
                    return false;
                return session.speakers.includes(speaker.id.toString());
            }).map(function (session) {
                return {
                    id: session.id,
                    title: session.title,
                    description: session.description
                };
            });

            return {
                firstName: firstName,
                lastName: lastName,
                profilePicture: speaker.profilePicture,
                tagLine: speaker.tagLine,
                bio: speaker.bio,
                sessions: sessions,
                year: year,
                title: firstName + " " + lastName
            }
        });
    }
}