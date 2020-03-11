/// Node (non-Hexo) script to parse the saved Sessionize data and generate a schedule file

let fs = require('fs');
let yaml = require('js-yaml');
let moment = require('moment');

// Get the year from the config
let config = yaml.safeLoad(fs.readFileSync('./_config.yml'));
let currentYear = config.currentYear;

// The schedule format is weird and I don't remember why :? Maybe from when we used ThatConference?
let schedule = {
    scheduledSessions: {
        timeSlots: [],
    }
};

// Parse it to build the schedule file
let sessionDataLocation = `./source/_data/sessions${currentYear}.json`;
const rawSessionData = fs.readFileSync(sessionDataLocation);
const sessionData = JSON.parse(rawSessionData);
const scheduleOutputLocation = `./source/_data/schedule${currentYear}.json`;

// Take the room names and figure out the Sessionize IDs for them
const theaterRoomNames = config.theaterRoomNames;
let theaterRoomNamesAndIds = [];
for(roomName of theaterRoomNames) {
    theaterRoomNamesAndIds.push(
        {
            id: sessionData.rooms.find(room => room.name === roomName).id,
            name: roomName
        })
}

// Figure out our session start times
let startTimes = sessionData.sessions.map(session => session.startsAt);
startTimes = [...new Set(startTimes)]; // makes it unique

// Generate a schedule for each start time for each session
for(startTime of startTimes) {
    let timeSlotSessionOutput = [];

    // Get the sessions in this timeslot
    let sessionsThisTimeSlot = sessionData.sessions.filter(session => session.startsAt === startTime);

    // Iterate through all the rooms and map the sessions to rooms
    for(thisRoom of theaterRoomNamesAndIds) {
        let thisSession = sessionsThisTimeSlot.find(session => session.roomId === thisRoom.id);
        if(thisSession) {
            timeSlotSessionOutput.push({
                "id": thisSession.id,
                "scheduledRoom": thisRoom.name
            })
        }
    }

    // Pretty print the start time using Moment
    let startTimeMoment = new moment(startTime);
    schedule.scheduledSessions.timeSlots.push({
        "time": startTimeMoment.utcOffset(config.utcOffset).format('h:mm A'),
        "sessions": timeSlotSessionOutput
    });
}

// Write the schedule out
fs.writeFileSync(scheduleOutputLocation, JSON.stringify(schedule,0,2));