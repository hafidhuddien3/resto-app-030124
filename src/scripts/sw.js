import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute, Route } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

// Do precaching
precacheAndRoute(self.__WB_MANIFEST)

const therestodbApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
  new StaleWhileRevalidate({
    cacheName: 'therestodb-api'
  })
)

const therestodbImageApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/'),
  new StaleWhileRevalidate({
    cacheName: 'therestodb-image-api'
  })
)

registerRoute(therestodbApi)
registerRoute(therestodbImageApi)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed')

  const notificationData = {
    title: 'Push Notification',
    options: {
      body: 'This is a push notification',
      icon: '/icons/favicon.ico',
      image: '/icons/icon-192.png'
    }
  }

  const showNotification = self.registration.showNotification(
    notificationData.title,
    notificationData.options
  )

  event.waitUntil(showNotification)
})
