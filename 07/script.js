// Utilizar una estructura for para calcular el factorial de un
// un número entero.

let num = prompt("Ingrese un número entero");
let factorial = num;

for(let i = 1; i <num; i++){  
  factorial = factorial * i;
}
  console.log(factorial);

