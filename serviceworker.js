
var CACHE = 'network-or-cache-1738266784949';

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
            "/images/speakers/2022/Readme.html",
"/",
"/index.html",
"/404.html",
"/covid/",
"/covid/index.html",
"/manifest.json",
"/recordings/",
"/recordings/index.html",
"/registration/",
"/registration/index.html",
"/schedule/",
"/schedule/index.html",
"/sessions/",
"/sessions/index.html",
"/speakers/2018.html",
"/speakers/2019.html",
"/speakers/2020.html",
"/speakers/2021.html",
"/speakers/2023.html",
"/speakers/2022.html",
"/speakers/2024.html",
"/speakers/",
"/speakers/index.html",
"/speakers/index_cfpopenversion.html",
"/speakers/index_noncfpversion.html",
"/sponsors/",
"/sponsors/index.html",
"/store/",
"/store/index.html",
"/virtual/",
"/virtual/index.html",
"/info/antiharassmentpolicy/",
"/info/antiharassmentpolicy/index.html",
"/info/commitmenttodiversity/",
"/info/commitmenttodiversity/index.html",
"/workshops/",
"/workshops/index.html",
"/info/codeofconduct/",
"/info/codeofconduct/index.html",
"/info/history/",
"/info/history/index.html",
"/info/contact/",
"/info/contact/index.html",
"/info/press/2024-02-10.html",
"/info/press/",
"/info/press/index.html",
"/info/privacy/",
"/info/privacy/index.html",
"/info/travel/",
"/info/travel/index.html",
"/styles/bootstrap-button-social.min.css",
"/styles/fontawesome-4.min.css",
"/styles/site.css",
"/scripts/bootstrap.min.js",
"/styles/fontawesome.min.css",
"/styles/fontawesome-all.min.css",
"/scripts/bootstrap.js",
"/scripts/luxon.min.js",
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
"/speakers/2021/Sho-Fola.html",
"/speakers/2021/Steve-Smith.html",
"/speakers/2022/Alex-Riviere.html",
"/speakers/2022/Andrew-May.html",
"/speakers/2022/Ashley-Stove.html",
"/speakers/2022/Barry-Tarlton.html",
"/speakers/2022/Becky-Gandillon.html",
"/speakers/2022/Bekah-HawrotWeigel.html",
"/speakers/2022/Bob-Fornal.html",
"/speakers/2022/Brendan-Todahl.html",
"/speakers/2022/Carey-Payette.html",
"/speakers/2022/Cassandra-Faris.html",
"/speakers/2022/Chad-Green.html",
"/speakers/2022/Deena-Chadwick.html",
"/speakers/2022/Devlin-Liles.html",
"/speakers/2022/Dianna-Keen.html",
"/speakers/2022/Ed-Charbeneau.html",
"/speakers/2022/Glenn-HarmonJr..html",
"/speakers/2022/Hakeem-Shittu.html",
"/speakers/2022/Jason-Horner.html",
"/speakers/2022/Jeff-Blankenburg.html",
"/speakers/2022/Jimmy-Byrd.html",
"/speakers/2022/Joe-Belisle.html",
"/speakers/2022/Joel-Lord.html",
"/speakers/2022/Jon-Kruger.html",
"/speakers/2022/JonathanJ.-Tower.html",
"/speakers/2022/Joseph-Guadagno.html",
"/speakers/2022/Karen-Linden.html",
"/speakers/2022/Kim-Maida.html",
"/speakers/2022/Matt-Bowlin.html",
"/speakers/2022/Matt-Eland.html",
"/speakers/2022/Matt-Williams.html",
"/speakers/2022/Matthew-Sheehan.html",
"/speakers/2022/Michael-Richardson.html",
"/speakers/2022/Mike-Clement.html",
"/speakers/2022/Mike-Hand.html",
"/speakers/2022/Mike-Hartington.html",
"/speakers/2022/Nicolas-Fränkel.html",
"/speakers/2022/Patricio-Vargas.html",
"/speakers/2022/Philippe-Vaillancourt.html",
"/speakers/2022/Randy-Pagels.html",
"/speakers/2022/Rob-Richardson.html",
"/speakers/2022/Ryan-Turinsky.html",
"/speakers/2022/Sam-Basu.html",
"/speakers/2022/Scott-Showalter.html",
"/speakers/2022/Seth-Petry-Johnson.html",
"/speakers/2022/Sierra-OBryan.html",
"/speakers/2022/Steve-Smith.html",
"/speakers/2022/Taranjeet-Kaur.html",
"/speakers/2022/Tasha-Penwell.html",
"/speakers/2022/Tejas-Chopra.html",
"/speakers/2022/Thomas-Haver.html",
"/speakers/2023/Alex-Finnarn.html",
"/speakers/2023/Amanda-O'Mara.html",
"/speakers/2023/Andrew-May.html",
"/speakers/2023/Bekah-HawrotWeigel.html",
"/speakers/2023/Brendan-Enrick.html",
"/speakers/2023/Brian-Gorman.html",
"/speakers/2023/Brian-Riazzi.html",
"/speakers/2023/Brooke-Sargent.html",
"/speakers/2023/Burton-Smith.html",
"/speakers/2023/Chris-DeMars.html",
"/speakers/2023/Chris-Gardner.html",
"/speakers/2023/Damian-Synadinos.html",
"/speakers/2023/Dave-Klein.html",
"/speakers/2023/Debbie-Levitt.html",
"/speakers/2023/Diana-Pham.html",
"/speakers/2023/Eldert-Grootenboer.html",
"/speakers/2023/Georgia-Loper.html",
"/speakers/2023/Glenn-HarmonJr..html",
"/speakers/2023/Guy-Royse.html",
"/speakers/2023/Heath-Murphy.html",
"/speakers/2023/Homer-Gaines,CPACC.html",
"/speakers/2023/Jason-Turan.html",
"/speakers/2023/Joel-Lord.html",
"/speakers/2023/JonathanJ.-Tower.html",
"/speakers/2023/Jordan-Thayer.html",
"/speakers/2023/Joseph-Guadagno.html",
"/speakers/2023/Josh-Goldberg.html",
"/speakers/2023/Kat-Fairbanks.html",
"/speakers/2023/Kathryn-GraysonNanz.html",
"/speakers/2023/Krista-Campbell.html",
"/speakers/2023/Mark-Noonan.html",
"/speakers/2023/Matt-Eland.html",
"/speakers/2023/MattKelly-Williams.html",
"/speakers/2023/Michael-Meadows.html",
"/speakers/2023/Michele-Parsley-LanningD.O..html",
"/speakers/2023/PJ-Hagerty.html",
"/speakers/2023/Rhia-Dixon.html",
"/speakers/2023/Robert-Herbig.html",
"/speakers/2023/Ryan-Booz.html",
"/speakers/2023/Samuel-Shaw.html",
"/speakers/2023/Scott-McAllister.html",
"/speakers/2023/Seth-Petry-Johnson.html",
"/speakers/2023/Sierra-OBryan.html",
"/speakers/2023/Steve-Smith.html",
"/speakers/2023/Taranjeet-Kaur.html",
"/speakers/2023/Tasha-Penwell.html",
"/speakers/2023/Tim-LeMaster.html",
"/speakers/2023/Todd-Gardner.html",
"/speakers/2023/Vitaliy-Matiyash.html",
"/speakers/2024/Abbey-Perini.html",
"/speakers/2024/Adrienne-BraganzaTacke.html",
"/speakers/2024/Aldo-Socarras.html",
"/speakers/2024/Alex-Riviere.html",
"/speakers/2024/Anthony-Russell.html",
"/speakers/2024/Ashley-Holcomb.html",
"/speakers/2024/Benjamin-Winkler.html",
"/speakers/2024/Brandon-Bruno.html",
"/speakers/2024/Brian-McKeiver.html",
"/speakers/2024/Brian-Meeker.html",
"/speakers/2024/Burton-Smith.html",
"/speakers/2024/Carey-Payette.html",
"/speakers/2024/Chris-Gardner.html",
"/speakers/2024/Chris-Nelson.html",
"/speakers/2024/Christopher-Robinson.html",
"/speakers/2024/David-Neal.html",
"/speakers/2024/Dennis-Dunn.html",
"/speakers/2024/Dev-Agrawal.html",
"/speakers/2024/Drake-Lundstrom.html",
"/speakers/2024/Glenn-HarmonJr..html",
"/speakers/2024/Haley-HendershotMalone.html",
"/speakers/2024/Heath-Murphy.html",
"/speakers/2024/HenryBerson-Saint-Juste.html",
"/speakers/2024/Jay-Harris.html",
"/speakers/2024/Jeffrey-Miller.html",
"/speakers/2024/Jonathan-Knapp.html",
"/speakers/2024/JonathanJ.-Tower.html",
"/speakers/2024/Jordan-Thayer.html",
"/speakers/2024/Kathryn-GraysonNanz.html",
"/speakers/2024/Kevin-Griffin.html",
"/speakers/2024/Kevin-Mireles.html",
"/speakers/2024/Kyle-Jenkins.html",
"/speakers/2024/Lino-Tadros.html",
"/speakers/2024/Liz-Johnson.html",
"/speakers/2024/Matt-Eland.html",
"/speakers/2024/MattKelly-Williams.html",
"/speakers/2024/Michael-Eaton.html",
"/speakers/2024/Michael-Gregory.html",
"/speakers/2024/Mike-Hand.html",
"/speakers/2024/Natalie-Hylton.html",
"/speakers/2024/Rachel-Gregory.html",
"/speakers/2024/Robert-Herbig.html",
"/speakers/2024/Sam-Basu.html",
"/speakers/2024/Samuel-Gomez.html",
"/speakers/2024/Scott-McAllister.html",
"/speakers/2024/Sean-Wedig.html",
"/speakers/2024/Shawn-Wildermuth.html",
"/speakers/2024/Steve-Smith.html",
"/speakers/2024/Zoe-Steinkamp.html"
        ]).catch(function(error) {
            console.error('Failed to cache resources:', error);
        });
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