/// Node (non-Hexo) script to parse the speaker data and download all of the images 
/// so we the browser doesn't have to call out to Sessionize.
///
/// This stores the files on disk. The page generator will need to know by convention where they'll be.

const fs = require('fs');
const yaml = require('js-yaml');
const https = require('https');

// Load configuration
let config;
try {
  config = yaml.load(fs.readFileSync('./_config.yml', 'utf8'));
} catch (err) {
  console.error('❌ Error reading _config.yml:', err.message);
  process.exit(1);
}

// Validate required config variables
const sessionizeURL = config.sessionizeApiUrl;
const currentYear = config.currentYear;

if (!sessionizeURL || !currentYear) {
  console.warn('❌ Missing required configuration: sessionizeApiUrl or currentYear.');
  process.exit(0);
}

// Set output path
const outputLocation = `./source/_data/sessions${currentYear}.json`;

// Download function with better error handling
function downloadJSON(url, outputPath) {
  return new Promise((resolve, reject) => {
    const outputFile = fs.createWriteStream(outputPath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP Error: ${response.statusCode} for ${url}`));
        return;
      }

      response.pipe(outputFile);

      outputFile.on('finish', () => {
        outputFile.close(() => {
          console.log(`✅ Download complete: ${url}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      reject(new Error(`❌ Download error: ${err.message}`));
    });
  });
}

// Execute the download
(async () => {
  try {
    console.log(`⬇️ Starting download from ${sessionizeURL}`);
    await downloadJSON(sessionizeURL, outputLocation);
    console.log(`✅ File saved to ${outputLocation}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
