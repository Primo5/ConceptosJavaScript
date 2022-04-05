//que es scope
//El scope es el ambito de una variable o funcion puede existir
//Tambien conocido donde la variable o funcion se puede usar
//Bloque es una o mas sentencias que estan limitadas por {}
let foo = "Ironman";
if (true){
    let foo = "Spideman";
    console.log(foo);
}
console.log(foo);

const thisIsaFunction = function(){
console.log("Soy una funcion");
};

//thisisafuntion();
console.log(thisIsaFunction);