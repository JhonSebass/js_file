

// 

let minimo = 0;
let maximo = 6;

    function tiroDatos(minimo,maximo){
        let primerDado;
        let segundoDado;
        let sumaDeDados;
        let contador1;
        let contador2;
        let contador3;
        let sumador = 0;

        primerDado = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
        segundoDado = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
        sumaDeDados = primerDado + segundoDado;


      for(let i = 0; i < 36000;i++){
           contador1 = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
           contador2 = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
           contador3 = contador1 + contador2;
        if(sumaDeDados == contador3){
          sumador = sumador + 1;
        }
      } 
      return sumador;

    }

console.log('Resultado de primera funcion :' + tiroDatos(minimo,maximo));


// 

let dados = [0,6];
let suma = [];
let cantidad = 0;
let primerLanzamiento = tirarDados(dados,suma);

function tirarDados(dados,suma){
   for( let i = 0 ; i<=1 ; i++){
    suma[i] = Math.floor((Math.random() * (dados[1] - dados[0] + 1)) + dados[0]);
   }
   let resultado = (acumulador,contador) => acumulador + contador;
   return suma.reduce(resultado);
}


for( let i = 0; i<36000 ; i++){
  for( let i = 0 ; i<=1 ; i++){
    suma[i] = Math.floor((Math.random() * (dados[1] - dados[0] + 1)) + dados[0]);
   }
   let resultado = (acumulador,contador) => acumulador + contador;
   let demasDados = suma.reduce(resultado);
   if( demasDados == primerLanzamiento){
   cantidad = cantidad + 1;
   }
}

console.log('Resultado de segunda funcion :' + cantidad);