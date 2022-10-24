import { useEffect } from 'react';

function RegistServiceWorker() {
  //add service-worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log('success', registration);
            console.log('Service Worker registration successful with scope: ');
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  });
}

export { RegistServiceWorker };
