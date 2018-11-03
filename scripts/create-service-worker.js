hexo.extend.generator.register('create-service-worker', function(locals) {

    // Used to map the speakers and sessions together to figure out what pages will be cached
    var speakerAndSessionParser = require('./speakerAndSessionParser.js');

    // I wish I knew how to load these from the config
    const years = ['2018','2019'];

    // Stash the pages here
    var allPages = []

    // Add all the normal pages
    locals.pages.toArray().forEach(page => allPages.push(page.path));

    // Find all the magically generated pages
    years.forEach((year) => {
        var thisYearsFile = eval('locals.data.sessions' + year);

        var mappedSpeakers = speakerAndSessionParser.getListOfSessions(thisYearsFile,year);

        mappedSpeakers.forEach(speaker => {
            allPages.push(`/Speakers/${year}/${speaker.firstName}-${speaker.lastName}.html`);
        })
    })

    allPages.forEach(page => {
        console.log('Page to cache: ' + page);
    });

    var serviceWorkerHTML = `

    var CACHE = 'network-or-cache';

    // On install, cache some resource.
    self.addEventListener('install', function(evt) {
    console.log('The service worker is being installed.');

    // Ask the service worker to keep installing until the returning promise
    // resolves.
    evt.waitUntil(precache());
    });

    // On fetch, use cache but update the entry with the latest contents
    // from the server.
    self.addEventListener('fetch', function(evt) {
    console.log('The service worker is serving the asset.');
    // Try network and if it fails, go for the cached copy.
    evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
        return fromCache(evt.request);
    }));
    });

    // Open a cache and use 'addAll()' with an array of assets to add all of them
    // to the cache. Return a promise resolving when all the assets are added.
    function precache() {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll([
        './controlled.html',
        './asset'
        ]);
    });
    }

    // Time limited network request. If the network fails or the response is not
    // served before timeout, the promise is rejected.
    function fromNetwork(request, timeout) {
    return new Promise(function (fulfill, reject) {
        // Reject in case of timeout.
        var timeoutId = setTimeout(reject, timeout);
        // Fulfill in case of success.
        fetch(request).then(function (response) {
        clearTimeout(timeoutId);
        fulfill(response);
        // Reject also if network fetch rejects.
        }, reject);
    });
    }

    // Open the cache where the assets were stored and search for the requested
    // resource. Notice that in case of no matching, the promise still resolves
    // but it does with 'undefined' as value.
    function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
        return matching || Promise.reject('no-match');
        });
    });
    }
    `

});