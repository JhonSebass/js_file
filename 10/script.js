

// Crear una función que determine si una palabra es palíndromo o no 

let palabra = prompt('Ingrese un texto ');

function Palindromo(palabra){
  palabra = palabra.split(' ').join('');
  return palabra.split('').reverse().join('') == palabra;

}

if(Palindromo(palabra) == true){
  console.log('El texto ingresado es palíndromo');
} else {
  console.log('El texto ingresado no es palíndromo');
}



