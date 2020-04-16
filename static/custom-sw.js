const CACHE_NAME = 'static-cache-v2'
const DATA_CACHE_NAME = 'data-cache-v1'
let FILES_TO_CACHE = [
  '/',
  '/posts',
  '/posts/id'
]
self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(DATA_CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE)
    })
  )
})
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
          return caches.delete(key)
        }
      }))
    })
  )
  self.clients.claim()
})
self.addEventListener('fetch',  (event)=> {
  event.respondWith(
    caches.open(DATA_CACHE_NAME).then((cache) => {
      return fetch(event.request)
        .then((response) => {
          // If the response was good, clone it and store it in the cache.
          if (response.status === 200) {
            cache.put(event.request.url, response.clone())
          }
          return response
        }).catch((err) => {
          // Network request failed, try to get it from the cache.
          return cache.match(event.request)
        })
    }))
})

