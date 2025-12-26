// 🟢 Ejercicio 1: La Caja Fuerte (Scope Local)
// Crea una variable global const codigo = "1234".

// Crea una función validar que defina su propia variable const codigo = "9999" y la imprima.

// Ejecuta la función.

// Fuera de la función, imprime codigo.

// Pregunta: ¿Cambió el código global?


const codigo = "1234"

function validations () {
  const codigo = "9999"
  console.log("el codigo es: " + codigo)
}

validations()
console.log(codigo)

// 🟡 Ejercicio 2: El Fugitivo (Block Scope con let)
// Mira este código con atención. Cópialo y ejecútalo mentalmente (o en JS) y dime si funcionará o dará error.

// JavaScript

// function verificarAcceso() {
//   const acceso = true;
  
//   if (acceso) {
//     let mensaje = "Acceso Permitido";
//   }
  
//   console.log(mensaje); // <--- ¿Qué pasará aquí?
// }

// verificarAcceso();
// Tarea: Ejecútalo, ve el error y explícame por qué falló. Luego arréglalo para que funcione (pista: mueve la declaración de la variable).


// Respuesta: ocurrira un error "undefined" ya que el mensaje de declara dentro de un bloque if que es de nivel mas profundo que el console.log


// 🔴 Ejercicio 3: Contaminación Global (El peligro de no declarar)
// Este es un error muy común.

// Crea una función crearDesastre.

// Dentro, asigna un valor a una variable sin usar let, const ni var. Simplemente: nombre = "Hacker".

// Ejecuta la función crearDesastre().

// Fuera de la función, intenta imprimir console.log(nombre).

// Sorpresa: ¿Por qué puedes verla afuera si se creó adentro? (Explícame tu teoría).


function crearDesastre(){
  nombre = "Hacker"
}

crearDesastre()

console.log(nombre)


// Al no estar ddeclarada de forma estricta dentro de la funcion lo que pasa es que se vuelve como un valor global y por ello pasa a estar arriba del todo y accesible para cualquiera