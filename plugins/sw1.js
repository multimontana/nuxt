 if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('custom-sw.js', {scope: '/'})
      .then(function (registration) {
        console.log('service worker registration succeeded')
      })
  } else {
    console.log('service workers are not supported.')
  }

