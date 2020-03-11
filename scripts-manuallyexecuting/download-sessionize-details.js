/// Node (non-Hexo) script to parse the speaker data and download all of the images 
/// so we the browser doesn't have to call out to Sessionize.
///
/// This stores the files on disk. The page generator will need to know by convention where they'll be.

let fs = require('fs');
let yaml = require('js-yaml');
let https = require('https');


// Get the year from the config
let config = yaml.safeLoad(fs.readFileSync('./_config.yml'));
let sessionizeURL = config.sessionizeApiUrl;
let currentYear = config.currentYear;

// Download the Sessionize info
let outputLocation = `./source/_data/sessions${currentYear}.json`;
let outputFile = fs.createWriteStream(outputLocation);
https.get(sessionizeURL, function(response) {
    response.pipe(outputFile);
    console.log(`Downloading - ${sessionizeURL}`)
});
