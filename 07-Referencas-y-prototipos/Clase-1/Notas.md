Valor vs Referencia en JavaScript
Una de las características fundamentales y a veces confusas de JavaScript es cómo maneja la asignación de variables y el paso de argumentos a funciones. Dependiendo del tipo de dato, JavaScript usará una estrategia de paso por valor o paso por referencia.

Entender esta diferencia es crucial para evitar errores inesperados y comprender por qué nuestro código se comporta de cierta manera, especialmente cuando trabajamos con objetos y arrays.

Tipos Primitivos: Paso por Valor
Como hemos visto, los tipos de datos primitivos en JavaScript son: string, number, boolean, null, undefined, symbol y bigint.

Cuando asignamos un valor primitivo a una variable o lo pasamos como argumento a una función, JavaScript crea una copia independiente de ese valor. Cualquier modificación posterior sobre la copia no afectará al valor original.

let score = 100
let playerScore = score // Se copia el valor 100 a playerScore

playerScore = 150 // Modificamos la copia

console.log(score) // -> 100 (El valor original no ha cambiado)
console.log(playerScore) // -> 150
Como puedes ver, al reasignar playerScore el valor original score permanece intacto. Esto es el paso por valor, ya que ha creado una copia del valor original en la variable playerScore, dejando el valor original intacto.

Eso también ocurre al pasar el valor primitivo a una función, ya que se crea una copia del valor original en la variable local de la función:

function increaseScore(currentScore) {
  currentScore = currentScore + 10 // Modificamos la copia local de la función
  console.log('Dentro de la función:', currentScore) // -> 110
}

// Creamos el valor original
let initialScore = 100

// Pasamos el valor original a la función y, al ser primitivo
// se crea una copia de ese valor
increaseScore(initialScore)

// El valor original no ha cambiado
console.log('Fuera de la función:', initialScore) // -> 100
Como puedes ver, tanto al reasignar playerScore como al modificar currentScore dentro de la función, la variable original initialScore permanece intacta. Esto es el paso por valor.

Tipos No Primitivos: Paso por Referencia
Los tipos de objeto en JavaScript incluyen object, array, function y otros objetos complejos.

Cuando trabajamos con objetos (incluyendo arrays), la asignación o el paso como argumento no crea una copia del objeto. En su lugar, se copia la referencia (la dirección en memoria donde está almacenado el objeto). Esto significa que ambas variables (la original y la nueva, o el parámetro de la función y la variable original) apuntan al mismo objeto en memoria.

Si modificamos el objeto a través de cualquiera de estas referencias, el cambio se reflejará en todas ellas, porque es el mismo objeto.

// Ejemplo de asignación con objetos
let player1 = { name: 'midu', hp: 100 }
let player2 = player1 // player2 ahora apunta al *mismo* objeto que player1

player2.hp = 50 // Modificamos el objeto a través de player2

console.log(player1.hp) // -> 50 (¡El objeto original ha cambiado!)
console.log(player2.hp) // -> 50
Los arrays también son objetos, por lo que también siguen el mismo patrón de paso por referencia.

// Ejemplo de asignación con arrays
let team1 = ['midu', 'dani']
let team2 = team1 // team2 apunta al *mismo* array que team1

team2.push('luffy') // Modificamos el array a través de team2

console.log(team1) // -> ['midu', 'dani', 'luffy'] (¡El array original ha cambiado!)
console.log(team2) // -> ['midu', 'dani', 'luffy']
Lo mismo ocurre al pasar objetos como argumento a una función. No se crea una copia del valor, si no que se pasa la referencia al objeto original.

function addMember(teamArray, member) {
  teamArray.push(member) // Modificamos el array original a través de su referencia
  console.log('Dentro de la función:', teamArray)
}

let myTeam = ['SpiderMan', 'IronMan']

addMember(myTeam, 'Hulk') // ['SpiderMan', 'IronMan', 'Hulk']

console.log('Fuera de la función:', myTeam)
// -> ['SpiderMan', 'IronMan', 'Hulk'] (¡El array original ha cambiado!)
¿Por qué hace esto JavaScript? Evitar crear copias de estructuras de datos potencialmente grandes es muy eficiente, ya que compartes la misma referencia en memoria constantemente. El problema es que puede ser una fuente de errores si no somos conscientes de que estamos modificando el objeto original.

Tipos primitivos dentro de objetos
Otro error muy común es no considerar que los tipos primitivos dentro de un objeto son independientes. Por lo tanto, siempre que pases un tipo primitivo a una función, se crea una copia del valor original, independientemente que fuese una propiedad de un objeto.

Por ejemplo, si tienes un objeto character con una propiedad level y pases level a una función, se crea una copia del valor original, independientemente de que fuese una propiedad del objeto character:

let character = { name: 'Hero', level: 5 }

function updateLevel(level) {
  // actualizamos el valor de level
  // y lo devolvemos
  level = level + 1
  return level
}

updateLevel(character.level)

console.log('Fuera de la función:', character.level)
// -> 5 (¡El valor original no ha cambiado!)
Aunque level es una propiedad del objeto character, no deja de ser un tipo primitivo y, por lo tanto, al pasarlo a la función se está pasando como valor.

Pero fíjate qué ocurre si haces lo mismo pasando el objeto completo:

let character = { name: 'Hero', level: 5 }

function updateCharacter(character) {
  character.level = character.level + 1
  return character.level
}

updateCharacter(character)

console.log('Fuera de la función:', character)
// -> { name: 'Hero', level: 6, status: 'active' }
Ejercicio práctico próximamente disponible

Una vez habilitado el ejercicio práctico, podrás avanzar con el siguiente contenido.