'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "23be0fdafa5ddef67734292a576f8fe3",
"canvaskit/skwasm.js": "3dbd05be6db4a4154ce733ff194dcae7",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "296ba26fdb37b50c239d4ead66144d01",
"canvaskit/skwasm.wasm": "f767200511478d7f7052f2b536d82875",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/chromium/canvaskit.js": "c5ff0f8767a7ea0962b15d1f1832002d",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "c6b1144d5baffbdd9482ee820dbd7dc9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/assets/google_fonts/Arvo-Italic.ttf": "4d7f205bc8a4a7e98c219a1427999533",
"assets/assets/google_fonts/Arvo-Regular.ttf": "afb50701726581f5f817faab8f7cf1b7",
"assets/assets/google_fonts/Arvo-BoldItalic.ttf": "a53d4514f91e2a95842412c4d3954dd0",
"assets/assets/google_fonts/Arvo-Bold.ttf": "ab1dabbd8ffd289a5c35cb151879e987",
"assets/assets/google_fonts/LibreFranklin-VariableFont_wght.ttf": "45607ae9472e0b80708bf53919bfed87",
"assets/assets/google_fonts/LibreFranklin-Italic-VariableFont_wght.ttf": "72c9d0e8faa0b0532363d3f25fead170",
"assets/assets/icons/reply.svg": "0253032719ed71df7a9b507dc88130ee",
"assets/assets/icons/arrow_left.svg": "e9eb5b473f0a63159c636f38f0d23687",
"assets/assets/icons/honoo_chest_white.svg": "dbf3b8f8fa31ff47834d530ad63a59c4",
"assets/assets/icons/broken_heart.svg": "a07f399282e8bf739bdc79f151286cde",
"assets/assets/icons/arrow_right.svg": "c42f1ad22aad3a3c4d804c8ff48411ea",
"assets/assets/icons/performance.png": "ee1d62c63a3359c3b24162a4ac3a6dda",
"assets/assets/icons/honoo_chest_red.svg": "5bfa8efabd8e1e841f36bff724f602b0",
"assets/assets/icons/heart.svg": "7b87b4e2aa0dfaedfbd24da848a2f8a1",
"assets/assets/icons/share.svg": "fcabc284417ee9447f30b787dff6ae80",
"assets/assets/icons/honoo_logo.svg": "349e3ebd9260fce835649f1d75f7bce1",
"assets/assets/icons/ok.svg": "7c9abea4ca06f4381dde111626f55dc1",
"assets/assets/icons/dice.svg": "cebcf7b2423ea497e6d5701f76a5e78f",
"assets/assets/icons/honoo_chest_blue.svg": "8a4331382a226fe32ab64180b40905d6",
"assets/assets/icons/home.svg": "488a0a196157246f45ea7af6e6a62ccc",
"assets/assets/icons/isoladellestorie/offUI.svg": "33b0a1d0d5e58ce890c60bff77eed508",
"assets/assets/icons/isoladellestorie/islandmap.jpg": "0128d059e28972dd58a85f55b93dfde6",
"assets/assets/icons/isoladellestorie/button2.svg": "437bf3d960053b3d79810a3e0e08dda3",
"assets/assets/icons/isoladellestorie/islandmap.svg": "477965a3b70675bbba3428cd496c2ac1",
"assets/assets/icons/isoladellestorie/button6.svg": "cd3fef0d774c2ada1a5132cb770c7101",
"assets/assets/icons/isoladellestorie/button7.svg": "5a8e50cfe917346ec086a3e4c4c4b7cd",
"assets/assets/icons/isoladellestorie/conchiglia.svg": "e5f6e95ce178351166ad064af0b4fc98",
"assets/assets/icons/isoladellestorie/button8.svg": "9d331aaa539c38c6e80ea256c74553e1",
"assets/assets/icons/isoladellestorie/button3.svg": "1d213a6b33b1978d85e8ff6b190c83a4",
"assets/assets/icons/isoladellestorie/backgrounds/7terzoanello.jpg": "c1a11fb6fee24c9a58a04770b05a3db7",
"assets/assets/icons/isoladellestorie/backgrounds/4portaalabastro_old.png": "a2426155d0dee696fe34692884889777",
"assets/assets/icons/isoladellestorie/backgrounds/8quartoanello.jpg": "3137d508acb1af19523688f2ba3cb29c",
"assets/assets/icons/isoladellestorie/backgrounds/2radurabacche_old.png": "4f77290ee5c5a4f301bec33e3af7d79c",
"assets/assets/icons/isoladellestorie/backgrounds/6secondoanello.png": "01531622438754db252bd68fff8387c6",
"assets/assets/icons/isoladellestorie/backgrounds/5primoanello_old.png": "9140f938b9731c377a137552013c0885",
"assets/assets/icons/isoladellestorie/backgrounds/4portaalabastro.jpg": "7fa8ba1567f125a857b3ac0f68dd532a",
"assets/assets/icons/isoladellestorie/backgrounds/8quartoanello.png": "aea0b0a92ca1bfe6abac3a0210e905dd",
"assets/assets/icons/isoladellestorie/backgrounds/3pozzooracolo.png": "a9776b8353d4ff4418b1aa08781b9739",
"assets/assets/icons/isoladellestorie/backgrounds/5primoanello.png": "779576dfd091e24fab8656abc2530e38",
"assets/assets/icons/isoladellestorie/backgrounds/2radurabacche.png": "2ffeb28060b3e0f3ab388122f54b8790",
"assets/assets/icons/isoladellestorie/backgrounds/9cunicololuce_old.png": "55f44bfa52624a1642f288660743d3ff",
"assets/assets/icons/isoladellestorie/backgrounds/9cunicololuce.jpg": "a2bc67db2e26888783fbf6aff0e51017",
"assets/assets/icons/isoladellestorie/backgrounds/8quartoanello_old.png": "2fed4e48210f188c43b44f27602ef019",
"assets/assets/icons/isoladellestorie/backgrounds/6secondoanello.jpg": "77348d0167212505561ea7186bfe4470",
"assets/assets/icons/isoladellestorie/backgrounds/9cunicololuce.png": "6073a2f9479a56d28ac2e9fa62e5a066",
"assets/assets/icons/isoladellestorie/backgrounds/5primoanello.jpg": "897e3a0c2cf8421109337f7db93c64a4",
"assets/assets/icons/isoladellestorie/backgrounds/1grottarondini.jpg": "ba5a2729d073e8f10b6c3295c60e5bdf",
"assets/assets/icons/isoladellestorie/backgrounds/3pozzooracolo.jpg": "35aa28bcd6e58140343d8660c6e2cfb5",
"assets/assets/icons/isoladellestorie/backgrounds/1grottarondini_old.png": "56748b0e9d60b67ee6821ce7489f1ac8",
"assets/assets/icons/isoladellestorie/backgrounds/3pozzooracolo_old.png": "33eb8d4de28a3215e00d588d1bb399f2",
"assets/assets/icons/isoladellestorie/backgrounds/2radurabacche.jpg": "4c39efbc70bf338d52323e952b6dedd1",
"assets/assets/icons/isoladellestorie/backgrounds/6secondoanello_old.png": "06daade7399af14c02d65c9d9296b899",
"assets/assets/icons/isoladellestorie/backgrounds/7terzoanello_old.png": "946519bfbcc6d88305f557ad4b1bd80c",
"assets/assets/icons/isoladellestorie/backgrounds/1grottarondini.png": "ade1cc4e12cfbfd2b1c3c8a1c893cc59",
"assets/assets/icons/isoladellestorie/backgrounds/7terzoanello.png": "800e978949bef5a1a67436b8bdd93dda",
"assets/assets/icons/isoladellestorie/backgrounds/4portaalabastro.png": "65e88787daa0f3eab19d4396aeec5198",
"assets/assets/icons/isoladellestorie/gomitolo.svg": "7317e5bcf6a40863f0e93d2105874017",
"assets/assets/icons/isoladellestorie/button9.svg": "c290b2a8804574f9fcd85385ff974a5a",
"assets/assets/icons/isoladellestorie/islandhome.svg": "18a1912028d412c354f177c70704ba98",
"assets/assets/icons/isoladellestorie/button5.svg": "8e462c0e876f2c902bc972ee398984a9",
"assets/assets/icons/isoladellestorie/button1.svg": "1070f0c9c8c68f40ea371489bd531c8f",
"assets/assets/icons/isoladellestorie/button4.svg": "c6cf1fe4a5304cf4bcfe59a55cb28fca",
"assets/assets/icons/isoladellestorie/island.svg": "961e55f0d0c8fab6c82842da48b248fc",
"assets/assets/icons/isoladellestorie/path.svg": "43db60092d4972ddd04a7f384bfb4f29",
"assets/assets/icons/isoladellestorie/garbuglio.svg": "831994816e8964f6bb93782c32f71b94",
"assets/assets/icons/broken_heart_white.svg": "fa81663c2623d99d5d54d7cdb8597c7d",
"assets/assets/icons/chest_home.svg": "b9d9a586e59f051ecae83d8040eb2ec0",
"assets/assets/icons/luna.png": "15b94d3950a0bc4c4d6946ee7f13c764",
"assets/assets/icons/isola.png": "9426dc43b2e85cb0e5ff45881a9534c9",
"assets/assets/icons/info.svg": "de68712804d83c680b5898bd994e1fb2",
"assets/assets/icons/home_onTertiary.svg": "b98b46da6a146110cbb120aa5776ebcf",
"assets/assets/icons/splash.svg": "727ac13364d931636e2a8d71484a21c3",
"assets/assets/icons/chest.svg": "ea5e2eb394e32e5dda0fc95d95d36e05",
"assets/assets/icons/logo_honoo.png": "6fc3f394a534ba1c912785a5a796ac11",
"assets/assets/icons/bottle.svg": "075b04b770400c98725ae98aa95d19fb",
"assets/assets/icons/moon.svg": "151be296527770b99e306f3ccb054df3",
"assets/NOTICES": "3fa359e8539abab663c8758a02d95b14",
"assets/AssetManifest.bin": "c0fa5f18555dc961e8ddc6823d66b3e5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "960a7e1ccc64075e0150056f1e7455ef",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"assets/fonts/MaterialIcons-Regular.otf": "9b17d55a1e57eb9a9f261fdfd5417945",
"main.dart.js": "54ea3e4f46d80cebb7cdacf77f763763",
"index.html": "e13d6296e8fd9351a2b04d7176bf043d",
"/": "e13d6296e8fd9351a2b04d7176bf043d",
"version.json": "36ebf088e792919511c898d53ed38677",
"manifest.json": "17ae29f2334b3407e1dc64ee25e9699a",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a"};
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
