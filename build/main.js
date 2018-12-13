// const prod = process.env.NODE_ENV === 'production';
const prod = true;
const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  navigator.serviceWorker.register('./service-worker.js').then(() => {
    console.log("Service Worker Registered!")
  })
};
