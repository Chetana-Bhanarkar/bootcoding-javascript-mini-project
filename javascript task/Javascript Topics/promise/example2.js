// Promise Definition : 
// promise is perform a asynchronous operation with the two parameter the first one is resolve and the second one is reject .
// if the promise will resolve the callback function then will execute or the promise will reject the callback catch will execute.


const promise = (promise_resolve) => {
    return new Promise((resolve,reject)=>{
        console.log('fetching the data...');
        setTimeout(()=>{
            if(promise_resolve){
                resolve("promise is resolve");
            }
            else{
                reject("promise is rejected") ; 
            }
        } , 5000)
    })
}


let onFulfillment = (result) => {
    console.log(result);
}

let onRejection = (error) => {
    console.log(error);
}

promise(true).then(onFulfillment).catch(onRejection) ; 