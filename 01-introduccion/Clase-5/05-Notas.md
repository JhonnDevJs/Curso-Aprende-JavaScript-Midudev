# NOTAS CLASE 5

## Operadores lógicos en JavaScript

Los operadores lógicos en JavaScript (y en muchos otros lenguajes de programación) se utilizan para evaluar expresiones lógicas.

En JavaScript, hay tres operadores lógicos: AND (&&), OR (||) y NOT (!).

## Operador lógico AND &&

El operador lógico AND se indica con &&. Devuelve true cuando ambos valores que conecta son true.

```JavaScript

  true && true // → true
  true && false // → false
  false && false // → false

```

Un ejemplo en la vida real sería preguntar. ¿Están todas las luces encendidas? Se comprueba cada luz y si todas están encendidas (true), entonces la respuesta es true. Si alguna luz está apagada (false), entonces la respuesta es false.

## Operador lógico OR ||

El operador lógico OR se indica con || y devuelve true cuando cualquiera de los valores que conecta es true.

```JavaScript

true || true // → true
true || false // → true
false || false // → false

```

Un ejemplo en la vida real sería preguntar. ¿Hay alguna luz encendida? Se comprueba cada luz y si alguna está encendida (true), entonces la respuesta es true. Sólo si todas las luces están apagadas (false), entonces la respuesta es false.

## Operador lógico NOT !
El operador lógico NOT se indica con ! e invierte el valor de un valor booleano. Se pone delante del valor que queremos invertir.

```JavaScript

!true // → false
!false // → 

```

Un ejemplo en la vida real sería pulsar el interruptor de la luz. Si la luz está encendida (true), entonces pulsando el interruptor la apagamos (false). Si la luz está apagada (false), entonces pulsando el interruptor la encendemos (true).

## Combinando operadores lógicos, aritméticos y de comparación

Los operadores lógicos y los operadores de comparación se pueden combinar para crear expresiones más complejas. Por ejemplo, podemos preguntar si un número está entre dos valores.

```JavaScript

2 < 3 && 3 < 4 // → true

```

En este caso, la expresión se evalúa como true porque 2 < 3 es true y 3 < 4 es true. Si cualquiera de las dos expresiones fuera false, entonces la expresión sería false.

También puedes usar paréntesis para agrupar operaciones y usar operadores lógicos y aritméticos.

```JavaScript

2 + 2 < 3 && 10 < 8 * 2 // → false

```

Igualmente, es importante que sepas que las operaciones aritméticas tienen precedencia sobre las operaciones de comparación.

```JavaScript

2 + 2 < 3 && 10 < 8 * 2
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false

```

## Ejercicios de código interactivos

### Comprueba si 7 es mayor que 8 y menor que 10

Respuesta:
```JavaScript

  7 > 8 && 7 < 10

```

Solución:
```JavaScript

  7 > 8 && 7 < 10

```

### Tenemos un producto en una tienda. Cuesta 1500 y tenemos un descuento del 25%. Tengo 1150€ en mi cartera. Escribe un código que me diga si puedo comprarlo. No uses paréntesis.

Respuesta:
```JavaScript

  1500 * 0.75 <= 1150

```

Solución:
```JavaScript

  1500 * 0.75 <= 1150

```

## Dos o más operandos

Aunque todos los ejemplos que has visto hasta ahora usan dos operandos, los operadores lógicos también pueden usarse con más de dos operandos.

```JavaScript

  true && true && true // → 

```

También puedes mezclar operadores lógicos:


```JavaScript

  (true && true) || false // → true
  !true && !true // → false
  (false && true) || !true // → false

```

Ahora te puede costar un poco entender qué está pasando, pero con la práctica te irá resultando más fácil. Prueba a hacer los ejercicios y a jugar con los operadores lógicos para que te vayan quedando más claros.