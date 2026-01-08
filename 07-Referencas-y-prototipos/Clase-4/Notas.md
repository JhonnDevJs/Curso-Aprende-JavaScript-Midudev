Clases
¿Qué son las clases?
Las clases en JavaScript son azúcar sintáctico (syntactic sugar) sobre las funciones constructoras que hemos visto en la clase anterior. No añaden nueva funcionalidad, solo hacen que el código sea más limpio y fácil de leer.

¿Qué significa azúcar sintáctico? Es una forma más dulce y fácil de escribir algo que ya existía.

Sintaxis de clases vs funciones constructoras
Funciones constructoras (visto en la clase anterior):
function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}
Clases (nueva sintaxis):
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
  }
}
Ambos ejemplos hacen exactamente lo mismo. El resultado es idéntico, pero la sintaxis de las clases es más clara y fácil de leer.

El constructor
El constructor es un método especial que se ejecuta automáticamente cada vez que se crea una nueva instancia de la clase. Recibe los parámetros que se pasan al crear la instancia y se encarga de inicializar el objeto.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    console.log(`-> Nueva persona: ${nombre} de ${edad} años`)
  }
}

const ana = new Persona('Ana', 25)
// -> Nueva persona: Ana de 25 años

const carlos = new Persona('Carlos', 30)
// -> Nueva persona: Carlos de 30 años
Propiedades y métodos estáticos
A veces, queremos que cierta información o métodos, puedan ser accesibles sin necesidad de crear una instancia de la clase. Para ello, usamos la palabra clave static. Al hacer esto, la propiedad o método estático se asocia a la clase, no a las instancias. Y no necesitamos crear una instancia de la clase para acceder a ellos.

class Matematicas {
  static PI = 3.14159

  static sumar(a, b) {
    return a + b
  }

  static calcularArea(radio) {
    return this.PI * radio * radio
  }

  static esPar(numero) {
    return numero % 2 === 0
  }
}

// Se llaman en la clase, no en instancias
console.log(Matematicas.sumar(5, 3)) // 8
console.log(Matematicas.calcularArea(10)) // 314.159
console.log(Matematicas.esPar(4)) // true

// No funcionan en instancias
const mat = new Matematicas()
// mat.sumar(1, 2)  // ❌ Error: mat.sumar is not a function
Getters y Setters
Los getters y setters son métodos especiales que se usan para obtener y establecer el valor de una propiedad. Son muy útiles para controlar el acceso a las propiedades y para añadir lógica a la hora de obtener o establecer un valor, sin necesidad de crear un método para ello.

class Temperatura {
  constructor(celsius = 0) {
    this._celsius = celsius // Convención: _ para propiedades "privadas"
  }

  // Getter - se usa como propiedad
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32
  }

  // Setter - se usa como asignación
  set fahrenheit(valor) {
    this._celsius = ((valor - 32) * 5) / 9
  }

  get celsius() {
    return this._celsius
  }

  set celsius(valor) {
    if (valor < -273.15) {
      throw new Error('Temperatura no puede ser menor a -273.15°C')
    }
    this._celsius = valor
  }
}

const temp = new Temperatura(25)

// usando los getters, fíjate que no usamos paréntesis
console.log(temp.celsius) // 25
console.log(temp.fahrenheit) // 77

// usando los setters, como si fuera una asignación
temp.fahrenheit = 100 // Usando el setter
console.log(temp.celsius) // 37.777...

// los setters ejecutan la lógica que hay dentro de ellos
temp.celsius = -300 // Error: Temperatura no puede ser menor a -273.15°C
Propiedades y métodos privados
Esta característica está disponible desde ES2022

Podemos tener propiedades y métodos privados en las clases. Esto significa que no se pueden acceder ni modificar desde fuera de la clase. Para crearlos, usamos el símbolo # delante del nombre de la propiedad o método.

class CuentaBancaria {
  #saldo = 0 // Propiedad privada
  #numeroCuenta // Propiedad privada

  constructor(numeroCuenta, saldoInicial = 0) {
    this.#numeroCuenta = numeroCuenta
    this.#saldo = saldoInicial
  }

  // Método privado
  #validarOperacion(cantidad) {
    return cantidad > 0 && cantidad <= this.#saldo
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad
      console.log(`Depositado: $${cantidad}`)
    }
  }

  retirar(cantidad) {
    // ✅ aquí sí podemos acceder a los métodos y propiedades privados
    if (this.#validarOperacion(cantidad)) {
      this.#saldo -= cantidad
      console.log(`Retirado: $${cantidad}`)
    } else {
      console.log('Operación no válida')
    }
  }

  get saldo() {
    return this.#saldo
  }
}

const cuenta = new CuentaBancaria('123456', 1000)
cuenta.depositar(500)
console.log(cuenta.saldo) // 1500

// No podemos acceder directamente a propiedades privadas
// console.log(cuenta.#saldo)     // ❌ SyntaxError
// cuenta.#validarOperacion(100)  // ❌ SyntaxError
¿Cuándo usar clases?
Usa clases cuando:

✅ Necesites herencia (mucho más simple)
✅ Vengas de otros lenguajes orientados a objetos
✅ Quieras sintaxis moderna y limpia
Las funciones constructoras siguen siendo válidas aunque menos recomnedadas:

📝 Si necesitas compatibilidad con código antiguo
📝 Casos muy específicos donde necesites control total
Diferencias importantes
Constructor Functions

Clases

Sintaxis	Verbosa, separada	
Limpia, agrupada

Hoisting	Sí	No
Modo estricto	Manual	Automático
Ejercicio práctico
Crea una clase Producto que:

Tenga constructor con nombre, precio y categoria
Tenga un getter precioConIVA que añada 21% de IVA
Tenga un setter precio que valide que el precio sea mayor a 0
Tenga un método aplicarDescuento(porcentaje) que reduzca el precio
Tenga un método estático compararPrecios(producto1, producto2) que retorne el más barato
1
2
3
4
5
6
7
class Producto {
    constructor() {}
    get precioConIVA() {}
    set precio(value) {}
    aplicarDescuento(porcentaje) {}
    static compararPrecios(producto1, producto2) {}
  }
Enviar respuesta
Tests
Ejecuta el código para ver los resultados

Para que quede claro...
Las clases ES6 son azúcar sintáctico que hace más fácil trabajar con:

✅ Métodos estáticos con static
✅ Propiedades privadas con #
✅ Getters y setters más claros
✅ Herencia (que veremos en la siguiente clase)
Lo importante: Por debajo siguen siendo constructor functions y prototipos. JavaScript no cambió, solo la forma de escribirlo.

¿Usar clases o constructor functions? Las clases son generalmente preferibles por su sintaxis más clara. Las constructor functions siguen siendo válidas para compatibilidad o casos específicos.

Las clases hacen que JavaScript sea más familiar para desarrolladores de otros lenguajes, sin perder la flexibilidad de los prototipos. 🎉