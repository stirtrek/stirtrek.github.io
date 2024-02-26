
var CACHE = 'network-or-cache-1708961447171';

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
"/manifest.json",
"/404.html",
"/covid/",
"/covid/index.html",
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
"/speakers/2022.html",
"/speakers/2021.html",
"/speakers/2024.html",
"/speakers/2023.html",
"/speakers/index_cfpopenversion.html",
"/speakers/",
"/speakers/index.html",
"/speakers/index_noncfpversion.html",
"/sponsors/",
"/sponsors/index.html",
"/store/",
"/store/index.html",
"/virtual/",
"/virtual/index.html",
"/info/antiharassmentpolicy/",
"/info/antiharassmentpolicy/index.html",
"/workshops/",
"/workshops/index.html",
"/info/codeofconduct/",
"/info/codeofconduct/index.html",
"/info/commitmenttodiversity/",
"/info/commitmenttodiversity/index.html",
"/info/contact/",
"/info/contact/index.html",
"/info/history/",
"/info/history/index.html",
"/info/press/",
"/info/press/index.html",
"/info/press/2024-02-10.html",
"/info/privacy/",
"/info/privacy/index.html",
"/info/travel/",
"/info/travel/index.html",
"/styles/bootstrap-button-social.min.css",
"/styles/fontawesome-4.min.css",
"/styles/site.css",
"/scripts/bootstrap.min.js",
"/styles/fontawesome-all.min.css",
"/styles/fontawesome.min.css",
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
"/speakers/2024/David-Neal.html",
"/speakers/2024/Dennis-Dunn.html",
"/speakers/2024/Dev-Agrawal.html",
"/speakers/2024/Drake-Lundstrom.html",
"/speakers/2024/Georgia-Loper.html",
"/speakers/2024/Glenn-HarmonJr..html",
"/speakers/2024/Haley-HendershotMalone.html",
"/speakers/2024/HenryBerson-Saint-Juste.html",
"/speakers/2024/Jamie-Dicken.html",
"/speakers/2024/Jay-Harris.html",
"/speakers/2024/Jeffrey-Miller.html",
"/speakers/2024/Jonathan-Knapp.html",
"/speakers/2024/JonathanJ.-Tower.html",
"/speakers/2024/Jordan-Thayer.html",
"/speakers/2024/Kathryn-GraysonNanz.html",
"/speakers/2024/Kevin-Mireles.html",
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
"/speakers/2024/Samuel-Gomez.html",
"/speakers/2024/Sean-Wedig.html",
"/speakers/2024/Shawn-Wildermuth.html",
"/speakers/2024/Simon-MacDonald.html",
"/speakers/2024/Steve-Smith.html",
"images/2013-stirtrek-registration-line.png",
"images/2017-05-05-schottenstein-center-setup.jpg",
"images/Attendees-In-Theater.jpg",
"images/BabyGroot.png",
"images/Living-Heroes-Header-1140x744.png",
"images/Portal-1702x1000.png",
"images/Slack_RGB.svg",
"images/Sponsor-Image-2024.png",
"images/Sponsor-Slide-In-Theater.jpg",
"images/Stir-Trek-Space-Background-slice.jpg",
"images/StirTrek-DayOfVolunteers-1000x1000.png",
"images/StirTrek-Emblem-Gold-400x588.png",
"images/StirTrek-Emblem-Gold-nobackground.png",
"images/StirTrek-Emblem-Gold.png",
"images/StirTrek-Logo-Banner-453x350.png",
"images/StirTrek-Logo-Banner-906x700.png",
"images/StirTrek-Sponsor-Missing.png",
"images/StirTrek-StrangeLogo-New.png",
"images/StirTrek-StrangeLogo-Original.png",
"images/header-logo.png",
"images/red_15_horizontal.png",
"images/red_15_horizontal_470x350.png",
"images/spotit-2019-qr.png",
"images/store-trek.png",
"images/thanos-header-1140x760.png",
"icons/android-icon-144x144.png",
"icons/android-icon-192x192.png",
"icons/android-icon-36x36.png",
"icons/android-icon-48x48.png",
"icons/android-icon-72x72.png",
"icons/android-icon-96x96.png",
"icons/apple-icon-114x114.png",
"icons/apple-icon-120x120.png",
"icons/apple-icon-144x144.png",
"icons/apple-icon-152x152.png",
"icons/apple-icon-180x180.png",
"icons/apple-icon-57x57.png",
"icons/apple-icon-60x60.png",
"icons/apple-icon-72x72.png",
"icons/apple-icon-76x76.png",
"icons/apple-icon-precomposed.png",
"icons/apple-icon.png",
"icons/favicon-16x16.png",
"icons/favicon-32x32.png",
"icons/favicon-512x512.png",
"icons/favicon-96x96.png",
"icons/favicon.ico",
"icons/ms-icon-144x144.png",
"icons/ms-icon-150x150.png",
"icons/ms-icon-310x310.png",
"icons/ms-icon-70x70.png",
"icons/opengraph.jpg",
"icons/speaker-icon.png",
"icons/stirtrek-default.png",
"fonts/FontAwesome.otf",
"fonts/KOMIKAX_.ttf",
"fonts/fa-brands-400.eot",
"fonts/fa-brands-400.svg",
"fonts/fa-brands-400.ttf",
"fonts/fa-brands-400.woff",
"fonts/fa-brands-400.woff2",
"fonts/fa-regular-400.eot",
"fonts/fa-regular-400.svg",
"fonts/fa-regular-400.ttf",
"fonts/fa-regular-400.woff",
"fonts/fa-regular-400.woff2",
"fonts/fa-solid-900.eot",
"fonts/fa-solid-900.svg",
"fonts/fa-solid-900.ttf",
"fonts/fa-solid-900.woff",
"fonts/fa-solid-900.woff2",
"fonts/fontawesome-webfont.eot",
"fonts/fontawesome-webfont.svg",
"fonts/fontawesome-webfont.ttf",
"fonts/fontawesome-webfont.woff",
"fonts/fontawesome-webfont.woff2",
"images/sponsors/ALLIANCEDATA.png",
"images/sponsors/COMRESOURCE.png",
"images/sponsors/Careworks.png",
"images/sponsors/DOCHALO.png",
"images/sponsors/DYNAMIT.png",
"images/sponsors/HUNTINGTON.png",
"images/sponsors/ICC.png",
"images/sponsors/ICC_350x200.png",
"images/sponsors/IGS_350x200v2.png",
"images/sponsors/IGS_350x200v3.jpg",
"images/sponsors/JUMPMIND.png",
"images/sponsors/KROGER.png",
"images/sponsors/MPW.png",
"images/sponsors/Microsoft.png",
"images/sponsors/NewRelic_350x200.png",
"images/sponsors/Progress_350x200.png",
"images/sponsors/accenture_350x200.jpg",
"images/sponsors/accenture_350x200.png",
"images/sponsors/amazon_alexa_350x200.png",
"images/sponsors/aware_350x200.png",
"images/sponsors/awh_350x200.jpg",
"images/sponsors/awh_350x200.png",
"images/sponsors/beam_350x200.jpg",
"images/sponsors/boldpenguin_350x200.png",
"images/sponsors/callibrity_350x200.jpg",
"images/sponsors/callibrity_350x200.png",
"images/sponsors/captech_350x200.jpg",
"images/sponsors/captech_350x200.png",
"images/sponsors/cardinalsolutions_350x200.jpg",
"images/sponsors/cas_350x200.png",
"images/sponsors/cas_350x200_v2.jpg",
"images/sponsors/central_insurance_350x200.png",
"images/sponsors/cgi_350x200v2.jpg",
"images/sponsors/cmm_350x200.jpg",
"images/sponsors/cmm_350x200.png",
"images/sponsors/comresource_350x200.jpg",
"images/sponsors/daugherty_350x200.jpg",
"images/sponsors/dmg_350x200.jpg",
"images/sponsors/dynamit_350x200.png",
"images/sponsors/empora_350x200.png",
"images/sponsors/fastswitch_350x200.jpg",
"images/sponsors/g2o_350x200.png",
"images/sponsors/g2o_v2_350x200.png",
"images/sponsors/halo_350x200.png",
"images/sponsors/hmb-350x200.jpg",
"images/sponsors/hmb-350x200.png",
"images/sponsors/impact-350x200.jpg",
"images/sponsors/improving_350x200.jpg",
"images/sponsors/improvingenterprises.png",
"images/sponsors/insight_350x200.png",
"images/sponsors/leadingedje_350x200.jpg",
"images/sponsors/leadingedje_350x200.png",
"images/sponsors/livingportrait_350x200.png",
"images/sponsors/lower_350x200.png",
"images/sponsors/manifest_350x200.png",
"images/sponsors/nationwide_350x200.jpg",
"images/sponsors/newera_350x200.png",
"images/sponsors/nexient_350x200.png",
"images/sponsors/oclc_350x200.jpg",
"images/sponsors/oclc_350x200.png",
"images/sponsors/pillar-180x95.jpg",
"images/sponsors/pillar_350x200.png",
"images/sponsors/progress_655x155.png",
"images/sponsors/readysetagile_350x200.jpg",
"images/sponsors/readysetagile_600x120.png",
"images/sponsors/revelit_350x200.png",
"images/sponsors/root_350x200.png",
"images/sponsors/root_350x200b.png",
"images/sponsors/smartdata_350x200.png",
"images/sponsors/sogeti_350x200.jpg",
"images/sponsors/sogeti_350x200.png",
"images/sponsors/teksystems_350x200.png",
"images/sponsors/upstart_350x200.png",
"images/sponsors/vaco_350x200.png",
"images/sponsors/veeva_350x200.jpg",
"images/sponsors/workstate_350x200.png",
"images/sponsors/workstate_350x200v2.png",
"images/sponsors/workstate_350x200v3.jpg",
"images/speakers/2018/Adam-Pasternack.jpg",
"images/speakers/2018/Angel-Thomas.jpg",
"images/speakers/2018/Anna-Heiermann.jpg",
"images/speakers/2018/Barry-Tarlton.jpg",
"images/speakers/2018/Benjamin-Bykowski.jpg",
"images/speakers/2018/Bill-Sempf.jpg",
"images/speakers/2018/Bobby-Grayson.png",
"images/speakers/2018/Brandon-Bruno.jpeg",
"images/speakers/2018/Brett-Koenig.jpg",
"images/speakers/2018/Chad-Green.jpg",
"images/speakers/2018/Chris-DeMars.jpeg",
"images/speakers/2018/Craig-Stuntz.jpg",
"images/speakers/2018/Dave-Wasmer.jpg",
"images/speakers/2018/David-Neal.jpg",
"images/speakers/2018/Dennis-Dunn.png",
"images/speakers/2018/Drew-Furgiuele.jpg",
"images/speakers/2018/Ed-Charbeneau.jpg",
"images/speakers/2018/Eric-Potter.jpg",
"images/speakers/2018/Greg-Malcolm.jpg",
"images/speakers/2018/James-Balmert.jpeg",
"images/speakers/2018/Jarred-Olson.jpg",
"images/speakers/2018/Jeff-McKenzie.jpg",
"images/speakers/2018/Jeremy-Clark.jpg",
"images/speakers/2018/Johnson-Denen.jpg",
"images/speakers/2018/Jon-Kruger.jpg",
"images/speakers/2018/Justin-James.jpg",
"images/speakers/2018/Kevin-Holtz.jpg",
"images/speakers/2018/Kevin-Mack.jpg",
"images/speakers/2018/Kim-McGill.jpg",
"images/speakers/2018/Kris-Hatcher.jpg",
"images/speakers/2018/Lars-Klint.jpg",
"images/speakers/2018/Mandar-Malunjkar.jpg",
"images/speakers/2018/Marc-Peabody.png",
"images/speakers/2018/Marlena-Bowen.jpg",
"images/speakers/2018/Martine-Dowden.png",
"images/speakers/2018/Michael-Dowden.png",
"images/speakers/2018/Richard-Taylor.jpg",
"images/speakers/2018/Rob-Richardson.jpg",
"images/speakers/2018/Ronda-Bergman.jpg",
"images/speakers/2018/Seth-Petry-Johnson.jpg",
"images/speakers/2018/Shawn-Price.png",
"images/speakers/2018/Stephen-Shary.jpg",
"images/speakers/2018/Steve-Smith.jpg",
"images/speakers/2018/Thomas-Haver.jpg",
"images/speakers/2018/Tim-Hoolihan.jpg",
"images/speakers/2018/Tim-LeMaster.png",
"images/speakers/2018/Warner-Moore.jpg",
"images/speakers/2018/Wasim-Hanna.png",
"images/speakers/2018/ignore.txt",
"images/speakers/2019/Adam-Pasternack.jpg",
"images/speakers/2019/Andrew-May.jpg",
"images/speakers/2019/Barbara-Kerr.jpg",
"images/speakers/2019/Ben-Burgett.jpeg",
"images/speakers/2019/Brendan-Enrick.jpg",
"images/speakers/2019/Cassandra-Faris.jpg",
"images/speakers/2019/Chad-Green.png",
"images/speakers/2019/Chris-Bohatka.JPG",
"images/speakers/2019/Damian-Synadinos.jpg",
"images/speakers/2019/Ed-Charbeneau.jpg",
"images/speakers/2019/Granville-Schmidt.jpg",
"images/speakers/2019/Greg-Greenlee.png",
"images/speakers/2019/Guy-Royse.jpg",
"images/speakers/2019/Izzi-Bikun.jpg",
"images/speakers/2019/Jack-Bennett.jpeg",
"images/speakers/2019/Jack-Merideth.jpg",
"images/speakers/2019/James-Balmert.jpeg",
"images/speakers/2019/James-Quick.png",
"images/speakers/2019/Jay-Harris.jpg",
"images/speakers/2019/Jeff-Strauss.jpg",
"images/speakers/2019/Jesse-Weigel.jpg",
"images/speakers/2019/Jessica-Engstrm.png",
"images/speakers/2019/Jim-Everett.jpg",
"images/speakers/2019/Jimmy-Engstrm.jpg",
"images/speakers/2019/Joel-Lord.jpg",
"images/speakers/2019/John-Merideth.jpg",
"images/speakers/2019/John-Reese.jpg",
"images/speakers/2019/JonathanJ.-Tower.jpg",
"images/speakers/2019/Josh-Wood.jpg",
"images/speakers/2019/Justin-James.jpg",
"images/speakers/2019/Matt-Weimer.jpg",
"images/speakers/2019/Michael-Meadows.jpeg",
"images/speakers/2019/Mike-Clement.jpg",
"images/speakers/2019/Mike-Goeke.jpg",
"images/speakers/2019/MikeEarleyand-RachelBanks.jpeg",
"images/speakers/2019/Nicolas-Martin.jpg",
"images/speakers/2019/RebeccaR.-Carter.PNG",
"images/speakers/2019/Robin-Clower.jpg",
"images/speakers/2019/Russell-Skaggs.jpg",
"images/speakers/2019/Russell-Skaggs.png",
"images/speakers/2019/Ryan-Bales.jpg",
"images/speakers/2019/Sarah-Withee.jpg",
"images/speakers/2019/Shawn-Wallace.jpg",
"images/speakers/2019/Sho-Fola.jpg",
"images/speakers/2019/Stacy-Harrison.jpeg",
"images/speakers/2019/Steve-Smith.jpg",
"images/speakers/2019/Taelur-Alexis.jpg",
"images/speakers/2019/Thomas-Haver.jpg",
"images/speakers/2019/Todd-Gardner.jpg",
"images/speakers/2019/Tori-Brenneison.jpg",
"images/speakers/2019/William-Klos.JPG",
"images/speakers/2019/Zackary-Lowery.jpg",
"images/speakers/2019/ignore.txt",
"images/speakers/2020/Adrienne-Tacke.jpg",
"images/speakers/2020/Alex-Ford.jpg",
"images/speakers/2020/Alexis-Lee.JPG",
"images/speakers/2020/Alexis-Lee.jpg",
"images/speakers/2020/Andrew-May.jpg",
"images/speakers/2020/Angel-Thomas.png",
"images/speakers/2020/Angela-Pinney.PNG",
"images/speakers/2020/Ben-Burgett.jpeg",
"images/speakers/2020/Bill-Dinger.jpg",
"images/speakers/2020/Bill-Sempf.jpg",
"images/speakers/2020/Brett-Berliner.jpg",
"images/speakers/2020/Brett-Whittington.jpg",
"images/speakers/2020/Burton-Smith.jpg",
"images/speakers/2020/Byron-Delpinal.jpg",
"images/speakers/2020/Carey-Payette.jpg",
"images/speakers/2020/Carmen-Fontana.jpg",
"images/speakers/2020/Chris-DeMars.png",
"images/speakers/2020/Chris-Gardner.jpg",
"images/speakers/2020/Christopher-Judd.jpg",
"images/speakers/2020/Craig-Stuntz.jpg",
"images/speakers/2020/Dan-Kacenjar.jpg",
"images/speakers/2020/Daniel-Sims.jpg",
"images/speakers/2020/Ed-Charbeneau.jpg",
"images/speakers/2020/Glenn-HarmonJr..jpg",
"images/speakers/2020/Greg-Greenlee.jpg",
"images/speakers/2020/Haley-Hendershot.jpg",
"images/speakers/2020/Jamie-Dicken.jpg",
"images/speakers/2020/Jamie-Wright.jpg",
"images/speakers/2020/Jason-Dobies.jpg",
"images/speakers/2020/Jenny-Bramble.jpg",
"images/speakers/2020/Jeremy-Miller.jpg",
"images/speakers/2020/Jim-Kirkbride.jpg",
"images/speakers/2020/Jonathan-Mills.jpg",
"images/speakers/2020/Keith-Kurak.jpg",
"images/speakers/2020/Matt-Eland.png",
"images/speakers/2020/Michael-Cordingley.jpg",
"images/speakers/2020/Mike-Hand.jpg",
"images/speakers/2020/RACHEL-BANKS.jpg",
"images/speakers/2020/Randy-Pagels.jpg",
"images/speakers/2020/Sam-Nasr.jpg",
"images/speakers/2020/Samara-Williams.jpg",
"images/speakers/2020/Sarah-Gliniecki.jpg",
"images/speakers/2020/Sarah-Withee.jpg",
"images/speakers/2020/Seth-Petry-Johnson.jpg",
"images/speakers/2020/Sho-Fola.jpg",
"images/speakers/2020/Steve-Bilogan.jpg",
"images/speakers/2020/Steve-Crow.jpg",
"images/speakers/2020/Steve-Smith.jpg",
"images/speakers/2020/Taranjeet-Kaur.jpg",
"images/speakers/2020/Tim-LeMaster.png",
"images/speakers/2020/ignore.txt",
"images/speakers/2021/Adrienne-Tacke.jpg",
"images/speakers/2021/Bill-Sempf.jpg",
"images/speakers/2021/Brett-Berliner.jpg",
"images/speakers/2021/Christopher-Judd.jpg",
"images/speakers/2021/Craig-Stuntz.jpg",
"images/speakers/2021/Glenn-HarmonJr..jpg",
"images/speakers/2021/Jason-Dobies.jpg",
"images/speakers/2021/Jenny-Bramble.jpg",
"images/speakers/2021/Matt-Eland.jpg",
"images/speakers/2021/Sarah-Withee.jpg",
"images/speakers/2021/Sho-Fola.jpg",
"images/speakers/2021/Steve-Smith.jpg",
"images/speakers/2022/Alex-Riviere.jpg",
"images/speakers/2022/Andrew-May.jpg",
"images/speakers/2022/Ashley-Stove.png",
"images/speakers/2022/Barry-Tarlton.jpg",
"images/speakers/2022/Becky-Gandillon.jpg",
"images/speakers/2022/Bekah-HawrotWeigel.jpg",
"images/speakers/2022/Bob-Fornal.jpeg",
"images/speakers/2022/Brendan-Todahl.jpg",
"images/speakers/2022/Carey-Payette.jpg",
"images/speakers/2022/Cassandra-Faris.jpg",
"images/speakers/2022/Chad-Green.jpg",
"images/speakers/2022/Deena-Chadwick.jpg",
"images/speakers/2022/Devlin-Liles.jpeg",
"images/speakers/2022/Dianna-Keen.jpg",
"images/speakers/2022/Ed-Charbeneau.jpg",
"images/speakers/2022/Glenn-HarmonJr..jpg",
"images/speakers/2022/Hakeem-Shittu.jpg",
"images/speakers/2022/Heather-Downing.jpg",
"images/speakers/2022/Jason-Horner.jpg",
"images/speakers/2022/Jeff-Blankenburg.png",
"images/speakers/2022/Jimmy-Byrd.JPG",
"images/speakers/2022/Joe-Belisle.png",
"images/speakers/2022/Joe-Erickson.jpeg",
"images/speakers/2022/Joel-Lord.png",
"images/speakers/2022/Jon-Kruger.png",
"images/speakers/2022/JonathanJ.-Tower.jpg",
"images/speakers/2022/Joseph-Guadagno.png",
"images/speakers/2022/Karen-Linden.jpg",
"images/speakers/2022/Kim-Maida.jpg",
"images/speakers/2022/Matt-Bowlin.jpg",
"images/speakers/2022/Matt-Eland.png",
"images/speakers/2022/Matt-Williams.jpg",
"images/speakers/2022/Matthew-Sheehan.png",
"images/speakers/2022/Michael-Richardson.jpeg",
"images/speakers/2022/Mike-Clement.png",
"images/speakers/2022/Mike-Hand.jpg",
"images/speakers/2022/Mike-Hartington.png",
"images/speakers/2022/Nicolas-Frnkel.jpg",
"images/speakers/2022/Patricio-Vargas.png",
"images/speakers/2022/Philippe-Vaillancourt.jpg",
"images/speakers/2022/Randy-Pagels.jpg",
"images/speakers/2022/Readme.md",
"images/speakers/2022/Rob-Richardson.jpg",
"images/speakers/2022/Ryan-Turinsky.jpeg",
"images/speakers/2022/Sam-Basu.jpg",
"images/speakers/2022/Scott-Showalter.jpeg",
"images/speakers/2022/Seth-Petry-Johnson.jpg",
"images/speakers/2022/Shalabh-Vyas.jpeg",
"images/speakers/2022/Sierra-OBryan.png",
"images/speakers/2022/Steve-Smith.jpg",
"images/speakers/2022/Taranjeet-Kaur.jpg",
"images/speakers/2022/Tasha-Penwell.jpg",
"images/speakers/2022/Tejas-Chopra.jpeg",
"images/speakers/2022/Thomas-Haver.jpg",
"images/speakers/2022/Treva-Williams.jpg",
"images/speakers/2023/Alex-Finnarn.png",
"images/speakers/2023/Amanda-OMara.jpg",
"images/speakers/2023/Andrew-May.jpg",
"images/speakers/2023/Bekah-HawrotWeigel.jpg",
"images/speakers/2023/Brendan-Enrick.png",
"images/speakers/2023/Brian-Gorman.jpg",
"images/speakers/2023/Brian-Riazzi.jpg",
"images/speakers/2023/Brooke-Sargent.jpg",
"images/speakers/2023/Burton-Smith.jpg",
"images/speakers/2023/Chris-DeMars.jpeg",
"images/speakers/2023/Chris-Gardner.png",
"images/speakers/2023/Damian-Synadinos.png",
"images/speakers/2023/Dave-Klein.JPEG",
"images/speakers/2023/Debbie-Levitt.png",
"images/speakers/2023/Diana-Pham.jpg",
"images/speakers/2023/Eldert-Grootenboer.png",
"images/speakers/2023/Georgia-Loper.jpg",
"images/speakers/2023/Glenn-HarmonJr..jpeg",
"images/speakers/2023/Guy-Royse.jpg",
"images/speakers/2023/Heath-Murphy.jpg",
"images/speakers/2023/Homer-GainesCPACC.jpg",
"images/speakers/2023/Jason-Turan.jpg",
"images/speakers/2023/Jim-Wooley.jpg",
"images/speakers/2023/Joel-Lord.png",
"images/speakers/2023/JonathanJ.-Tower.jpg",
"images/speakers/2023/Jordan-Thayer.jpg",
"images/speakers/2023/Joseph-Guadagno.png",
"images/speakers/2023/Josh-Goldberg.jpg",
"images/speakers/2023/Kat-Fairbanks.jpg",
"images/speakers/2023/Kathryn-GraysonNanz.png",
"images/speakers/2023/Krista-Campbell.jpg",
"images/speakers/2023/Mark-Noonan.png",
"images/speakers/2023/Matt-Eland.jpg",
"images/speakers/2023/Matt-Williams.png",
"images/speakers/2023/MattKelly-Williams.png",
"images/speakers/2023/Michael-Meadows.jpeg",
"images/speakers/2023/Michele-Lanning.PNG",
"images/speakers/2023/Michele-Parsley-LanningD.O..PNG",
"images/speakers/2023/PJ-Hagerty.jpg",
"images/speakers/2023/Rhia-Dixon.jpg",
"images/speakers/2023/Robert-Herbig.jpg",
"images/speakers/2023/Ryan-Booz.jpg",
"images/speakers/2023/Samuel-Shaw.jpg",
"images/speakers/2023/Scott-McAllister.jpg",
"images/speakers/2023/Seth-Petry-Johnson.jpg",
"images/speakers/2023/Sierra-OBryan.png",
"images/speakers/2023/Steve-Smith.jpg",
"images/speakers/2023/Taranjeet-Kaur.jpeg",
"images/speakers/2023/Tasha-Penwell.png",
"images/speakers/2023/Tim-LeMaster.png",
"images/speakers/2023/Todd-Gardner.jpg",
"images/speakers/2023/Valarie-Regas.jpg",
"images/speakers/2023/Vitaliy-Matiyash.jpg",
"images/speakers/2024/Abbey-Perini.jpeg",
"images/speakers/2024/Adrienne-BraganzaTacke.jpg",
"images/speakers/2024/Aldo-Socarras.jpg",
"images/speakers/2024/Anthony-Russell.jpg",
"images/speakers/2024/Ashley-Holcomb.jpg",
"images/speakers/2024/Benjamin-Winkler.jpg",
"images/speakers/2024/Brandon-Bruno.jpg",
"images/speakers/2024/Brian-McKeiver.jpg",
"images/speakers/2024/Brian-Meeker.jpg",
"images/speakers/2024/Burton-Smith.jpg",
"images/speakers/2024/Carey-Payette.jpg",
"images/speakers/2024/Chris-Gardner.png",
"images/speakers/2024/Chris-Nelson.jpg",
"images/speakers/2024/David-Neal.png",
"images/speakers/2024/Dennis-Dunn.jpg",
"images/speakers/2024/Dev-Agrawal.jpg",
"images/speakers/2024/Drake-Lundstrom.jpg",
"images/speakers/2024/Georgia-Loper.jpg",
"images/speakers/2024/Glenn-HarmonJr..jpeg",
"images/speakers/2024/Haley-HendershotMalone.jpg",
"images/speakers/2024/HenryBerson-Saint-Juste.jpg",
"images/speakers/2024/Jamie-Dicken.jpg",
"images/speakers/2024/Jay-Harris.jpg",
"images/speakers/2024/Jeffrey-Miller.jpg",
"images/speakers/2024/John-Riley.jpg",
"images/speakers/2024/Jonathan-Knapp.jpg",
"images/speakers/2024/JonathanJ.-Tower.jpg",
"images/speakers/2024/Jordan-Thayer.jpg",
"images/speakers/2024/Kathryn-GraysonNanz.jpg",
"images/speakers/2024/Kevin-Mireles.jpeg",
"images/speakers/2024/Lino-Tadros.jpg",
"images/speakers/2024/Liz-Johnson.jpg",
"images/speakers/2024/Matt-Eland.jpg",
"images/speakers/2024/MattKelly-Williams.png",
"images/speakers/2024/Michael-Eaton.png",
"images/speakers/2024/Michael-Gregory.jpg",
"images/speakers/2024/Mike-Hand.jpg",
"images/speakers/2024/Natalie-Hylton.jpg",
"images/speakers/2024/Rachel-Gregory.jpg",
"images/speakers/2024/Robert-Herbig.jpg",
"images/speakers/2024/Samuel-Gomez.jpg",
"images/speakers/2024/Sean-Wedig.png",
"images/speakers/2024/Shawn-Wildermuth.jpg",
"images/speakers/2024/Simon-MacDonald.JPG",
"images/speakers/2024/Steve-Smith.jpg"
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