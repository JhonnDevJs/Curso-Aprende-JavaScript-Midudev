// 🟢 Ejercicio 1: La Flecha Básica (Con cuerpo)
// Objetivo: Sintaxis básica manteniendo la lógica compleja.

// Convierte esta función a una Arrow Function. Ojo: Como tiene un if adentro, no puedes usar el return implícito. Debes usar llaves {}.

// JavaScript

// function verificarStock(cantidad) {
//     if (cantidad > 0) {
//         return "Hay disponible";
//     } else {
//         return "Agotado";
//     }
// }


const verificarStock = (cantidad) => {
  if (cantidad > 0) {
    return "Hay disponible";
  } else {
    return "Agotado"
  }
}

console.log(verificarStock(1))
console.log(verificarStock(0))


// 🟡 Ejercicio 2: El Francotirador (Return Implícito)
// Objetivo: Eliminar llaves y return para máxima limpieza.

// Convierte esta función matemática en una Arrow Function de una sola línea.

// JavaScript

// function calcularAreaCuadrado(lado) {
//     return lado * lado;
// }


const calcularAreaCuadrado = (lado) => lado * lado 

calcularAreaCuadrado(3)


// 🔴 Ejercicio 3: Refactorizando tu código
// Objetivo: Aplicar lo aprendido a tus ejercicios anteriores.

// Recupera tu función crearSlug del tema anterior. Era así:

// JavaScript

// const clearSlug = (titulo, categoria) => { 
//     return categoria + "/" + titulo;
// }
// Tu misión: Reescríbela para que use return implícito (sin llaves, sin palabra return).


const clearSlug = (titulo, categoria) => categoria + "/" + titulo

clearSlug("mi-slug", "blog")