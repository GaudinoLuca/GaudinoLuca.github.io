'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "adaa2292b7d1d0352bd6014f6383e623",
"assets/AssetManifest.json": "827163f24e2d9f9f61e8204c2b9b7acd",
"assets/assets/google_fonts/Arvo-Bold.ttf": "ab1dabbd8ffd289a5c35cb151879e987",
"assets/assets/google_fonts/Arvo-BoldItalic.ttf": "a53d4514f91e2a95842412c4d3954dd0",
"assets/assets/google_fonts/Arvo-Italic.ttf": "4d7f205bc8a4a7e98c219a1427999533",
"assets/assets/google_fonts/Arvo-Regular.ttf": "afb50701726581f5f817faab8f7cf1b7",
"assets/assets/google_fonts/LibreFranklin-Italic-VariableFont_wght.ttf": "72c9d0e8faa0b0532363d3f25fead170",
"assets/assets/google_fonts/LibreFranklin-VariableFont_wght.ttf": "45607ae9472e0b80708bf53919bfed87",
"assets/assets/icons/arrow_left.svg": "e9eb5b473f0a63159c636f38f0d23687",
"assets/assets/icons/arrow_right.svg": "c42f1ad22aad3a3c4d804c8ff48411ea",
"assets/assets/icons/bottle.svg": "cea9bc26474ab078312d5f5f103a40c7",
"assets/assets/icons/broken_heart.svg": "a07f399282e8bf739bdc79f151286cde",
"assets/assets/icons/broken_heart_white.svg": "fa81663c2623d99d5d54d7cdb8597c7d",
"assets/assets/icons/chest.svg": "20f4a7893d64e4d725447d547e3dd978",
"assets/assets/icons/chest_home.svg": "b9d9a586e59f051ecae83d8040eb2ec0",
"assets/assets/icons/heart.svg": "7b87b4e2aa0dfaedfbd24da848a2f8a1",
"assets/assets/icons/home.svg": "d9518247936601a618b941d518dd9658",
"assets/assets/icons/honoo_chest_blue.svg": "8a4331382a226fe32ab64180b40905d6",
"assets/assets/icons/honoo_chest_red.svg": "5bfa8efabd8e1e841f36bff724f602b0",
"assets/assets/icons/honoo_chest_white.svg": "dbf3b8f8fa31ff47834d530ad63a59c4",
"assets/assets/icons/isoladellestorie/backgrounds/1grottarondini.png": "56748b0e9d60b67ee6821ce7489f1ac8",
"assets/assets/icons/isoladellestorie/backgrounds/1grottarondini.svg": "3c548d559855f41a65de6ff268447e42",
"assets/assets/icons/isoladellestorie/backgrounds/2radurabacche.png": "4f77290ee5c5a4f301bec33e3af7d79c",
"assets/assets/icons/isoladellestorie/backgrounds/2radurabacche.svg": "4f24515f196e6d6424e14d02975e43fe",
"assets/assets/icons/isoladellestorie/backgrounds/3pozzooracolo.png": "33eb8d4de28a3215e00d588d1bb399f2",
"assets/assets/icons/isoladellestorie/backgrounds/3pozzooracolo.svg": "de0e2732ac2459b98b4f357d751f8ae6",
"assets/assets/icons/isoladellestorie/backgrounds/4portaalabastro.png": "7fc7901a4a0bb335820e05b9deb1ec39",
"assets/assets/icons/isoladellestorie/backgrounds/4portaalabastro.svg": "0b795d242ab09d97a91e6fdd3216cb9a",
"assets/assets/icons/isoladellestorie/backgrounds/5primoanello.png": "8a24d1182faf1ecb3de9a7976dc68f6a",
"assets/assets/icons/isoladellestorie/backgrounds/5primoanello.svg": "80553ce8acb5ac43396ebdd323117711",
"assets/assets/icons/isoladellestorie/backgrounds/6secondoanello.png": "06daade7399af14c02d65c9d9296b899",
"assets/assets/icons/isoladellestorie/backgrounds/6secondoanello.svg": "ca6486b842a7885423af9c4f2ce8b90f",
"assets/assets/icons/isoladellestorie/backgrounds/7terzoanello.png": "946519bfbcc6d88305f557ad4b1bd80c",
"assets/assets/icons/isoladellestorie/backgrounds/7terzoanello.svg": "acd876a96a204a8648917467105868e5",
"assets/assets/icons/isoladellestorie/backgrounds/8quartoanello.png": "2fed4e48210f188c43b44f27602ef019",
"assets/assets/icons/isoladellestorie/backgrounds/8quartoanello.svg": "4145ea985b9a1a90cdba8e3b3e7f1717",
"assets/assets/icons/isoladellestorie/backgrounds/9cunicololuce.png": "5245b0bcebf23782aaa69b5ff5eddb34",
"assets/assets/icons/isoladellestorie/backgrounds/9cunicololuce.svg": "d89b43fcd16645052b8749ed11663387",
"assets/assets/icons/isoladellestorie/button1.svg": "1070f0c9c8c68f40ea371489bd531c8f",
"assets/assets/icons/isoladellestorie/button2.svg": "437bf3d960053b3d79810a3e0e08dda3",
"assets/assets/icons/isoladellestorie/button3.svg": "1d213a6b33b1978d85e8ff6b190c83a4",
"assets/assets/icons/isoladellestorie/button4.svg": "c6cf1fe4a5304cf4bcfe59a55cb28fca",
"assets/assets/icons/isoladellestorie/button5.svg": "8e462c0e876f2c902bc972ee398984a9",
"assets/assets/icons/isoladellestorie/button6.svg": "cd3fef0d774c2ada1a5132cb770c7101",
"assets/assets/icons/isoladellestorie/button7.svg": "5a8e50cfe917346ec086a3e4c4c4b7cd",
"assets/assets/icons/isoladellestorie/button8.svg": "9d331aaa539c38c6e80ea256c74553e1",
"assets/assets/icons/isoladellestorie/button9.svg": "c290b2a8804574f9fcd85385ff974a5a",
"assets/assets/icons/isoladellestorie/conchiglia.svg": "e5f6e95ce178351166ad064af0b4fc98",
"assets/assets/icons/isoladellestorie/garbuglio.svg": "831994816e8964f6bb93782c32f71b94",
"assets/assets/icons/isoladellestorie/gomitolo.svg": "7317e5bcf6a40863f0e93d2105874017",
"assets/assets/icons/isoladellestorie/island.svg": "06d785c3d619c2703652146012153c48",
"assets/assets/icons/isoladellestorie/islandhome.svg": "0cda8d7cdf79e52e0f10931b5991022b",
"assets/assets/icons/isoladellestorie/islandmap.svg": "477965a3b70675bbba3428cd496c2ac1",
"assets/assets/icons/isoladellestorie/offUI.svg": "dd5ec80ceda42757b3cf49a3a3b06d6b",
"assets/assets/icons/isoladellestorie/path.svg": "4e784a811edf0cfcb2887b0ad1def035",
"assets/assets/icons/moon.svg": "952300d9fa3f6caaf64230dd68dbfebf",
"assets/assets/icons/ok.svg": "7c9abea4ca06f4381dde111626f55dc1",
"assets/assets/icons/reply.svg": "0253032719ed71df7a9b507dc88130ee",
"assets/assets/icons/share.svg": "fcabc284417ee9447f30b787dff6ae80",
"assets/assets/icons/splash.svg": "727ac13364d931636e2a8d71484a21c3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3044b9a5d7162db7a34c4d523ede3035",
"assets/NOTICES": "e6fdee78e433696989a96c19ad8646eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "08f22b1287f0ff8b17ee37e8eac578ad",
"canvaskit/canvaskit.wasm": "388075ea1bb3b2a3046f9bfb294528b0",
"canvaskit/chromium/canvaskit.js": "94345e0f53b39690825826118925a7a8",
"canvaskit/chromium/canvaskit.wasm": "a860fcb96adaa17a152eea867e355fc7",
"canvaskit/skwasm.js": "274d4ff9c575cdafbb3d8879a9f81355",
"canvaskit/skwasm.wasm": "b14b0758eb5b44b50f536e8784dc8647",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a1f2a5bf6f2229826d7966bda6ee5eb",
"/": "7a1f2a5bf6f2229826d7966bda6ee5eb",
"main.dart.js": "d752ffb36d6d72d84c6e79e6c86606e8",
"manifest.json": "b3c736e76a705d3354f558481d31c2d5",
"version.json": "36ebf088e792919511c898d53ed38677"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
