if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw-main.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        // Registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}
