let person = {
    name: "Goku",
    level: 8000,
    tipo: "Sayayin",
    enemys: ["Freezer", "Cell", "Majimbo"],
    rival: {
        name: "Vegeta",
        level: 12000,
        enemys: ["Freezer", "Cell", "Majimbo"],
        events: {
            name1: ()=>{
                console.log("Primera funcion 1");
            },
            name2: ()=>{
                console.log("Primera funcion 2");
            },
        },
    },
};

// const {tipo}= person;
// console.log(tipo);

// const {
// rival:{
//     enemys:[,enemy],
// }
// } = person;
// console.log(enemy);

const {
    rival:{
        events : {name1},
    },
}=person;
console.log(name1());
/***Para cadenas***/
// const mifuncion = (params)=>`Hoooola ${params}`;
// let result = mifuncion("Jaeger");
// console.log(result);
/***Para numeros***/
// const mifuncion2 = (params)=> 25+params;
// let result2 = mifuncion2(25);
// console.log(result2);
/***Para objetos***/
// const mifuncion3 = (params)=>({name:params});
// let result3 = mifuncion3("Primo");
// console.log(result3);
/***Desestructuracion***/
/*let person = {
    name :"Goku",
    level : 8000,
    tipo : "Sayayin",
    enemys :["Freezer", "Cell", "Majimbo"],
    rival:{
        name : "Vegeta",
        level : 12000,
        enemys :["Freezer", "Cell", "Majimbo"],
    }
};*/
let person = {
    name :"Goku",
    level : 8000,
    tipo : "Sayayin",
    enemys :["Freezer", "Cell", "Majimbo"],
    events:{
        name1 : () => {
            console.log("La primera funcion")
        },
        name2 : () => {
            console.log("Segunda funcion")
        }
    }
};

const {events:{name1,name2}
} = person;
console.log(name1, name2);

// const {name:newname,level, tipo}=person;
// console.log(newname,level,tipo);
/*const {
    name: newname,
    level:levelgoku,
    rival:{
        name,
        level,
        enemys:[,enemy2]
        }
}=person;
console.log(newname,levelgoku,level,name,enemy2);*/











/**********************Antes *****************/
// let mifuncion = (params) =>{
//     console.log(`Hola que tal ${params}`);
// };

// let result = mifuncion("Primo");
// console.log(result);

// const mifuncion1 = (a) => a + 6;
// let reult = mifuncion1(6);
//console.log(reult);

// const mifuncion2 = (name) => ({nombre: name});
//  let result = mifuncion2("Pepe");
//  console.log(result);
