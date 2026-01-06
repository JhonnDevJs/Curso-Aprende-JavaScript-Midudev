// Objeto sencillo

const person = {
  name: 'Dani',
  lastName: 'Estrada',
  age: 30,
  isWorking: true
}

// Objeto avanzado

const personTwo = {
  name: 'Jhon',
  age: 30,
  isWorking: true,
  family: ['Yarli', 'Salem', 'Dulce', 'Peky'],
  addres: {
    street: 'Calle de la piruleta',
    number: 33,
    city: 'Barcelona'
  },
  walk: function () {
    console.log('Estoy caminando')
  },
  hi: function (textHi) {
    console.log(textHi)
  }
}


// Funcion para usar el objeto personTwo

function callPerson() {
  console.log('Hi! my name is ' + personTwo.name + ' and I have ' + personTwo.age + ' years')
  console.log(`${personTwo.isWorking ? 'I work at IAMSA Group' : 'I not working'}`)
  console.log(`My family is ` + personTwo.family[0] + ', ' + personTwo.family[1] + ', ' + personTwo.family[2] + ', ' + personTwo.family[3])
  console.log(`My addres is ` + personTwo.addres.street + ' N exterior ' + personTwo.addres.number + ' en ' + personTwo.addres.city )

  // Asi usamos un metodo de un objeto
  personTwo.walk()

  // Los metodos tambien pueden recibir parametros como argumentos de funcion
  personTwo.hi('Hola soy un metodo de un objeto que sirve como funcion, y me imprimo pasando este texto como argumento para ese metodo')

  // Puedes usar variables para acceder a las propiedades y métodos de un objeto. Para ello, tienes que usar la notificación por corchetes [].

  const personThree = {name: 'Dani'}
  let property = 'name'

  console.log(personThree[property])

  // Igual que las propiedades, puedes acceder a los métodos de un objeto usando cualquiera de las dos formas anteriormente comentadas:

  let method = 'walk'

  personTwo[method]()
  personTwo.age = 12
  console.log(personTwo.age)
}

callPerson()


function createObject(name, subs) {
  return {
    name: name,
    subscribers: subs,
    hash: name.length * subs,
    getStatus: function() {
      return 'El canal de ' + this.name + ' tiene ' + this.subscribers + ' suscriptores';
    }
  }
}