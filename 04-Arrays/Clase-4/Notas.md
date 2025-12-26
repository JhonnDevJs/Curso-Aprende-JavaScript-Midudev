Búsqueda en Arrays con sus métodos
Existen varios métodos en JavaScript que te permiten, específicamente, buscar dentro de un Array. Estos métodos incluyen indexOf, some, every, find, findIndex e includes.

Cada uno de estos métodos tiene un propósito específico y una funcionalidad única. Vamos a explorar cada uno de ellos utilizando un Array de emojis como ejemplo.

const emojis = ['✨', '🥑', '😍']
indexOf: ¿En qué posición está el elemento?
El método indexOf te permite encontrar la posición de un elemento dentro de un Array. Si el elemento no existe, entonces retorna -1.

const emojis = ['✨', '🥑', '😍']

const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2
includes: ¿El elemento existe en el Array?
El método includes determina si un Array incluye un determinado elemento, devolviendo true o false según corresponda.

const emojis = ['✨', '🥑', '😍']

const tieneCorazon = emojis.includes('😍')

console.log(tieneCorazon) // -> true
Es la forma más sencilla y corta de buscar un elemento específico dentro de un Array. Sin embargo, si queremos revisar si un Array contiene un elemento que cumpla con una condición, entonces tenemos que utilizar otros métodos...

El método .includes() también funciona con las cadenas de texto. Puedes utilizarlo para buscar una subcadena dentro de una cadena de texto: 'Hola mundo'.includes('Hola') // -> true

some: ¿Alguno de los elementos cumple con la condición?
El método some te permite verificar si al menos uno de los elementos de un Array cumple con una condición.

Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento cada uno de los elementos del Array y debe retornar un valor booleano.

Si al menos uno de los elementos retorna true, entonces el método some retorna true. Si ninguno de los elementos retorna true, entonces el método some retorna false.

const emojis = ['✨', '🥑', '😍']

const tieneCorazon = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true
¡Pero si esto ya lo podíamos hacer con includes! Sí, pero some es mucho más potente...

Podemos crear funciones más complejas para pasarle al método some. Por ejemplo, podemos crear una función que verifique si un Array contiene un elemento que sea un string de más de 3 caracteres.

const names = ['Leo', 'Isa', 'Ían', 'Lea']

const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false
Algo importante a tener en cuenta es que el método some deja de iterar sobre el Array en cuanto encuentra un elemento que cumple con la condición. Por ejemplo, si tenemos un Array de 10 elementos y el elemento número 3 cumple con la condición, el método some no va a iterar sobre los 7 elementos restantes:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
  return number > 5
})

console.log(tieneNumeroMayorA5) // -> true
every: ¿Todos los elementos cumplen con la condición?
El método every te permite verificar si todos los elementos de un Array cumplen con una condición. Es similar a some, pero en lugar de verificar si al menos uno de los elementos cumple con la condición, los verifica todos.

Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento el elemento del array que está iterando en ese momento y debe retornar un valor booleano para saber si el elemento cumple con la condición.

Si todos los elementos retornan true, entonces el método every retorna true. Si al menos uno de los elementos retorna false, entonces el método every retorna false.

// ¿Todos los emojis son felices?
const emojis = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true
Al igual que some, el método every deja de iterar sobre el Array en cuanto encuentra un elemento que no cumple con la condición.

find: Devuelve el primer elemento que cumple con la condición
El método find te permite encontrar el primer elemento que cumple con una condición. Lo interesante es que este método te devuelve el elemento en sí, no un valor booleano como some y every. Aunque el funcionamiento es igual: hay que pasarle una función como argumento que retorne un valor booleano.

const numbers = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> -10
Si no encuentra ningún elemento que cumpla con la condición, el método find retorna undefined.

const numbers = [13, 27, 44, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> undefined
De nuevo, igual que some y every, el método find deja de iterar sobre el Array en cuanto encuentra un elemento que cumple con la condición.

findIndex: Devuelve el índice del primer elemento que cumple con la condición
El método findIndex es similar a find, pero en lugar de devolver el elemento que cumple con la condición, devuelve el índice de ese elemento.

const numbers = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10
Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.

const numbers = [13, 27, 44, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> -1