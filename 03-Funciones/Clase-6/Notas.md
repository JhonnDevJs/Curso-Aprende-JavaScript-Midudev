# Scope (Ámbito)

## ¿Qué es el Scope?

El scope (ámbito) es el contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados. Si una variable u otra expresión no está en el scope actual, entonces no está disponible para su uso.

Los scopes también se pueden superponer en una jerarquía, de modo que los scopes secundarios tengan acceso a los ámbitos primarios, pero no al revés.

Una función sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito, de modo que no se puede acceder a una variable definida exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones.

Veamos un ejemplo de scope con variables:

```JavaScript

let nombre = 'Ana' // Variable global

function saludar() {
  let apellido = 'García' // Variable local
  console.log(nombre + ' ' + apellido) // Puede acceder a ambas
}

saludar() // "Ana García"
console.log(nombre) // "Ana" ✅
console.log(apellido) // ❌ Error: apellido is not defined

```

Para que lo veas más claro, vamos a crear un dibujo donde los scopes se representan con cajas, para que veas en qué scope está cada variable.

## Diagrama del 
 
 
```JavaScript

┌─────────────────────────────────────────────────────┐
│                 SCOPE GLOBAL                        │
│                                                     │
│  let nombre = 'Ana' ← Accesible desde cualquier     │
│                       lugar del código              │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │            SCOPE DE FUNCIÓN                   │  │
│  │            function saludar()                 │  │
│  │                                               │  │
│  │  let apellido = 'García' ← Solo accesible     │  │
│  │                            dentro de esta     │  │
│  │                            función            │  │
│  │                                               │  │
│  │  console.log(nombre + apellido)               │  │
│  │              ↑         ↑                      │  │
│  │              │         └─ Variable local      │  │
│  │              └─ Variable global (accesible)   │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  console.log(nombre) ← ✔︎ Funciona                   │
│  console.log(apellido) ← ✖︎ Error: no existe aquí    │
│                                                     │
└─────────────────────────────────────────────────────┘

```

Como vemos, podemos acceder a la variable nombre fuera de la función y dentro. Esto es posible porque la variable nombre está en el scope global.

En cambio la variable apellido está dentro de la función saludar y por lo tanto no podemos acceder a ella fuera de la función. Diríamos que está en el scope de la función saludar y por lo tanto es local.

Las funciones también tienen scope. En el ejemplo anterior, la función saludar también ha sido creada dentro del scope global. Por lo que podremos acceder a ella desde cualquier lugar del código.

## Cadena de ámbitos (Scope Chain)

El ámbito global es el que tenemos en la raíz de nuestro código. A partir de ahí podemos crear un ámbito más localizado. Dentro, podemos crear otro nuevo... y así sucesivamente. Lo importante que debes tener en cuenta es que los ámbitos inferiores pueden acceder a los superiores pero no al revés.

```JavaScript

let global = 'Soy global'

function externa() {
  let externa_var = 'Soy de la función externa'
  
  function interna() {
    let interna_var = 'Soy de la función interna'
    
    // Puede acceder a todas:
    console.log(interna_var)  // "Soy de la función interna"
    console.log(externa_var)  // "Soy de la función externa"  
    console.log(global)       // "Soy global"
  }
  
  // Aquí sólo puedes acceder a "externa_var" y "global"
  interna()
  // console.log(interna_var) // ❌ Error: no puede acceder
}

// Aquí sólo puedes acceder a la variable "global"
externa()

```

## Diagrama de la Cadena de Scope

```JavaScript

┌───────────────────────────────────────────────────────────┐
│                    SCOPE GLOBAL                           │
│                                                           │
│  let global = 'Soy global'                                │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              SCOPE FUNCIÓN EXTERNA                  │  │
│  │                                                     │  │
│  │  let externa_var = 'Soy de la función externa'      │  │
│  │                                                     │  │
│  │  ┌───────────────────────────────────────────────┐  │  │
│  │  │           SCOPE FUNCIÓN INTERNA               │  │  │
│  │  │                                               │  │  │
│  │  │  let interna_var = 'Soy la función interna    │  │  │
│  │  │                                               │  │  │
│  │  │                                               │  │  │
│  │  │  Puede acceder a:                             │  │  │
│  │  │  ✔︎ interna_var (scope local)                  │  │  │
│  │  │  ✔︎ externa_var (scope padre)                  │  │  │
│  │  │  ✔︎ global (scope global)                      │  │  │
│  │  │                                               │  │  │
│  │  └───────────────────────────────────────────────┘  │  │
│  │                                                     │  │
│  │  Puede acceder a:                                   │  │
│  │  ✔︎ externa_var (scope local)                        │  │
│  │  ✔︎ global (scope global)                            │  │
│  │  ✖︎ interna_var (scope hijo - no accesible)          │  │
│  │                                                     │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  Puede acceder a:                                         │
│  ✔︎ global (scope local)                                   │
│  ✖︎ externa_var (scope hijo - no accesible)                │
│  ✖︎ interna_var (scope nieto - no accesible)               │
│                                                           │
└───────────────────────────────────────────────────────────┘

```

## Prioridad de los scopes

Cuando tenemos múltiples scopes y variables con el mismo nombre, la prioridad es la siguiente:

- Scope local (función actual)
- Scope de función padre
- Scope global

```JavaScript

let name = 'Global'

function external() {
  let name = 'External'
  
  function internal() {
    let name = 'Internal'
    console.log(name) // "Internal" - prioridad local
  }

  internal()
  console.log(name) // "External" - prioridad local
}

external()
console.log(name) // "Global" - scope global

```

Como ves, no hay ningún problema en volver a crear una variable o función con el mismo nombre que otra variable que ya existe en un scope superior. Pero ten en cuenta que no puedes hacerlo si estás en el mismo scope.

```JavaScript

let name = 'Global'
let name = 'Global' // ❌ SyntaxError: Identifier 'name' has already been declared.

```

## Tipos de Scope

### 1. Scope Global

Variables y funciones declaradas en el nivel más alto del código:

```JavaScript

let colorFavorito = 'azul' // Scope global

function mostrarColor() {
  console.log(colorFavorito) // Puede acceder
}

function cambiarColor() {
  colorFavorito = 'rojo' // Puede modificar
}

mostrarColor() // "azul"
cambiarColor()
mostrarColor() // "rojo"

```

### 2. Scope de Función

Variables declaradas dentro de una función:

```JavaScript

function calcular() {
  let resultado = 10 * 5 // Solo existe dentro de esta función
  return resultado
}

console.log(calcular()) // 50 ✅
console.log(resultado) // ❌ Error: resultado is not defined

```

### 3. Scope de Bloque (con let y const)

Variables declaradas dentro de {} (if, for, while, etc.):

```JavaScript

if (true) {
  let dentroDelBloque = 'Solo aquí'
  var fueraDelBloque = 'Disponible fuera'
  
  console.log(dentroDelBloque) // ✅ Funciona
}

console.log(dentroDelBloque) // ❌ Error
console.log(fueraDelBloque) // ✅ "Disponible fuera"

```

Importante: var no respeta el scope de bloque, pero let y const sí. Igualmente, a día de hoy, deberías evitar usar var y usar siempre let y const.

## Resumiendo el ámbito (scope)

### Scope (Ámbito)

- Determina dónde puedes acceder a variables y funciones
- Jerarquía: Los scopes hijos acceden a los padres, pero no al revés
- Tipos: Global, Función, Bloque y Módulo

### Cadena de Scope

- JavaScript busca variables desde el scope local hacia el global
- Prioridad: Local → Padre → Global

### Diferencias Importantes

- var: Scope de función (ignora bloques)
- let/const: Scope de bloque

### Ventajas del Scope

✅ Encapsulación de datos
✅ Prevención de conflictos de nombres
✅ Organización del código
✅ Seguridad y privacidad