Operador de Encadenamiento Opcional
Si intentamos acceder a una propiedad de un objeto que no existe... ¡se romperá nuestra aplicación!

Por suerte, existen formas de evitar que esto ocurra. En esta clase veremos algunas de ellas y presentaremos el operador de Encadenamiento Opcional, también llamado Optional Chaining.

Este operador es especialmente útil cuando trabajamos con objetos que podrían tener estructuras complejas o variables que podrían no estar definidas en determinados momentos de la ejecución de nuestro código.

El error fatal de intentar leer una propiedad de undefined
Uno de los errores más comunes en JavaScript, y que estoy seguro que verás tarde o temprano, es el que dice que no puedes leer una propiedad de undefined.

Este error ocurre cuando intentamos acceder a una propiedad de un objeto que no existe. Por ejemplo:

const gamesystem = {
  name: 'PS5',
  price: 550,
  specs: {
    cpu: 'AMD Ryzen Zen 2',
    gpu: 'AMD Radeon RDNA 2',
  }
}

console.log(gamesystem.name) // -> PS5

console.log(gamesystem.specifications) // -> undefined

console.log(gamesystem.specifications.ram) 
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined
El error parece inocente pero fíjate. En lugar de usar la propiedad specs hemos usado specifications. Pero esto es suficiente para que JavaScript nos diga que no puede leer la propiedad ram de undefined.

Evitando el error con if
Una forma de evitar este error es usando un if para comprobar si la propiedad existe antes de intentar acceder a ella:

if (typeof gamesystem.specifications === 'object') {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
¡Cuidado con esto! Al usar el operador typeof con un valor null nos dice que es object. Esto es un error histórico del lenguaje. Así que si la propiedad specifications es null, el if se ejecutará y obtendremos un error al intentar acceder a ram. Para evitar esto, podemos añadir una comprobación extra: gamesystem.specifications !== null.

Estamos usando el operador typeof para comprobar si la propiedad specifications es un objeto. Ya lo vimos en la primera sección del curso y nos ayuda a asegurarnos que specifications existe y es un objeto, antes de acceder a su propiedad ram.

El operador in para comprobar si una propiedad existe
Otra forma de comprobar si una propiedad existe es usando el operador in. Este operador comprueba si una propiedad existe en un objeto y devuelve true o false:

console.log('name' in gamesystem) // -> true
console.log('specifications' in gamesystem) // -> false
console.log('specs' in gamesystem) // -> true

if ('specifications' in gamesystem) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
¡Pero ojo! ¿Qué pasa si la propiedad existe pero su valor es undefined?

const gamesystem = {
  name: 'PS5',
  price: 550,
  specifications: undefined,
}

console.log('specifications' in gamesystem) // -> true

gamesystem.specifications.ram
// ❌ Uncaught TypeError: Cannot read property 'ram' of undefined
El operador in puede ser interesante para comprobar si una propiedad existe en un objeto, pero no nos sirve para comprobar si el valor de esa propiedad es undefined y habría que hacer comprobaciones extra para evitar el error.

if (
  'specifications' in gamesystem &&
  gamesystem.specifications !== undefined &&
  gamesystem.specifications !== null) {
  console.log(gamesystem.specifications.ram)
} else {
  console.log('No hay especificaciones')
}
Mucho código para algo tan simple. Por suerte, existe una forma más sencilla de hacerlo.

El operador de Encadenamiento Opcional, ?.
El Operador de Encadenamiento Opcional ?. permite leer el valor de una propiedad ubicada profundamente dentro de una cadena de objetos conectados, sin tener que validar expresamente que cada referencia en la cadena es válida.

const gamesystem = {
  name: 'PS5',
  price: 550,
  specs: {
    cpu: 'AMD Ryzen Zen 2',
    gpu: 'AMD Radeon RDNA 2',
  }
}

console.log(gamesystem.specifications?.cpu)
// -> undefined
console.log(gamesystem.specs?.cpu)
// -> AMD Ryzen Zen 2
Si la propiedad specifications no existe, el operador ?. devuelve undefined y no se produce ningún error. Si la propiedad existe, el operador ?. devuelve el valor de la propiedad.

Beneficios del Operador de Encadenamiento Opcional
Uno de los principales beneficios del operador de encadenamiento opcional es que simplifica nuestro código y lo hace más legible. En lugar de tener que hacer varias comprobaciones para asegurarnos de que un objeto y sus propiedades existen, podemos intentar acceder directamente a la propiedad que nos interesa, y JavaScript no se quejará si no existe.

Este operador es especialmente útil en aplicaciones con datos dinámicos, donde no siempre podemos garantizar la estructura exacta de nuestros objetos.

const user = {
  name: 'Peter',
  settings: {
    theme: 'dark',
    notifications: {
      email: true,
      push: false,
      marketing: undefined
    }
  }
}

// la forma clásica de acceder a una propiedad anidada
// de forma segura
let email = undefined
if (user && user.settings &&
  user.settings.notifications &&
  user.settings.notifications.email) {
  email = user.settings.notifications.email
}

console.log(email) // -> true

// con Optional Chaining Operator
const email = user?.settings?.notifications?.email
console.log(email) // -> true
El operador de encadenamiento opcional es una excelente herramienta para trabajar con objetos en JavaScript, especialmente cuando no podemos garantizar la estructura o presencia de ciertos datos. Nos ayuda a escribir un código más limpio, legible y resistente a errores.