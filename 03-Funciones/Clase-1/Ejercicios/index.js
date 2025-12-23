// 🟢 Ejercicio 1: El "Microondas" de Bienvenida
// Objetivo: Declaración básica y console.log.

// Crea una función llamada darBienvenida.

// Dentro, debe imprimir en consola un mensaje que diga: "Bienvenido a JEG Dev Studios".

// Reto: Llama a la función 3 veces seguidas para ver el mensaje repetido.


function darBienvenida() {
  console.log("Bienvenido a JEG Dev Studios")
}

darBienvenida()
darBienvenida()
darBienvenida()


// 🟡 Ejercicio 2: El Cajero Automático (Return)
// Objetivo: Entender return vs console.log.

// Crea una función llamada obtenerSaldo.

// Esta función NO debe imprimir nada en consola.

// Debe retornar el número 1000.

// Fuera de la función, crea una variable miSaldo y guárdale lo que devuelva la función.

// Finalmente, imprime miSaldo en la consola.

function obtenerSaldo() {
  return 1000
}

const miSaldo = obtenerSaldo()

console.log(miSaldo)

// 🟠 Ejercicio 3: El Dado de Rol
// Objetivo: Uso de Math.random y Math.floor (Lógica).

// Basándote en el ejemplo de la clase (número del 1 al 10), crea una función llamada lanzarDado.

// Debe retornar un número aleatorio entre 1 y 6.

// Pista: Revisa bien por qué en el ejemplo multiplicaban por 10 y ajusta tu multiplicador.

function lanzarDado() {
  let random = Math.random()

  let multiplied = random * 6

  let rounded = Math.floor(multiplied)

  let result = rounded + 1

  return result
}

console.log(lanzarDado())
console.log(lanzarDado())
console.log(lanzarDado())
console.log(lanzarDado())

// 🔵 Ejercicio 4: Generador de Descuentos (Lógica interna)
// Objetivo: Variables dentro de la función.

// Imagina que para tu SaaS "CalculFisc" quieres dar un descuento aleatorio sorpresa. Crea una función generarDescuento.

// Genera un número aleatorio entre 0 y 1.

// Si el número es menor a 0.5, la función debe retornar 10 (10% de descuento).

// Si el número es mayor o igual a 0.5, debe retornar 20 (20% de descuento).

// Nota: Recuerda que puedes usar if/else dentro de la función.


function generarDescuento() {
  let random = Math.random()

  if (random <= 0.5) {
    return 10
  }
  
  return 20
}

console.log(generarDescuento())
console.log(generarDescuento())
console.log(generarDescuento())

// 🟣 Ejercicio 5: El Simulador de API (Hardcoded)
// Objetivo: Simular datos complejos.

// A veces, en Frontend, simulamos que recibimos datos mientras el Backend no está listo. Crea una función llamada obtenerUsuario.

// Debe retornar un Objeto (no un string, ni un número) con esta estructura fija:

// JavaScript

// {
//   nombre: "Juan",
//   email: "juan@example.com"
// }
// Ejecuta la función y muestra el resultado en un console.log.

function obtenerUsuario() {
  return {
    nombre: "Juan",
    email: "juan@example.com"

  }
}

let person = obtenerUsuario()

console.log(person)