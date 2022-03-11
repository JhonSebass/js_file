// Realizar una función en la que se pase como parametro un número entero
// y diga si es par o impar a traves de consola.

let numero = prompt("Ingrese un número entero positivo");

function parImpar(dato){
  if((numero%2) ==0){
    return dato = "El número ingresado es Par ";
  } else {
    return dato = "El número ingresado es Impar";
  }
}

console.log(parImpar(numero));