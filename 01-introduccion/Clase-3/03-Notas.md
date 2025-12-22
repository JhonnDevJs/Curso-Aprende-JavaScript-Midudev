# Notas de la clase 3

En JavaScript, como culaquier otro lenguaje de programación, vamos a querer trasldar la informacion del mundo real a nustro codigo. Para ello, necesitamos enteder qué tipos de datos exiten en el lenguaje para poder presentar la informacion que necesitamos

En JavaScript tenemos 9 tipos de datos que se dividen en dos grandes grupos:
primitivos o no primitivos . Más adelantes te contaré qué significa esto, pero por ahora, vamos a ver los tipos primitivos.

Dentro de los tipos primitivos tenermos 7 tips de datos:

```JavaScrit

  - number <!-- Son numeros, pueden ser de tipo entero (1) o de tipo flotante (1.5) -->
  - string <!-- Son cadenas de texto como esta por ejempo "Hola mundo" -->
  - boolean <!-- Solo tiene dos valores posibles "True" (Verdadero) o "False" (Falso) -->
  - null  <!-- Este ocurre cuando una variable no tiene un valor asignado -->
  - undefined <!-- Este ocurre cuando no se a declarado la variable, funcion(), clase, etc. -->
  - symbol <!--  -->
  - bignit <!-- Este es similar a "number", con la caracteristica de que este se utiliza con numeros muy grandes -->

```

No te preocupes, no tienes ni recordarlos ni entenderlos todos ahora. En esta lección vamos a ver los tres primeros que son, sin ninguna duda, los que más vamos a usar al inicio del curso.

## Números

Los números (tipo number) son los datos más básicos que podemos representar en JavaScript. En JavaScript, no hay una diferencia entre números enteros y números decimales, todos los números son de tipo number:

```JavaScript

  7
  3.14
  19.95
  2.998e8 - 1

```

## Operadores aritméticos

Cons los número, puedes usar los operadores aridméticos para realizar operaciones matemáticas. En JavaScript tenmos operadore aritméticos:

```JavaScript

  + // Suma
  - // Resta
  * // Multiplicacion
  / // Division
  % // Modulo (resto de la divicion)
  ** // Potencia

```

Al usr los operadores aritméticos, el resultado siempe será un número. Por ejemplo:

```JavaScript

  2 + 2 // 4
  4 - 2 // 2
  3 * 2 // 6
  2 / 2 // 1
  2 % 2 // 0
  3 ** 3 // 27

```

¿Qué significa el // que ves en los ejemplos? Es un comentario. En JavaScript, los comentarios se escriben con // y todo lo que escribas después de // será ignorado por el navegador. Los comentarios son muy útiles para explicar qué hace nuestro código.

Al igual que las matemáticas, las operaciones siguen un orden de precedencia. Por ejemplo, si queremos calcular el resultado de 2 + 2 * 3, primero se multiplicará 2 * 3 y luego se sumará 2 + 6. El resultado será 8.

También puedes usar paréntesis para cambiar el orden de las operaciones.

```JavaScript

  2 + 2 * 3 // 8
  ;(2 + 2) * 3 // 12

```

Más adelante le dedicaremos una clase entera a los BigInt, un tipo de dato similar a Number pero pensado para trabajar con números grandes.

## Cadenas de texto

La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript, las cadenas de texto se representan entre comillas simples, dobles o acentos graves:

```JavaScript

  'Estás aprendiendo JavaScript'

  'JavaScript te va a gustar'`Esto es una cadena de texto`

```

Las comillas simples y dobles funcionan igual, pero al usar acentos graves podemos escribir cadenas de texto que ocupen varias líneas:

```JavaScript

  `Esto es una cadena de texto
  que ocupa varias líneas. Puedes escribir
  tantas líneas como quieras`

```

En clases posteriores, veremos cómo funcionan, algunos métodos interesantes y sus diferencias.

## Concatenación

Para unir dos cadenas de texto, podemos usar el operador +:

```JavaScript

  'Estás aprendiendo ' + 'JavaScript' // 'Estás aprendiendo JavaScript'

```

Como ves, el operador + de concatenación de cadenas de texto es visualmente el mismo que el operador + de suma de números. El operador + funciona de forma diferente dependiendo del tipo de dato que estemos usando.

## Booleanos

Los booleanos representa sólo dos valores: true (verdadero) o false (falso). Por ejemplo:

¿La luz está encendida (true) o apagada (false)?
¿Está lloviendo (true) o no está lloviendo (false)?
¿Está el usuario logueado (true) o no está logueado (false)?
Estos son ejemplos de preguntas que podemos responder con un valor booleano.

``` JavaScript
  true
  false
```