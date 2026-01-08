Promises (Promesas) - Técnicas Avanzadas
En el capítulo anterior aprendiste los conceptos básicos de las Promises: qué son, cómo crearlas, consumirlas y por qué son superiores a los callbacks. Ahora es momento de dominar las técnicas avanzadas que te convertirán en un experto.

Promise.resolve() y Promise.reject()
Estas son funciones de conveniencia para crear Promises que se resuelven o rechazan inmediatamente. Son muy útiles cuando necesitas convertir valores normales en Promises o crear Promises para testing.

// Promise que se resuelve inmediatamente
const promesaExitosa = Promise.resolve('¡Éxito inmediato!')

promesaExitosa.then(resultado => {
  console.log(resultado) // "¡Éxito inmediato!"
})

// Promise que se rechaza inmediatamente
const promesaFallida = Promise.reject('Error inmediato')

promesaFallida.catch(error => {
  console.log('Error:', error) // "Error: Error inmediato"
})

// Útil para normalizar valores
function procesarDatos(datos) {
  // Si ya tienes los datos, los conviertes en Promise
  if (datos) {
    return Promise.resolve(datos)
  }
  
  // Si no, haces una llamada asíncrona
  return fetch('/api/datos').then(response => response.json())
}
Métodos Útiles de Promise
JavaScript nos proporciona varios métodos estáticos súper útiles para trabajar con múltiples Promises. Son como herramientas especializadas para diferentes situaciones.

Promise.all(): Todas o ninguna
¿Cuándo usarlo? Cuando necesitas que TODAS las operaciones se completen exitosamente. Es como organizar una cena: necesitas que lleguen TODOS los invitados para empezar.

Características:

✅ Espera a que todas las Promises se resuelvan
❌ Si una sola falla, toda la operación falla
🚀 Las ejecuta en paralelo (no secuencial)
📦 Devuelve un array con todos los resultados en el mismo orden
function descargarArchivo(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`📁 ${nombre} descargado`)
      resolve(`Contenido de ${nombre}`)
    }, tiempo)
  })
}

const promesas = [
  descargarArchivo('imagen1.jpg', 1000),
  descargarArchivo('imagen2.jpg', 1500),
  descargarArchivo('imagen3.jpg', 800)
]

Promise.all(promesas)
  .then((resultados) => {
    console.log('🎉 Todas las descargas completadas:')
    console.log(resultados)
    // ['Contenido de imagen1.jpg', 'Contenido de imagen2.jpg', 'Contenido de imagen3.jpg']
  })
  .catch((error) => {
    console.log('❌ Alguna descarga falló:', error)
  })
Promise.race(): La Primera que Termine
¿Cuándo usarlo? Cuando solo necesitas el resultado más rápido. Es como una carrera: el primero que cruza la meta gana, no importan los demás.

Características:

🏃 Se resuelve con la primera Promise que termine (exitosa o fallida)
⚡ Útil para timeouts y límites de tiempo
🎯 Perfecto para redundancia (múltiples servidores)
⏱️ Los demás resultados se ignoran (pero las Promises siguen ejecutándose)
function servidor(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Respuesta del ${nombre}`)
    }, tiempo)
  })
}

const servidores = [
  servidor('Servidor A', 2000),
  servidor('Servidor B', 1000), // Este será el más rápido
  servidor('Servidor C', 3000)
]

Promise.race(servidores)
  .then((respuesta) => {
    console.log('🏆 Primer servidor en responder:', respuesta)
    // "Respuesta del Servidor B" (después de 1 segundo)
  })

// Ejemplo práctico: Timeout
function operacionConTimeout(promesa, tiempoLimite) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject('⏰ Operación expirada')
    }, tiempoLimite)
  })
  
  return Promise.race([promesa, timeout])
}
Promise.allSettled(): Todas, sin importar el resultado
¿Cuándo usarlo? Cuando quieres todos los resultados, sin importar si algunos fallan. Es como hacer un reporte de estado: necesitas saber qué funcionó y qué no.

Características:

✅ Espera a que todas terminen (exitosas o fallidas)
📊 Nunca se rechaza - siempre obtienes todos los resultados
📋 Devuelve un array con objetos {status, value/reason}
🎯 Perfecto para operaciones independientes donde algunos fallos son aceptables
function operacion(nombre, exito, tiempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(`${nombre} exitoso`)
      } else {
        reject(`${nombre} falló`)
      }
    }, tiempo)
  })
}

const operaciones = [
  operacion('Operación A', true, 1000),
  operacion('Operación B', false, 800),  // Esta falla
  operacion('Operación C', true, 1200)
]

Promise.allSettled(operaciones)
  .then((resultados) => {
    console.log('📊 Resultados de todas las operaciones:')
    resultados.forEach((resultado, indice) => {
      if (resultado.status === 'fulfilled') {
        console.log(`✅ ${indice + 1}: ${resultado.value}`)
      } else {
        console.log(`❌ ${indice + 1}: ${resultado.reason}`)
      }
    })
    // ✅ 1: Operación A exitoso
    // ❌ 2: Operación B falló  
    // ✅ 3: Operación C exitoso
  })
Manejo de Errores Avanzado
El manejo de errores con Promises es mucho más elegante que con callbacks. Tienes un control fino sobre qué errores capturar y dónde.

.finally(): Siempre se ejecuta
¿Cuándo usarlo? Para código de limpieza que debe ejecutarse sin importar el resultado. Es como el finally de try/catch, pero para Promises.

Características:

🔄 Se ejecuta siempre, haya éxito o error
🧹 Perfecto para limpiar recursos (cerrar conexiones, ocultar loaders)
➡️ No recibe argumentos y no puede cambiar el valor de la Promise
🔗 Permite continuar la cadena después
function operacionImportante(exito) {
  return new Promise((resolve, reject) => {
    console.log('🔄 Iniciando operación...')
    
    setTimeout(() => {
      if (exito) {
        resolve('Operación completada')
      } else {
        reject('Operación falló')
      }
    }, 2000)
  })
}

// Ejemplo práctico: Mostrar/ocultar loader
function mostrarLoader() {
  console.log('⏳ Mostrando loader...')
}

function ocultarLoader() {
  console.log('✅ Ocultando loader...')
}

mostrarLoader()

operacionImportante(true) // Cambia a false para probar el error
  .then((resultado) => {
    console.log('✅ Éxito:', resultado)
  })
  .catch((error) => {
    console.log('❌ Error:', error)
  })
  .finally(() => {
    ocultarLoader() // Siempre se ejecuta
    console.log('🏁 Operación terminada')
  })
Si recuerdas la clase de try/catch/finally... Sí, este finally() es muy similar a cómo funciona el finally de try/catch.

Múltiples .catch(): Manejo granular de errores
Puedes usar múltiples .catch() para manejar diferentes tipos de errores en diferentes puntos de la cadena:

function paso1() {
  return Promise.reject('Error específico del paso 1')
}

function paso2() {
  return Promise.resolve('Paso 2 OK')
}

paso1()
  .catch((error) => {
    console.log('🔧 Recuperándose del error:', error)
    return 'Valor de recuperación' // Continuamos la cadena
  })
  .then((resultado) => {
    console.log('➡️ Continuando con:', resultado)
    return paso2()
  })
  .then((resultado) => {
    console.log('🎉 Final exitoso:', resultado)
  })
  .catch((error) => {
    console.log('💥 Error no recuperable:', error)
  })
Comparación: Callbacks vs Promises
Con todo lo que has aprendido, vamos a ver una comparación detallada para entender por qué las Promises son superiores en muchos aspectos a los callbacks.

| Aspecto | Callbacks | Promises | |---------|-----------|----------| | Legibilidad | ❌ Callback Hell (pirámide) | ✅ Encadenamiento lineal | | Manejo de errores | ❌ Manual en cada nivel | ✅ Un solo .catch() centralizado | | Composición | ❌ Difícil de componer | ✅ Fácil con .then() y métodos | | Debugging | ❌ Stack traces confusos | ✅ Stack traces claros | | Reutilización | ⚠️ Limitada | ✅ Altamente reutilizable | | Paralelismo | ❌ Complejo de implementar | ✅ Promise.all() nativo | | Control de flujo | ❌ Manual y propenso a errores | ✅ Métodos especializados |

¿Por qué son mejores las Promises?
📖 Código más legible: El flujo es lineal, no anidado
🎯 Errores centralizados: Un solo lugar para manejar todos los errores
🔧 Herramientas poderosas: Promise.all(), .race(), .allSettled()
♻️ Reutilización: Las Promises se pueden pasar y reutilizar
🔗 Composición: Fácil de combinar y transformar resultados
Que sean mejores en general, no significa que sean mejores para todas las situaciones. Los callbacks existen por una razón, y es que a veces son más fáciles de escribir y entender. No fuerces la Promises, usa cuando sea necesario.

🛠️ Herramientas que ahora dominas
Métodos de instancia:

.then() → Maneja el éxito y transforma valores
.catch() → Captura errores en cualquier punto
.finally() → Limpieza y código que siempre se ejecuta
Métodos estáticos:

Promise.all() → Todas deben completarse (paralelo)
Promise.race() → La más rápida gana
Promise.allSettled() → Reporte completo de todas
Promise.resolve() → Crear Promise resuelta instantáneamente
Promise.reject() → Crear Promise rechazada instantáneamente
🎯 Mejores prácticas profesionales
Siempre retorna en los .then() para mantener la cadena
Un solo .catch() al final para errores no manejados
Usa Promise.all() para operaciones paralelas independientes
.finally() para limpieza de recursos (cerrar conexiones, ocultar loaders)
Maneja errores específicos con múltiples .catch()
Usa Promise.allSettled() cuando algunos fallos son aceptables
🚀 Próximo nivel: async/await
¡Felicidades! Ahora eres un experto en Promises. Dominas desde los conceptos básicos hasta las técnicas más avanzadas.

En el siguiente capítulo aprenderemos async/await, que es como poner un "traje elegante" a las Promises. Mismo poder, pero con una sintaxis que parece código síncrono normal.

¿Listo para la sintaxis más elegante de JavaScript asíncrono? 🎉