// Recursividad

function cuentaAtras (numero) {
  if (numero < 0){
    return
  }
  console.log(numero)
  cuentaAtras(numero - 1)
}

cuentaAtras(5)


function factorial (n) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

factorial(5)