Closures (Clausuras)
Los closures (clausuras) son uno de los conceptos más poderosos y elegantes de JavaScript. Una vez que los entiendas, podrás escribir código más limpio, crear patrones avanzados y entender mejor cómo funciona JavaScript internamente.

¿Qué son los Closures?
Un closure (clausura) es cuando una función "recuerda" las variables de su scope padre, incluso después de que esa función padre haya terminado de ejecutarse.

En otras palabras, un closure te permite acceder al scope de una función externa desde una función interna. Los closures se crean cada vez que se define una función.

Pero lo mejor es que lo veamos con un ejemplo:

function crearContador() {
  let cuenta = 0 // Variable en el scope padre
  
  return function() {
    cuenta++ // La función interna "recuerda" cuenta
    return cuenta
  }
}

const contador = crearContador()

console.log(contador()) // 1
console.log(contador()) // 2
console.log(contador()) // 3

// ¡La variable 'cuenta' sigue existiendo!
¿Cómo funciona?
crearContador() crea una variable cuenta
Devuelve una función que usa esa variable
Aunque crearContador() termina, la función devuelta mantiene acceso a cuenta
Cada vez que llamamos contador(), modifica la misma variable cuenta
Diagrama de un Closure
┌─────────────────────────────────────────────────┐
│        FUNCIÓN EXTERNA: crearContador()         │
│                                                 │
│  let cuenta = 0  ← Esta variable queda          │
│                    "capturada" por el closure   │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │         FUNCIÓN INTERNA                   │  │
│  │                                           │  │
│  │  return function() {                      │  │
│  │    cuenta++     ← Accede a 'cuenta'       │  │
│  │    return cuenta                          │  │
│  │  }                                        │  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  La función interna "recuerda" la variable      │
│  'cuenta' incluso cuando crearContador()        │
│  ya ha terminado de ejecutarse                  │
│                                                 │
└─────────────────────────────────────────────────┘
Ejemplos Prácticos de Closures
1. Múltiples Contadores Independientes
function crearContador() {
  let cuenta = 0
  
  return function() {
    cuenta++
    return cuenta
  }
}

const contador1 = crearContador()
const contador2 = crearContador()

// contador1 y contador2 son independientes
// y cada uno tiene su propia copia de la variable "cuenta"

console.log(contador1()) // 1
console.log(contador1()) // 2

console.log(contador2()) // 1 (independiente)
console.log(contador1()) // 3
console.log(contador2()) // 2
Cada contador tiene su propia copia de la variable cuenta. ¡Esto es la magia de los closures!

2. También con parámetros
No sólo pasa con las variables dentro de la función, también podemos acceder a los parámetros de la función padre.

function crearSaludador(saludo) {
  return function(nombre) {
    return saludo + ', ' + nombre + '!'
  }
}

const saludarEnEspanol = crearSaludador('Hola')
const saludarEnIngles = crearSaludador('Hello')
const saludarEnFrances = crearSaludador('Bonjour')

console.log(saludarEnEspanol('Ana'))    // "Hola, Ana!"
console.log(saludarEnIngles('John'))    // "Hello, John!"
console.log(saludarEnFrances('Marie'))  // "Bonjour, Marie!"
3. Datos Privados con Closures
Una utilidad de los closures es crear datos privados. De forma que no se pueda acceder a ellos desde fuera de la función, pero sí desde dentro.

Así podemos devolver un objeto con métodos que nos permitan acceder a los datos privados y asegurarnos de que no se puedan modificar desde fuera.

function crearPersona(nombreInicial) {
  let nombre = nombreInicial // Variable "privada"
  let edad = 0
  
  return {
    getNombre: function() {
      return nombre
    },
    setNombre: function(nuevoNombre) {
      nombre = nuevoNombre
    },
    getEdad: function() {
      return edad
    },
    cumplirAnos: function() {
      edad++
      return edad
    }
  }
}

const persona = crearPersona('Juan')

console.log(persona.getNombre()) // "Juan"
persona.setNombre('Carlos')
console.log(persona.getNombre()) // "Carlos"
console.log(persona.cumplirAnos()) // 1

// No podemos acceder directamente a las variables privadas
console.log(persona.nombre) // undefined
console.log(persona.edad)   // undefined
Closures vs Variables Globales
No hay que confundir los closures con las variables globales. Son dos conceptos muy distintos y, de hecho, las closures pueden ser una solución para evitar el uso de variables globales y algunos problemas que pueden surgir con ellas:

❌ Problema con Variables Globales
// ❌ Variables globales - pueden ser modificadas por cualquiera
let contador = 0

function incrementar() {
  contador++
  return contador
}

function decrementar() {
  contador--
  return contador
}

// Problema: cualquier código puede modificar 'contador'
contador = 1000 // ¡Ups! Se rompió nuestro contador
✅ Solución con Closures
// ✅ Closure - datos protegidos
function crearContador() {
  let contador = 0 // Variable privada
  
  return {
    incrementar: function() {
      contador++
      return contador
    },
    decrementar: function() {
      contador--
      return contador
    },
    obtenerValor: function() {
      return contador
    }
  }
}

const miContador = crearContador()

console.log(miContador.incrementar()) // 1
console.log(miContador.incrementar()) // 2
console.log(miContador.decrementar()) // 1

// No podemos acceder directamente a 'contador'
// miContador.contador = 1000 // No funciona
Ventajas de los Closures
✅ Beneficios
Encapsulación: Datos privados y protegidos
Persistencia: Las variables mantienen su estado
Flexibilidad: Funciones configurables y reutilizables
Modularidad: Código organizado y limpio
Memoria: Cada closure mantiene su propio contexto
⚠️ Consideraciones
Memoria: Los closures mantienen referencias a variables, pueden consumir más memoria
Complejidad: Pueden hacer el código más difícil de entender para principiantes
Los datos clave de las closures
Son funciones que "recuerdan" variables de su scope padre
Se crean automáticamente cuando defines funciones anidadas
Mantienen acceso a variables incluso después de que la función padre termine
Características Principales
✅ Persistencia de variables
✅ Encapsulación de datos
✅ Creación de funciones especializadas
✅ Mantenimiento de estado privado
Ventajas
✅ Código más limpio y organizado
✅ Datos protegidos de modificaciones externas
✅ Funciones reutilizables y configurables
✅ Patrones avanzados de programación