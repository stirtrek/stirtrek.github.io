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

In Sessionize, setup an API / Embed with the following settings:
![Format Settings](readme-sessionize-1.png)
![Data Settings](readme-sessionize-2.png)

## How do speaker/session pages get generated?
Files in /scripts get run during a `hexo generate`, reading the data files, creating data for each individual html, and merging them with the appriorate templates. Also, magic.

## How do I change static content?
All of the static pages exist in /source/ as Markdown files. For example:
* If you want to change the homepage, change /source/index.md. 
* The Code of Conduct is /source/Info/CodeOfConduct/index.md.

The look and feel for these pages is driven from JavaScript and HTML stored in /themes/. Don't mess with those if you're not sure what you're doing ;)

If you're new to Markdown, you can find a [simple overview here](https://www.markdownguide.org/basic-syntax/).

## Updating year to year
A few things need to happen to roll the site to a new year:
- _config.yml should be updated with the new year set as currentYear, and added to the allYears array
- _data needs the following to happen
    - schedule20XX.json needs to be created
    - sponsors.json needs a new "year20XX" added to it's array. This file is much smaller so I just keep it all in one place for now.
        - This file is an object and not an array to make it easier to walk in code. JavaScript properties can't begin with numbers, so that's why it starts with the word "year".
    - sessions20XX.json needs to be downloaded from Sessionize once we've selected sessions
- Search for the year in the /source directory's .md files and change it where appropriate in content
- While there is no schedule /source/Speakers/index.md has the year set as the previous year in the YAML at the top. When we get a new schedule, update this value.

## Creating a speaker archive page
Previous speaker/talk pages get created at /Speakers/1234/Speaker-Name.html, but there is no automatic archive page. To create one, add a file to /Speakers like "2019.md" and update the configuration at the top as appropriate.


## To add a sponsor
- Add a **(this is important)** 350x200 pixel jpg or png of the sponsor logo to /source/images/sponsors/ folder.
- Copy a sponsor in /source/_data/sponsors.json and paste it in the appropriate year and sponsorship level.
- Commit the change to the Source branch and it should deploy.
