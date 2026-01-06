// Atajos para cuando la key del objetoy la variable son del mismo nombre

const name = 'Juan'
const lastName = 'Perez'

const person = {
  name: name,
  age: 30,
  lastName: lastName
}

console.log(person)

// SI USAS EL ATAJO SE VERIA ASI

const personTwo = {
  name,
  age: 30,
  lastName,
}

console.log(personTwo)

// Otro atajo y muy utilizado en React es el destructuring o desestructuracion

const { age } = personTwo

// Ahora podemos usar la propiedad sin necesidad de usar cada vez personTwo.age

console.log(age)


// Hay un problema muy comun que se da cuando tienes que hacer uso de una propiedad de un objeto, el cual tiene el mismo nombre que una varibale ya existente como en el caso de name

// Esto hace que renombremos a la propiedad del objeto, NOTA: debes tomar en cueta que siempre que hagas esto deberas usar el nuevo nombre a partir del momento en que lo cambias ya que el anterior dejara de existir

const { name: namePerson } = person

console.log(namePerson)

// Asi podemos crear un nuevo valor desde la desestructuracion

const { newValue = 'nuevo valor' } = personTwo

console.log(newValue) //si lo vemos ahor ase ha agregado la nueva prop sin necesidad de crearla manualmene o insertarla con el metodo

person.newSecondValue = 'segundo nuevo valor'

console.log(person.newSecondValue)