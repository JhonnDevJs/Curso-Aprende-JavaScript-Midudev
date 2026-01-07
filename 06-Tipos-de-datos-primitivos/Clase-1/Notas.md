Métodos en tipos primitivos
Una de las características más interesantes de JavaScript es que nos permite trabajar con tipos de datos primitivos como si fueran objetos. Los primitivos también ofrecen métodos que podemos llamar. Los estudiaremos pronto, pero primero veamos cómo trabajan porque, por supuesto, los primitivos no son objetos.

¿Qué son los tipos primitivos?
En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos. Hay 7 tipos de datos primitivos:

string - cadenas de texto
number - números
bigint - números enteros grandes
boolean - verdadero o falso
undefined - valor indefinido
symbol - símbolos como identificador único
null - valor nulo
null es un caso especial. Su typeof es object por un bug histórico. Además, es el valor del que deriva cualquier object.

// Estos son todos tipos primitivos
let texto = 'Hola mundo'
let numero = 42
let grande = 123n
let verdadero = true
let indefinido = undefined
let simbolo = Symbol('id')
let nulo = null
El paradoja: ¿Cómo pueden los primitivos tener métodos?
Aquí viene lo interesante. Si los primitivos no son objetos y no tienen métodos, ¿cómo es posible que podamos hacer esto?

let texto = 'JavaScript'
console.log(texto.length) // 10
console.log(texto.toUpperCase()) // "JAVASCRIPT"
¡Estamos llamando propiedades y métodos en un tipo primitivo! ¿Cómo es esto posible?

Object Wrappers: La magia detrás de escena
La respuesta está en los Object Wrappers (objetos envolventes). Cuando intentas acceder a un método o propiedad de un primitivo, JavaScript automáticamente:

Crea temporalmente un objeto wrapper alrededor del valor primitivo
Ejecuta el método en ese objeto
Destruye el objeto wrapper inmediatamente después
let texto = 'JavaScript'

// Cuando escribes texto.toUpperCase(), JavaScript hace esto internamente:
// 1. Crea: new String("JavaScript")
// 2. Llama al método: new String("JavaScript").toUpperCase()
// 3. Devuelve el resultado: "JAVASCRIPT"
// 4. Destruye el objeto temporal
Demostrando que los primitivos siguen siendo primitivos
Podemos demostrar que los primitivos no son objetos de varias formas:

// 1. Usando typeof
let texto = 'Hola'
console.log(typeof texto) // "string" (no "object")

// 2. Intentando asignar propiedades
texto.nuevaPropiedad = 'valor'
console.log(texto.nuevaPropiedad) // undefined (¡no se guardó!)

// 3. Comparando con objetos reales
let textoObjeto = new String('Hola')
console.log(typeof textoObjeto) // "object"
console.log(texto === textoObjeto) // false
NUNCA crees una instancia de String, Number, BigInt, Boolean o Symbol. Es innecesario y no es recomendable.

Los Object Wrappers disponibles
JavaScript proporciona object wrappers para los tipos primitivos:

String para string
Number para number
BigInt para bigint
Boolean para boolean
Symbol para symbol
Nota: undefined y null no tienen object wrappers, por eso no puedes llamar métodos en ellos:

let indefinido = undefined
// indefinido.toString() // ❌ TypeError: Cannot read properties of undefined

let nulo = null
// nulo.toString() // ❌ TypeError: Cannot read properties of null
¿Por qué es importante entender esto?
Entender cómo funcionan los métodos en primitivos es crucial porque:

Rendimiento: JavaScript crea y destruye objetos temporalmente
Comportamiento: Explica por qué no puedes asignar propiedades a primitivos
Debugging: Te ayuda a entender errores relacionados con tipos
// Esto funciona
let numero = 42
console.log(numero.toString()) // "42"

// Pero esto no guarda la propiedad
numero.nuevaPropiedad = 'valor'
console.log(numero.nuevaPropiedad) // undefined

// Porque cada acceso crea un nuevo objeto temporal
Para terminar...
Los tipos primitivos en JavaScript no son objetos, pero JavaScript nos permite trabajar con ellos como si lo fueran mediante object wrappers temporales.

Esta característica hace que el lenguaje sea más fácil de usar, pero es importante entender que:

Los primitivos siguen siendo primitivos
Los métodos se ejecutan en objetos temporales
No puedes agregar propiedades persistentes a primitivos
null y undefined no tienen object wrappers
En las próximas clases, exploraremos en detalle cada tipo primitivo y sus métodos más útiles.