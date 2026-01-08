Fetch API
¡Ha llegado el momento de conectar tu JavaScript con el mundo exterior! La Fetch API es la forma moderna y elegante de hacer peticiones HTTP para comunicarse con servidores, APIs y servicios web.

Fetch es perfecto para este punto del curso porque devuelve Promises, así que podrás aplicar todo lo que acabas de aprender sobre programación asíncrona.

¿Qué es la Fetch API?
Fetch es una API moderna del navegador que permite hacer peticiones HTTP de forma sencilla y está basado completamente en Promises.

¿Para qué sirve Fetch?
🌐 Comunicarse con APIs REST
📊 Obtener datos de servidores
📤 Enviar información al servidor
📁 Descargar archivos
🔄 Actualizar contenido dinámicamente
Sintaxis básica
Imagínate que fetch es como un mensajero súper eficiente 📬. Le das una dirección (URL) y te trae de vuelta lo que encuentre allí. La magia está en que este mensajero trabaja de forma asíncrona: no te hace esperar parado, sino que te avisa cuando tiene la respuesta lista.

fetch(url, opciones)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
¿Qué está pasando en esta sintaxis?

fetch(url) - Le decimos al mensajero: "Ve a esta dirección"
.then(response =>...) - "Cuando vuelvas, dame lo que encontraste"
.json() - "Y por favor, tradúcelo a un formato que pueda entender"
.then(data =>...) - "Cuando esté traducido, úsalo"
.catch(error =>...) - "Si algo sale mal, avísame"
Es como enviar a alguien a comprar pizza 🍕: le das la dirección de la pizzería, esperas que vuelva con la pizza, y si la pizzería está cerrada o se perdió en el camino, te avisa del problema.

Tu primera petición con fetch
¡Momento de la verdad! Vamos a hacer tu primera petición HTTP real a una API.

Una API es un servidor que te permite hacer peticiones HTTP y obtener datos. API significa "Application Programming Interface", es decir, una interfaz de programación de aplicaciones.

Usaremos JSONPlaceholder, que es como un "servidor de mentira" perfecto para practicar. La URL de la API es: https://jsonplaceholder.typicode.com y dependiendo de la ruta podremos obtener diferentes datos.

En este caso vamos a recuperar los datos del post número 1, por lo que usaremos la ruta https://jsonplaceholder.typicode.com/posts/1.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('✅ Respuesta recibida:', response.status)
    return response.json() // Convertir a JSON
  })
  .then(data => {
    console.log('📄 Datos obtenidos:')
    console.log('Título:', data.title)
    console.log('Contenido:', data.body)
  })
  .catch(error => {
    console.log('❌ Error:', error)
  })
¡Analicemos este código línea por línea! 🔍

Línea 1: Le decimos a fetch "Ve a buscar el post número 1"
Línea 2-5: Cuando regrese, verificamos que todo salió bien (response.status) y le decimos "convierte eso a JSON para que lo pueda leer"
Línea 6-10: Una vez convertido, mostramos la información de manera bonita
Línea 11-13: Si algo sale mal en cualquier momento, lo capturamos aquí
¿Por qué dos .then()? 🤔

En clases anteriores vimos el concepto de Promise, y como podemos encadenar varias Promises para hacer cosas más complejas. En este caso, ocurre lo mismo. Primero hacemos la petición, que devuelve una Promise, y luego convertimos la respuesta a JSON, que también devuelve una Promise.

El Objeto Response: Tu Inspector de Paquetes 📋
Aquí viene algo súper importante: cuando fetch recibe una respuesta del servidor, no te da directamente los datos. En su lugar, te da un objeto Response con toda la información de la respuesta.

Es como cuando recibes un paquete de Amazon: primero inspeccionas el exterior antes de abrirlo.

¿Por qué? Porque antes de abrir el paquete, necesitas saber:

¿Llegó bien el paquete? (status)
¿Está dañado? (ok)
¿De dónde viene exactamente? (url)
¿Qué tipo de contenido trae? (headers)
Además, puedes obtener los datos de la respuesta de diferentes maneras, dependiendo de lo que esperes.

Vamos a ver un ejemplo

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    console.log('📊 Información de la respuesta:')
    console.log('Estado:', response.status)      // 200, 404, 500, etc.
    console.log('OK:', response.ok)              // true si status 200-299
    console.log('URL:', response.url)
    console.log('Headers:', response.headers)
    
    // Verificar si la respuesta es exitosa
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Error HTTP: ${response.status}`)
    }
  })
  .then(user => {
    console.log('👤 Usuario:', user.name)
    console.log('📧 Email:', user.email)
  })
  .catch(error => {
    console.log('❌ Error:', error.message)
  })
Métodos del Objeto Response: Las Diferentes Formas de "Abrir el Paquete" 📦
Dependiendo de qué tipo de contenido esperes, tienes diferentes "herramientas" para abrir tu paquete:

| Método | Descripción | Cuándo Usarlo | |--------|-------------|---------------| | .json() | Convierte a objeto JavaScript | 📊 Cuando esperas datos estructurados (APIs) | | .text() | Obtiene como texto plano | 📝 Para HTML, CSS, texto simple | | .blob() | Para archivos binarios | 🖼️ Imágenes, videos, archivos | | .arrayBuffer() | Para datos binarios crudos | 🔧 Manipulación avanzada de archivos | | .formData() | Para formularios | 📋 Datos de formularios HTML |

¡Importante! 🚨 Solo puedes usar uno de estos métodos por respuesta. Es como abrir un sobre: una vez que lo abres, ya no puedes "des-abrirlo" y abrirlo de otra forma.

Ten en cuenta que todos estos métodos devuelven una Promise.

Tipos de Peticiones HTTP
Imagina que HTTP es como un idioma universal de internet, y cada tipo de petición es como una frase con un propósito específico. Es como tener diferentes formas de hablar con un camarero en un restaurante:

GET: "¿Qué hay en el menú?" (solo quiero leer)
POST: "Quiero ordenar esto" (crear algo nuevo)
PUT: "Cambia mi orden completa por esta nueva" (reemplazar todo)
PATCH: "Solo cambia las papas por ensalada" (modificar una parte)
DELETE: "Cancela mi orden" (eliminar)
GET - Obtener Datos
GET es el método más común. Es como asomarse por la ventana sin tocar nada. Solo observa y trae información, nunca modifica nada en el servidor.

// Obtener lista de usuarios
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(usuarios => {
    console.log('👥 Usuarios obtenidos:', usuarios.length)
    usuarios.slice(0, 3).forEach(user => {
      console.log(`- ${user.name} (${user.email})`)
    })
  })
  .catch(error => {
    console.log('❌ Error obteniendo usuarios:', error.message)
  })
El segundo parámetro de fetch: Configurar la petición
Antes de continuar con POST, tenemos que aprender sobre el segundo parámetro de fetch, que es el que nos permite configurar la petición.

En él podremos cambiar el método de la petición (que por defecto es GET), enviar cabeceras personalizadas o enviar datos en el cuerpo de la petición para ser procesados por el servidor.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    title: 'Mi primer post con Fetch',
    body: 'Este es el contenido de mi post creado con JavaScript',
    userId: 1
  })
})
POST - Enviar Datos
POST es el método para crear recursos nuevos en el servidor. Es perfecto para:

✅ Crear nuevos usuarios
✅ Publicar nuevos posts
✅ Enviar formularios
✅ Subir archivos
// Crear un nuevo post
function crearPost() {
  const nuevoPost = {
    title: 'Mi primer post con Fetch',
    body: 'Este es el contenido de mi post creado con JavaScript',
    userId: 1
  }

  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nuevoPost)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(postCreado => {
    console.log('✅ Post creado exitosamente:')
    console.log('ID:', postCreado.id)
    console.log('Título:', postCreado.title)
  })
  .catch(error => {
    console.log('❌ Error creando post:', error.message)
  })
}

crearPost()
PUT - Actualizar Completamente
PUT es el método para reemplazar completamente un recurso existente en el servidor. Es como reformar una casa: derrumbas todo y construyes desde cero.

// Actualizar un post completo
function actualizarPost(id) {
  const postActualizado = {
    id: id,
    title: 'Post actualizado con PUT',
    body: 'Este contenido ha sido completamente reemplazado',
    userId: 1
  }
  
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postActualizado)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(postActualizado => {
    console.log('🔄 Post actualizado:', postActualizado.title)
  })
  .catch(error => {
    console.log('❌ Error actualizando:', error.message)
  })
}

actualizarPost(1)
PATCH - Actualización parcial
PATCH es el método "editor selectivo". Es como ser un cirujano que opera solo la parte que necesita arreglo, sin tocar el resto del cuerpo.

PATCH es súper eficiente porque solo envías los datos que quieres cambiar:

// Actualizar solo el título
function actualizarTitulo(id, nuevoTitulo) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: nuevoTitulo
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(resultado => {
    console.log('📝 Título actualizado:', resultado.title)
    return resultado
  })
  .catch(error => {
    console.log('❌ Error:', error.message)
  })
}

actualizarTitulo(1, 'Nuevo título con PATCH')
DELETE - Eliminar el recurso
DELETE es el método para eliminar un recurso existente en el servidor.

// Eliminar un post
function eliminarPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    
    // DELETE generalmente no devuelve contenido útil
    if (response.status === 200) {
      console.log(`🗑️ Post ${id} eliminado exitosamente`)
    }
    
    return response
  })
  .catch(error => {
    console.log('❌ Error:', error.message)
  })
}

eliminarPost(1)
Manejo de Errores Avanzado: Conviértete en un Detective de Problemas 🕵️‍♀️
Aquí viene una de las partes MÁS IMPORTANTES de trabajar con fetch. Los errores van a pasar (es inevitable), pero la diferencia entre un programador principiante y uno experto está en cómo manejas esos errores.

¡Dato curioso! 🤯 Fetch tiene una peculiaridad: NO considera los códigos 4xx y 5xx como errores. Es como un mensajero que te dice "Misión cumplida" aunque la casa esté en llamas. Por eso necesitas ser tú quien verifique si todo salió bien.

Verificación de Estados HTTP: Tu Sistema de Alarmas 🚨
Los códigos de estado HTTP son como semáforos de internet:

2xx (200-299): 🟢 "¡Todo perfecto!"
3xx (300-399): 🟡 "Te redirigí a otro lugar"
4xx (400-499): 🔴 "Tú hiciste algo mal"
5xx (500-599): 💥 "Yo (el servidor) hice algo mal"
function peticionConManejorDeErrores(url) {
  return fetch(url)
    .then(response => {
      // Fetch NO rechaza la promesa para códigos 4xx o 5xx
      // Pero si puedes verificar si todo salió bien con response.ok
      if (!response.ok) {
        // Manejar diferentes tipos de error
        switch (response.status) {
          case 404:
            throw new Error('🔍 Recurso no encontrado')
          case 401:
            throw new Error('🔐 No autorizado')
          case 403:
            throw new Error('🚫 Acceso prohibido')
          case 500:
            throw new Error('💥 Error interno del servidor')
          default:
            throw new Error(`❌ Error HTTP: ${response.status}`)
        }
      }
      
      return response.json()
    })
    .then(data => {
      console.log('✅ Datos obtenidos:', data)
      return data
    })
    .catch(error => {
      if (error.name === 'TypeError') {
        console.log('🌐 Error de conexión:', error.message)
      } else {
        console.log('Error:', error.message)
      }
    })
}

// Probar con URL que no existe
peticionConManejorDeErrores('https://jsonplaceholder.typicode.com/posts/999999')
¿Quieres conocer más sobre los códigos de estado HTTP? Aquí puedes encontrar todos los códigos de estado HTTP explicado con gatitos. Que eso siempre ayuda.

¡Últimas palabras para fetch
¿Qué es fetch?
API moderna para hacer peticiones HTTP
Basada en Promises - perfecta para async/await
Características Principales
✅ Sintaxis limpia y moderna
✅ Compatible con Promises y async/await
✅ Flexible - soporta todos los métodos HTTP
✅ Streaming de datos
✅ Headers personalizables
Métodos HTTP Comunes
GET - obtener datos
POST - crear recursos
PUT - actualizar completo
PATCH - actualizar parcial
DELETE - eliminar recursos
Puntos Importantes
⚠️ fetch() NO rechaza para códigos 4xx/5xx
✅ Siempre verificar response.ok
✅ Manejar errores apropiadamente
✅ Usar async/await para código más limpio
Próximo Paso
Ahora que sabes hacer peticiones HTTP con Fetch, estás listo para el siguiente nivel: async/await, que hará que trabajar con Fetch sea aún más elegante y fácil de leer.