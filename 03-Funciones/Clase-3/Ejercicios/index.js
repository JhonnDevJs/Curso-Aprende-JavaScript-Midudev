// 🏋️‍♂️ Tus Ejercicios: Dominando el "No Hoisting"
// Vamos a poner a prueba si entendiste cuándo puedes y cuándo no puedes ejecutar código.

// 🟢 Ejercicio 1: Refactorización (De Declaración a Expresión)
// Objetivo: Cambiar la sintaxis y acostumbrarse a ver funciones dentro de variables.

// Tienes esta función antigua en tu código:

// JavaScript

// function calcularArea(base, altura) {
//     return (base * altura) / 2;
// }
// Tu tarea: Reescríbela como una Function Expression asignándola a una constante llamada areaTriangulo. Luego, llámala con base 10 y altura 5 e imprime el resultado.


const areaTriangulo = function (base, altura) {
  return (base * altura) / 2
}

console.log(areaTriangulo(10, 5))


// 🟠 Ejercicio 2: El Detective de Errores (Hoisting)
// Objetivo: Identificar por qué falla el código basado en el flujo de ejecución.

// Copia este código en tu editor tal cual está (con el error incluido):

// JavaScript

// console.log(saludar("Ana"));

// const saludar = function(nombre) {
//     return "Hola, " + nombre;
// };

// Ejecútalo y observa el error (debería decir algo de initialization o reference).

// Corrígelo moviendo las líneas necesarias para que funcione.

// Explícame brevemente: ¿Por qué falló? (Usa tus propias palabras).


const saludar = function(nombre) {
    return "Hola, " + nombre;
};
console.log(saludar("Ana")); // la funcion fallo por que las funciones de expresion no aplican para hoisting por lo que estas deben declararse antes de ser usadas


// 🔴 Ejercicio 3: Funciones Anónimas "al vuelo"
// Objetivo: Usar Function Expressions sin asignarlas a variables (Callbacks anónimos).

// ¿Recuerdas el ejercicio anterior de procesarFrase? Vamos a usarlo de nuevo, pero esta vez no quiero que crees una función afuera con nombre.

// Tienes esta función base (cópiala):

// JavaScript

function operacionMatematica(num1, num2, operacion) {
    return operacion(num1, num2);
}
// Tu tarea: Llama a operacionMatematica pasando:

// El número 10.

// El número 20.

// Como tercer argumento, escribe directamente ahí dentro una function expression anónima (function(a, b) { ... }) que multiplique los dos números.

// Debería verse algo así como: operacionMatematica(10, 20, function(...) { ... })


const resultado = operacionMatematica(10, 20, function(a, b){
  return a * b
})

console.log(resultado)