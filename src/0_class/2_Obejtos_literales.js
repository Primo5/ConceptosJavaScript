/***************OBJETOS LITERALES************/
/********************function, spread********************/

let person = {
    name :"Goku",
    level : 8000,
    tipo : "Sayayin",
    enemys :["Freezer", "Cell", "Majimbo"],
    rival:{
        name : "Vegeta",
        level : 12000,
        enemys :["Freezer", "Cell", "Majimbo"],
    }
};
//tambien se puede mostrar el objeto como un arreglo
//console.log(person["name"]);
//La forma incorrecta de propagar
// console.log(person);
// const person2 = { ...person};
// person.name="Freezerd";
// console.log(person2);
//Propagar un arreglo
//let list = ["uno", "dos", "tres"];
//console.log({ ...list});
//Asi es como se propaga wey jajajaja
// person = {...person, sons:["Gojan"]}
// console.log(person)
/*Hasta este momento aprendi el operador $$$spread$$$ ... que propaga un objeto y hasta un arreglo, tambien a utilizar objetos literales*/
 /********************Hashmap--diccionario*********************/
 //Es como un diccionario con sus key_1 o llaves tambien se peude decir un conjunto
//Problema en contar todos los numeros repeditos de un arreglo
const number =[2,2,3,56,74,32,2,7,4,3,6,8,4,3,22,4,6,7,43,3,4,5,7,8,99,7,5,4,2,2,34,7,54,34,32,,245,5];
const numbers=[1,1,2,1,2,3,3,4,5,6,6,6,5,5];
//Con arreglos
let numbers=[1,1,2,1,2,3,3,4,5,6,6,6,5,5];
//resultado deseado 3,2,2,1,3,3
numbers.sort();
let count=1;
let result=[];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===numbers[i+1]){
        count ++;
    }
    else{
        result.push(count);
        count=1;
    }
}
console.log(result);



//con hasMap
let numbers=[1,1,2,1,2,3,3,4,5,6,6,6,5,5];
//resultado deseado 3,2,2,1,3,3
let hasMap = {};
for(let i=0;i<numbers.length; i++)
{
    if(hasMap[""+numbers[i]]==null){
        hasMap[""+numbers[i]]=1;
    }
    else{
        hasMap[""+numbers[i]]++;
    }
}
console.log(hasMap);
//otro
let hashMap ={};
for(let i=0;i<numbers.length;i++)
{
    if(hashMap[""+numbers[i]]==null){
        hashMap[""+numbers[i]]=0;
    }
    hashMap[""+numbers[i]]++;
}
console.log(Object.values(hashMap));





//ANtiguito
//Proad => Propagacion
const person = {
    name: "Goku",
    level: 8000,
    tipo: "Sayayin",
    enemys: ["Freezer", "Cell", "Majimbo"],
    rival: {
        name: "Vegeta",
        level: 12000,
        enemys: ["Freezer", "Cell", "Majimbo"],
    },
};
//console.log(person.name, person.level, person.tipo, person.rival);
console.log(person["name"]);
//const person2 = person;
//const person2 = { ...person, name:"Freezer"};
//person2.name="Frezzer";
//console.log(person2);
//console.log(person);
const number = [1, 1, 2, 2, 3, 3, 3, 3, 3, 4];
let hashMap = {};
for(let i=0 ; i<number.length ; i++){
    if(hashMap["" + number[i]] == null){
        hashMap["" + number[i]] = 0;
    }
    hashMap["" + number[i]]++;
}
console.log(Object.values(hashMap).sort());


