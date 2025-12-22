# Tu primera función

Las funciones son uno de los conceptos más importantes en JavaScript y casi cualquier lenguaje de programación.

Una función es un bloque de código que realiza una tarea específica cuando se llama. Puedes pensar en una función como en un microondas: le das algo para cocinar, le pasas algunos parámetros (como el tiempo y la potencia) y luego hace su trabajo y te devuelve el resultado.

En JavaScript, las funciones se pueden definir de varias maneras, pero la forma más común y básica es mediante la palabra clave function. Esta es tu primera función:

```JavaScript

function saludar() {
  console.log('Hola Miguel')
}

```

Como ves, declarar una función consiste de:

La palabra reservada function que indica que estamos definiendo una función.
El nombre de la función, en este caso saludar. Normalmente usamos verbos para nombrar funciones, ya que son acciones que realizan.
Un par de paréntesis () después del nombre. Pueden contener parámetros. En este caso, no tenemos ninguno.
Un bloque de código entre llaves {}. En este caso, solo tenemos una línea de código, pero podríamos tener muchas más.
Nuestra función ahora mismo no devuelve nada pero cada vez que la llamemos, imprimirá Hola en la consola.

Las funciones pueden devolver un resultado (un número, una cadena de texto, un booleano...) o puede no devolver nada. En ese caso, la función devuelve undefined.

Para llamar a una función, simplemente escribimos su nombre seguido de paréntesis:

```JavaScript

saludar() // -> Hola Miguel
saludar() // -> Hola Miguel
saludar() // -> Hola Miguel

```

## Devolviendo un resultado
Las funciones pueden devolver un resultado. Para ello, utilizamos la palabra reservada return y después el valor que queremos devolver:

```JavaScript

function sumar() {
  return 1 + 1
}

```

Ahora, cada vez que llamemos a la función sumar, nos devolverá el resultado de la suma:

```JavaScript

// podemos guardar el resultado en una variable
const resultado = sumar()

// o ver en consola directamente el resultado
console.log(sumar()) // -> 2

```

En la siguiente clase verás cómo puedes pasar parámetros a una función para hacerlas todavía más interesantes y reutilizables.

Recuerda, si no utilizamos return, la función devolverá undefined.

## Una función realmente útil

La función saludar y sumar no parecen muy útiles, pero con lo poco que sabemos ya podemos hacer cosas más productivas. Por ejemplo, podemos crear una función que nos devuelva un número aleatorio del 1 al 10.

Para ello vamos a descubrir Math, un objeto incorporado en JavaScript que tiene propiedades y métodos para constantes y funciones matemáticas. Vamos a ver dos métodos que nos van a ser muy útiles:

Math.random(): devuelve un número aleatorio entre 0 y 1, con decimales.
Math.floor(): redondea un número hacia abajo.
Math.random es parecido a console.log, en el sentido que son métodos que JavaScript incorpora de serie y que podemos utilizar en cualquier punto de nuestro programa.

Sabiendo esto, podríamos crear una función que nos devuelva un número aleatorio del 1 al 10:

```JavaScript

function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random() // por ejemplo: 0.6803487380457318

  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10 // -> 6.803487380457318

  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied) // -> 6

  // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1 // -> 7

  // devolvemos el resultado
  return result
}

```

¡Bueno! Hay que ver cuantas cosas has puesto en práctica en muy pocas líneas de código: constantes, variables, operadores, comentarios... ¡y todo en una función!

¿Sabes lo mejor? Que esa función va a acompañarte durante toda tu carrera. Es muy común necesitar crear un número aleatorio en un programa, así que es muy útil tener una función que lo haga por nosotros.

En la función hemos utilizado varias variables para ir guardando los resultados intermedios. Podríamos haberlo hecho todo en una sola línea, pero así es más fácil de entender