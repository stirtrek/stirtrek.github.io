const fs = require('fs');
const yaml = require('js-yaml');
const moment = require('moment-timezone');

// Load configuration
let config;
try {
  config = yaml.load(fs.readFileSync('./_config.yml', 'utf8'));
} catch (err) {
  console.error('❌ Error reading _config.yml:', err.message);
  process.exit(1);
}

// Validate required configuration variables
const currentYear = config.currentYear;
const timeZone = config.timeZone;
const sessionizeURL = config.sessionizeApiUrl;

if (!currentYear || !timeZone) {
  console.error('❌ Missing required configuration: currentYear or timeZone.');
  process.exit(1);
}

if (!sessionizeURL) {
  console.warn('❌ Missing required configuration: sessionizeApiUrl. Skipping this run.');
  process.exit(0);
}

// Set the timezone
moment.tz.setDefault(timeZone);

// Define paths
const sessionDataLocation = `./source/_data/sessions${currentYear}.json`;
const scheduleOutputLocation = `./source/_data/schedule${currentYear}.json`;

// Read session data
let sessionData;
try {
  const rawSessionData = fs.readFileSync(sessionDataLocation, 'utf8');
  sessionData = JSON.parse(rawSessionData);
} catch (err) {
  console.error(`❌ Failed to read or parse session data from ${sessionDataLocation}:`, err.message);
  process.exit(1);
}

// Initialize schedule object
const schedule = {
  scheduledSessions: {
    timeSlots: [],
  }
};

// Map room names and IDs
const theaterRoomNamesAndIds = sessionData.rooms.map((room) => ({
  id: room.id,
  name: room.name,
}));

// Extract and deduplicate start times
let startTimes = [...new Set(sessionData.sessions.map((session) => session.startsAt))];

// Generate schedule
for (const startTime of startTimes) {
  const timeSlotSessionOutput = [];

  // Filter sessions by this timeslot
  const sessionsThisTimeSlot = sessionData.sessions.filter(
    (session) => session.startsAt === startTime
  );

  // Map sessions to rooms
  for (const thisRoom of theaterRoomNamesAndIds) {
    const thisSession = sessionsThisTimeSlot.find(
      (session) => session.roomId === thisRoom.id
    );

    if (thisSession) {
      timeSlotSessionOutput.push({
        id: thisSession.id,
        scheduledRoom: thisRoom.name,
      });
    }
  }

  // Add the timeslot to the schedule
  const startTimeMoment = moment(startTime);
  schedule.scheduledSessions.timeSlots.push({
    time: startTimeMoment.format('h:mm A'),
    sessions: timeSlotSessionOutput,
  });
}

// Write the generated schedule to a file
try {
  fs.writeFileSync(scheduleOutputLocation, JSON.stringify(schedule, null, 2), 'utf8');
  console.log(`✅ Schedule successfully written to ${scheduleOutputLocation}`);
} catch (err) {
  console.error(`❌ Error writing schedule to ${scheduleOutputLocation}:`, err.message);
  process.exit(1);
}
