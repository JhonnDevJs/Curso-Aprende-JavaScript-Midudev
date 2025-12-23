Métodos y propiedades de Array
Restart
Play


00:17
00:00
03:41

Configuración
PIP
Descargar vídeo
Entrar a pantalla completa
Play
Los arrays de JavaScript tienen una serie de métodos y propiedades que nos permiten trabajar con ellos de forma sencilla.

Un método es una función que se ejecuta sobre un objeto. Una propiedad es una variable que pertenece a un objeto. En este caso, el objeto es un array.

La longitud de un array
Puedes conocer la longitud de una colección de elementos usando la propiedad .length:

const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length) // 4
También puedes cortar su longitud asignando un nuevo valor a la propiedad .length:

const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.length = 2

console.log(frutas) // ["manzana", "pera"]
console.log(frutas.length) // 2
Métodos de arrays
Cuando trabajamos con colecciones de elementos, vamos a querer hacer cosas con ellos. Por ejemplo: añadir un elemento, eliminarlo, buscarlo, etc. Para ello, los arrays tienen una serie de métodos que nos permiten hacer estas operaciones:

.push()
El método .push() nos permite añadir un elemento al final de un array:

const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas) // ["plátano", "fresa", "naranja"]
Además, el método .push() devuelve la nueva longitud del array:

const frutas = ["plátano", "fresa"]
console.log(frutas.length) // 2

const newLength = frutas.push("naranja")
console.log(newLength) // 3
console.log(frutas) // ["plátano", "fresa", "naranja"]
.pop()
El método .pop() elimina y devuelve el último elemento de un array:

const frutas = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

console.log(frutas) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"
.shift()
El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último:

const frutas = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift()

console.log(frutas) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"
.unshift()
El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:

const frutas = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

console.log(frutas) // ["manzana", "plátano", "fresa", "naranja"]
Concatenar arrays
Restart
Play


00:00
00:00
01:30

Configuración
PIP
Descargar vídeo
Entrar a pantalla completa
Play
Podemos concatenar dos arrays usando el método concat().

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers) // [1, 2, 3, 4, 5]
Otra forma de concatenar arrays es usando el operador ... (spread operator). Este operador propaga los elementos de un array. Así que podríamos hacer lo siguiente:

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers = [...numbers, ...numbers2]

console.log(allNumbers) // [1, 2, 3, 4, 5]
Más adelante hablaremos más de este operador y sus diferentes utilidades.