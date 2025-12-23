// Métodos y propiedades de Array

const frutas = ["manzana", "banana", "pera", "uva"];

// Algunos de los elementos tienen funciones pequeñas ya creadas y que son accesibles en todo momento, a estas funciones especiales propias de los elementos se les conoce como metodos, estas son accesibles mediante el uso de "." seguido del nombre del metodo "metodo" y seguidod e est un pas de "()"

// Aqui estoy agregando un elemento al array al final de este

frusas.push("Melon");

console.log(frutas);

// Aqui esto eliminando el ultimo elemento del array

frutas.pop();

console.log(frutas);

// Aqui estoy agregando un elemento al array pero desde el inicio

frutas.unshift("melon");

console.log(frutas);

// Aqui estoy eliminando el primer elemento del array

frutas.shift();

console.log(frutas);

// Concatenar arrays

// Para unir dos arrays podriamos hace uso de dos metodos ".concat()" y el SpreadOperator "[...tuArray, ...tuSegundoArray]"

const secondFrutas = ['papaya', 'naranja', 'fresa'] //creamos un segundo array par ala demostracion

const allArrays = frutas.concat(secondFrutas) // aqui hacemos uso de el metodo concat()

const allArraysSpred = [...frutas, ...secondFrutas] // aqui hacemos uso del metodo Spread

console.log(allArraysSpred)