/***************OBJETOS LITERALES************/
/********************function, spread********************/

/*let person = {
  name: 'Goku',
  level: 8000,
  tipo: 'Sayayin',
  enemys: ['Freezer', 'Cell', 'Majimbo'],
  rival: {
    name: 'Vegeta',
    level: 12000,
    enemys: ['Freezer', 'Cell', 'Majimbo'],
  }, 
}*/
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
//Con arreglos
let num = [1, 1, 2, 1, 2, 3, 3, 4, 5, 6, 6, 6, 5, 5]
//resultado deseado 3,2,2,1,3,3
num.sort()
let count = 1
let result = []
for (let i = 0; i < num.length; i++) {
  if (num[i] === num[i + 1]) {
    count++
  } else {
    result.push(count)
    count = 1
  }
}
console.log(result)
//con hasMap
//otro
//ANtiguito
//Proad => Propagacion
//Ultimo
/*Mutacion
Es el cambio de estado de un objeto
Inmutabilildad
El objeto no debe cambiar, es evitar que un objeto cambie y para evitar que un objeto cambie
tenemos que contruir una copia del objeto
para lograrlo necesitamos propagar sus funciones y atributos
propagar =spread
operador spread
Redux tiene que cumplir la inmutabilidad

//console.log(person.enemys[0])
//console.log(person.rival.name, person.rival.level, person.rival.enemys[2])
/*console.log(
    `Personaje ${person.rival.name} nivel de poder ${person.rival.level} y tecer enimgo ${person.rival.enemys[2]}`,
  )*/
/* A esto se le conoce como mutacion
  const person2 = person
  console.log(person)
  person2.name = 'Freezer'
  console.log(person2)
  console.log(person)*/
/*const person2 = { ...person }
  person2.name = 'Frezzer'
  console.log(person2)
  console.log(person)*/
const number = [1, 1, 2, 2, 3, 3, 3, 3, 3, 4]
//hastMap es un diccionario de datos se maneja com un objeto en js
let hastMap = {}
for (let i = 0; i < number.length; i++) {
  if (hastMap[('', number[i])] == null) {
    hastMap[('', number[i])] = 1
  } else hastMap[('', number[i])]++
}
console.log(hastMap)
console.log(Object.values(hastMap).sort())

///Hay unmillon de formas de hacer este ejecicio
const person = {
  name: 'Goku',
  level: 4000,
  enemys: ['Cell', 'Freezer', 'Majimbu'],
  rival: {
    name: 'Vegeta',
    level: 3344,
    enemys: ['Cell', 'Freezer', 'Majimbu'],
  },
}
//console.log(person.enemys[1])
//console.log(person.rival.enemys[2], person.rival.name)
//console.log(person['enemys'][1])
//console.log(person['level'])

let person2 = { ...person, level: 3000 }
person2.name = 'Freezer'

person2 = { ...person2, sons: ['nose'] }
//console.log(person2)
//console.log(person)

//Problema en contar todos los numeros repeditos de un arreglo
//Con arreglos
let numbers = [1, 1, 2, 1, 2, 3, 3, 4, 5, 6, 6, 6, 5, 5]
//resultado deseado 3,2,2,1,3,3
let hashMap = {}
//hashMap['', 2] = 0
/*console.log(hashMap)
for (let i = 0; i < numbers.length; i++) {
  if (hashMap['' + numbers[i]] == null) {
    hashMap['' + numbers[i]] = 0
  }
  hashMap['' + numbers[i]]++
}
console.log(Object.values(hashMap).sort())
*/
const newlist=numbers.map(num=>{
  if(hashMap[''+num]==null){
    hashMap[''+num]=0
  }hashMap[''+num]++
})

