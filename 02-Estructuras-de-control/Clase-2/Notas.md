Bucles con while
Restart
Play


00:32
00:00
02:24

Activar subtítulos
Configuración
PIP
Descargar vídeo
Entrar a pantalla completa
Play
Un bucle es una estructura de control que permite repetir un bloque de instrucciones. Vamos, repetir una tarea tantas veces como queramos.

En JavaScript, existen varias formas de lograrlo, y una de ellas es el bucle con while. El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple una determinada condición.

En esta clase, vamos a explicar cómo funciona el bucle while en JavaScript y cómo podemos utilizarlo en nuestros programas.

Sintaxis
La sintaxis del bucle while es similar a la de un condicional if. La única diferencia es que, en lugar de ejecutar el código una sola vez, se ejecuta mientras se cumpla la condición.

while (condición) {
  // código a ejecutar mientras se cumpla la condición
}
El bucle comienza evaluando la condición dentro de los paréntesis. Si la condición es true, se ejecuta el código dentro de las llaves.

Después de ejecutar el código, la condición se evalúa de nuevo, y si sigue siendo verdadera, el código dentro de las llaves se ejecuta de nuevo. Este proceso se repite hasta que la condición se evalúa como falsa.

Ten en cuenta que, si la condición es falsa desde el principio, el código dentro de las llaves nunca se ejecutará.

A cada vuelta del bucle se le llama iteración. Una iteración es la repetición de un proceso o acción un número determinado de veces, de manera ordenada y sistemática.

Ejemplo de uso de while
Vamos a crear la cuenta atrás de un cohete. Creamos una variable cuentaAtras que contenga el número de segundos que faltan para el lanzamiento. En este caso, vamos a empezar con 10 segundos.

let cuentaAtras = 10
Para quitarle un segundo a la cuenta atrás, vamos a utilizar el operador de resta (-) y el operador de asignación (=).

let cuentaAtras = 10
cuentaAtras = cuentaAtras - 1
console.log(cuentaAtras) // -> 9
Sabiendo esto y cómo funciona el bucle while, podemos crear la cuenta atrás del cohete.

// iniciamos la variable fuera del bucle
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')
Si ejecutas este código en consola, deberías ver los números del 10 al 1, y después el mensaje de despegue.

Cuidado con los bucles infinitos
Restart
Play


00:00
00:00
02:30

Activar subtítulos
Configuración
PIP
Descargar vídeo
Entrar a pantalla completa
Play
Los bucles while son muy potentes, pero también pueden ser peligrosos. Si la condición nunca se evalúa como falsa, el bucle se ejecutará infinitamente.

while (true) {
  console.log('¡Hola hasta el infinito!')
}
Esto evaluará la condición true como verdadera, y ejecutará el código dentro de las llaves una y otra vez.

Saliendo de un bucle con break
Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break. Cuando el intérprete de JavaScript encuentra la palabra break, sale del bucle y continúa ejecutando el código que haya después.

let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break // <---- salimos del bucle
  }
}
¿Cuál es el valor de cuentaAtras en este código? Veamos, el bucle estaba haciendo una cuenta atrás... pero le hemos dicho que cuando tuviese el valor 5 saliese del bucle. Por lo tanto, el valor de cuentaAtras es 5.

Usar break puede ser útil en bucles si queremos salir de ellos por alguna condición en concreto o para evitar justamente los bucles infinitos.

Saltando una iteración con continue
Igual que tenemos la posibilidad de "romper" el bucle con break, también podemos saltarnos una iteración con continue. Cuando el intérprete de JavaScript encuentra la palabra continue, salta a la siguiente iteración del bucle.

let cuentaAtras = 10

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras)
}
¿Qué aparece en la salida de la consola? El bucle está haciendo una cuenta atrás... pero le hemos dicho que si el número es par, se salte esa iteración y deje de ejecutar el código que le sigue.

Por ello, los números pares no aparecen en la consola.

Anidación de bucles
Podemos anidar bucles dentro de otros bucles. Imagina que en nuestra cuenta atrás para el cohete, tenemos que revisar que 3 cosas están en sus parámetros: el oxígeno, el combustible y la temperatura.

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  console.log(cuentaAtras)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}
¿Por qué la constante la hemos puesto toda en mayúsculas? Como ya explicamos en la clase de introducción a JavaScript, es una convención para indicar que es una constante y que no va a cambiar.

Además del bucle anidado, hay algo también muy interesante en el código anterior y es la creación de la variable let revisionesRealizadas.

Ten en cuenta que esa variable se creará y se inicializará a 0 en cada iteración del bucle.

Las variables creadas con let y const que se crean dentro de un bucle, solo existen dentro de ese bucle. Cuando el bucle termina, la variable desaparece. De hecho si intentas acceder a ella fuera del bucle, te dará un error.

let cuentaAtras = 10

while (cuentaAtras > 0) {
  let revisionesRealizadas = 3
  console.log(revisionesRealizadas)
  cuentaAtras = cuentaAtras - 1
}

console.log(revisionesRealizadas) // -> ERROR: ReferenceError
Esto también pasa con otras estructuras de control. Eso es porque el alcance de las variables creadas con let y const es el bloque entre {} en el que se crean. Lo iremos viendo más adelante para que vayas practicando, no te preocupes.