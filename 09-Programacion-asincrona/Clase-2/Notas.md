Promises (Promesas) - Conceptos Básicos
En el capítulo anterior vimos los callbacks y cómo pueden crear el temido "Callback Hell". Las Promises (promesas) son la evolución natural que resuelve estos problemas, haciendo el código asíncrono más legible y fácil de manejar.

Una Promise es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

¿Qué es una Promise?
Imagina que pides una pizza por teléfono. La pizzería te da un número de pedido (esa es tu Promise). Este número no es la pizza en sí, pero es una promesa de que eventualmente recibirás tu pizza.

Con ese número de pedido puedes:

Esperar a que llegue la pizza (pending)
Recibirla cuando el repartidor llega (fulfilled)
Enterarte de que no pueden entregarla (rejected)
En JavaScript, una Promise funciona exactamente igual: es un objeto que representa un valor futuro que aún no conocemos, pero que eventualmente estará disponible.

¿Por qué son importantes las Promises?
Las Promises resuelven tres problemas fundamentales de los callbacks:

📚 Callback Hell: Ya no necesitas anidar funciones infinitamente
🎯 Manejo de errores centralizado: Un solo .catch() captura todos los errores
🔗 Composición elegante: Puedes encadenar operaciones de forma legible
Los tres estados de una Promise
Una Promise siempre está en uno de estos tres estados:

⏳ Pending (Pendiente): Estado inicial, la operación aún no ha terminado
✅ Fulfilled (Cumplida): La operación se completó exitosamente
❌ Rejected (Rechazada): La operación falló
Diagrama: El ciclo de vida de una Promise
┌─────────────────────────────────────────────────────┐
│                   PROMISE                           │
│                                                     │
│  PENDING ─────---─────┐                             │
│   (Pendiente)         │                             │
│                       │                             │
│                       ├─── ✔︎ FULFILLED              │
│                       │    (Cumplida)               │
│                       │                             │
│                       └─── ✖︎ REJECTED               │
│                            (Rechazada)              │
│                                                     │
└─────────────────────────────────────────────────────┘
Dato importante: Una vez que una Promise cambia de estado (se resuelve o rechaza), no puede cambiar de nuevo. Es inmutable. Si se resolvió, siempre estará resuelta con ese valor.

Creando tu primera promesa
Vamos a crear una Promise desde cero para entender cómo funciona internamente. Para ello usaremos el constructor de Promises de JavaScript. Dentro de este constructor, pasaremos una función que será el ejecutor de la Promise. Esta función recibirá dos parámetros: resolve y reject con las que indicaremos si la Promise se resuelve o rechaza.

const miPromesa = new Promise((resolve, reject) => {
  // Simulamos una operación que toma tiempo
  console.log('🔄 La Promise está pendiente...')
  
  setTimeout(() => {
    const exito = true // Cambia esto a false para ver el rechazo
    
    if (exito) {
      console.log('✅ Resolviendo la Promise...')
      resolve('¡Operación exitosa!') // Cumplimos la promesa
    } else {
      console.log('❌ Rechazando la Promise...')
      reject('Algo salió mal') // Rechazamos la promesa
    }
  }, 2000)
})

console.log('Promise creada:', miPromesa)

// Consumir la Promise
miPromesa
  .then(resultado => console.log('Resultado:', resultado))
  .catch(error => console.log('Error:', error))
Anatomía de una Promise
Vamos a ver la anatomía de una Promise. Desde la creación hasta su consumo, pasando por si resuelvo o no:

const promesa = new Promise((resolve, reject) => {
  // 🎯 resolve: función para cumplir la promesa con un valor
  // ❌ reject: función para rechazar la promesa con un error
  
  // Tu código asíncrono aquí...
})
¿Qué está pasando aquí?

new Promise() crea un nuevo objeto Promise
El ejecutor (la función que pasamos) se ejecuta inmediatamente
resolve y reject son funciones que JavaScript nos proporciona
Llamar a resolve(valor) cambia el estado a fulfilled con ese valor
Llamar a reject(error) cambia el estado a rejected con ese error
Importante. Sólo puedes llamar a una de las dos funciones: resolve o reject. Después de llamar a una de ellas, las demás llamadas se ignoran.

const promesa = new Promise((resolve, reject) => {
  resolve('¡Operación exitosa!')
  reject('Algo salió mal') // Ignorado por que ya se llamó a resolve
})
Consumiendo Promises: .then() y .catch()
Una vez que tienes una Promise, necesitas consumirla para obtener su valor. Para esto usamos dos métodos fundamentales:

.then(): Se ejecuta cuando la Promise se resuelve exitosamente
.catch(): Se ejecuta cuando la Promise se rechaza con un error
¿Cómo funcionan .then() y .catch()?
Estos métodos son como suscripciones a eventos futuros. Le dices a JavaScript: "cuando esta Promise termine, ejecuta esta función".

function crearPromesa(exito) {
  return new Promise((resolve, reject) => {
    console.log('⏳ Procesando...')
    
    setTimeout(() => {
      if (exito) {
        resolve('¡Todo salió bien! 🎉')
      } else {
        reject('UNA CALAMIDAD 💥')
      }
    }, 1000)
  })
}

// Consumiendo la promesa exitosa
crearPromesa(true)
  .then((resultado) => {
    console.log('✅ Éxito:', resultado)
    return resultado.toUpperCase() // Puedes transformar el valor
  })
  .then((resultadoMayusculas) => {
    console.log('📝 Transformado:', resultadoMayusculas)
    // -> 📝 Transformado: ¡TODO SALIÓ BIEN! 🎉
  })
  .catch((error) => {
    // Esto nunca se ejecutará porque la promesa se resuelve exitosamente
    console.log('❌ Error:', error)
  })

// Probando con error (después de 2 segundos)
crearPromesa(false)
  .then((resultado) => {
    console.log('✅ Éxito:', resultado)
  })
  .catch((error) => {
    console.log('❌ Error capturado:', error)
    // -> 🔴 Error capturado: UNA CALAMIDAD 💥
  })
Encadenamiento de Promises
Una de las superpoderes de las Promises es el encadenamiento. Cada .then() devuelve una nueva Promise, lo que te permite crear pipelines de transformación de datos.

¿Cómo funciona el encadenamiento?
Imagina una línea de producción en una fábrica:

🥔 Entra una papa cruda
🔪 Se pela y corta
🍟 Se fríe
🧂 Se le añade sal
📦 Se empaqueta
Cada paso transforma el resultado del anterior. Las Promises funcionan igual:

// Encadenamiento elegante - línea de producción de papas fritas
agarrarPapaCruda() // devuelve una promesa con la papa cruda
  .then(papaCruda => pelarYCortar(papaCruda)) // pela y corta la papa
  .then(papaCortada => freir(papaCortada)) // fríe las papas cortadas
  .then(papasFritas => añadirSal(papasFritas)) // añade sal a las papas fritas
  .then(papasConSal => empaquetar(papasConSal)) // empaqueta el producto final
  .then(productoFinal => {
    console.log('🎉 ¡Papas fritas listas!:', productoFinal)
    // -> 🎉 ¡Papas fritas listas!: "📦 Papas fritas empaquetadas"
  })
  .catch(error => {
    console.log('❌ Error en la línea de producción:', error)
    // Si cualquier paso falla, se ejecuta este catch
  })
¿Qué está pasando aquí?

agarrarPapaCruda() devuelve una Promise con una papa cruda
.then(papaCruda => pelarYCortar(papaCruda)) recibe la papa y devuelve una Promise con la papa pelada y cortada
.then(papaCortada => freir(papaCortada)) recibe la papa cortada y devuelve una Promise con papas fritas
Y así sucesivamente... cada .then() transforma el resultado del anterior
.catch() captura cualquier error en cualquier punto de la cadena
Espera... ¡Todavía mejor!
Como podemos pasar las funciones como parámetros... ¡podemos pasar directamente las funciones que queremos ejecutar en cada paso! Y recibirán el resultado del paso anterior, sin necesidad de anidar las funciones.

Esto es porque el contrato de la función es que reciba un único parámetro y devuelva una promesa, exactamente como la función que ya estamos creando. Así quedaría mucho más elegante:

agarrarPapaCruda() // devuelve una promesa con la papa cruda
  .then(pelarYCortar) // pela y corta la papa
  .then(freir) // fríe las papas cortadas
  .then(añadirSal) // añade sal a las papas fritas
  .then(empaquetar) // empaqueta el producto final
  .then(productoFinal => {
    console.log('🎉 ¡Papas fritas listas!:', productoFinal)
    // -> 🎉 ¡Papas fritas listas!: "📦 Papas fritas empaquetadas"
  })
  .catch(error => {
    console.log('❌ Error en la línea de producción:', error)
    // Si cualquier paso falla, se ejecuta este catch
  })
Ventajas sobre Callbacks
Veamos por qué las Promises son superiores a los callbacks con un ejemplo real. ¿Te acuerdas del Callback Hell? Lo hemos visto en una clase anterior. Es cuando tenemos muchos callbacks anidados y hace que el código sea difícil de leer y mantener.

// 😱 El temido "Callback Hell" o "Pirámide de la Perdición"
obtenerUsuario(1, (error, usuario) => {
  if (error) {
    console.log('Error:', error)
  } else {
    obtenerPedidos(usuario.id, (error, pedidos) => {
      if (error) {
        console.log('Error:', error)
      } else {
        obtenerDetalles(pedidos[0].id, (error, detalles) => {
          if (error) {
            console.log('Error:', error)
          } else {
            calcularTotal(detalles, (error, total) => {
              if (error) {
                console.log('Error:', error)
              } else {
                console.log('Total:', total)
                // 😵 Y esto puede seguir y seguir...
              }
            })
          }
        })
      }
    })
  }
})
Problemas de este código:

🔺 Forma de pirámide difícil de leer
🔄 Manejo de errores repetitivo en cada nivel
🐛 Difícil de debuggear y mantener
😤 Imposible de reutilizar partes del código
✅ Con Promises (más elegante y limpio)
// Misma funcionalidad pero con Promises - ¡Mucho más limpio!
obtenerUsuario(1)
  .then(usuario => {
    console.log('Usuario:', usuario.nombre)
    return obtenerPedidos(usuario.id) // Devolvemos la siguiente Promise
  })
  .then(pedidos => {
    console.log('Pedidos:', pedidos)
    return obtenerDetalles(pedidos[0].id) // Devolvemos la siguiente Promise
  })
  .then(detalles => {
    console.log('Detalles:', detalles)
    return calcularTotal(detalles) // Devolvemos la siguiente Promise
  })
  .then(total => {
    console.log('Total:', total)
    // ¡Terminamos! Sin pirámides, sin anidamiento
  })
  .catch(error => {
    // Un solo .catch() maneja TODOS los errores de toda la cadena
    console.log('❌ Error en cualquier paso:', error)
  })
¡Mira la diferencia!

✅ Código lineal - se lee de arriba hacia abajo
✅ Un solo .catch() - maneja todos los errores
✅ Reutilizable - cada función puede usarse independientemente
✅ Fácil de debuggear - cada paso está claramente separado
✅ Escalable - agregar más pasos es trivial
Resumiendo lo aprendido sobre Promesas
¿Qué son las Promises?

📦 Objetos que representan un valor futuro
🔄 Tienen tres estados: pending → fulfilled/rejected
🎭 Son inmutables una vez resueltas
¿Cómo crearlas?

🏗️ new Promise((resolve, reject) => { ... })
✅ resolve(valor) para éxito
❌ reject(error) para fallos
¿Cómo consumirlas?

🎯 .then() para manejar el éxito
🛡️ .catch() para manejar errores
🔗 Encadenamiento para transformar datos
💡 Ventajas clave sobre callbacks
📖 Código más legible: Flujo lineal vs pirámide
🎯 Errores centralizados: Un solo .catch()
🔗 Encadenamiento elegante: Pipeline de transformaciones
♻️ Reutilización: Las Promises se pueden pasar y componer
🚀 Próximo paso
¡Felicidades! Ya dominas los conceptos básicos de las Promises. En el siguiente capítulo aprenderemos técnicas avanzadas: métodos como Promise.all(), Promise.race(), manejo de errores sofisticado y patrones prácticos para aplicaciones reales.

¿Listo para el nivel avanzado? 🎉