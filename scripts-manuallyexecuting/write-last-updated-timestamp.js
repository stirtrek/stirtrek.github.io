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

const timeZone = config.timeZone || 'America/New_York';
const outputLocation = './source/_data/lastUpdated.json';

const timestamp = moment().tz(timeZone).format('MMMM D, YYYY [at] h:mm A z');

const data = { timestamp };

try {
  fs.writeFileSync(outputLocation, JSON.stringify(data, null, 2), 'utf8');
  console.log(`✅ Last updated timestamp written to ${outputLocation}: ${timestamp}`);
} catch (err) {
  console.error(`❌ Error writing timestamp to ${outputLocation}:`, err.message);
  process.exit(1);
}
