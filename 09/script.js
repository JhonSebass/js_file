//Definir una función que reciba un argumento de texto y 
//verifique si el texto con tiene solo Mayusculas, solo minusculas o ambas.

let mensaje = prompt("Ingrese un mensaje, puede usar solo mayusculas, solo minusculas o ambas.");

function verificacion(resultado){
  if(mensaje == mensaje.toUpperCase()){
    return resultado = "El texto está en mayusculas.";
  }
  if(mensaje == mensaje.toLowerCase()){
    return resultado = "El texto está en minusculas.";
  }
  else{
    return resultado = "El texto está en mayusculas y minusculas."
  }
}

console.log(mensaje);
console.log(verificacion(mensaje));

