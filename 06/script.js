 /*El cálculo de la letra del Documento Nacional de Identidad (DNI) es un
proceso matemático sencillo que se basa en obtener el resto de la división
entera del número de DNI y el número 23. A partir del resto de la división,
se obtiene la letra seleccionándola dentro de un array de letras.
*/

//1.- Solicitar el número de cedula y mostrar la letra cosrespondiente a 
//    partir del resto.

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Ingrese su número de cédula");
let letr = prompt("Ingrese la letra de su DNI")

/*
 let resto = dni%23;
console.log(resto);

let letraCedula = letras[resto - 1];
console.log(letraCedula);
*/

//2.- Si el número ingresado en < 0 o > 99999999 mostrar un mensaje de 
//    DNI no valido

if(dni < 0 || dni > 9999999999){
  console.log("El número de DNI ingresado no es valido");
}

//3.- Si el número es valo se realiza el cálculo correspondiente
//4.- Solicitar la letra al usuario y si conciencide con la letra
//    calculada, mostrar un mensaje de que son correstos, caso contrario
//    un mensaje de que la letra ingresada es incorrecta.
 else{
  let resto = dni%23;
console.log("El resto es: ",resto);

  let letraCedula = letras[resto - 1];
console.log("La letra correspondiente es: ",letraCedula);

  if(letr === letraCedula){
    console.log("El DNI y la letra son correstas")
  } else{
    console.log("La letra ingresada no es correcta")
  }

}


