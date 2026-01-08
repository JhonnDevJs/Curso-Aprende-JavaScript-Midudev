Herencia en Clases
Las clases en JavaScript permiten hereda propiedades y métodos de una clase padre. A este proceso se le llama herencia. Es posible que todo esto te suene familiar, porque ya lo has visto en la clase anterior cómo conseguirlo con los prototipos, pero ahora veremos cómo lograrlo con clases.

extends
La principal ventaja de las clases es que simplifican enormemente la herencia de objetos gracias a la palabra clave extends. Vamos a crear una clase Animal, que será la clase padre, y una clase Perro, que será la clase que herede de Animal.

class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }

  dormir() {
    console.log(`${this.nombre} está durmiendo`)
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre) // Llama al constructor del padre
    this.raza = raza
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau!`)
  }
}

const rex = new Perro('Rex', 'Labrador')
rex.dormir() // "Rex está durmiendo" (heredado)
rex.ladrar() // "Rex dice: ¡Guau!" (propio)
De esta forma, la clase Perro hereda el método dormir de la clase Animal y añade el método ladrar.

La palabra clave super
Como hemos visto en el ejemplo anterior, hay una palabra super en el método constructor de la clase Perro. Esta función se usa para llamar al constructor de la clase padre y también nos permite acceder a los métodos y propiedades de la clase padre.

class Vehiculo {
  acelerar() {
    console.log('Acelerando...')
  }
}

class Moto extends Vehiculo {
  acelerar() {
    super.acelerar() // Llama al método del padre
    console.log('¡Haciendo caballito!') // Añade funcionalidad
  }
}

const moto = new Moto()
moto.acelerar()
// "Acelerando..."
// "¡Haciendo caballito!"
Ejemplo práctico de herencia
Veamos un ejemplo más completo que muestra cómo funciona la herencia en la práctica. Tenemos una clase Empleado, que será la clase padre, y las clases Programador y Manager, que serán las clases que hereden de Empleado. Normalmente las clases hijas suelen tener métodos y propiedades propias y más específicos.

class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre
    this.salario = salario
  }

  trabajar() {
    console.log(`${this.nombre} está trabajando`)
  }

  cobrar() {
    console.log(`${this.nombre} cobra ${this.salario}€`)
  }
}

class Programador extends Empleado {
  constructor(nombre, salario, lenguaje) {
    super(nombre, salario) // Llama al constructor padre
    this.lenguaje = lenguaje
  }

  // Sobrescribe el método del padre
  trabajar() {
    super.trabajar() // Llama al método padre
    console.log(`Programando en ${this.lenguaje}`)
  }

  // Método propio
  programar() {
    console.log(`${this.nombre} está programando en ${this.lenguaje}`)
  }
}

class Manager extends Empleado {
  constructor(nombre, salario, equipo) {
    super(nombre, salario)
    this.equipo = equipo
  }

  trabajar() {
    super.trabajar()
    console.log(`Gestionando un equipo de ${this.equipo.length} personas`)
  }

  dirigir() {
    console.log(`${this.nombre} está dirigiendo el equipo`)
  }
}

const dev = new Programador('Ana', 45000, 'JavaScript')
const jefe = new Manager('Carlos', 60000, ['Ana', 'Luis', 'María'])

dev.trabajar()
// "Ana está trabajando"
// "Programando en JavaScript"

jefe.trabajar()
// "Carlos está trabajando"
// "Gestionando un equipo de 3 personas"

dev.cobrar() // "Ana cobra 45000€" (heredado)
jefe.dirigir() // "Carlos está dirigiendo el equipo" (propio)
Cadenas de herencia
Podemos crear cadenas de herencia más complejas donde una clase herede de otra que ya hereda de una tercera:

class SerVivo {
  constructor(nombre) {
    this.nombre = nombre
    this.vivo = true
  }

  respirar() {
    console.log(`${this.nombre} está respirando`)
  }
}

class Animal extends SerVivo {
  constructor(nombre, especie) {
    super(nombre)
    this.especie = especie
  }

  moverse() {
    console.log(`${this.nombre} se está moviendo`)
  }
}

class Mamifero extends Animal {
  constructor(nombre, especie, pelaje) {
    super(nombre, especie)
    this.pelaje = pelaje
  }

  amamantar() {
    console.log(`${this.nombre} está amamantando`)
  }
}

class Gato extends Mamifero {
  constructor(nombre, raza) {
    super(nombre, 'Felino', true)
    this.raza = raza
  }

  maullar() {
    console.log(`${this.nombre} dice: ¡Miau!`)
  }
}

const michi = new Gato('Michi', 'Persa')

// Puede usar métodos de todas las clases padre
michi.respirar()    // De SerVivo
michi.moverse()     // De Animal
michi.amamantar()   // De Mamifero
michi.maullar()     // Propio de Gato
Ventajas de la herencia con clases
Comparado con funciones constructoras:

✅ Sintaxis más clara: extends vs configuración manual de prototipos
✅ Super simplificado: super() vs Parent.call(this)
✅ Menos propenso a errores: JavaScript maneja la cadena de prototipos automáticamente
✅ Más legible: El código expresa claramente las relaciones de herencia
Lo importante recordar:

Las clases son azúcar sintáctico sobre prototipos
La herencia sigue funcionando igual por debajo
super() debe llamarse antes de usar this en el constructor hijo
Los métodos se heredan automáticamente a través de la cadena de prototipos
La herencia con clases hace que JavaScript sea más accesible para desarrolladores de otros lenguajes, manteniendo toda la potencia de los prototipos. 🚀

