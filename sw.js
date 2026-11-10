/* PAlamo Life Tracker service worker: keeps the app usable with no connection.
   - The page itself: network first, so a new release shows up on the next online load. If the network
     fails, or has not answered within PAGE_WAIT_MS (weak venue signal), the saved copy is used instead.
   - Fonts and any other file from this site: saved copy first, network only if there is no copy yet.
   - Requests to other sites (the visit counter) are left alone.
   Change CACHE (palamo-v2, ...) only when a font or other non-page file is replaced under the same name;
   page releases do not need it. */
var CACHE = 'palamo-v1';
var CORE = ['./', 'fonts/dm-sans-latin-400-normal.woff2', 'fonts/dm-sans-latin-700-normal.woff2', 'fonts/bricolage-grotesque-latin-800-normal.woff2'];
var PAGE_WAIT_MS = 3000;

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('palamo-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function keep(e, req, res) {
  if (res && res.ok && res.type === 'basic' && !res.redirected) {
    var copy = res.clone();
    e.waitUntil(caches.open(CACHE).then(function (c) { return c.put(req, copy); }).catch(function () {}));
  }
  return res;
}

function savedPage(req) {
  return caches.match(req, { ignoreSearch: true }).then(function (r) {
    if (r) return r;
    var scope = new URL(self.registration.scope).pathname;
    return new URL(req.url).pathname === scope + 'index.html' ? caches.match('./') : undefined;
  });
}

function page(e) {
  var req = e.request, saved = savedPage(req);
  var net = fetch(req).then(function (res) { return keep(e, req, res); });
  return new Promise(function (resolve, reject) {
    var done = false;
    function finish(r) { if (!done) { done = true; resolve(r); } }
    var timer = setTimeout(function () { saved.then(function (r) { if (r) finish(r); }); }, PAGE_WAIT_MS);
    net.then(function (res) {
      clearTimeout(timer);
      if (res.ok) finish(res); else saved.then(function (r) { finish(r || res); });
    }, function (err) {
      clearTimeout(timer);
      saved.then(function (r) { if (r) finish(r); else if (!done) { done = true; reject(err); } });
    });
  });
}

function asset(e) {
  var req = e.request;
  return caches.match(req).then(function (r) {
    return r || fetch(req).then(function (res) { return keep(e, req, res); });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(req.mode === 'navigate' ? page(e) : asset(e));
});
