hexo.extend.generator.register('create-service-worker', function(locals) {

    // Used to map the speakers and sessions together to figure out what pages will be cached
    var speakerAndSessionParser = require('./speakerAndSessionParser.js');

    // I wish I knew how to load these from the config
    const years = ['2018','2019'];

    // Stash the pages here. We'll manually add in key images.
    var allPagesAndFiles = [
        "/",
        "/images/BabyGroot.png",
        "/images/thanos-header-1140x760.png",
        "/images/header-logo.png",
        "/icons/favicon-72.png",
        "/icons/favicon-114.png",
        "/icons/opengraph.jpg",
        "/icons/speaker-icon.png",
        "/icons/stirtrek-default.png"
    ];

    // Add all the normal pages and posts. This will also grab other files like CSS that Hexo touches.
    // Note: it doesn't grab images
    locals.pages.toArray().concat(locals.posts.toArray()).forEach(page => {
        if(page.path === "scripts/serviceworker.js") return;

        let fixedString = page.path;
        if(fixedString[0] !== '/')
            fixedString = "/" + fixedString;

        allPagesAndFiles.push(fixedString)
    });

    // Find all the magically generated pages
    years.forEach((year) => {
        var thisYearsFile = eval('locals.data.sessions' + year);

        var mappedSpeakers = speakerAndSessionParser.getSpeakersWithSessions(thisYearsFile,year);

        mappedSpeakers.forEach(speaker => {
            allPagesAndFiles.push(speaker.getSpeakerPageUrl());
        })
    })

    // Take all of the files we've found and put them into a string
    var allPagesAndFilesString = ""; // This will be put into the Service Worker template
    allPagesAndFiles.forEach(page => {
        allPagesAndFilesString += `"${page}",\r\n`; // format: "/some/path",
    });

    // Here's our lovely service worker template for us to insert the cache list in
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
    return cache.addAll(
        [
            ${allPagesAndFilesString}
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

    return [{
        path: "/serviceworker.js",
        data: serviceWorkerHTML
    }]

});