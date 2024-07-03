'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c050dd32b0d0ae3c61aef1bf202805e6",
"version.json": "866d274d7870fec139646d4ecde46b46",
"index.html": "71b7daf2da953f23d6a588b3120d49bc",
"/": "71b7daf2da953f23d6a588b3120d49bc",
"main.dart.js": "95cc40eaedfed1f32596c0faf6fc12af",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3b2c8a2f4ca54cb39e586bb1fcbab320",
".git/ORIG_HEAD": "8f3b6449d306d222c843854d20b73043",
".git/config": "8ff831683b30d0549cacade8c5ddb388",
".git/objects/6f/2c09cc9acd22a94688b06c5d2b8e2651c63b76": "5dccde67f542b62fe88f5f60cc14390d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/a84fc68fb283875db972ac4ce308c178a89292": "8e54170272fcd54369d8dcae9f86f2a5",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/d919d651f6a1ef997f9bfdaf67793a428f87af": "d6d00690ce39d2e063977cf639b98a67",
".git/objects/56/eee6ff893541e4234ab94503a669a239cc5be8": "c966a113a91e077a138eb1129c975f9a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/2013069d105641a1b4420a358c0fb5a26f5f8d": "7972e958d0ee34c44ef62ca6dcd23f7e",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/be3910589a8eccdfceb6a74aa381d19a1b07ac": "611280de5f2275a35aaf2c84b94c540a",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/e0a8db099c4f743e30afc9aaab73a4bedd78ab": "4714bf5b20e64a84d912f9a2b3f4bada",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/a9e23b70d77428d8c96e0cf8aced7426da2638": "db4ee3878ad223035f0b4478ae8aec1b",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/cf1305d193e8773d6f6a98994aa1810bd6e90f": "648491f394903681c12967082f6b9cb1",
".git/objects/d8/c06c473e60eb98d02e94ad1a326f56e337ed38": "28727cc2f221c971c8e1e7d4e0d32c30",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/6a17cee15b8a02c630f77838be4120f91e582e": "1c648640495b0007e9479b5862961b2f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c6/a6c1c922f722f81e954942d4990f1056f619e5": "d98add306cce31c6e5a9f096f934bb2d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/5efc7d53451fd36c65965b048d684e677c12ac": "f0ea85e23c0fe0d5a2b8f031b00a6adf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/c2a9efbc36cce2a85c57fc96371c2680610cf0": "4b6a6bff87dc9aaf3191fa267ec6be9e",
".git/objects/88/d970379df156665d666ea5dd2ff51a798cdc25": "d6a5c57d2a66e63d111b04dc9aeab64f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/fb815625afbcb136717309be7872bc59404f6b": "49eb30e5d07ed694e8276b916866c9eb",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/55/420049fd38cd435437c3049a046e68405f77b7": "b434a68067e75385c47187a57a8e55df",
".git/objects/90/8ed819911a98ed1b7494db28509ddf333649b5": "64903d13d83a155876ae13b8acdb7eb5",
".git/objects/bf/843e4fa9a11bc4f3532dfab2d13b00d3ed7048": "9964105d6fc6cda36c06c35a9e96f06f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/b941f0d9b243ce946abaa8f29814df6be182bf": "24f60f94ff89c1749323f505526a5d40",
".git/objects/b1/4ffab54772ab6170adb8b57c44944eb1032c47": "058d54795763fec6a78186e8954ba531",
".git/objects/dd/873caaeca40d3ae0107a12509ba304ed14ff54": "aae2da1f6613e468b9f7f7822349052a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/69ff85c95171d66ec8e41f79fcc62b189e6bca": "f8fadedca013af63323390a89c3062be",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5d0e5b42e1d57b0a6efe4969bf0b7787547104": "d7417ee58a8521d10e40feb3485f9fde",
".git/objects/ef/43b4031b96d32569ec5210f32c726443de7d3c": "beaaa98b778cc93ac465d84a88288ae9",
".git/objects/fa/4affe341c190de6af90e43063ff04c9a7e7608": "faadf36c15ddd7e51d258920db9408c7",
".git/objects/cb/99c14265fbaf4b7d794167451271e20d4a5ced": "5daf38a8f1aa6ff0b2eeddcc0a769538",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/e0335d5c402191444cff46da1275cc1d181125": "3718784b4fd5c5b5a61ba1e925d06832",
".git/objects/15/8ae1241c2ae48ae7a6beda931e55a5489dfdc3": "03518ef79f323991a27d27a4853fd2b0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/442c22d021252f582867bb1c23c041927d3ce1": "4f38de7552570ecb9453843f5d6f545e",
".git/objects/82/bfb022bda1f85fbdecbaec2f9d0a500b410186": "01e3a344f36d36303b511ba23888fb46",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/47/479ae7939b2f895045b45898b46d55a74d9908": "351657c065bf961c4fe770210d5678c8",
".git/objects/7f/e0801b8cddc4704d6af24ce13ac6df87899004": "c9058a08fb18bcf2da1a4743b2af6273",
".git/objects/7f/e13df6329b43c9d8ea06d06a16c680d2c1d995": "27243b12608a8087616d31d5ece32231",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51bf0df6c952507979511ffbb8a607dc",
".git/logs/refs/heads/test": "6ba2c4b23045c6b1a5a339943c84ee2d",
".git/logs/refs/heads/test_main": "a6b49f7a5f51178534e75dcb8e03e93c",
".git/logs/refs/heads/main": "ae9cad35c1174f340c3317f9557b17a5",
".git/logs/refs/heads/0.1.0_release": "8fa8b1f50dcc8f3d42ec56d6bc8d7c5f",
".git/logs/refs/remotes/origin/main": "d84b90699e3000b9a5fbb63ffba5deb2",
".git/logs/refs/remotes/origin/0.1.0_release": "b231c84416e73323348aca9477ae7d02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/test": "3bdc33aa6dcfccad8316469db26fb476",
".git/refs/heads/test_main": "8f3b6449d306d222c843854d20b73043",
".git/refs/heads/main": "471aa36d9bf480340106c28cf39759b6",
".git/refs/heads/0.1.0_release": "a768dd441a91df53fe2e45a2c7594a09",
".git/refs/remotes/origin/main": "471aa36d9bf480340106c28cf39759b6",
".git/refs/remotes/origin/0.1.0_release": "a768dd441a91df53fe2e45a2c7594a09",
".git/index": "f366fec23e33b3e4c5b2578246c9bb93",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "e52ff3f584cd02f671d5c363c92fec91",
".git/FETCH_HEAD": "77816f293985b7c4f25c8d269f55e177",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "5feda17a2bb5322e0814c6b0da80cd3a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "12553ff9798f4c3249180dee61c08967",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
".idea/workspace.xml": "b2d7c72fffc43a611a4e726bd9c026eb",
".idea/shelf/Uncommitted_changes_before_Checkout_at_03_07_24,_4_48%E2%80%AFpm_%5BChanges%5D1/shelved.patch": "d41d8cd98f00b204e9800998ecf8427e",
".idea/shelf/Uncommitted_changes_before_Checkout_at_03_07_24,_4_48%E2%80%AFpm_%5BChanges%5D1/MaterialIcons-Regular.otf": "12553ff9798f4c3249180dee61c08967",
".idea/shelf/Uncommitted_changes_before_Checkout_at_03_07_24,_4_48%E2%80%AFpm_%5BChanges%5D/shelved.patch": "a3ce190686e43781ff180d500928dad8",
".idea/shelf/Uncommitted_changes_before_Checkout_at_03_07_24,_4_48%E2%80%AFpm_%5BChanges%5D/MaterialIcons-Regular.otf": "12553ff9798f4c3249180dee61c08967"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
