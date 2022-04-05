// const myPromise = new Promise((resolve, reject)=>{
//     const a = 5;
//     const b = 10;
//     //
//     if(a+b!==15)
//     {
//         resolve("correcto");
//     }
//     else{
//         reject("incorrecto");
//     }
// });
// myPromise.then((msn)=>console.log(msn)).catch((primo)=>console.log(primo));
const myPromise = () =>{
    return new Promise((resolve, reject)=>{
        const a=5;
        const b=10;
        if(a+b!==15){
            resolve("Correcto");
        }else{
            reject("Incorrecto");
        }
    })
};
console.log(myPromise().then((msn)=>console.log(msn)).catch((error)=>console.log(error)));