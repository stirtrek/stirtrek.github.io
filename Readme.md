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
