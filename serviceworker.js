
var CACHE = 'network-or-cache-1616247570725';

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
            "/",
"/index.html",
"/manifest.json",
"/registration/",
"/registration/index.html",
"/speakers/2018.html",
"/speakers/",
"/speakers/index.html",
"/speakers/2019.html",
"/speakers/index_noncfpversion.html",
"/speakers/index_cfpopenversion.html",
"/sponsors/",
"/sponsors/index.html",
"/sessions/",
"/sessions/index.html",
"/store/",
"/store/index.html",
"/schedule/",
"/schedule/index.html",
"/info/codeofconduct/",
"/info/codeofconduct/index.html",
"/info/contact/",
"/info/contact/index.html",
"/info/commitmenttodiversity/",
"/info/commitmenttodiversity/index.html",
"/info/antiharassmentpolicy/",
"/info/antiharassmentpolicy/index.html",
"/info/travel/",
"/info/travel/index.html",
"/info/privacy/",
"/info/privacy/index.html",
"/info/faq/",
"/info/faq/index.html",
"/styles/bootstrap-button-social.min.css",
"/styles/site.css",
"/styles/fontawesome-4.min.css",
"/scripts/bootstrap.min.js",
"/styles/fontawesome-all.min.css",
"/styles/fontawesome.min.css",
"/scripts/bootstrap.js",
"/scripts/jquery-3.3.1.min.js",
"/scripts/jquery.js",
"/styles/bootstrap.min.css",
"/styles/bootstrap.css",
"/scripts/jquery-3.3.0.js",
"/scripts/jquery-3.3.1.js",
"/speakers/2018/Adam-Pasternack.html",
"/speakers/2018/Angel-Thomas.html",
"/speakers/2018/Anna-Heiermann.html",
"/speakers/2018/Barry-Tarlton.html",
"/speakers/2018/Benjamin-Bykowski.html",
"/speakers/2018/Bill-Sempf.html",
"/speakers/2018/Bobby-Grayson.html",
"/speakers/2018/Brandon-Bruno.html",
"/speakers/2018/Brett-Koenig.html",
"/speakers/2018/Chad-Green.html",
"/speakers/2018/Chris-DeMars.html",
"/speakers/2018/Craig-Stuntz.html",
"/speakers/2018/Dave-Wasmer.html",
"/speakers/2018/David-Neal.html",
"/speakers/2018/Dennis-Dunn.html",
"/speakers/2018/Drew-Furgiuele.html",
"/speakers/2018/Ed-Charbeneau.html",
"/speakers/2018/Eric-Potter.html",
"/speakers/2018/Greg-Malcolm.html",
"/speakers/2018/James-Balmert.html",
"/speakers/2018/Jarred-Olson.html",
"/speakers/2018/Jeff-McKenzie.html",
"/speakers/2018/Jeremy-Clark.html",
"/speakers/2018/Johnson-Denen.html",
"/speakers/2018/Jon-Kruger.html",
"/speakers/2018/Justin-James.html",
"/speakers/2018/Kevin-Holtz.html",
"/speakers/2018/Kevin-Mack.html",
"/speakers/2018/Kim-McGill.html",
"/speakers/2018/Kris-Hatcher.html",
"/speakers/2018/Lars-Klint.html",
"/speakers/2018/Mandar-Malunjkar.html",
"/speakers/2018/Marc-Peabody.html",
"/speakers/2018/Marlena-Bowen.html",
"/speakers/2018/Martine-Dowden.html",
"/speakers/2018/Michael-Dowden.html",
"/speakers/2018/Richard-Taylor.html",
"/speakers/2018/Rob-Richardson.html",
"/speakers/2018/Ronda-Bergman.html",
"/speakers/2018/Seth-Petry-Johnson.html",
"/speakers/2018/Shawn-Price.html",
"/speakers/2018/Stephen-Shary.html",
"/speakers/2018/Steve-Smith.html",
"/speakers/2018/Thomas-Haver.html",
"/speakers/2018/Tim-Hoolihan.html",
"/speakers/2018/Tim-LeMaster.html",
"/speakers/2018/Warner-Moore.html",
"/speakers/2018/Wasim-Hanna.html",
"/speakers/2019/Adam-Pasternack.html",
"/speakers/2019/Andrew-May.html",
"/speakers/2019/Barbara-Kerr.html",
"/speakers/2019/Ben-Burgett.html",
"/speakers/2019/Brendan-Enrick.html",
"/speakers/2019/Cassandra-Faris.html",
"/speakers/2019/Chad-Green.html",
"/speakers/2019/Damian-Synadinos.html",
"/speakers/2019/Ed-Charbeneau.html",
"/speakers/2019/Granville-Schmidt.html",
"/speakers/2019/Greg-Greenlee.html",
"/speakers/2019/Guy-Royse.html",
"/speakers/2019/Izzi-Bikun.html",
"/speakers/2019/Jack-Bennett.html",
"/speakers/2019/James-Balmert.html",
"/speakers/2019/James-Quick.html",
"/speakers/2019/Jay-Harris.html",
"/speakers/2019/Jeff-Strauss.html",
"/speakers/2019/Jesse-Weigel.html",
"/speakers/2019/Jessica-Engström.html",
"/speakers/2019/Jim-Everett.html",
"/speakers/2019/Jimmy-Engström.html",
"/speakers/2019/Joel-Lord.html",
"/speakers/2019/Jack-Merideth.html",
"/speakers/2019/JonathanJ.-Tower.html",
"/speakers/2019/Josh-Wood.html",
"/speakers/2019/Justin-James.html",
"/speakers/2019/Matt-Weimer.html",
"/speakers/2019/Michael-Meadows.html",
"/speakers/2019/Mike-Clement.html",
"/speakers/2019/Mike-Goeke.html",
"/speakers/2019/MikeEarleyand-RachelBanks.html",
"/speakers/2019/Nicolas-Martin.html",
"/speakers/2019/RebeccaR.-Carter.html",
"/speakers/2019/Robin-Clower.html",
"/speakers/2019/Russell-Skaggs.html",
"/speakers/2019/Ryan-Bales.html",
"/speakers/2019/Sarah-Withee.html",
"/speakers/2019/Shawn-Wallace.html",
"/speakers/2019/Sho-Fola.html",
"/speakers/2019/Steve-Smith.html",
"/speakers/2019/Thomas-Haver.html",
"/speakers/2019/Todd-Gardner.html",
"/speakers/2019/Tori-Brenneison.html",
"/speakers/2019/William-Klos.html",
"/speakers/2019/Zackary-Lowery.html",
"/speakers/2020/Adrienne-Tacke.html",
"/speakers/2020/Alex-Ford.html",
"/speakers/2020/Alexis-Lee.html",
"/speakers/2020/Andrew-May.html",
"/speakers/2020/Angel-Thomas.html",
"/speakers/2020/Angela-Pinney.html",
"/speakers/2020/Ben-Burgett.html",
"/speakers/2020/Bill-Dinger.html",
"/speakers/2020/Bill-Sempf.html",
"/speakers/2020/Brett-Berliner.html",
"/speakers/2020/Brett-Whittington.html",
"/speakers/2020/Burton-Smith.html",
"/speakers/2020/Byron-Delpinal.html",
"/speakers/2020/Carey-Payette.html",
"/speakers/2020/Carmen-Fontana.html",
"/speakers/2020/Chris-DeMars.html",
"/speakers/2020/Chris-Gardner.html",
"/speakers/2020/Christopher-Judd.html",
"/speakers/2020/Craig-Stuntz.html",
"/speakers/2020/Dan-Kacenjar.html",
"/speakers/2020/Daniel-Sims.html",
"/speakers/2020/Ed-Charbeneau.html",
"/speakers/2020/Glenn-HarmonJr..html",
"/speakers/2020/Greg-Greenlee.html",
"/speakers/2020/Haley-Hendershot.html",
"/speakers/2020/Jamie-Dicken.html",
"/speakers/2020/Jamie-Wright.html",
"/speakers/2020/Jason-Dobies.html",
"/speakers/2020/Jenny-Bramble.html",
"/speakers/2020/Jeremy-Miller.html",
"/speakers/2020/Jim-Kirkbride.html",
"/speakers/2020/Jonathan-Mills.html",
"/speakers/2020/Keith-Kurak.html",
"/speakers/2020/Matt-Eland.html",
"/speakers/2020/Michael-Cordingley.html",
"/speakers/2020/Mike-Hand.html",
"/speakers/2020/RACHEL-BANKS.html",
"/speakers/2020/Randy-Pagels.html",
"/speakers/2020/Sam-Nasr.html",
"/speakers/2020/Samara-Williams.html",
"/speakers/2020/Sarah-Gliniecki.html",
"/speakers/2020/Sarah-Withee.html",
"/speakers/2020/Seth-Petry-Johnson.html",
"/speakers/2020/Sho-Fola.html",
"/speakers/2020/Steve-Bilogan.html",
"/speakers/2020/Steve-Crow.html",
"/speakers/2020/Steve-Smith.html",
"/speakers/2020/Taranjeet-Kaur.html",
"/speakers/2020/Tim-LeMaster.html",
"/speakers/2021/Adrienne-Tacke.html",
"/speakers/2021/Bill-Sempf.html",
"/speakers/2021/Brett-Berliner.html",
"/speakers/2021/Christopher-Judd.html",
"/speakers/2021/Craig-Stuntz.html",
"/speakers/2021/Glenn-HarmonJr..html",
"/speakers/2021/Jason-Dobies.html",
"/speakers/2021/Jenny-Bramble.html",
"/speakers/2021/Matt-Eland.html",
"/speakers/2021/Sarah-Withee.html",
"/speakers/2021/Sho-Fola.html",
"/speakers/2021/Steve-Smith.html",
"/images/BabyGroot.png",
"/images/Living-Heroes-Header-1140x744.png",
"/images/Slack_RGB.svg",
"/images/Stir-Trek-Space-Background-slice.jpg",
"/images/StirTrek-Emblem-Gold-400x588.png",
"/images/StirTrek-Emblem-Gold-nobackground.png",
"/images/StirTrek-Emblem-Gold.png",
"/images/StirTrek-Logo-Banner-453x350.png",
"/images/StirTrek-Logo-Banner-906x700.png",
"/images/StirTrek-Sponsor-Missing.png",
"/images/header-logo.png",
"/images/spotit-2019-qr.png",
"/images/store-trek.png",
"/images/thanos-header-1140x760.png",
"/icons/android-icon-144x144.png",
"/icons/android-icon-192x192.png",
"/icons/android-icon-36x36.png",
"/icons/android-icon-48x48.png",
"/icons/android-icon-72x72.png",
"/icons/android-icon-96x96.png",
"/icons/apple-icon-114x114.png",
"/icons/apple-icon-120x120.png",
"/icons/apple-icon-144x144.png",
"/icons/apple-icon-152x152.png",
"/icons/apple-icon-180x180.png",
"/icons/apple-icon-57x57.png",
"/icons/apple-icon-60x60.png",
"/icons/apple-icon-72x72.png",
"/icons/apple-icon-76x76.png",
"/icons/apple-icon-precomposed.png",
"/icons/apple-icon.png",
"/icons/favicon-16x16.png",
"/icons/favicon-32x32.png",
"/icons/favicon-512x512.png",
"/icons/favicon-96x96.png",
"/icons/favicon.ico",
"/icons/ms-icon-144x144.png",
"/icons/ms-icon-150x150.png",
"/icons/ms-icon-310x310.png",
"/icons/ms-icon-70x70.png",
"/icons/opengraph.jpg",
"/icons/speaker-icon.png",
"/icons/stirtrek-default.png",
"/fonts/FontAwesome.otf",
"/fonts/KOMIKAX_.ttf",
"/fonts/fa-brands-400.eot",
"/fonts/fa-brands-400.svg",
"/fonts/fa-brands-400.ttf",
"/fonts/fa-brands-400.woff",
"/fonts/fa-brands-400.woff2",
"/fonts/fa-regular-400.eot",
"/fonts/fa-regular-400.svg",
"/fonts/fa-regular-400.ttf",
"/fonts/fa-regular-400.woff",
"/fonts/fa-regular-400.woff2",
"/fonts/fa-solid-900.eot",
"/fonts/fa-solid-900.svg",
"/fonts/fa-solid-900.ttf",
"/fonts/fa-solid-900.woff",
"/fonts/fa-solid-900.woff2",
"/fonts/fontawesome-webfont.eot",
"/fonts/fontawesome-webfont.svg",
"/fonts/fontawesome-webfont.ttf",
"/fonts/fontawesome-webfont.woff",
"/fonts/fontawesome-webfont.woff2",
"/images/sponsors/ALLIANCEDATA.png",
"/images/sponsors/COMRESOURCE.png",
"/images/sponsors/Careworks.png",
"/images/sponsors/DOCHALO.png",
"/images/sponsors/DYNAMIT.png",
"/images/sponsors/HUNTINGTON.png",
"/images/sponsors/ICC.png",
"/images/sponsors/ICC_350x200.png",
"/images/sponsors/IGS_350x200.png",
"/images/sponsors/JUMPMIND.png",
"/images/sponsors/KROGER.png",
"/images/sponsors/MPW.png",
"/images/sponsors/Microsoft.png",
"/images/sponsors/NewRelic_350x200.png",
"/images/sponsors/Progress_350x200.png",
"/images/sponsors/accenture_350x200.jpg",
"/images/sponsors/accenture_350x200.png",
"/images/sponsors/awh_350x200.jpg",
"/images/sponsors/awh_350x200.png",
"/images/sponsors/boldpenguin_350x200.png",
"/images/sponsors/callibrity_350x200.png",
"/images/sponsors/captech_350x200.jpg",
"/images/sponsors/cardinalsolutions_350x200.jpg",
"/images/sponsors/cas_350x200.jpg",
"/images/sponsors/cas_350x200.png",
"/images/sponsors/cmm_350x200.jpg",
"/images/sponsors/cmm_350x200.png",
"/images/sponsors/daugherty_350x200.jpg",
"/images/sponsors/dmg_350x200.jpg",
"/images/sponsors/dynamit_350x200.png",
"/images/sponsors/fastswitch_350x200.jpg",
"/images/sponsors/g2o_350x200.png",
"/images/sponsors/halo_350x200.png",
"/images/sponsors/hmb-350x200.jpg",
"/images/sponsors/hmb-350x200.png",
"/images/sponsors/improvingenterprises.png",
"/images/sponsors/insight_350x200.png",
"/images/sponsors/leadingedje_350x200.jpg",
"/images/sponsors/leadingedje_350x200.png",
"/images/sponsors/livingportrait_350x200.png",
"/images/sponsors/manifest_350x200.png",
"/images/sponsors/nationwide_350x200.jpg",
"/images/sponsors/nexient_350x200.png",
"/images/sponsors/oclc_350x200.png",
"/images/sponsors/pillar-180x95.jpg",
"/images/sponsors/pillar_350x200.png",
"/images/sponsors/revelit_350x200.png",
"/images/sponsors/root_350x200.png",
"/images/sponsors/root_350x200b.png",
"/images/sponsors/smartdata_350x200.png",
"/images/sponsors/sogeti_350x200.jpg",
"/images/sponsors/sogeti_350x200.png",
"/images/sponsors/teksystems_350x200.png",
"/images/sponsors/upstart_350x200.png",
"/images/sponsors/vaco_350x200.png",
"/images/sponsors/workstate_350x200.png",
"/images/speakers/2018/Adam-Pasternack.jpg",
"/images/speakers/2018/Angel-Thomas.jpg",
"/images/speakers/2018/Anna-Heiermann.jpg",
"/images/speakers/2018/Barry-Tarlton.jpg",
"/images/speakers/2018/Benjamin-Bykowski.jpg",
"/images/speakers/2018/Bill-Sempf.jpg",
"/images/speakers/2018/Bobby-Grayson.png",
"/images/speakers/2018/Brandon-Bruno.jpeg",
"/images/speakers/2018/Brett-Koenig.jpg",
"/images/speakers/2018/Chad-Green.jpg",
"/images/speakers/2018/Chris-DeMars.jpeg",
"/images/speakers/2018/Craig-Stuntz.jpg",
"/images/speakers/2018/Dave-Wasmer.jpg",
"/images/speakers/2018/David-Neal.jpg",
"/images/speakers/2018/Dennis-Dunn.png",
"/images/speakers/2018/Drew-Furgiuele.jpg",
"/images/speakers/2018/Ed-Charbeneau.jpg",
"/images/speakers/2018/Eric-Potter.jpg",
"/images/speakers/2018/Greg-Malcolm.jpg",
"/images/speakers/2018/James-Balmert.jpeg",
"/images/speakers/2018/Jarred-Olson.jpg",
"/images/speakers/2018/Jeff-McKenzie.jpg",
"/images/speakers/2018/Jeremy-Clark.jpg",
"/images/speakers/2018/Johnson-Denen.jpg",
"/images/speakers/2018/Jon-Kruger.jpg",
"/images/speakers/2018/Justin-James.jpg",
"/images/speakers/2018/Kevin-Holtz.jpg",
"/images/speakers/2018/Kevin-Mack.jpg",
"/images/speakers/2018/Kim-McGill.jpg",
"/images/speakers/2018/Kris-Hatcher.jpg",
"/images/speakers/2018/Lars-Klint.jpg",
"/images/speakers/2018/Mandar-Malunjkar.jpg",
"/images/speakers/2018/Marc-Peabody.png",
"/images/speakers/2018/Marlena-Bowen.jpg",
"/images/speakers/2018/Martine-Dowden.png",
"/images/speakers/2018/Michael-Dowden.png",
"/images/speakers/2018/Richard-Taylor.jpg",
"/images/speakers/2018/Rob-Richardson.jpg",
"/images/speakers/2018/Ronda-Bergman.jpg",
"/images/speakers/2018/Seth-Petry-Johnson.jpg",
"/images/speakers/2018/Shawn-Price.png",
"/images/speakers/2018/Stephen-Shary.jpg",
"/images/speakers/2018/Steve-Smith.jpg",
"/images/speakers/2018/Thomas-Haver.jpg",
"/images/speakers/2018/Tim-Hoolihan.jpg",
"/images/speakers/2018/Tim-LeMaster.png",
"/images/speakers/2018/Warner-Moore.jpg",
"/images/speakers/2018/Wasim-Hanna.png",
"/images/speakers/2018/ignore.txt",
"/images/speakers/2019/Adam-Pasternack.jpg",
"/images/speakers/2019/Andrew-May.jpg",
"/images/speakers/2019/Barbara-Kerr.jpg",
"/images/speakers/2019/Ben-Burgett.jpeg",
"/images/speakers/2019/Brendan-Enrick.jpg",
"/images/speakers/2019/Cassandra-Faris.jpg",
"/images/speakers/2019/Chad-Green.png",
"/images/speakers/2019/Chris-Bohatka.JPG",
"/images/speakers/2019/Damian-Synadinos.jpg",
"/images/speakers/2019/Ed-Charbeneau.jpg",
"/images/speakers/2019/Granville-Schmidt.jpg",
"/images/speakers/2019/Greg-Greenlee.png",
"/images/speakers/2019/Guy-Royse.jpg",
"/images/speakers/2019/Izzi-Bikun.jpg",
"/images/speakers/2019/Jack-Bennett.jpeg",
"/images/speakers/2019/Jack-Merideth.jpg",
"/images/speakers/2019/James-Balmert.jpeg",
"/images/speakers/2019/James-Quick.png",
"/images/speakers/2019/Jay-Harris.jpg",
"/images/speakers/2019/Jeff-Strauss.jpg",
"/images/speakers/2019/Jesse-Weigel.jpg",
"/images/speakers/2019/Jessica-Engstrm.png",
"/images/speakers/2019/Jim-Everett.jpg",
"/images/speakers/2019/Jimmy-Engstrm.jpg",
"/images/speakers/2019/Joel-Lord.jpg",
"/images/speakers/2019/John-Merideth.jpg",
"/images/speakers/2019/John-Reese.jpg",
"/images/speakers/2019/JonathanJ.-Tower.jpg",
"/images/speakers/2019/Josh-Wood.jpg",
"/images/speakers/2019/Justin-James.jpg",
"/images/speakers/2019/Matt-Weimer.jpg",
"/images/speakers/2019/Michael-Meadows.jpeg",
"/images/speakers/2019/Mike-Clement.jpg",
"/images/speakers/2019/Mike-Goeke.jpg",
"/images/speakers/2019/MikeEarleyand-RachelBanks.jpeg",
"/images/speakers/2019/Nicolas-Martin.jpg",
"/images/speakers/2019/RebeccaR.-Carter.PNG",
"/images/speakers/2019/Robin-Clower.jpg",
"/images/speakers/2019/Russell-Skaggs.jpg",
"/images/speakers/2019/Russell-Skaggs.png",
"/images/speakers/2019/Ryan-Bales.jpg",
"/images/speakers/2019/Sarah-Withee.jpg",
"/images/speakers/2019/Shawn-Wallace.jpg",
"/images/speakers/2019/Sho-Fola.jpg",
"/images/speakers/2019/Stacy-Harrison.jpeg",
"/images/speakers/2019/Steve-Smith.jpg",
"/images/speakers/2019/Taelur-Alexis.jpg",
"/images/speakers/2019/Thomas-Haver.jpg",
"/images/speakers/2019/Todd-Gardner.jpg",
"/images/speakers/2019/Tori-Brenneison.jpg",
"/images/speakers/2019/William-Klos.JPG",
"/images/speakers/2019/Zackary-Lowery.jpg",
"/images/speakers/2019/ignore.txt",
"/images/speakers/2020/Adrienne-Tacke.jpg",
"/images/speakers/2020/Alex-Ford.jpg",
"/images/speakers/2020/Alexis-Lee.jpg",
"/images/speakers/2020/Andrew-May.jpg",
"/images/speakers/2020/Angel-Thomas.png",
"/images/speakers/2020/Angela-Pinney.PNG",
"/images/speakers/2020/Ben-Burgett.jpeg",
"/images/speakers/2020/Bill-Dinger.jpg",
"/images/speakers/2020/Bill-Sempf.jpg",
"/images/speakers/2020/Brett-Berliner.jpg",
"/images/speakers/2020/Brett-Whittington.jpg",
"/images/speakers/2020/Burton-Smith.jpg",
"/images/speakers/2020/Byron-Delpinal.jpg",
"/images/speakers/2020/Carey-Payette.jpg",
"/images/speakers/2020/Carmen-Fontana.jpg",
"/images/speakers/2020/Chris-DeMars.png",
"/images/speakers/2020/Chris-Gardner.jpg",
"/images/speakers/2020/Christopher-Judd.jpg",
"/images/speakers/2020/Craig-Stuntz.jpg",
"/images/speakers/2020/Dan-Kacenjar.jpg",
"/images/speakers/2020/Daniel-Sims.jpg",
"/images/speakers/2020/Ed-Charbeneau.jpg",
"/images/speakers/2020/Glenn-HarmonJr..jpg",
"/images/speakers/2020/Greg-Greenlee.jpg",
"/images/speakers/2020/Haley-Hendershot.jpg",
"/images/speakers/2020/Jamie-Dicken.jpg",
"/images/speakers/2020/Jamie-Wright.jpg",
"/images/speakers/2020/Jason-Dobies.jpg",
"/images/speakers/2020/Jenny-Bramble.jpg",
"/images/speakers/2020/Jeremy-Miller.jpg",
"/images/speakers/2020/Jim-Kirkbride.jpg",
"/images/speakers/2020/Jonathan-Mills.jpg",
"/images/speakers/2020/Keith-Kurak.jpg",
"/images/speakers/2020/Matt-Eland.png",
"/images/speakers/2020/Michael-Cordingley.jpg",
"/images/speakers/2020/Mike-Hand.jpg",
"/images/speakers/2020/RACHEL-BANKS.jpg",
"/images/speakers/2020/Randy-Pagels.jpg",
"/images/speakers/2020/Sam-Nasr.jpg",
"/images/speakers/2020/Samara-Williams.jpg",
"/images/speakers/2020/Sarah-Gliniecki.jpg",
"/images/speakers/2020/Sarah-Withee.jpg",
"/images/speakers/2020/Seth-Petry-Johnson.jpg",
"/images/speakers/2020/Sho-Fola.jpg",
"/images/speakers/2020/Steve-Bilogan.jpg",
"/images/speakers/2020/Steve-Crow.jpg",
"/images/speakers/2020/Steve-Smith.jpg",
"/images/speakers/2020/Taranjeet-Kaur.jpg",
"/images/speakers/2020/Tim-LeMaster.png",
"/images/speakers/2020/ignore.txt",
"/images/speakers/2021/Adrienne-Tacke.jpg",
"/images/speakers/2021/Bill-Sempf.jpg",
"/images/speakers/2021/Brett-Berliner.jpg",
"/images/speakers/2021/Christopher-Judd.jpg",
"/images/speakers/2021/Craig-Stuntz.jpg",
"/images/speakers/2021/Glenn-HarmonJr..jpg",
"/images/speakers/2021/Jason-Dobies.jpg",
"/images/speakers/2021/Jenny-Bramble.jpg",
"/images/speakers/2021/Matt-Eland.jpg",
"/images/speakers/2021/Sarah-Withee.jpg",
"/images/speakers/2021/Sho-Fola.jpg",
"/images/speakers/2021/Steve-Smith.jpg"
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
};