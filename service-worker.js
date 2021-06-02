/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d969de08d2a66da9065d56785e04ae1c"
  },
  {
    "url": "about.html",
    "revision": "376a5d59832536dae7c286ec85fb9279"
  },
  {
    "url": "assets/css/0.styles.7adf3117.css",
    "revision": "9688fc87ce34dd8de21fcf4e502bce74"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "02ee52a82f61acfab35b3ca507cd7d8c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.895df365.js",
    "revision": "e79f64ce700585654eff18b8b78c5d3a"
  },
  {
    "url": "assets/js/11.73bb0eef.js",
    "revision": "e9a37c2498913cc9a7af1687eb900a73"
  },
  {
    "url": "assets/js/12.65efffff.js",
    "revision": "f802e3079cc5467f61fdd42de3b6f845"
  },
  {
    "url": "assets/js/13.a30c7bbf.js",
    "revision": "2ccfdb0eba0323529fe363051c4c6c61"
  },
  {
    "url": "assets/js/14.a9e9741a.js",
    "revision": "dec0beea871a14abc8fdd2f8d3f1213d"
  },
  {
    "url": "assets/js/15.5b6239c5.js",
    "revision": "e15d369d4c6508a82376839a601ad3ed"
  },
  {
    "url": "assets/js/16.1f876e97.js",
    "revision": "b4c7526ff3fb5a388571d1f1f1b1166c"
  },
  {
    "url": "assets/js/17.52125e0b.js",
    "revision": "847d6073fbfa4956bf605d5882999ddf"
  },
  {
    "url": "assets/js/18.b73d0f34.js",
    "revision": "750f24c4edfc15cd28d7d93ba333b3f1"
  },
  {
    "url": "assets/js/19.cace3e4e.js",
    "revision": "e108b31362c52d30dc84b9763712f4de"
  },
  {
    "url": "assets/js/2.16473dc0.js",
    "revision": "d7a13a858b62c57318577b85a39684a8"
  },
  {
    "url": "assets/js/3.1bcd82cd.js",
    "revision": "74eb0886b8cd24cde4663dbc034da5e5"
  },
  {
    "url": "assets/js/4.6e4340b7.js",
    "revision": "3fe8140267e02abaa888d2379bf31005"
  },
  {
    "url": "assets/js/5.78cb7126.js",
    "revision": "28cc9308d7a9be03b5d2c67b19158a3b"
  },
  {
    "url": "assets/js/6.c9d2d3a3.js",
    "revision": "0890bb5d12f46b0ddf7e667a3c7a14f0"
  },
  {
    "url": "assets/js/7.593a4596.js",
    "revision": "6f2722c2d742f2539675fb42b304da79"
  },
  {
    "url": "assets/js/8.e8003006.js",
    "revision": "bad314f9dc709f138867371f27d15f60"
  },
  {
    "url": "assets/js/9.6fd45c38.js",
    "revision": "a5fb2e1c50f99ab94c6182c56dd3c4c3"
  },
  {
    "url": "assets/js/app.1836b37c.js",
    "revision": "0f80e1912355060b68e619d87f106fec"
  },
  {
    "url": "countup.html",
    "revision": "faf80b2e9ef34c85145883d3eb8ab83c"
  },
  {
    "url": "css/css1.html",
    "revision": "044eab0497a2500ac1bca8f029fcb565"
  },
  {
    "url": "css/css2.html",
    "revision": "d998e61c5a7fc624341c8816da023ab4"
  },
  {
    "url": "css/css3.html",
    "revision": "084c6747799c7ffc64a5a7920245a129"
  },
  {
    "url": "css/index.html",
    "revision": "f1569c58437dc0f5ebdea687642d332b"
  },
  {
    "url": "icon/android-icon-192x192-dunplab-manifest-41001.jpg",
    "revision": "aa1d04e249c057f09ffce78a922d5b8b"
  },
  {
    "url": "icon/apple-icon-114x114-dunplab-manifest-41001.jpg",
    "revision": "ec0abb00a1740738e5b87645d41ad5d5"
  },
  {
    "url": "icon/apple-icon-120x120-dunplab-manifest-41001.jpg",
    "revision": "3ddc36d8a4cb1abfbe5af314e1fa2625"
  },
  {
    "url": "icon/apple-icon-144x144-dunplab-manifest-41001.jpg",
    "revision": "35dca5aae2e4642e0108b2ba9bbd81ea"
  },
  {
    "url": "icon/apple-icon-152x152-dunplab-manifest-41001.jpg",
    "revision": "4cfe2d8f05ca2e4ca203408a66d964d5"
  },
  {
    "url": "icon/apple-icon-180x180-dunplab-manifest-41001.jpg",
    "revision": "83641fbf35e3316ce5462c7856b4aaac"
  },
  {
    "url": "icon/apple-icon-57x57-dunplab-manifest-41001.jpg",
    "revision": "1682d5d3d321a0dd715201b1bb5795c7"
  },
  {
    "url": "icon/apple-icon-60x60-dunplab-manifest-41001.jpg",
    "revision": "fbd7281f1f4611549878f047d89d6f39"
  },
  {
    "url": "icon/apple-icon-72x72-dunplab-manifest-41001.jpg",
    "revision": "6ce0c5e642c258aeccda6e8ec005b7be"
  },
  {
    "url": "icon/apple-icon-76x76-dunplab-manifest-41001.jpg",
    "revision": "678a8242934e9859c8367808db1df292"
  },
  {
    "url": "icon/favicon-16x16-dunplab-manifest-41001.jpg",
    "revision": "6d491c8fae4b9002db9554a57324883c"
  },
  {
    "url": "icon/favicon-32x32-dunplab-manifest-41001.jpg",
    "revision": "5ca58c1ba1bd95db3428de46e5a7faec"
  },
  {
    "url": "icon/favicon-96x96-dunplab-manifest-41001.jpg",
    "revision": "989f21a66a2638a5d39d7c5d053e86d3"
  },
  {
    "url": "icon/safari-pinned-tab.svg",
    "revision": "fa885216eba89b861223a434050bba75"
  },
  {
    "url": "index.html",
    "revision": "f235be4a01c68cea90e9852a212141bf"
  },
  {
    "url": "quanxue.html",
    "revision": "820381ec5bfae72bc91e1d93a3a1ef9b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
