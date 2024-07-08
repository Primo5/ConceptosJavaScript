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
// const myPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         const a=5;
//         const b=10;
//         if(a+b!==15){
//             resolve("Correcto");
//         }else{
//             reject("Incorrecto");
//         }
//     })
// };
// console.log(myPromise().then((msn)=>console.log(msn)).catch((error)=>console.log(error)));

//Lo ultimo
// const promesa = new Promise((resolve, reject) => {
//   if (2 < 3) {
//     resolve('mayor')
//   }
//   reject('menor')
// })
// promesa.then((msn) => console.log(msn)).catch((e) => console.log(e))
const myPromise = () => {
  return new Promise((resolve, reject) => {
    if (2 < 3) {
      resolve('menor')
    }
    reject('mayor')
  })
}

console.log(
  myPromise()
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err)),
)
