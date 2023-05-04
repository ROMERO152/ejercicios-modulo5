//ejercicio 1: pedir edad y si es mayor de 18 indicar que ya puede conducir.
/*var edad = prompt("introduce tu edad");
if(Number(edad)==edad){ //comprueva que lo introducido es un numero.
    if(edad>=18){
        alert('ya puedes conducir un auto');
    }else if(edad<18){
        alert('Ahun eres menor de edad')
    }
}//en caso de que no cumpla con lo anterior imprime error.
else{
    alert('!ERROR¡ introduce un numero valido');
};*/

//ejercicio 2: pedir un numero. mostrar calificacion segun la nota uso de Do-while.

// do { 
// //pide una nota desde teclado y lo guarda en la variable nota.
//     var nota = prompt('ingresa tu nota');

//     if(Number (nota) == nota){ //verifica que se haya introducido un numero
//     if(nota > 0 && nota <=10){//si la nota esta entre 0 y 10 comprueva el rango y da un mensaje
//         if(nota<3){
//             alert('muy deficiente');
//         }
//         else if(nota<5){
//             alert('insuficiente');
//         }
//         else if(nota<6){
//             alert('suficiente');
//         }
//         else if(nota<7){
//             alert('bien');
//         }
//         else  if(nota<9){
//             alert('notable')
//         }
//         else if(nota>=9){
//             alert('sobresaliente');
//         }
//         //si la nota no esta entre 0 y 10.
//     }else{
//         alert('nota erronea');
//     }
// }//si la nota introducida no es un numero
// else{//si se ha pulsado aceptar sin definir nada
//     if(nota != undefined){//no es undefined cuando se pusa aceptar
//         alert('introduce un numero valido');
//     }
// }//el bucle vuelve arriba mientras no se haya pulsado cancelar
    
// } while (nota != undefined);

// //Ejercicio 3: Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// var resultado ="";//aqui se guardan las cadenas
// do {
//     //aqui se introducen las cadenas
//     var cadena = prompt("ingresa un cadena de texto");
//     //si la variable resultado esta vacio
//     if (resultado == "") {
//         resultado = resultado + cadena;
//     }
//     else{
//         resultado = resultado + "-" + cadena;
//     }
//     //mientras se pulse aceptar en la ventana de confirm
    
// } while (confirm("¿deseas continuar?"));
// //si se pulsa cancelar imprimimos el resultado
// document.write(resultado);


//Ejercicio 4:
//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// var suma = 0;
// do {
//     var numero = prompt("ingresa un numero");
//     //comprovamos que lo introducido es un numero
//     if (Number(numero)==numero) {
//         //convertimos el numero en integer(por si acaso)
//         numero = Number(numero);
//         //sumamos lo que hay en la variable suma con ese numero
//         suma = suma + numero;
//     }
//     //si lo que introducimos no es un numero
//     else{
//         //si se pulsa aceptar sin poner un numero
//         if(numero != undefined){
//             alert("ingresa un numero valido");
//         }
//     }
//     //volvemos al inicio mientras no se pulse cancelar
// } while (numero !=undefined){
//     //si se pulso cancelar sale del bucle e imprime la suma
//     document.write("la suma es: " +suma);
// }


//Ejercicio 5:
/*Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/


var letra = "";
var resto = 0;
do {var numero = prompt("ingresa tu DNI");
if(Number(numero)==numero){
    numero = Number(numero);
    if(numero >=0 && numero<=99999999){
        resto = numero%23;
        switch (resto) {
            case 0:
                letra="T";
                break;
            case 1:
                letra ="R";
                break;
            case 2:
                letra="W";
                break;
            case 3:
                letra="A";
                break;
            case 4:
                letra="G";
                break;
            case 5:
                letra="M";
                break;
            case 6:
                letra ="Y";
                break;
            case 7:
                letra="F";
                break;
            case 8:
                letra="P";
                break;
            case 9:
                letra="D";
                break;
            case 10:
                letra="X";
                break;
            case 11:
                letra ="B";
                break;
            case 12:
                letra="N";
                break;
            case 13:
                letra="J";
                break;
            case 14:
                letra="Z";
                break;
            case 15:
                letra="S";
                break;
            case 16:
                letra ="Q";
                break;
            case 17:
                letra="V";
                break;
            case 18:
                letra="H";
                break;
            case 19:
                letra="L";
                break;
            case 20:
                letra="C";
                break;
            case 21:
                letra="K";
                break;
            case 22:
                letra="E";
                break;
        
            default:
                alert("numero erroneo")
        }
    }
    alert("Numero: " + numero+ " Letra: " +letra);
}
else{
    if(numero != undefined){
        alert(numero + " es incorrecto");
    }
}
    
} while (numero != undefined);