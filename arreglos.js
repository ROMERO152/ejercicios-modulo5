// const nombres = [];
// var nom1="luis";
// var nom2="oscar";
// var nom3="paco";
// var nom4="ana";
// var numero=23;
// var estatus=false;
// console.log(nom1);
// console.log(nom2);
// console.log(numero);
// console.log(estatus);

// const nombres2=['nancy','eliseo','oscar',34,true];
// console.log(nombres2);

// const nombres3 = new Array('nancy','eliseo','oscar',23,false);
// nombres3[0]='alejandra';
// console.log(nombres3[0]);

// //agregar y eliminar datos en un arreglo
// const nombres4 = new Array('nancy','eliseo','oscar',23,false);
// nombres4.push('mexico');
// nombres4.unshift('primer elemento');
// nombres4.pop();
// nombres4.shift();
// console.log(nombres4);

//metodos de arreglos
const nombres5 = new Array('nancy','eliseo','oscar',23,false);
// console.log(nombres5);

// for (let i = 0;i<nombres5.length;i++){
//     console.log(nombres5[i]);
// }
nombres5.forEach(function(elemento,indice){
    console.log(elemento,indice);
});

// //filter

// const valores1=[1,2,3,4,5,6,7,8,9,10];
// const resultado =valores1.filter((numero)=> numero<7);
// console.log(resultado);