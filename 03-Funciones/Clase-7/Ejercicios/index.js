// 🟢 Ejercicio 1: El Saludo Personalizado (La Fábrica)
// Crea una función crearSaludador que reciba un saludo (ej: "Hola").

// Debe retornar una función anónima que reciba un nombre y retorne el saludo completo.

// Prueba:

// JavaScript

// const saludarConHola = crearSaludador("Hola");
// const saludarConBye = crearSaludador("Adiós");

// console.log(saludarConHola("Juan")); // "Hola Juan"
// console.log(saludarConBye("Pedro")); // "Adiós Pedro"


function crearSaludador(saludo) {
  return function (nombre){
    return saludo + nombre
  }
}

const saludarConHola = crearSaludador("Hola")
const saludarConBye = crearSaludador("Adiós")

console.log(saludarConHola("Juan"))
console.log(saludarConBye("Pedro"))


// 🟡 Ejercicio 2: El Banco Seguro (Datos Privados)
// Simula una cuenta bancaria simple.

// Crea una función crearCuenta que inicialice una variable local saldo = 0.

// Debe retornar un objeto con dos funciones (métodos):

// depositar(cantidad): Suma al saldo.

// verSaldo(): Retorna el saldo actual.

// Reto: Intenta acceder a la variable saldo directamente desde fuera. No deberías poder. Solo a través de las funciones.


function crearCuenta(){
  let saldo = 0

  return {
    depositar: function (cantidad){
      return saldo = saldo + cantidad
    },
    verSaldo: function (){
      return saldo
    }
  }
}

const miCuenta = crearCuenta()

miCuenta.depositar(100);
console.log(miCuenta.verSaldo());

// 🔴 Ejercicio 3: El Contador con Pasos (Lógica)
// Basándote en el ejemplo del contador que te di arriba:

// Modifica la función para que crearContador reciba un número inicial (ej: empezar en 10).

// Haz que la función interna reciba un parámetro pasos (cuánto sumar).

// Prueba: Crea un contador que empiece en 10 y súmale de 5 en 5.

function crearContador(n) {
  console.log(n)
  return function (pasos) {
    return n += pasos
  }
}

const initCounter = crearContador(10)

console.log(initCounter(5))
console.log(initCounter(5))
console.log(initCounter(5))