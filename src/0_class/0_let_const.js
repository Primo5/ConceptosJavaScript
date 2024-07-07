/*
que es babel
babel agarra el javascript moderno y lo transforma a js antiguo ECMA script 4 o 5
cuando instalamos react babel ya viene instalado

Para crear un proyecto en react 
npx create-react-app nombre_proyecto
 */

/*que es scope
El scope es el ambito de una variable o funcion que puede existir
Tambien conocido donde la variable o funcion se puede usar
Es definir donde una variable vive y hasta donde existe
Bloque es una o mas sentencias que estan limitadas por {}*/
/*let foo = 'Ironman'
if (true) {
  let foo = 'Spideman'
  console.log(foo)
}
console.log(foo)
*/
/*
//esta forma de declarar una funcion no es tan optima a la hora de crear sistemas grandes por la razon de que permite sobrescribir
function afunction() {
  console.log('soy una funcion antiguita')
}
//afunction()
afunction = 'ahora ya no soy una funcion'
console.log(afunction);*/
//Una buena practica seria de la siguiente forma
/*const afunction = function () {
  console.log('soy una funcion un tanto moderna')
}
//afunction = 'intentando cambiar el valor otra vez'
console.log(afunction)*/
//el problema del Var es que interactuo con una variable que no existe
//en javascript es como si al crear una funcion o una variable var lo sube al inicio es por eso que nos muestra undefine eso es el hoisting que hace javaScript
//callstack es el orden de ejecucion
//const y let igual subren de hoisting, se elevan pero tienen una muerte temporal
//pero entra al temporaldetruen osea no se puede utilizar porque no entra en momoria eso seria el hoisting
