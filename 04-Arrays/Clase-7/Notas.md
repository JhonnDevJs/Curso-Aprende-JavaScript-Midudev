Matrices
En matemáticas y en programación, una matriz se refiere a una colección de elementos dispuestos en filas y columnas. En términos más sencillos, y en JavaScript, podemos representar una matriz como un array de arrays.

Creación de Matrices
Para empezar, aquí se muestra cómo se puede crear una matriz simple de 2x3 en JavaScript:

const matriz = [
  [1, 2, 3],
  [4, 5, 6]
]
Las matrices no tienen por qué ser cuadradas. Pueden tener cualquier número de filas y columnas.

Acceso a los Elementos de una Matriz
Para acceder a los elementos de una matriz, necesitaremos utilizar dos índices: uno para la fila y otro para la columna.

Por ejemplo, si queremos acceder al número 6 en la matriz anterior, haríamos lo siguiente:

let numero = matriz[1][2]
console.log(numero) // -> 6
Aquí, el primer índice, [1], se refiere a la segunda fila (recuerda que los arrays en JavaScript tienen un índice base cero), y el segundo índice, [2], se refiere a la tercera columna.

Iteración sobre Matrices
Podemos utilizar bucles anidados para iterar sobre todos los elementos de una matriz. Aquí hay un ejemplo de cómo hacerlo utilizando un bucle for:

for (let i = 0; i < matriz.length; i++) { // {1}
  for (let j = 0; j < matriz[i].length; j++) { // {2}
    console.log(matriz[i][j])
  }
}
En este ejemplo, el bucle externo recorre {1} cada fila de la matriz, mientras que el bucle interno {2} recorre cada elemento dentro de una fila específica.

Puedes usar otros bucles para iterar sobre una matriz, como un bucle while o un bucle for...of. También puedes utilizar el método forEach() de los arrays para iterar sobre una matriz, pero tendrás que anidar dos llamadas a forEach() para iterar sobre todos los elementos de la matriz.

matriz.forEach((fila, filaIndex) => {
  fila.forEach((elemento, columnaIndex) => {
    console.log('Fila ' + filaIndex)
    console.log('Columna ' + columnaIndex)
    console.log('Elemento ', elemento)
    console.log('')
  })
})
Ejemplo práctico de Matrices
Un ejemplo sencillo de entender pero muy útil es el juego del 3 en raya. En este juego, los jugadores se turnan para colocar sus fichas en una cuadrícula de 3x3.

El objetivo del juego es colocar tres fichas en una fila, columna o diagonal.

Para representar el tablero de juego, podemos utilizar una matriz de 3x3. Cada elemento de la matriz puede ser una cadena que represente una ficha:

const tablero = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'X']
]
Ahora, para buscar si hay un ganador en el tablero, podemos utilizar un bucle for para iterar sobre cada fila y columna del tablero.

Si encontramos tres fichas iguales en una fila, columna o diagonal, entonces tenemos un ganador.

// Verifica las líneas horizontales
for (let i = 0; i < 3; i++) {
  if (
    tablero[i][0] === tablero[i][1] &&
    tablero[i][1] === tablero[i][2]
  ) {
    console.log(`El ganador es: ${tablero[i][0]}`);
  }
}

// Verifica las líneas verticales
for (let i = 0; i < 3; i++) {
  if (
    tablero[0][i] === tablero[1][i] &&
    tablero[1][i] === tablero[2][i]
  ) {
    console.log(`El ganador es: ${tablero[0][i]}`);
  }
}

// Verifica la diagonal de arriba izquierda a derecha abajo
if (
  tablero[0][0] === tablero[1][1] &&
  tablero[1][1] === tablero[2][2]
) {
  console.log(`El ganador es: ${tablero[0][0]}`);
}

// Verifica la diagonal de derecha arriba a izquierda abajo
if (
  tablero[0][2] === tablero[1][1] &&
  tablero[1][1] === tablero[2][0]
) {
  console.log(`El ganador es: ${tablero[0][2]}`);
}
Las matrices son muy útiles y necesarias para muchos juegos (ajedrez, damas, buscaminas, etc.) y aplicaciones (hojas de cálculo, bases de datos, etc.). Así que es importante que te familiarices con ellas.