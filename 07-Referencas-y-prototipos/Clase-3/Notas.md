Funciones constructoras
¿Qué son las funciones constructoras?
Las funciones constructoras son funciones especiales que se usan para crear múltiples objetos con la misma estructura. Se llaman con la palabra clave new y crean instancias (copias) del objeto.

Analogía: Una función constructora es como un molde para hacer galletas. El molde define la forma, y cada galleta que haces es una instancia única pero con la misma estructura.

// Función constructora (se escribe con mayúscula por convención)
function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

// Creamos instancias
const ana = new Persona('Ana', 25)
const carlos = new Persona('Carlos', 30)

console.log(ana.nombre) // "Ana"
console.log(carlos.nombre) // "Carlos"
console.log(ana.edad) // 25
console.log(carlos.edad) // 30
¿Qué es el this? Es una referencia al objeto que se está creando. En este caso, this se refiere a la instancia de la persona que se está creando.

¿Qué hace la palabra new?
Cuando usas new con una función constructora, JavaScript hace 4 cosas automáticamente:

function Persona(nombre) {
  // 1. Crea un objeto vacío: this = {}
  // 2. Establece el prototipo: this.__proto__ = Persona.prototype
  this.nombre = nombre
  // 3. Ejecuta el código de la función
  // 4. Retorna this automáticamente
}

const ana = new Persona('Ana')
Diagrama del proceso:

     new Persona('Ana')
            ↓
   1. this = {}
   2. this.__proto__ = Persona.prototype
   3. this.nombre = 'Ana'
   4. return this
            ↓
        Objeto ana
La propiedad prototype
Todas las funciones constructoras tienen una propiedad especial llamada prototype. Aquí es donde ponemos los métodos que queremos que compartan todas las instancias.

function Coche(marca, modelo) {
  this.marca = marca
  this.modelo = modelo
}

// Añadimos métodos al prototype
Coche.prototype.acelerar = function () {
  console.log(`${this.marca} ${this.modelo} está acelerando`)
}

Coche.prototype.frenar = function () {
  console.log(`${this.marca} ${this.modelo} está frenando`)
}

// Creamos instancias
const coche1 = new Coche('Toyota', 'Corolla')
const coche2 = new Coche('Honda', 'Civic')

// Ambos pueden usar los métodos del prototype
coche1.acelerar() // "Toyota Corolla está acelerando"
coche2.frenar() // "Honda Civic está frenando"
prototype vs __proto__
¿Qué diferencia hay entre prototype y __proto__? ¡Es muy importante y uno de los errores más comunes en JavaScript!

prototype (solo en funciones constructoras)
Es una propiedad de las funciones constructoras
Nos ayuda a definir qué métodos tendrán las instancias
__proto__ (en todos los objetos)
Es una propiedad de las instancias
Apunta al prototype de la función constructora
function Animal(nombre) {
  this.nombre = nombre
}

Animal.prototype.dormir = function () {
  console.log(`${this.nombre} está durmiendo`)
}

const perro = new Animal('Rex')

// prototype vs __proto__
console.log(Animal.prototype) // "object"
console.log(perro.__proto__) // "object"

// Ambos apuntan al mismo prototipo
console.log(Animal.prototype === perro.__proto__) // true
Diagrama visual:

    Función Animal              Instancia perro
 ┌─────────────────────┐      ┌─────────────────────┐
 │ function Animal()   │      │ nombre: "Rex"       │
 │                     │      │                     │
 │ prototype: {        │◀─────┤ __proto__           │
 │   dormir() {...}    │      │                     │
 │   constructor: ...  │      └─────────────────────┘
 │ }                   │
 └─────────────────────┘
Propiedades vs Métodos
Buena práctica: Las propiedades específicas van en la función constructora, los métodos compartidos van en el prototype.

function Persona(nombre, edad) {
  // Propiedades específicas de cada instancia
  this.nombre = nombre
  this.edad = edad
}

// Métodos compartidos en el prototype
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}

Persona.prototype.cumplirAnios = function () {
  this.edad++
  console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años`)
}

const ana = new Persona('Ana', 25)
const carlos = new Persona('Carlos', 30)

ana.saludar() // "Hola, soy Ana"
carlos.saludar() // "Hola, soy Carlos"
ana.cumplirAnios() // "¡Feliz cumpleaños! Ahora tengo 26 años"
¿Por qué usar prototype?
Eficiencia de memoria
Sin prototype, cada instancia tendría su propia copia del método:

// ❌ Ineficiente - cada instancia tiene su propia función
function PersonaMala(nombre) {
  this.nombre = nombre
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
  }
}

// ✅ Eficiente - todas las instancias comparten la misma función
function PersonaBuena(nombre) {
  this.nombre = nombre
}

PersonaBuena.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}
Comparación de memoria:

  PersonaMala (ineficiente)         PersonaBuena (eficiente)
┌─────────────────────────────┐   ┌─────────────────────────────┐
│ ana1: {                     │   │ ana2: {                     │
│   nombre: "Ana",            │   │   nombre: "Ana",            │
│   saludar: function() {...} │   │   __proto__: {              │
│ }                           │   │     saludar: function(){}  │
│                             │   │   }                         │
│ carlos1: {                  │   │ }                           │
│   nombre: "Carlos",         │   │                             │
│   saludar: function() {...} │   │ carlos2: {                  │
│ }                           │   │   nombre: "Carlos",         │
└─────────────────────────────┘   │   __proto__: ───────────────┼──┐
                                  │ }                           │  │
                                  └─────────────────────────────┘  │
                                    ↑_________________________________│
                                    Misma función compartida
Verificar instancias
JavaScript nos da herramientas para verificar si un objeto es instancia de una constructor function:

function Vehiculo(tipo) {
  this.tipo = tipo
}

const coche = new Vehiculo('automóvil')
const moto = new Vehiculo('motocicleta')

// instanceof - verifica si un objeto es instancia de una función
console.log(coche instanceof Vehiculo) // true
console.log(moto instanceof Vehiculo) // true
console.log(coche instanceof Array) // false

// constructor - referencia a la función que creó el objeto
console.log(coche.constructor === Vehiculo) // true
console.log(moto.constructor === Vehiculo) // true
Herencia con Constructor Functions
Puedes crear jerarquías de herencia combinando constructor functions:

// Constructor padre
function Animal(nombre) {
  this.nombre = nombre
}

Animal.prototype.respirar = function () {
  console.log(`${this.nombre} está respirando`)
}

// Constructor hijo
function Perro(nombre, raza) {
  Animal.call(this, nombre) // Llama al constructor padre
  this.raza = raza
}

// Establecemos la herencia
Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.constructor = Perro

// Añadimos métodos específicos
Perro.prototype.ladrar = function () {
  console.log(`${this.nombre} está ladrando: ¡Guau!`)
}

const rex = new Perro('Rex', 'Labrador')
rex.respirar() // "Rex está respirando" (heredado)
rex.ladrar() // "Rex está ladrando: ¡Guau!" (propio)
Cadena de prototipos resultante:

rex → Perro.prototype → Animal.prototype → Object.prototype → null
Ejercicio práctico
Crea una constructor function llamada Producto que:

Reciba nombre y precio como parámetros
Tenga un método aplicarDescuento(porcentaje) en el prototype
Tenga un método mostrarInfo() que muestre el nombre y precio
Crea dos instancias diferentes y prueba los métodos.

1

Enviar respuesta
Tests
Ejecuta el código para ver los resultados

Para que quede claro...
Funciones constructoras:

Se escriben con mayúscula por convención
Se llaman con new para crear instancias
this se refiere a la nueva instancia
La propiedad prototype:

Solo existe en las funciones
Define métodos compartidos por todas las instancias
Es más eficiente que definir métodos en cada instancia
Instancias (objetos):

Son objetos creados con new
Tienen acceso a métodos del prototype
Su __proto__ apunta al prototype de la función
Ventajas de usar funciones constructoras:

✅ Reutilización de código
✅ Eficiencia de memoria
✅ Herencia estructurada
✅ Verificación de tipos con instanceof
Este sistema de constructor functions fue la base de la programación orientada a objetos en JavaScript antes de que llegaran las clases modernas de ES6.