if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>n(e,o),l={module:{uri:o},exports:t,require:c};i[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BD8N4-rL.css",revision:null},{url:"assets/index-WVJtlU9n.js",revision:null},{url:"index.html",revision:"fd22959ad7de1dc8639b7b8cc8847f2d"},{url:"registerSW.js",revision:"561f951245126294e0db248074297318"},{url:"apple-touch-icon.png",revision:"887f66a68791907d64661c7fb3e12afe"},{url:"favicon.svg",revision:"e98554c604a8ab6c78d37ed85835ae77"},{url:"pwa-192x192.png",revision:"e00ea0752da345316d89327472af0c92"},{url:"pwa-512x512.png",revision:"2c3532e936481b6af16890e238c66c82"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"manifest.webmanifest",revision:"eef48a31eeaf39bb689b210fc888f1ce"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
