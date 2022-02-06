// Node (non-Hexo) script to add all the files you need to support a new year
// This script doesn't do intelligent error checking. Make sure you provide a 4 digit year

let fs = require('fs');

if (process.argv.length === 2) {
    console.error('You must provide a 4 digit year.');
    process.exit(1);
}

let newYear = parseInt(process.argv[2]);

let schedulePath = `./source/_data/schedule${newYear}.json`;
let templateSchedule = {
    scheduledSessions: {
      timeSlots: []
    }
  }
createFile(schedulePath, templateSchedule);

let sessionsPath = `./source/_data/sessions${newYear}.json`;
createFile(sessionsPath, null);

let sponsorPath = `./source/_data/sponsors${newYear}.json`;
let templateSponsors = {
    sponsors: {
        principal: [],
        platinum: [],
        gold: [],
        silver: []
    }
}
createFile(sponsorPath, templateSponsors);


// Try to open the file. If it can't be opened then create it.
function createFile(fullFilePath, data) {
    fs.open(fullFilePath, 'r', function (error) {
        if (error) {
            if(data) {
                jsonData = JSON.stringify(data);
            } else {
                jsonData = "";
            }

            fs.writeFileSync(fullFilePath, jsonData, function (error2) {
                if (error2)
                    console.log("Something terrible has happened!");
            });
        }
    });
}