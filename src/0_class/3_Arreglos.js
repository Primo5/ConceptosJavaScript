const list = [];
const list2 = [1,2,3,4,5];
const list3 = ["Toyota", "Nissan","Zusuki"];
const list4 = [1, "Cadena", {name:"Primo Cincko"}];
// console.log(list);
// console.log(list2);
// console.log(list3);
// console.log(list4);
// let [,item2]=list3;
// console.log(item2);
//La forma mutable que en react no debemos hacer
//list3.push("Asi no");
//La forma inmutable de añadir un valor
//let anotherlist= [...list3, "Chebrolet"];
//console.log(anotherlist);
// let newlist = list2.map((item) => {
//     return item*item;
// });
//console.log(newlist);
//FIlter para filtrar
const newfilter = list2.filter((item)=>{
    if(item % 2 == 0){
        return true;
    }
    return false;
});
//console.log(newfilter);
//short de ordenamiento
const newOrderlist = list2.sort((a,b)=>{
    return b-a;
});
//console.log(newOrderlist);
//comparacion de cadenas
const OrderList = list3.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    return -1;
});
console.log(OrderList);
//Arreglos antigüito
//Funciones especiales map,filter, find, join
const list = [];
const list2 = [1, 23, 4, 3, 3, 2, 3];
const list3= ["Toyota", "Nissan","foo"];
const list4= [1, "cadenas",{name:"soy un obj"}]
//console.log(list);
//console.log(list2);
//console.log(list3);
//console.log(list4);
//Push Para agragar un valor a la pila y pop para eliminar o sacar
// list.push("otro valor");
// list.push("otro valor 1");
// list.push("otro valor 2");
// list.push("otro valor 3");
// list.pop();
// list.pop();
// console.log(list);
//Desestructuracion de los arreglos
//Es una sintaxis de javascrip que permite desempaquetar propiedades de objetos de arreglos
// let [,item2]=list3;
// console.log(item2);
//Podriamos hacer tranquilament push pero al hacer eso estamos mutando la variable
//Esta seria la forma inmutable de añadir un valor
// let anotherlist= [...list3, "Suzuki"];
// console.log(anotherlist);
//map lambda =>
// const unafuncion = () => {};
// const newlist = list2.map((item)=>{
//     return item*item;
// });
// console.log(newlist);

// const newfilter = list2.filter((item) =>{
//     if(item % 2 == 0){
//         return true;
//     }
//     return false;
// });
// console.log(newfilter);

// const orderlist = list2.sort((a, b) => {
//     return b - a;
// });
// console.log(orderlist);

const orderlistcad = list3.sort((a,b) =>{
if(a<b){
    return 1;
}
return -1;
});
console.log(orderlistcad);