Expresiones y declaraciones
Restart
Play


02:23
00:00
03:20

Configuración
PIP
Descargar vídeo
Entrar a pantalla completa
Play
En JavaScript, existen dos tipos de elementos fundamentales para escribir código: expresiones y declaraciones. Aunque estos términos pueden parecer confusos al principio, son conceptos clave para comprender cómo funciona JavaScript.

Declaraciones
Las declaraciones en JavaScript son sentencias que definen la creación de una variable, función o clase. Podríamos decir que las declaraciones son como las instrucciones que le damos a JavaScript para que haga algo.

Las funciones y las clases las veremos más adelante en el curso, no te preocupes.

Por ejemplo, una declaración de variable es una sentencia que le da un nombre y un valor a una variable. El siguiente código es un ejemplo de una declaración de variable:

let nombre = 'Juan'
Este código no lo puedes usar con el método console.log, ya que no produce ningún valor. Si lo intentas, obtendrás un error:

console.log(let nombre = "Juan") // SyntaxError
Expresiones
Las expresiones en JavaScript son sentencias que producen un valor. Las expresiones pueden ser tan simples como un solo número o una cadena de texto, o tan complejas como el cálculo de una operación matemática, la evaluación de diferentes valores o la llamada a una función.

Por ejemplo, una expresión numérica es una sentencia que produce un número:

2 + 3 // -> 5
De hecho, lo que guardamos en las variables son expresiones. Por ejemplo, en el siguiente código, la expresión 2 + 3 se evalúa y el resultado se guarda en la variable resultado:

let resultado = 2 + 3
En ese código tenemos la declaración que queremos guardar en la variable resultado el resultado de la expresión 2 + 3.

¿Por qué es importante la diferencia?
La diferencia entre declaraciones y expresiones es importante ya que no podemos usar una declaración donde se espera una expresión y viceversa.

Por ejemplo, ya hemos conocido las estructuras de control if y while. Ambas esperan una expresión que se evalúa a un valor booleano. Por lo tanto, no podemos usar una declaración en su lugar:

// ❌ Ambos códigos están mal y sirven para
// ilustrar que no debes usar declaraciones
// cuando espera expresiones

if (let nombre = "Juan") { // ❌ SyntaxError
  console.log("Hola, Juan")
}

while (let i = 0) { // ❌ SyntaxError
  console.log("Iteración")
  i = i + 1
}