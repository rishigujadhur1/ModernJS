export let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Hello World!"); }, 5000);
  });
  