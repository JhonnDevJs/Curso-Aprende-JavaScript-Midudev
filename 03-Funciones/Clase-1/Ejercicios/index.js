function saludar() {
  console.log("Hola Mundo")
}

saludar()

// Funcion que devuelve agun valor

function suma() {
  return 1 + 1
}

const resultado = suma()
console.log(resultado)

// Funciones con metodos


Math.random()
Math.floor()
Math.ceil()
Math.round()

// Como se pueden usar

function getRandomNumber() {
  const random = Math.random()

  const multiplied = random * 10

  const rounded = Math.floor(multiplied)

  const result = rounded + 1

  return result
}

getRandomNumber()
getRandomNumber()
getRandomNumber()
getRandomNumber()