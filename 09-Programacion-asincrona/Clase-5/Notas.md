async/await
async/await es la forma más moderna y elegante de trabajar con código asíncrono en JavaScript. Es azúcar sintáctico sobre las Promises que hace que el código asíncrono parezca y se escriba como código síncrono.

Si las Promises resolvieron el problema del "Callback Hell", async/await hace que trabajar con asincronía sea tan natural como escribir código normal.

¿Qué son async/await?
async - declara que una función es asíncrona
await - pausa la ejecución hasta que una Promise se resuelva
Cuando decimos que await 'pausa la ejecución', es una simplificación muy útil. Lo que realmente sucede es más fascinante y es la clave del rendimiento de JavaScript. En lugar de bloquear todo el programa, await le dice al motor de JavaScript: "Ok, esta tarea va a tardar. Mientras espero, puedes salir de esta función y seguir ejecutando otro código". Una vez que la promesa se resuelve, el motor de JavaScript vuelve exactamente a este punto y continúa con el resto de la función.

Piensa en un chef en una cocina. Cuando mete un pastel en el horno (una operación asíncrona), no se queda mirando la puerta del horno sin hacer nada (bloqueando). En su lugar, pone un temporizador y se pone a preparar otros platos. Cuando el temporizador suena (la promesa se resuelve), vuelve al horno para sacar el pastel. async/await permite que nuestro código se comporte como ese chef.

Comparación Visual
Vamos a ver un ejemplo de código con Promises y cómo se vería con async/await para que veas la diferencia:

// ❌ Con Promises (funcional pero verboso)
function obtenerDatos() {
  return fetch('/api/datos')
    .then(response => response.json())
    .then(datos => {
      console.log(datos)
      return datos
    })
    .catch(error => {
      console.log('Error:', error)
    })
}

// ✅ Con async/await (mucho más limpio)
async function obtenerDatos() {
  try {
    const response = await fetch('/api/datos')
    const datos = await response.json()
    console.log(datos)
    return datos
  } catch (error) {
    console.log('Error:', error)
  }
}
La estrategia para convertir una función con Promises a async/await es muy sencilla:

async declara la función como asíncrona
await pausa la ejecución hasta que la Promise se resuelva
try/catch maneja los errores
Características Importantes
Una función async siempre devuelve una Promise
Incluso si devuelves un valor directamente, JavaScript lo envolverá en una promesa resuelta. Por ejemplo:

async function miFuncion() {
  return 42;
}

console.log(miFuncion()) // Promise { <pending> }

miFuncion().then(resultado => {
  console.log(resultado)
}) // 42

// o con await
const resultado = await miFuncion()
console.log(resultado) // 42
Solo puedes usar await dentro de funciones async
function miFuncion() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 42
}

miFuncion() // SyntaxError: await is only valid in async functions
await pausa la ejecución hasta que la Promise se resuelva
async function miFuncion() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  // hasta que no pasa un segundo,
  // no se ejecuta la siguiente línea
  return 42
}

console.time('miFuncion')
miFuncion() // 42
console.timeEnd('miFuncion')

// miFuncion: 1000.004ms (1 segundo)
Cuidado con las operaciones en paralelo
Un error muy común cuando empiezas con async/await es hacer que todo sea secuencial cuando podría ser paralelo. Es como hacer cola en el supermercado: si puedes usar 3 cajas al mismo tiempo, ¿por qué esperar en una sola? 🛒

Imagina que estamos cargando la página de perfil de un usuario. Necesitamos obtener tres cosas: su información básica, su lista de amigos y sus últimas publicaciones. Para ello, tenemos tres funciones: obtenerInfoBasica(), obtenerAmigos() y obtenerPublicaciones().

❌ Secuencial (más lento)
async function cargarPerfilSecuencial(userId) {
  console.time('Perfil Lento');

  // 1. Pido los datos del usuario y espero...
  const usuario = await api.getUsuario(userId); // tarda 1 segundo
  // 2. Cuando terminan, pido sus amigos y espero...
  const amigos = await api.getAmigos(userId); // tarda 1 segundo
  // 3. Cuando terminan, pido sus posts y espero...
  const posts = await api.getPosts(userId); // tarda 2 segundos
  
  console.timeEnd('Perfil Lento'); // Suma el tiempo de las 3 llamadas
  // Tiempo total: 4 segundos
  console.log('Datos cargados secuencialmente:', { usuario, amigos, posts });
}
El problema es que cada llamada espera a que la anterior termine. Por lo tanto, el tiempo total es la suma de los tiempos de cada llamada, por lo que el tiempo total es de 4 segundos.

Pero si revisamos el código, vemos que podemos hacer las llamadas al mismo tiempo, ya que no dependen unas de otras.

✅ Paralelo (más rápido)
Para eso, podemos usar Promise.all, que nos permite ejecutar varias Promises al mismo tiempo y esperar a que todas terminen. Esto hace que las llamadas se hagan al mismo tiempo, y el tiempo total es el tiempo de la llamada más larga.

async function cargarPerfilParalelo(userId) {
  console.time('Perfil más rápido')
  
  // Iniciamos todas las operaciones al mismo tiempo
  // y esperamos a que todas terminen
  const [usuario, amigos, publicaciones] = await Promise.all([
    obtenerInfoBasica(userId), // tarda 1 segundo
    obtenerAmigos(userId),  // tarda 1 segundo
    obtenerPublicaciones(userId) // tarda 2 segundos
  ])
  
  console.timeEnd('Perfil más rápido')
  // Tiempo total: 2 segundos
  
  return {
    usuario,
    amigos,
    publicaciones
  }
}

cargarPerfilParalelo(123).then(perfil => {
  console.log('✅ Perfil cargado:', perfil.usuario.nombre)
  console.log('👥 Amigos:', perfil.amigos.length)
  console.log('📝 Publicaciones:', perfil.publicaciones.length)
})
En este caso, el tiempo total es de 2 segundos, ya que es el tiempo de la llamada más larga.

Un último repaso rápido a async/await
¿Qué es async/await?
Sintaxis moderna para trabajar con código asíncrono
Azúcar sintáctico sobre las Promises
Hace que el código asíncrono parezca síncrono
Reglas Importantes
async declara una función asíncrona (siempre devuelve Promise)
await pausa la ejecución hasta que la Promise se resuelva
Solo puedes usar await dentro de funciones async
Ventajas sobre Promises
✅ Código más legible y natural
✅ try/catch funciona perfectamente
✅ Debugging más fácil
✅ Menos anidamiento
Mejores Prácticas
✅ Usa Promise.all() para operaciones paralelas
✅ Maneja errores con try/catch
✅ Considera timeouts para operaciones críticas
✅ Usa reintentos para operaciones inestables
Evolución Completa
Callbacks → Promises → async/await
   ↓           ↓          ↓
Callback      Más      Excelente
  Hell      legible   legibilidad
¡Con async/await has completado tu viaje por la programación asíncrona en JavaScript! Ahora tienes todas las herramientas para manejar operaciones asíncronas de manera elegante y profesional.