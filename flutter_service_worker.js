'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"favicon.png": "7d00e6adb83f5760b01e9fc07a1cc391",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "cd3d19d4d8b1e67b54baa82827f06d02",
"main.dart.js": "b1e5dd13d44bd5ff8f2649c3a96da75e",
"manifest.json": "dfa7aeb8d5621879ef7231821eab5090",
"index.html": "d79d91d98979519efcbf3c00870f933a",
"/": "d79d91d98979519efcbf3c00870f933a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0e6e98529eaf71e3bf61fc91452f698c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/u_credit_card/fonts/OCR-A-regular.ttf": "426fbbd15636b132aafe10f83c816e3f",
"assets/packages/u_credit_card/assets/images/amex.png": "78a87e922e4af6db197310737ef9b9fe",
"assets/packages/u_credit_card/assets/images/chip.png": "c7c92244ce8c689f6ac515b9569bb09f",
"assets/packages/u_credit_card/assets/images/nfc.png": "d0e0c4bc69cb7005c10ce684f0603468",
"assets/packages/u_credit_card/assets/images/visa_logo.png": "8ce71663ec640331057e5b42cacc1994",
"assets/packages/u_credit_card/assets/images/discover.png": "b66abb29035e7fa885cb565c4aedfb30",
"assets/packages/u_credit_card/assets/images/master_card.png": "fe807bce353d0bc60f09a60409236255",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/AssetManifest.json": "d7629f929e7a93689e4cc3253bc40ce7",
"assets/fonts/MaterialIcons-Regular.otf": "7e1b46eab5aa0fba079e40043520ace2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8390e92363e05a61f29b2d833c7f02a5",
"assets/assets/money-tick-svgrepo-com%25201.svg": "34c0be6d40216f5df3db3ce23412dea1",
"assets/assets/eye-visibility-visible-hide-hidden-show-watch-svgrepo-com%25201.svg": "64d520faa5ea7bf865001ff6330d29a9",
"assets/assets/niche%2520space%2520(13).png": "b7b1809828a7bb683d38a8c376c20c3a",
"assets/assets/money-remove-svgrepo-com%25201.svg": "28e4db303e137b3f96c27ae3d7ae1e92",
"assets/assets/eye-slash-visibility-visible-hide-hidden-show-watch-svgrepo-com%25201.svg": "e0b3c3572adf67bc4a7295f48214169a",
"assets/assets/giftCard.svg": "040e7fd1498ee095cf8df10be03f8f2d",
"assets/assets/bell-svgrepo-com%25201.svg": "438d97ef2c2d2011948c255a6793be28",
"assets/assets/withdraw.svg": "3212cd3305162333ed7a2d46435f6ac4",
"assets/assets/edit-svgrepo-com%2520(1)%25201.svg": "2c96709c37deae1ed49776c4b178f16a",
"assets/assets/money-time-svgrepo-com%25201.svg": "502028400dd898ac4c236c52fc798c6c",
"assets/assets/qr-scan-svgrepo-com.svg": "d904ad93bbb01350e5eea857c53ec252",
"assets/assets/card.svg": "4f390216bb27fd67c2acc41b9c89679c",
"assets/assets/debit-card%2520(1).svg": "aa0506977bf1fcc4c6267f0753d3dcc9",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/gift.svg": "f054a00de404dae5227b80eb023f0ea6",
"assets/assets/add-circle-svgrepo-com%25201.svg": "8397d19d41563df4726c9f6c23b18621",
"assets/assets/sendMoney.svg": "3dfb89264692cde35238b46c36737ea7",
"assets/assets/lock-password-svgrepo-com%25201.svg": "67bee0c810e5cc2991b26d44998745fe",
"assets/assets/withdrawCash.svg": "59a156bb24d4d732ac8385df1997c289",
"assets/assets/send.png": "5616488162f847ce37e7dc4f60b6d288",
"assets/assets/exchange-arrows-svgrepo-com%25201.svg": "0e2d07a944c02923f3098724519e85b7",
"assets/assets/buyAirtime.svg": "d73ccebf262731e35a2d4525a58e03a4",
"assets/assets/Currency.svg": "2fc47ea97187a1106abb1d0284fb6a2b",
"assets/assets/card.png": "4b2d168c29fd87b05b41014e876a5130",
"assets/assets/bell.svg": "9dd6eb279606aaf23e344466e2025f0f",
"assets/assets/nichespace14.PNG": "3e72437c7ba6b107a35e4ef00d8a518a",
"assets/assets/send.jpg": "ee0666c644845db595556a422b0c035f",
"assets/assets/CardDesign.png": "8816d22cc07f9d3e4c07e40fc743571f",
"assets/assets/qr-scan-2-svgrepo-com.svg": "14e4f3185a8260e36dff285d9904e022",
"assets/assets/requestCash.svg": "97981d5d7d8038fda0c954ec71139e1c",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252009.37.05.jpeg": "d88a5f6ecfd8b6f556ed12372252278a",
"assets/images/tick.png": "009fb24a4a812c836cb527f95af1f975",
"assets/images/fail.jpg": "c3e4418c7b62f58317cefa32238e982e",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252010.20.03.jpeg": "0badb1e96bb0329ce39b771b2ad5b6e0",
"assets/images/impalapay.jpg": "7d00e6adb83f5760b01e9fc07a1cc391",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252009.37.04%2520(2).jpeg": "e4732c5dc094ed3864d91297c41b96e6",
"assets/images/impala-removebg-preview.png": "92c15bbce04cd68e21a7c0edd8ed53c9",
"assets/images/kenya.png": "a409bf76af98f2b969f04be006420ab5",
"assets/images/avatar.png": "7d6a74b6b7c87e8fd01238ae10aca489",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252009.37.04.jpeg": "dfeefdf8e464c924540c7d004e0dd293",
"assets/images/card.png": "4b2d168c29fd87b05b41014e876a5130",
"assets/images/download.jpeg": "7d19a1c7323e096b30fd2c4283a3eded",
"assets/images/WhatsApp%2520Image%25202024-07-03%2520at%252010.20.03%2520(1).jpeg": "621775e663e9af54c1b03408b927773e",
"assets/images/impalapay-removebg-preview.png": "dd2b528dc64e840d60593d72d25bd283",
"assets/images/visa.png": "0e64720fd8c1c2832434285315841a02",
"assets/FontManifest.json": "86cda367ffebd2ded37438ccf17a925f",
"assets/NOTICES": "0f9cd8236f97f564f93e16be93a58f4e",
"assets/AssetManifest.bin.json": "4bcb57f974986fb5948fa289ceca5596",
"flutter_bootstrap.js": "37b160de6ffc8782df5bf0858771abb2"};
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
