/// Node (non-Hexo) script to parse the speaker data and download all of the images 
/// so we the browser doesn't have to call out to Sessionize.
///
/// This stores the files on disk. The page generator will need to know by convention where they'll be.

let fs = require('fs');
let yaml = require('js-yaml');
// let https = require('https');
let https = require('follow-redirects').https;


// Get the year from the config
let config = yaml.safeLoad(fs.readFileSync('./_config.yml'));
let allYears = config.allYears;

for (var currentYear of allYears) {
    // See if we have session data yet, otherwise skip this year
    if (!fs.existsSync(`./source/_data/sessions${currentYear}.json`))
        continue;

    // Read the speaker data
    var contents = JSON.parse(fs.readFileSync(`./source/_data/sessions${currentYear}.json`, 'utf8'));

    // Create the output director if it doesn't exist
    if (!fs.existsSync(`./source/images/speakers/${currentYear}/`)) {
        fs.mkdirSync(`./source/images/speakers/${currentYear}/`);
    }

    // For each speaker, download the avatar image if it doesn't already exist
    var i = 0;
    if (contents.speakers) {
        contents.speakers.forEach(speaker => {
            let imgUrl = speaker.profilePicture;

            let fileExtensionRegex = /(?:\.([^.]+))?$/;
            let fileExtension = fileExtensionRegex.exec(imgUrl)[1];

            // remove quotes and spaces
            speaker.firstName = speaker.firstName.replace(/[^a-zA-Z0-9-_\.]/g, '');
            speaker.lastName = speaker.lastName.replace(/[^a-zA-Z0-9-_\.]/g, '');

            let outputLocation = `./source/images/speakers/${currentYear}/${speaker.firstName}-${speaker.lastName}.${fileExtension}`;

            // Skip if we already have the file
            if (fs.existsSync(outputLocation)) {
                return;
            }

            let outputFile = fs.createWriteStream(outputLocation);
            https.get(imgUrl, function (response) {
                response.pipe(outputFile);
                console.log(`Downloading - ${imgUrl}`)

                outputFile.on("finish", () => {
                    outputFile.close();
                    console.log("Download Completed");
                });
            });
        })
    }
}
