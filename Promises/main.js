import {myPromise} from '/core/app.js'

myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });