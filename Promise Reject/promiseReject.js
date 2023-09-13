let value=0;
const myPromise = new Promise((resolve, reject)=>{
    value = 1+1;
    if(value != undefined){
        resolve('Success');
    }
    else{
        reject('Failed');
    }
});

let result = myPromise.then((response)=>{
    if(response === 'Failed'){
        console.log('Request Failed!');
    }
    else{
        console.log(value);
    }
})



 