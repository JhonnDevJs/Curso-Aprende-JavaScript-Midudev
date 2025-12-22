Function Expression

Hasta ahora hemos visto cómo podemos declarar funciones usando la palabra clave function.

Sin embargo, existen dos formas más de declarar funciones en JavaScript: function expression y arrow function. En este caso, hablemos de la primera.

¿Qué es una function expression?
Una function expression es una función que se asigna a una variable. Por ejemplo:

// esto es una function expression
const sum = function (a, b) {
  return a + b
}

// esto es una declaración de función
function sum(a, b) {
  return a + b
}
¡Fíjate que la function no tiene nombre en la function expression! Cuando una función no tiene nombre se le llama función anónima. Aunque en este caso, la función está asignada a una variable que sí tiene nombre y por eso podremos utilizarla más adelante.

Con la function expression, a la función se asigna a la variable sum. Esto significa que podemos llamar a la función usando el nombre de la variable:

sum(1, 2) // 3
El comportamiento es muy similar al de una función declarada con la palabra clave function. Sin embargo, hay una diferencia muy importante entre ambas que debes conocer: el hoisting.

Hoisting
El hoisting es un término que se usa para describir cómo JavaScript parece que mueve las declaraciones funciones al principio del código, de forma que las puedes usar incluso antes de declararlas. Por ejemplo:

sum(1, 2) // 3

function sum(a, b) {
  return a + b
}
Aquí primero usamos la función y la declaramos luego. ¡Y funciona! ¿Cómo puede ser? ¿No debería darnos un error ya que la función todavía no existe?

Lo que está pasando es que JavaScript asigna en memoria durante la fase de compilación las declaraciones de funciones y por eso al ejecutarse el código tiene acceso a esa posición de memoria a la que se refiere la función.

Eso sería la explicación técnica del hoisting, pero si te sirve de ayuda, puedes pensar que es como si JavaScript moviese las declaraciones de funciones al principio del código.

¿Y qué pasa con las function expression?
Pues que no se aplica el hoisting. Por ejemplo:

sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}