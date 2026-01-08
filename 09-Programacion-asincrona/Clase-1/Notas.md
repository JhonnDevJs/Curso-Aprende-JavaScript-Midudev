Callbacks
¡Bienvenido al mundo de la programación asíncrona! Hasta ahora hemos trabajado con código síncrono, donde cada línea se ejecuta una después de la otra. Pero en el mundo real, muchas operaciones toman tiempo: descargar archivos, hacer peticiones a servidores, leer archivos, etc.

Los callbacks son la base de la programación asíncrona en JavaScript y te permitirán manejar operaciones que no sabemos cuándo van a terminar.

¿Qué es un Callback?
Un callback es simplemente una función que se pasa como parámetro a otra función, para que sea ejecutada en un momento específico (normalmente cuando algo termina de ejecutarse).

La palabra "callback" significa "llamar de vuelta" - es decir, "cuando termines, llámame de vuelta".

Ejemplo Básico de Callback
Vamos a hacer un ejemplo sencillo. Tenemos una función procesarUsuario que recibe como parámetro una función (como vimos en la clase de Parámetros de Funciones, esto es posible en JavaScript).

A esta función le pasamos dos parámetros: el nombre del usuario y la función callback. La función callback se ejecuta cuando el usuario se ha procesado.

De esta forma, primero procesaremos el usuario y luego llamaremos a la función callback.

function saludar(nombre) {
  console.log('¡Hola, ' + nombre + '!')
}

function despedir(nombre) {
  console.log('¡Adiós, ' + nombre + '!')
}

function procesarUsuario(nombre, callback) {
  console.log('Procesando usuario...')
  callback(nombre) // Ejecutamos el callback
}

// Usamos diferentes callbacks
procesarUsuario('Ana', saludar)
// Procesando usuario...
// ¡Hola, Ana!

procesarUsuario('Luis', despedir) 
// Procesando usuario...
// ¡Adiós, Luis!
En este ejemplo:

saludar y despedir son callbacks
procesarUsuario recibe un callback y lo ejecuta después de procesar el usuario
Podemos cambiar el comportamiento pasando diferentes callbacks
¡Sí! Un callback es una función que se pasa como parámetro a otra función y se ejecuta después de que la función principal termine.

Callbacks en Acción: setTimeout
La función más común para entender callbacks es setTimeout(), que ejecuta una función después de un tiempo determinado en milisegundos.

De esta forma vemos que el setTimeout es una función que recibe como parámetro una función callback y se ejecuta después de un tiempo determinado. Pero el resto de nuestro código se sigue ejecutando y no espera a que termine el setTimeout.

Sintaxis de setTimeout
setTimeout(callback, tiempoEnMilisegundos)
function miFuncion() {
  console.log('¡Han pasado 2 segundos!')
}

console.log('Inicio')
setTimeout(miFuncion, 2000) // 2000ms = 2 segundos
console.log('Fin?')

// Salida:
// "Inicio"
// "Fin?"
// (2 segundos después) "¡Han pasado 2 segundos!"
Si te fijas, en la consola hemos visto primero "Inicio" y luego "Fin?". Esto es porque el setTimeout es una función asíncrona y no bloquea la ejecución del resto del código. Eso sí, cuando pasan los 2 segundos, se ejecuta la función callback y se imprime "¡Han pasado 2 segundos!".

Con Función Flecha
También podemos usar funciones flecha para simplificar el código. Así no tenemos que escribir la función callback de forma explícita y la creamos directamente en el parámetro del setTimeout.

console.log('Inicio del programa')

setTimeout(() => {
  console.log('Han pasado 3 segundos')
}, 3000)

console.log('El programa continúa...')
¿Por qué es Asíncrono?
Observa que el código no se detiene esperando a que termine setTimeout. Esto es programación asíncrona:

┌─────────────────────────────────────────────────────┐
│                CÓDIGO SÍNCRONO                      │
│                                                     │
│  console.log('1') ──────────────────────────────┐   │
│                                                 │   │
│  console.log('2') ──────────────────────────────┤   │
│                                                 │   │
│  console.log('3') ──────────────────────────────┘   │
│                                                     │
│  Salida: 1, 2, 3 (en orden)                         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│               CÓDIGO ASÍNCRONO                      │
│                                                     │
│  console.log('1') ──────────────────────────────┐   │
│                                                 │   │
│  setTimeout(() => console.log('2'), 1000) ─-────┤   │
│                                                 │   │
│  console.log('3') ──────────────────────────────┘   │
│                                                     │
│  Salida: 1, 3, (1 segundo después) 2                │
└─────────────────────────────────────────────────────┘
Callbacks con parámetros
Los callbacks pueden recibir parámetros. Por ejemplo, si queremos hacer algo después de 1 segundo, podemos pasarle un parámetro a la función callback.

function esperarUnSegundo(callback) {
  setTimeout(() => {
    const mensaje = "¡Ya pasó 1 segundo!";
    callback(mensaje); // Le pasamos un parámetro al callback
  }, 1000);
}

function mostrarMensaje(texto) {
  console.log(texto);
}

// Aquí llamamos a la función y le pasamos el callback
esperarUnSegundo(mostrarMensaje);
No te preocupes si ahora mismo te cuesta seguir el hilo. A primera vista parece confuso, pero al final hay que entender que los callbacks no dejan de ser funciones y, por lo tanto, pueden recibir parámetros. Esto hace que los callbacks sean muy flexibles y reutilizables.

setInterval: Callbacks Repetitivos
setInterval() ejecuta un callback repetidamente cada cierto tiempo. Imagina que quieres contar cuántos segundos han pasado hasta que llegamos a 5 segundos:

let segundos = 0

const intervalo = setInterval(() => {
  segundos++
  console.log('Han pasado', segundos, 'segundos')
  
  if (segundos >= 5) {
    clearInterval(intervalo) // Detenemos el intervalo
    console.log('¡Tiempo terminado!')
  }
}, 1000) // Cada 1 segundo (1000ms)
El Callback Hell 🔥
El Callback Hell es el nombre que se le da al código que tiene muchos callbacks anidados. Es decir, código que tiene muchos callbacks uno dentro de otro y hace que sea difícil de leer y mantener.

getUser(1, (user) => {
  console.log("Usuario:", user.name)

  getPosts(user.id, (posts) => {
    console.log("Posts del usuario:", posts)

    getComments(posts[0].id, (comments) => {
      console.log("Comentarios del primer post:", comments)

      getLikes(comments[0].id, (likes) => {
        console.log("Likes del primer comentario:", likes)
        // ... y así hasta el infinito y más allá...
      })
    })
  })
})
El problema es que getUser recupera el usuario. Con la información del usuario ahora podemos recuperar los posts del usuario... y ahora podemos recuperar los comentarios del primer post. Y ahora podemos recuperar los likes del primer comentario...

Ya ves el problema, ¿no? Además fíjate en la anidación del código, cada vez se hace más complejo de leer y mantener. Una forma de solucionarlo es usando más funciones intermedias para que el código sea más legible.

getUser(1, onUser)

function onUser(user) {
  console.log("Usuario:", user.name)
  getPosts(user.id, onPosts)
}

function onPosts(posts) {
  console.log("Posts del usuario:", posts)
  getComments(posts[0].id, onComments)
}

function onComments(comments) {
  console.log("Comentarios del primer post:", comments)
  getLikes(comments[0].id, onLikes)
}

function onLikes(likes) {
  console.log("Likes del primer comentario:", likes)
  console.log("Fin del flujo de callbacks")
}
No es todavía ideal pero es mejor que el Callback Hell. La otra forma es conocer las Promises y el async/await, que veremos en los siguientes capítulos.

En definitiva... ¿qué son los callbacks?
Son **funciones que se pasan como parámetros a otras funciones
Se ejecutan cuando algo termina (de ahí "llamar de vuelta")
Base fundamental de la programación asíncrona
Características importantes
✅ No bloquean el hilo principal
✅ Permiten operaciones asíncronas
✅ Flexibles y reutilizables
⚠️ Pueden crear "Callback Hell"
Último repaso a setTimeout y setInterval
setTimeout(callback, ms) - ejecuta una vez después de X tiempo
setInterval(callback, ms) - ejecuta repetidamente cada X tiempo
clearInterval(id) - detiene un intervalo
Próximo Paso... ¡Las promesas!
Los callbacks son fundamentales, pero tienen limitaciones. En el siguiente capítulo aprenderemos sobre Promises, que resuelven muchos de los problemas de los callbacks y hacen el código más legible.