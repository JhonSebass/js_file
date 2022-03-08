

let valores = [true,5,false,'hola','adios',2];

// 1- Determinar cual de los dos elementos de texto en el array es mayor (hola y adios)
function esCadena(valor,indice,array){
	return typeof valor === "string";
}

let textos = valores.filter(esCadena);
let totales = [];

for (let palabras of textos){
	totales.push(palabras.length);
}

let maximo = Math.max.apply(null, totales);

for(let elemento of textos){
	if(elemento.length === maximo){
		console.log(elemento);
	}
}

// 2- Utilizando exclusivamente los dos valores booleanos del array
//    determinar los operadores necesarios para obterner un resultado
//	  true y otro resultado false

function valores_booleanos(valor,indice,array){
	return typeof valor === "boolean";
}

let opciones_bool = valores.filter(valores_booleanos);

for(let valorActual of opciones_bool){
	if(valorActual === true){
		valorActual = !true
		console.log(valorActual);
	}

	if(valorActual === false){
		valorActual = !false
		console.log(valorActual.toString());
	}
}


// 3- Determinar el resultado de las cinco operaciones matemáticas 
//    realizadas con los dos elementos numéricos

function numeros(numero,indice,array){
	return typeof numero === "number";
}

let calculo = valores.filter(numeros);

for (let i=0;i< calculo.length;i++){
	for (var j=1; j>i && j<=calculo.length -1;j++){
		console.log(calculo[i]+calculo[j]);
		console.log(calculo[i]-calculo[j]);
		console.log(calculo[i]*calculo[j]);
		console.log(calculo[i]/calculo[j]);
		console.log(calculo[i]**calculo[j]);


	}
}