//Incorporacion de service worker (WPA).

const static_CV = "CV"
const assets = [
  "./",
  "./CV.html",
  "./CSS/cv.css",
  "./JS/CV.js",
  "./imagenes/fondo1.jpg",
  "./imagenes/fondo2.jpg",
  "./imagenes/persona_sonriendo.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(static_CV).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })