Funciones flecha
Restart
Play


00:35
00:00
02:30

Configuración
PIP
Descargar vídeo
Entrar a pantalla completa
Play
En esta clase vamos a hablar sobre las funciones flecha, también conocidas como arrow functions en inglés.

Las funciones flecha son una forma más concisa de crear funciones en JavaScript, y se han vuelto muy populares en los últimos años debido a su sintaxis simplificada.

La sintaxis básica de una función flecha es la siguiente:

const miFuncionFlecha = () => {
  // código a ejecutar
}
Las funciones flecha son siempre funciones anónimas y function expressions. Esto significa que no tienen nombre y que se asignan a una variable.

En lugar de la palabra clave function, utilizamos una flecha => para definir la función. También podemos omitir los paréntesis alrededor de los parámetros si solo tenemos uno:

const saludar = (nombre) => {
  console.log('Hola ' + nombre)
}
Ventajas de las funciones flecha
Las funciones flecha tienen varias ventajas sobre las funciones regulares en JavaScript. Algunas son:

Sintaxis más concisa: la sintaxis de las funciones flecha es más corta y más fácil de leer que la sintaxis de las funciones regulares, especialmente cuando se trabaja con funciones de una sola línea.

Return implícito: las funciones flecha puede devolver el valor de la expresión sin usar la palabra clave return cuando son de una sola línea. Esto hace que las funciones flecha sean aún más cortas y más fáciles de leer.

Funciones anónimas más legibles: las funciones flecha son una forma más legible y concisa de crear funciones anónimas en JavaScript, lo cual puede hacer que nuestro código sea más fácil de entender.

Recuerda, las funciones anónimas son funciones que no tienen nombre. Son como las que vimos en la clase anterior.

Return implícito
Cuando una función flecha tiene una sola expresión, podemos omitir las llaves {} y la palabra clave return para hacerla aún más corta. Esto se conoce como return implícito. Vamos a pasar una función regular a una función flecha y vamos a ver cómo se ve finalmente con return implícito:

// Declaración de función regular
function sumar(a, b) {
  return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
  return a + b
}

// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b
Como podemos ver, la función flecha con return implícito es mucho más corta y fácil de leer que la función regular. Esto es especialmente útil cuando estamos trabajando con funciones de una sola línea.