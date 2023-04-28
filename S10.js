//Ejercicio1

//Usando el operador for realiza la tabla de multiplicar del 2.
var tabla2=2;
for(i=1;i<=10;i++){
    console.log(tabla2+"x"+i+"="+(tabla2*i));

}

//Ejercicio2

//Crear 2 arreglos como los siguientes const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];

const nombres = ['alberto','paty','jose','daniel','luis','antonio','Luis','paty','luis'];
const nombreMayus=[];
nombres.forEach(function(mayus){
    return nombreMayus.push(mayus.toUpperCase());
});
console.log(nombreMayus);

//Ejercicio 3

//Crea una nueva variable con el nombre nombreMinusculas. Para esta parte vas a utilizar la 
//función map. El objetivo es poder crear un nuevo arreglo a partir del arreglo nombreMayusculas. 
//Este nuevo arreglo debe contener ahora los nombre en minusculas.

// const nombreMinusculas=[];

const minuscula = nombreMayus.map(function(minusculas){
    return minusculas.toLowerCase();
});
console.log(minuscula);

//Ejercicio 4 

//Crea una variable con el nombre filtroNombres. Vas a utilizar el arreglo nombres para esta tarea. 
//Debes utilizar la función filter para que solo obtengas los nombres que sean luis.

// const filtroNombres = nombres.filter((elemento)=>{
    // if(elemento ==='luis' || elemento==='Luis'){
//     return true;
// }
// return false;
// });

const filtroNombres = nombres.filter(elemento => elemento.toLowerCase()==="luis" );
console.log(filtroNombres);

//ejercicio 5

//Crea un nuevo arreglo con el nombre números 
//y agrega los siguientes valores: const numeros = [2,4,6,8,10]

const numeros = [2,4,6,8,10];

//Ejercicio 6

//Crea una nueva variable con el nombre total. El objetivo es que uses la función reduce la cual 
//debe sumar todos los valores del arreglo números. Imprime el resultado de la variable total. 
//El resultado debe ser 30.

const total= numeros.reduce((acumulador, elemento)=>{
    return acumulador = acumulador + elemento;
})
console.log(total);