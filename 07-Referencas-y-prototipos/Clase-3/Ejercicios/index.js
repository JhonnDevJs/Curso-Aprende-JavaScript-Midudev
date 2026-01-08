class Producto {
	constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
  get precio() {
    return this._precio;
  }
	set precio(nuevoPrecio) {
    if(nuevoPrecio <= 0){
      throw new Error('El precio no puede ser menor a 0')
    }
    this._precio = nuevoPrecio;
  }
	get precioConIVA() {
    return this.precio * 1.21;
  }
	aplicarDescuento(porcentaje) {
    const descuento = (this.precio * porcentaje) / 100 
    this.precio = this.precio - descuento
    return this.precio
  }
	static compararPrecios(producto1, producto2) {
    if (producto1.precio < producto2.precio) {
      return producto1
    }
    return producto2
  } 
}
