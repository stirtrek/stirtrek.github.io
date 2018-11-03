# Static Content Generation via Hexo.io

This site is using [Hexo.io ](https://hexo.io/) to generate static HTML pages.

All work needs to be done in Source. [Travis CI](travis-ci.org) is hooked to Source, runs a build, generates static content, and deploys this content to Master where GitHub pages will serve it.

Hexo is setup to use the templates I've created in themes/stir-trek-comic and then compiles all the files in source/ into those themes. The Speaker and Sponsor data comes from source/_data/ json files.

You'll need Node.js installed to build the site. Once you have that, in the source branch run:
```javascript
npm install
```

To serve the files locally on port 4000, run:
```javascript
hexo server
```

To generate the static assets in the /public directory, run:
```javascript
hexo generate
```

To deploy, assuming you have the Github token that's used (find it [here](https://travis-ci.org/stirtrek/stirtrek.github.io/settings)) run:
```javascript
hexo deploy
```

## How do we get data?
An extract from Sessionize should be saved in _data with the name "sessionsYYYY.json". A new one should be saved each year. The scripts in /script will find those files if they are updated to include the correct years in their years array.

## How do speaker/session pages get generated?
Files in /scripts get run during a `hexo generate`, reading the data files, creating data for each individual html, and merging them with the appriorate templates. Also, magic.

## Updating year to year
A few things need to happen to roll the site to a new year:
- _config.yml should be updated with the current year
- scripts in /scripts should have the new year added to their arrays so they'll compile pages. Note: this is just because I don't know how to make scripts read the config file ;)