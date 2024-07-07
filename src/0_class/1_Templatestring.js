//El templestring es una implementacion muy poderosa de javascrip que nos permite concatenar variables funciones operaciones sin mayor dificultad

let name = 'Ironman'
let age = 23
function test() {
  return 'Soy una funcion'
}

const micadena = `Hola ${name} 
la edad de ${name} 
es de ${age} 
esto es una operacion ${3 + 5}
una funcion ${test()}`
console.log(micadena)
