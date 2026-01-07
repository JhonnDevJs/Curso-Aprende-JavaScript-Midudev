String
El tipo string es uno de los tipos primitivos más utilizados en JavaScript. Representa una secuencia de caracteres y es fundamental para trabajar con texto en nuestras aplicaciones.

Creación de strings
Hay varias formas de crear strings en JavaScript:

1. String literals (la forma más común)
// Comillas simples
let nombre = 'Miguel'

// Comillas dobles
let apellido = "Ángel"
¿Cuándo usar comillas simples y dobles? No hay una respuesta correcta. La elección depende más de estilo, consistencia y contexto. Eso sí, si vas a usar comillas simples dentro de la cadena, deberías usar comillas dobles para el string y viceversa; así evitarás conflictos.

2. Template literals - La forma moderna
Hay otra forma moderna de crear cadenas de texto: los template literals. Son especialmente útiles para interpolar variables y strings multilínea.

let nombre = 'Ana'
let edad = 25

// Interpolación de variables
let presentacion = `Me llamo ${nombre} y tengo ${edad} años`

// Strings multilínea
let poema = `
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
`

// Expresiones dentro de template literals
let calculo = `El resultado de 5 + 3 es: ${5 + 3}`
No uses new String() para crear cadenas de texto. En realidad lo que estás haciendo de esta forma es crear una instancia de un objeto String y no un string primitivo, que es lo que nos interesa realmente.

Las propiedades y métodos de los strings
Como todos los tipos primitivos, los strings también tienen propiedades y métodos.

La propiedad length
Nos devuelve la longitud de la cadena de texto.

let texto = 'JavaScript'
console.log(texto.length) // 10

let vacio = ''
console.log(vacio.length) // 0

let espacios = '   '
console.log(espacios.length) // 3
Métodos de búsqueda
Una de las cosas más importantes que haremos con nuestras cadenas de texto es buscar dentro de ellas. Para ello, tenemos varios métodos que nos permiten hacerlo.

const frase = 'JavaScript es genial y JavaScript es potente'

// indexOf - encuentra la primera ocurrencia
console.log(frase.indexOf('JavaScript')) // 0
// -> significa que encontró la primera ocurrencia de 'JavaScript'
//    en la posición 0

console.log(frase.indexOf('a')) // 1
// -> significa que encontró la primera ocurrencia de 'a'
//    en la posición 1

console.log(frase.indexOf('Python')) // -1 (no encontrado)
// -> cuando no encuentra la cadena de texto, devuelve -1

// lastIndexOf - encuentra la última ocurrencia
console.log(frase.lastIndexOf('JavaScript')) // 23
// -> significa que encontró la última ocurrencia de 'JavaScript'
//    en la posición 23 de la cadena

// includes - verifica si contiene un substring
console.log(frase.includes('genial')) // true
console.log(frase.includes('Python')) // false

// startsWith y endsWith
console.log(frase.startsWith('JavaScript')) // true
console.log(frase.endsWith('potente')) // true

console.log(frase.startsWith('Python')) // false
// -> significa que la cadena de texto NO comienza con 'Python'
Métodos de extracción
Otra operación muy común es extraer una parte de la cadena de texto. Para ello, tenemos varios métodos que nos permiten hacerlo. Ten en cuenta que estos métodos no modifican el string original, sino que devuelven siempre un nuevo string.

const texto = 'Aprende JavaScript'

// slice - extrae una porción
console.log(texto.slice(0, 10)) // "JavaScript"
console.log(texto.slice(11)) // "Programming"
console.log(texto.slice(-11)) // "Programming" (desde el final)

// substring - similar a slice pero no acepta índices negativos
console.log(texto.substring(0, 10)) // "JavaScript"

// substr - extrae desde un índice con una longitud específica
console.log(texto.substr(11, 7)) // "Program"
Métodos de transformación
let texto = '  JavaScript Programming  '

// Cambio de caso
console.log(texto.toLowerCase()) // "  javascript programming  "
console.log(texto.toUpperCase()) // "  JAVASCRIPT PROGRAMMING  "

// Eliminación de espacios
console.log(texto.trim()) // "JavaScript Programming"
console.log(texto.trimStart()) // "JavaScript Programming  "
console.log(texto.trimEnd()) // "  JavaScript Programming"

// Reemplazo
let frase = 'Me gusta Python y Python es genial'
console.log(frase.replace('Python', 'JavaScript'))
// "Me gusta JavaScript y Python es genial"

// replaceAll - reemplaza todas las ocurrencias
console.log(frase.replaceAll('Python', 'JavaScript'))
// "Me gusta JavaScript y JavaScript es genial"
Siempre que transformes una cadena de texto, siempre vas a crear un nuevo string que deberemos asignar a una variable nueva si queremos conservar el resultado de la transformación.

Métodos de división y unión
// split - convierte string en array
let lenguajes = 'JavaScript,Python,Java,C++'
let arrayLenguajes = lenguajes.split(',')
console.log(arrayLenguajes) // ["JavaScript", "Python", "Java", "C++"]

let frase = 'Hola mundo JavaScript'
let palabras = frase.split(' ')
console.log(palabras) // ["Hola", "mundo", "JavaScript"]

// repeat - repite el string
let risa = 'ja'
console.log(risa.repeat(3)) // "jajaja"

// padStart y padEnd - rellena el string
let numero = '5'
console.log(numero.padStart(3, '0')) // "005"
console.log(numero.padEnd(3, '0')) // "500"
Métodos de verificación
let codigo = 'ABC123'

// charAt - obtiene el carácter en una posición
console.log(codigo.charAt(0)) // "A"
console.log(codigo.charAt(3)) // "1"

// charCodeAt - obtiene el código Unicode
console.log(codigo.charCodeAt(0)) // 65 (código de 'A')

// match - busca coincidencias con expresiones regulares
let email = 'usuario@example.com'
let resultado = email.match(/@(.+)\./)
console.log(resultado[1]) // "example"
Los strings son inmutables
Es importante recordar que los strings en JavaScript son inmutables. Esto significa que no puedes cambiar un string existente, siempre crearás uno nuevo. Así que tendrás siempre que asignar el resultado de la operación a una variable nueva.

let texto = 'Hola'
let nuevoTexto = texto.toUpperCase()

console.log(texto) // "Hola" (sin cambios)
console.log(nuevoTexto) // "HOLA" (nuevo string)

// Esto no funciona como esperarías
texto[0] = 'h'
console.log(texto) // "Hola" (sin cambios)
¿Qué significa "inmutable"? En programación, significa que no una vez creado un valor este no puede ser modificado. De esta forma siempre tendrás que generar un nuevo valor con los cambios que necesites, pero el valor original seguirá siendo el mismo.

Comparación de strings
Como todos los tipos primitivos, los strings se pueden comparar usando los operadores de comparación.

// Comparación exacta
console.log('JavaScript' === 'JavaScript') // true (iguales)
console.log('JavaScript' === 'javascript') // false (diferencias entre mayúsculas y minúsculas)

// Comparación sin distinguir mayúsculas/minúsculas
let a = 'JavaScript'
let b = 'javascript'
console.log(a.toLowerCase() === b.toLowerCase()) // true

// Mirar si dos cadenas de texto son diferentes
console.log('JavaScript' !== 'Python') // true
console.log('JavaScript' !== 'javascript') // true (diferencias entre mayúsculas y minúsculas)
console.log('JavaScript' !== 'JavaScript') // false (iguales)

// Orden lexicográfico
console.log('apple' < 'banana') // true
console.log('Apple' < 'apple') // true (mayúsculas van antes)
También existe la comparación con el operador == pero, como hemos visto en la clase de operadores de comparación, no es recomendable usarlo ya que no hace una comparación estricta y usará un algoritmo de conversión automática de tipos que puede llevarte a sorpresas inesperadas.

Caracteres especiales en cadenas de texto
Dentro de las cadenas de texto hay algunos caracteres especiales que pueden cambiar el comportamiento de la cadena de texto y algunos no son visibles en el resultado final pero son igual de importantes. Además, hay otros, que por su naturaleza pueden causar errores de sintaxis si no se usan correctamente.

Cómo usar comillas dentro de cadenas de texto
Como hemos explicado antes, al crear una cadena de texto, podemos usar comillas simples o dobles. Pero, ¿qué pasa si queremos usar comillas dentro de la cadena de texto? Una cosa que podemos hacer es usar comillas simples dentro de una cadena de texto que use comillas dobles y viceversa.

// Comillas dentro de strings
let comillas = 'Él dijo: "Hola mundo"'
let comillasSimplesEnDobles = "It's a beautiful day"
let comillasDobles = 'Él dijo: "Hola mundo"'
Además, si usamos template literals, podemos usar comillas simples o dobles dentro de la cadena de texto sin ningún problema.

// Template literals
let comillas = `Él dijo: "Hola mundo"`
let comillasSimplesEnDobles = `It's a beautiful day`
let comillasDobles = `Él dijo: "Hola mundo"`
Caracteres de escape
Pero qué pasa si no queremos usar template literals y tenemos tanto comillas simples como dobles en una misma cadena de texto. Pero existe otra forma de usar comillas dentro de cadenas de texto y es usando el carácter de escape \:

// Caracteres de escape
let comillas = "Él dijo: \"Hola mundo\""
let comillasSimples = 'It\'s a beautiful day'

console.log(comillas) // "Él dijo: "Hola mundo""
console.log(comillasSimples) // "It's a beautiful day"
Lo que hace el carácter de escape es que el carácter que sigue a él se interpreta como un carácter normal y no como cierre de la cadena de texto. Ahora, ¿qué pasa si en realidad queremos usar una barra invertida en una cadena de texto? Entonces, podemos usar dos barras invertidas.

// Caracteres especiales
let barra = 'C:\\Users\\Documents'
console.log(barra) // "C:\Users\Documents"
Tabuladores y nuevas líneas
Los tabuladores y las nuevas líneas se pueden representar con el carácter de escape \t y \n respectivamente.

// Tabuladores y nuevas líneas
const tabulador = "Hola\t\tMundo"
const nuevaLinea = 'Hola\nMundo'

console.log(tabulador)
// 'Hola		Mundo'

console.log(nuevaLinea)
// 'Hola
// Mundo'
Otra forma de representar esto es usando template literals. También ahí puedes usar \t y \n para representar tabuladores y nuevas líneas, pero no es necesario ya que puedes crear cadenas de texto multilínea de forma más sencilla.

const mensaje = `Hola
Mundo`

console.log(mensaje)
// 'Hola
// Mundo'
Unicode
Unicode es un estándar que permite representar caracteres de cualquier idioma en la web. En JavaScript, podemos usar el carácter de escape \u seguido del código Unicode del carácter. Así podemos representar emojis y otros símbolos especiales:

// Unicode
let emoji = '❤️' // ❤️
let emojiUnicode = '\u2764\uFE0F' // ❤️

let simbolo = '\u00A9' // ©
Como ves, ten en cuenta que no necesitas usar el carácter de escape \u para representar emojis. Lo puedes hacer directamente. Sólo es un ejemplo para que veas que usando el carácter de escape \u puedes representar cualquier carácter Unicode.

Conversión a string
Muchas veces vas a tener que convertir un tipo de dato a string. Por ejemplo, cuando quieres mostrar un número en un elemento HTML. Para ello, podemos usar el constructor String() o el método toString() de la propia cadena de texto.

// Conversión explícita
let numero = 42
let numeroTexto = String(numero) // "42"
let numeroTexto2 = numero.toString() // "42"
También al hacer algunas operaciones con strings, JavaScript intentará convertir el resultado a string, haciendo una conversión implícita para ser capaz de hacer la operación. Por ejemplo al usar el operador + para concatenar strings o al evaluar una plantilla de cadena de texto.

// Conversión implícita
let resultado = 'El número es: ' + 42 // "El número es: 42"
let template = `El número es: ${42}` // "El número es: 42"
Casos de uso comunes
Validación de entrada
function validarEmail(email) {
  return email.includes('@') && email.includes('.')
}

function validarContrasena(password) {
  return (
    (password.length >= 8 && password.includes('@')) ||
    password.includes('#') ||
    password.includes('$')
  )
}
Validar un email es MUCHO más complejo que esto. Para hacerlo correctamente, deberías usar una expresión regular (y no son sencillas). Pero es un ejemplo sencillo para que veas cómo se puede usar el método includes para verificar si una cadena de texto contiene un substring.

Formateo de texto
function formatearNombre(nombre) {
  return nombre
    .trim()
    .toLowerCase()
    .split(' ')
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ')
}

console.log(formatearNombre('  MIGUEL ANGEL  ')) // "Miguel Angel"
Procesamiento de datos
// Limpiar y procesar datos CSV
let csvData = 'nombre,edad,ciudad\nJuan,25,Madrid\nAna,30,Barcelona'
let lineas = csvData.split('\n')
let headers = lineas[0].split(',')
let datos = lineas.slice(1).map((linea) => linea.split(','))

console.log(headers) // ["nombre", "edad", "ciudad"]
console.log(datos) // [["Juan", "25", "Madrid"], ["Ana", "30", "Barcelona"]]