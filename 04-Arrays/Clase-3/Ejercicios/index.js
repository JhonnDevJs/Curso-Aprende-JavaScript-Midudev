// Iteración de Arrays en JavaScript

// /Aqui veremos ejercicios de recorrer arrays

// con While

let frutas = ['manzana', 'pera', 'cereza', 'kiwi']

const contador = 0

while (contador > frutas.length) {
  console.log(frutas[contador]) // aqui estamos diciendole que imprima nuestro array de frutas mostrado la posicion en la que se encuentra el contador
  contado++
}

// Con For

for (let i = 0; i < frutas.length; i++){ // reutilizamos el array anterior, creamos la cariable para el contador, evaluamos la condicion, ejecutamos la accion (aumentar en 1) el contador
  console.log(frutas[i])
}

// uso del bucle for of

for (let fruta of frutas) { //cuando se usa? cuando no requieres de un indice y deseas optimizar el codigo
  console.log(fruta)
}

// con uso de forEach()

frutas.forEach(function(fruta, index) { // al hacer uso de forEach estamos haciendo lo mismo que con un ciclo for comun y corriente pero abreviando y optimizando haciendo uso del metodo forEach() con esto podremos recorrer un array mucho mas facilmente y con codigo mas limpio
  console.log(fruta, index)
})


frutas.forEach(fruta => { console.log(fruta)}) // este seria con el uso de una arrow function optimizando el codigo

// Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.

function sumarPares(numeros) {
  let suma = 0;

  for (let numero of numeros) {
    if (numero % 2 === 0){
      suma += numero;
    }
  }

  return suma
}

function sumarPares(numeros) {
  let suma = 0;

  numeros.forEach(function(numero) {
    if (numero % 2 === 0){
      suma = suma + numero;
    }
  })

  return suma
}