// Constructor padre

function Producto(nombre, precio) {
  // OJO: Las instrucciones piden 'nombre' y 'precio', no 'name' y 'price'
  this.nombre = nombre;
  this.precio = precio;
}

Producto.prototype.aplicarDescuento = function (porcentaje) {
  const cantidadADescontar = (this.precio * porcentaje) / 100;
  this.precio = this.precio - cantidadADescontar;
  // No es necesario el console.log aquí según la instrucción, 
  // pero no hace daño dejarlo si te sirve a ti.
};

Producto.prototype.mostrarInfo = function () {
  console.log(`El nombre es: ${this.nombre} y el precio es: ${this.precio}`);
};

const laptop = new Producto('MacBook Air', 100);
const cafe = new Producto('Café de grano', 20);

laptop.mostrarInfo();

laptop.aplicarDescuento(10);

laptop.mostrarInfo();