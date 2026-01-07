Iterando Objetos en JavaScript
El manejo de objetos es uno de los pilares en JavaScript y es crucial conocer cómo podemos iterar o recorrer los mismos. Existen varias formas de hacerlo y en esta clase vamos a revisar algunas de las más comunes: el bucle for...in y los métodos Object.keys(), Object.values() y Object.entries().

Iterando con for...in
La estructura de control for...in nos permite crear un bucle que itera sobre todas las propiedades enumerables de un objeto, en un orden arbitrario.

const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

for (const property in spiderman) {
  console.log(`${property}: ${spiderman[property]}`);
}

// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense
No confundas el bucle for...in con el de for...of que vimos en la sección de arrays. El primero itera sobre las propiedades enumerables de un objeto, mientras que el segundo itera sobre los elementos de un objeto iterable (como los elementos de un array, por ejemplo).

Transformar un objeto en un array
A veces queremos transformar un objeto en un array para poder iterar sobre él. Para esto podemos utilizar el método Object.keys(), Object.values() o Object.entries().

Cada uno de estos métodos retorna un array, pero cada uno de ellos contiene elementos diferentes. Vamos a verlos uno por uno.

Iterar con Object.keys()
El método Object.keys() retorna un array con las propiedades enumerables de un objeto.

const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

const properties = Object.keys(spiderman)

console.log(properties.length) // 3

properties.forEach(property => {
  console.log(property)
})

// -> name
// -> universe
// -> powers
Este código hace algo muy similar al anterior, pero utilizando Object.keys() para obtener las propiedades del objeto.

¿Qué son las propiedades enumerables? Por defecto, cuando añadimos propiedades a un objeto, estas son enumerables, es decir, que se pueden iterar sobre ellas. Sin embargo, como veremos más adelante, podemos crear propiedades que, por lo que sea, nos interesa que no sean enumerables. A veces estas son más de uso interno, como métodos auxiliares que el propio lenguaje JavaScript tiene, y no queremos que aparezcan cuando iteramos sobre un objeto.

Iterando con Object.values()
El método Object.values() retorna un array con los valores correspondientes a las propiedades enumerables de un objeto.

const values = Object.values(spiderman)

values.forEach(value => {
  console.log(value)
})

// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]
Como ves, la diferencia con Object.values() es que este método retorna los valores y Object.keys() retorna las propiedades.

Iterando con Object.entries()
El método Object.entries() retorna un array de arrays, donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto.

const entries = Object.entries(spiderman)

entries.forEach(entry => {
  console.log(entry)
})

// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]
Lo interesante es que este método nos da acceso tanto a las propiedades como a los valores. Lo puedes ver más claro en el siguiente ejemplo:

const entries = Object.entries(spiderman)

entries.forEach(entry => {
  const property = entry[0]
  const value = entry[1]

  console.log(`${property}: ${value}`)
})