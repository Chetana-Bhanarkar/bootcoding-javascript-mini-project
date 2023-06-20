// Promise definition : 

// promise will perform the asynchronous operation with the two parameter the first one is resolve and the second one is reject,
// if the promise will resolve then the callback method then will execute either in case or reject the catch method will execute

const prom = (complete) => {
    return new Promise((resolve, reject) => {
        if(complete) {
            resolve('i am successfull');
        }else{
            reject("i am failure")
        }
    })
}

let onFulfillment = (result) => {
    console.log(result);
}

let onRejection = (error) => {
    console.log(error);
}


prom(true).then(onFulfillment).catch(onRejection);
console.log(prom);