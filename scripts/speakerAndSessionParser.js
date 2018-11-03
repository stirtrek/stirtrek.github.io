class SpeakerWithSessions {
    constructor(firstName, lastName, speakerObj, sessionsObj, year) {
        this.firstName = firstName;
        this.lastName = lastName;

        if(speakerObj) {
            if(speakerObj.profilePicture)
                this.profilePicture = speakerObj.profilePicture;

            if(speakerObj.tagLine)
                this.tagLine = speakerObj.tagLine;
    
            if(speakerObj.bio)
                this.bio = speakerObj.bio;
        }

        this.sessions = sessionsObj;
        this.year = year;
    }

    getTitle() {
        return this.firstName + " " + this.lastName;
    }

    getSpeakerPageUrl() {
        return `/Speakers/${this.year}/${this.firstName}-${this.lastName}.html`
    }

    // Needed to let this object get handed to Hexo to render
    getBaseObject(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            profilePicture: this.profilePicture,
            tagLine: this.tagLine,
            bio: this.bio,
            sessions: this.sessions,
            year: this.year,
            title: this.getTitle()
        }
    }
}

module.exports ={
    getSpeakersWithSessions: function(sessionsDataFile, year) {
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

            return new this.SpeakerWithSessions(firstName, lastName, speaker, sessions, year);


        });
    },
    SpeakerWithSessions: SpeakerWithSessions
}