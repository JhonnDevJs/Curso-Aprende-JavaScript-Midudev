# Recursividad

La recursividad es una técnica de programación que consiste en que una función se llame a sí misma.

Pero claro, si una función se llama a sí misma, ¿cuándo termina? ¿cómo se evita que se llame infinitamente? Con una condición base.

Ejemplo de recursividad
Vamos a crear una función que cuente desde un número hasta cero.

function cuentaAtras(numero) {
  // Condición base: Si el número que recibe es
  // menor de 0 entonces salimos de la función
  if (numero < 0) {
    return
  }

  // Si el número era mayor o igual a 0, lo mostramos
  console.log(numero)

  // Y llamamos a la función con el número anterior
  cuentaAtras(numero - 1)
}
Si llamamos a la función con el número 3, el resultado será:

cuentaAtras(3)
// -> 3
// -> 2
// -> 1
// -> 0
La ejecución la veríamos así:

cuentaAtras(3) -> (muestra 3)
               \
          cuentaAtras(2) -> (muestra 2)
                       \
                  cuentaAtras(1) -> (muestra 1)
                               \
                          cuentaAtras(0) -> (muestra 0)
                                        \
                                   cuentaAtras(-1) -> salida
¡Cuidado! Si no ponemos la condición base, la función se llamará infinitamente y el navegador se quedará bloqueado. Cuando hacemos recursividad SIEMPRE hay que tener una condición que haga que la función salga de sí misma.

Usando recursividad y devolviendo un valor
La recursividad se usa muchas veces para solucionar algoritmos. Por ejemplo, vamos a crear una función que calcule el factorial de un número.

El factorial de un número es el resultado de multiplicar ese número por todos los anteriores hasta llegar a 1. Por ejemplo, el factorial de 5 es 5 _ 4 _ 3 _ 2 _ 1 = 120

function factorial(n) {
  // Condición base: Si el número es 0 o 1, devolvemos 1
  // y no llamamos a la función de nuevo
  if (n === 0 || n === 1) {
    return 1
  } else {
    // Si el número es mayor que 1, llamamos a la función
    return n * factorial(n - 1)
  }
}

console.log(factorial(5)) // Resultado: 120
console.log(factorial(3)) // Resultado: 6
factorial(3) --------------------------> 6
        \
  3 * factorial(2) ---------------> 6
          \
    2 * factorial(1) -----------> 2
            \
      1 * factorial(0) -------> 1
La recursividad es un concepto que cuesta entender al principio. ¿Una función que se llama a sí misma? A mucha gente le vuela la cabeza.

¿Qué te recomiendo para aprenderlo? Primero, entiende los ejemplos que hemos hecho y dibuja en un papel cómo se ejecutan las funciones.

Después, haz estos ejercicios de recursividad:

Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)