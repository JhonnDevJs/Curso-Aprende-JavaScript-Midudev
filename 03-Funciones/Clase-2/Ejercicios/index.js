// 🟢 Ejercicio 1: El Generador de Slugs (Parámetros de Texto)
// Objetivo: Concatenación y manipulación de strings vía parámetros.

// En SEO (posicionamiento web), un "slug" es la parte de la URL legible (ej: mi-sitio.com/articulo-nuevo). Crea una función llamada crearSlug.

// Debe recibir 2 parámetros: titulo y categoria.

// Debe retornar un string que combine ambos así: "categoria/titulo".

// Reto: Como las URLs no tienen espacios, reemplaza (mentalmente o si sabes cómo, hazlo) los espacios por guiones, o simplemente invéntate datos que no tengan espacios al probarla.

// Prueba: crearSlug("mi-primer-post", "blog").


const clearSlug = (titulo, categoria) => categoria + "/" + titulo 

console.log(clearSlug("blog","mi-primer-post"))


// 🟡 Ejercicio 2: La Calculadora de Impuestos (Múltiples Parámetros)
// Objetivo: Matemáticas con parámetros para tu SaaS.

// Crea una función llamada calcularCostoTotal.

// Recibe 3 parámetros: precio, impuesto (en decimal, ej: 0.16 para IVA), y descuento (número entero a restar).

// La lógica debe ser: (precio + (precio * impuesto)) - descuento.

// Retorna el resultado.

// Prueba llamándola con: Precio 1000, Impuesto 0.16, Descuento 50.


const calcularCostoTotal = ( precio, impuesto, descuento) => { 
  let result = precio + ( precio * impuesto ) - descuento 
  return result
}

const result = calcularCostoTotal(1200, 0.16, 200)

console.log(result)


// 🟠 Ejercicio 3: El Error del Becario (El Orden Importa)
// Objetivo: Experimentar errores por orden de argumentos.

// Crea una función registrarEmpleado(nombre, edad, puesto).

// Que haga un console.log diciendo: "El empleado [nombre] tiene [edad] años y es [puesto]".

// La prueba: Llama a la función pasando los datos en el orden incorrecto (ej: primero la edad, luego el puesto, luego el nombre).

// Quiero que veas qué imprime y me digas por qué pasó eso.


function registrarEmpleado(nombre, edad, puesto) {
  let concatText = "El empleado " + nombre + " " + "tiene " + edad + " años y es " + puesto
  return concatText
}

console.log(registrarEmpleado("Dev", "Jhon", 22)) //la razon por la que el resultado es erroneo es por que la funcion no es inteligente y no sabe distinguir por si misma que los argumentos que esta recibiendo como argumento no estan en el orden correcto, por lo que al solo saber que tiene que recibir esos parametros los coloca sin filtros ya que se espera que se le pasen en el orden correcto



// 🔴 Ejercicio 4: El Transformador (Funciones como Parámetros / Callbacks)
// Objetivo: El concepto más difícil de la lección.

// Vamos a crear una función de orden superior (High Order Function).

// Crea dos funciones sencillas:

// mayusculas(texto): Retorna el texto usando .toUpperCase() (investiga si no recuerdas este método, o simplemente concatena " MAYUSCULAS" al final).

// exclamar(texto): Retorna el texto entre signos de exclamación ¡!.

// Crea una función principal llamada procesarFrase.

// Recibe dos parámetros: frase (string) y transformador (una función).

// Debe retornar el resultado de ejecutar la función transformador pasándole la frase.

// Ejecución:

// Llama a procesarFrase("hola mundo", mayusculas).

// Llama a procesarFrase("hola mundo", exclamar).

function mayusculas(texto) {
  return texto.toUpperCase();
}

function exclamar(texto) {
  return "¡" + texto + "!"
}

function procesarFrase(frase, transformador){
  return transformador(frase)
}

console.log(procesarFrase("hola mundo", mayusculas))
console.log(procesarFrase("hola mundo", exclamar))