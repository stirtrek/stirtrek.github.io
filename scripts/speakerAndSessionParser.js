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
        return `/speakers/${this.year}/${this.firstName.replace(/[ \"]/g,"")}-${this.lastName.replace(/[ \"]/g,"")}.html`
    }

    // Knows where we'd store the picture locally even though the data shows a Sessionize URL
    getLocalProfilePicture() {
        let fileExtensionRegex = /(?:\.([^.]+))?$/;
        let fileExtension = fileExtensionRegex.exec(this.profilePicture)[1];

        return `/images/speakers/${this.year}/${this.firstName.replace(/[^a-zA-Z0-9-_\.]/g, '')}-${this.lastName.replace(/[^a-zA-Z0-9-_\.]/g, '')}.${fileExtension}`;
    }

    // Needed to let this object get handed to Hexo to render
    getBaseObject(){
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            profilePicture: this.getLocalProfilePicture(),
            tagLine: this.tagLine,
            bio: this.bio,
            sessions: this.sessions,
            year: this.year,
            title: this.getTitle()
        }
    }
}

module.exports ={
    getSpeakersWithSessions: function(sessionsDataFile, scheduleDataFile, year) {
        return sessionsDataFile.speakers.map((speaker) => {
            // Clean up special characters
            var firstName = speaker.firstName;
            var lastName = speaker.lastName;

            // Match talks
            var sessions = sessionsDataFile.sessions.filter((session) => {
                // Some sessions (e.g. lunch) have no speakers
                if (session.speakers.length === 0)
                    return false;
                return session.speakers.includes(speaker.id.toString());
            }).map(function (session) {
                var sessionTime, sessionRoom;

                // Find the time slot for this session
                scheduleDataFile.scheduledSessions.timeSlots.forEach(timeSlot => {
                    var matchedScheduleSession = timeSlot.sessions.find(scheduledSession => {
                        return scheduledSession.id.toString() === session.id.toString()
                    })

                    
                    if(matchedScheduleSession) {
                        sessionTime = timeSlot.time;
                        sessionRoom = matchedScheduleSession.scheduledRoom;
                    }
                })                    

                return {
                    id: session.id,
                    title: session.title,
                    description: session.description,
                    time: sessionTime,
                    room: sessionRoom
                };
            });
            return new this.SpeakerWithSessions(firstName, lastName, speaker, sessions, year);


        });
    },
    SpeakerWithSessions: SpeakerWithSessions
}