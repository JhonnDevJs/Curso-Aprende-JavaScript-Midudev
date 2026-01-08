try {
  // Código que podría generar un error
  console.log("Intentando ejecutar código...")
  console.log(variableQueNoExiste) // ❌ ReferenceError: variableQueNoExiste is not defined
} catch (error) {
  // Código que se ejecuta si hay un error
  console.log("¡Ocurrió un error!", error.message)
}

console.log("El programa continúa ejecutándose") // ✅ Esta línea sí se ejecuta


const jsonString = '{"nombre": "Juan", "edad": 30}'
const jsonInvalido = '{"nombre": "Juan", "edad":}'

try {
  const objeto = JSON.parse(jsonString)
  console.log("JSON válido:", objeto)
} catch (error) {
  console.log("Error al parsear JSON:", error.message)
}

try {
  const objeto2 = JSON.parse(jsonInvalido)
  console.log("Este mensaje no se mostrará")
} catch (error) {
  console.log("JSON inválido detectado:", error.message)
}