"use strict";var precacheConfig=[["/index.html","f89f541d6a20fc0d0051bec076769445"],["/static/css/main.ae2696bb.css","725f0a15c9b3fe60f12caaf99f0163a4"],["/static/js/main.8d8d1115.js","716242d0050fad7ffd179fa0276aa2ec"],["/static/media/1-photo.193f9606.jpg","193f96069f7f62356b689fa6d47cd58f"],["/static/media/1.9dc5135f.jpg","9dc5135ff66badb153826dff3829b1f5"],["/static/media/10-photo.699f8518.jpg","699f85183cd80b1f37c5e9e2cac1c0c8"],["/static/media/11-photo.31dfa5c0.jpg","31dfa5c0edee8def67b56be4f63aca15"],["/static/media/11.2b56c81b.jpg","2b56c81be6825120f26e07a9d620b62b"],["/static/media/12-photo.01616cca.jpg","01616cca8632551e10337dd7ebf573ed"],["/static/media/13-photo.180e6412.jpg","180e6412ef8964d31cc5b3f8725f95a3"],["/static/media/14-photo.d3d7840a.jpg","d3d7840ac419af7c7aad890bef32b4d2"],["/static/media/14.90037c2d.jpg","90037c2d8a435947c7af1f6477211bf3"],["/static/media/15-photo.b5c67f36.jpg","b5c67f36cbb1fcc7acc708a9e5c77fc8"],["/static/media/15.29d24aa3.jpg","29d24aa3a1423804357890d5320020d9"],["/static/media/16-photo.3ee1aa34.jpg","3ee1aa3404bc241883e88b493755f1e5"],["/static/media/16.9451774a.jpg","9451774a616ab7e002a6afe28b9adfb8"],["/static/media/17-photo.3a32f9c6.jpg","3a32f9c62cf88addffb4ed91027aeeac"],["/static/media/18-photo.43e1c6d6.jpg","43e1c6d65a2b56fb036121149d7f9cae"],["/static/media/18.6e0b6407.jpg","6e0b640710d93c5af4463e4e6cefbb02"],["/static/media/19.727d0eda.jpg","727d0eda4da7cde3c31d321acf6df62d"],["/static/media/2-photo.bd3db2b8.jpg","bd3db2b810647876d138602508c708d5"],["/static/media/2.b5f3c57a.jpg","b5f3c57af63942452a7a7e0d53448d79"],["/static/media/3-photo.fe33a4e9.jpg","fe33a4e91280e0e6860ebabc43c1eb9e"],["/static/media/3.14e1dbf5.jpg","14e1dbf50b6001f489f391586c58fe31"],["/static/media/4-photo.23a01927.jpg","23a0192785c45c4812f04fed72f26fe0"],["/static/media/4.6a75121f.jpg","6a75121f7df296528b933bed5d6e4f79"],["/static/media/5-photo.d442325b.jpg","d442325bcca59603025cc4e69e686867"],["/static/media/5.faba6e66.jpg","faba6e661e164f9a19c270a317f42e84"],["/static/media/6-photo.33be6a92.jpg","33be6a92be2e650c8cdff681be0d7ad3"],["/static/media/6.ff61eb78.jpg","ff61eb78e9391fc5cdbe4504b5d1bd3c"],["/static/media/7.bedc0609.jpg","bedc0609d36935165ccd901f97a80452"],["/static/media/8.43f7ac26.jpg","43f7ac2637818cf2b7dc608561e20c88"],["/static/media/9.8fef91e2.jpg","8fef91e2ae06a90eb2aa8ea75c113524"],["/static/media/Chivo-Regular.8237ffd3.ttf","8237ffd368a85f9ee9886d2d8b79c68b"],["/static/media/Montserrat-Bold.d3085f68.ttf","d3085f686df272f9e1a267cc69b2d24f"],["/static/media/Montserrat-Regular.07689d4e.ttf","07689d4eaaa3d530d58826b5d7f84735"],["/static/media/Regulamin.c3775b81.docx","c3775b811dafc0e756a4fe6a589e253d"],["/static/media/Skor_Keeper_header_logo.92e439a7.png","92e439a7c20ae291b0a6d141fa82f0c0"],["/static/media/Skor_Keeper_logo.e74b9896.png","e74b989688619dc6868c520d9b6245b9"],["/static/media/shoeshine.3c490bfa.jpg","3c490bfa972b930d528147e39e798bb1"],["/static/media/załączniki.9c3e0e3d.docx","9c3e0e3d55a9a4cf935ab904ee3a0d26"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});