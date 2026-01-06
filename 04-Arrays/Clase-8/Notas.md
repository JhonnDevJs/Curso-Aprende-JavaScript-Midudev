Algoritmos con Arrays
Los algoritmos son una serie de pasos que se realizan para resolver un problema. En este caso, vamos a ver algunos algoritmos que se pueden realizar con arrays donde se pueden aplicar los conceptos de complejidad algorítmica (cuánto tarda un algoritmo en ejecutarse).

Algoritmo para encontrar el número mayor
El primer algoritmo que vamos a ver es el de encontrar el número mayor de un array. Para ello, vamos a crear una función que reciba un array de números y devuelva el número mayor.

function findMaxAlgorithm(array) {
  let max = array[0] // recuperamos el primer elemento del array

  // recorremos el array desde el segundo elemento
  for (let i = 1; i < array.length; i++) {
    // ¿es el elemento actual mayor que el máximo?
    if (array[i] > max) {
      // si es así, lo guardamos como nuevo máximo
      max = array[i]
    }
  }

  // devolvemos el máximo número que hemos encontrado
  return max;
}
En JavaScript podríamos usar el método Math.max para encontrar el número mayor de un array. Se usaría así: Math.max(...array). Pero por motivos didácticos, hemos creado nuestro propio algoritmo. Siempre que puedas, te recomiendo usar Math.max en su lugar.

Complejidad algorítmica
Para calcular la complejidad algorítmica del algoritmo anterior, tenemos que tener en cuenta el número de operaciones que se realizan.

En nuestro ejemplo, para encontrar el mayor número de un array tenemos que recorrer todos los elementos del array. Si el array tiene 10 elementos, tendremos que recorrerlo 10 veces. Si tiene 100 elementos, tendremos que recorrerlo 100 veces. Es decir, el número de operaciones que se realizan es igual al número de elementos del array.

En programación se usa la notación O(n) para indicar que el número de operaciones que se realizan es igual al número de elementos del array. En este caso, n es el número de elementos del array.

Búsqueda binaria
Imagina que tienes un array de números ordenados de menor a mayor. Por ejemplo, [11, 18, 23, 25, 48, 55, 88, 111, 120]. Si te pido que busques el número 55 en el array, ¿cómo lo harías?.

Una forma de hacerlo sería recorrer el array desde el principio hasta el final y comprobar si el número que estamos buscando es igual al número actual. Si es así, hemos encontrado el número. Si no, seguimos buscando.

function findNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true
    }
  }

  return false
}
Obviamente, podríamos usar el método .includes() para comprobar si un array contiene un elemento. Pero por motivos didácticos, hemos creado nuestro propio algoritmo. Siempre que puedas, te recomiendo usar .includes() en su lugar.

La complejidad algorítmica de este algoritmo es O(n). Es decir, el número de operaciones que se realizan es igual al número de elementos del array. Pero podemos hacerlo mejor.

Existe un algoritmo muy popular llamado búsqueda binaria que nos permite encontrar un elemento en un array ordenado en O(log n). Es decir, el número de operaciones que se realizan es igual al logaritmo del número de elementos del array. ¿Qué significa esto?.

Imagina que tenemos un array de 10 elementos. Si aplicamos la búsqueda binaria, el número de operaciones que se realizan es igual a 3. Si tenemos un array de 100 elementos, el número de operaciones que se realizan es igual a 6. ¿Ves la diferencia? ¡Es mucho más rápido!

Para aplicar la búsqueda binaria, tenemos que tener en cuenta que el array tiene que estar ordenado de menor a mayor. Si no, no funcionará.

Implementación de la búsqueda binaria
La idea de la búsqueda binaria es ir dividiendo el array en dos mitades. Si el elemento que estamos buscando es mayor que el elemento de la mitad del array, tenemos que buscar en la mitad derecha. Si el elemento que estamos buscando es menor que el elemento de la mitad del array, tenemos que buscar en la mitad izquierda. Y así sucesivamente hasta encontrar el elemento que estamos buscando.

function busquedaBinaria(array, elemento) {
  let index = 0 // primer elemento del array
  let final = array.length - 1 // último elemento del array a buscar
  
  // mientras el índice sea menor o igual que el final
  // seguiremos buscando
  while (index <= final) {
    // calculamos la mitad del array
    // como puede ser impar, usamos Math.floor para redondear hacia abajo
    const mitad = Math.floor((index + final) / 2)
    
    // si el elemento de la mitad es igual al elemento que estamos buscando
    // entonces hemos encontrado el elemento
    if (array[mitad] === elemento) {
      return mitad
    } else if (array[mitad] < elemento) {
      // si el elemento de la mitad es menor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad derecha
      index = mitad + 1
    } else {
      // si el elemento de la mitad es mayor que
      // el elemento que estamos buscando
      // entonces tenemos que buscar en la mitad izquierda
      final = mitad - 1
    }
  }
  
  // si llegamos hasta aquí, es que no hemos encontrado el elemento
  // devolvemos -1, para indicar que no se ha encontrado
  return -1
}
En JavaScript podríamos usar el método Array.prototype.indexOf para encontrar el índice de un elemento en un array. Se usaría así: array.indexOf(elemento). Pero por motivos didácticos, hemos creado nuestro propio algoritmo. Siempre que puedas, te recomiendo usar Array.prototype.indexOf en su lugar.