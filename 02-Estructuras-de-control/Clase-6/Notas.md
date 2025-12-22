# Switch

En JavaScript, la sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de código dependiendo del valor de una expresión. Esta estructura es útil cuando queremos realizar diferentes acciones basadas en una única variable.

## Sintaxis

La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido. Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada caso y evitar que se sigan evaluando el resto de casos.

```JavaScript

switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}

```

La condición de default es opcional. No es obligatorio que la uses si no la necesitas. Es como el else de las condiciones if.

Por ejemplo si queremos mostrar un mensaje diferente dependiendo del día de la semana:

```JavaScript

const dia = 'lunes'

switch (dia) {
  case 'lunes':
    console.log('¡Hoy es lunes! 😢')
    break

  default:
    console.log('No es lunes, YAY! 🚀')
    break
}

```

Vamos a hacer esto un poco más interesante. En JavaScript podemos recuperar la información de la hora y la fecha usando el objeto Date. Este objeto tiene un método llamado getDay() que nos devuelve el día de la semana en formato numérico, siendo 0 el domingo y 6 el sábado.

Igual que console es un objeto. También Date lo es. Un objeto en JavaScript no es muy diferente a un objeto en la vida real. Tiene propiedades y funciones que podemos usar. En este caso, getDay() es una función que nos devuelve el día de la semana.


```JavaScript

const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log('¡Hoy es domingo! 😴')
    break
  case 1:
    console.log('¡Nooo, es lunes! 😢')
    break
  case 2:
    console.log('¡Hoy es martes! 🥵')
    break
  case 3:
    console.log('¡Hoy es miércoles! 🤓')
    break
  default:
    console.log('Se acerca el fin de! 🚀')
    break
}

```

## switch vs if

Muchas veces verás que puedes escribir el mismo código usando switch o if. El ejemplo anterior con un if:


```JavaScript

const dia = new Date().getDay()

if (dia === 0) {
  console.log('¡Hoy es domingo! 😴')
} else if (dia === 1) {
  console.log('¡Nooo, es lunes! 😢')
} else if (dia === 2) {
  console.log('¡Hoy es martes! 🥵')
} else if (dia === 3) {
  console.log('¡Hoy es miércoles! 🤓')
} else {
  console.log('Se acerca el fin de! 🚀')
}

```

A veces es más fácil de leer con switch y otras con if. ¡Depende de ti! Aunque más adelante, en el curso, veremos alternativas a switch usando algunas estructuras de datos.

## Agrupando cases

En ocasiones, queremos que varios casos ejecuten el mismo código. En lugar de repetir el mismo código en cada caso, podemos agruparlos usando el mismo case para cada uno de ellos.

```JavaScript

const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log('¡Hoy es fin de semana! 🥳')
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('¡Nooo, a trabajar! 😢')
    break
  case 5:
    console.log('¡Hoy es viernes! 🤓')
    break
}

```

Como ves, en este caso, tampoco estamos usando el default. Como te comentaba antes, es totalmente opcional, no tienes por qué usarlo siempre.

## ¡No olvides el break!

Es muy importante que no te olvides de poner el break al final de cada caso. Si no lo pones, se ejecutarán todos los casos que vengan después del que coincide. Por ejemplo:

```JavaScript

// ❌ Este código no es correcto
// Lo muestro para que veas qué pasa
// si no pones break en tus casos
const dia = new Date().getDay()

switch (dia) {
  case 0:
    console.log('¡Hoy es domingo! 😴')
  case 1:
    console.log('¡Nooo, es lunes! 😢')
  case 2:
    console.log('¡Hoy es martes! 🥵')
  case 3:
    console.log('¡Hoy es miércoles! 🤓')
  default:
    console.log('Se acerca el fin de! 🚀')
}

```

Si hoy es martes (2), se ejecutarán todos los casos después de ese, ya que no hay ningún break que lo impida. Por lo tanto, el resultado en consola sería:


```JavaScript

¡Hoy es martes! 🥵
¡Hoy es miércoles! 🤓
Se acerca el fin de! 🚀

```

## El patrón switch(true)

Existe un patrón que se usa a veces con switch que es switch(true). Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

Por ejemplo:


```JavaScript

let edad = 25

switch (true) {
  case edad >= 18 && edad < 25:
    console.log('Eres mayor de edad y eres joven')
    break
  case edad >= 25 && edad < 40:
    console.log('Eres mayor de edad y estás en plena madurez')
    break
  case edad >= 40:
    console.log('Eres mayor de edad y estás en la mejor edad')
    break
  default:
    console.log('Eres menor de edad')
}

```
Es un patrón algo más avanzado y es una alternativa a usar if y else if. En mi opinión, es más difícil de leer, ya que puede crear un poco de confusión. Pero es bueno que lo conozcas por si te lo encuentras en algún sitio.