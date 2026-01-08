const arr = [1, 2, 3, 4] // esto es un array

console.log(arr)

// podemos mezclar tipos de datos en un array

const arrDif =  [1, "2", true, null, undefined]

console.log(arrDif)

// podemos acceder a los elementos del array de la siguient forma

console.log(arr[0]) // aqui accedo al primer elemento del array

// Tambien puedo aserlo asginando otra variable la posicion y llamando al array y decirle que muestre la posicion que tiene nuestra variable

const position = 0

console.log(arr[position])

// cuando usamos const no se refiere a que sea un valor fijo si no al tipo de valor, es por eso que no podemos pasar de un array[] a un Number por ejemplo


// tambien podemos modificar el valor de alguna de las posiciones de nuestro array de la siguiente forma


arr[0] = 10 // aqui le estamos asignando un nuevo valor a la posicion 0 de nuestro array

console.log(arr)