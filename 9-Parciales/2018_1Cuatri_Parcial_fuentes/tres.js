function mostrar()
{
var precio;
var descuento;
var precioConDescuento;
precio = prompt("el precio es ");
descuento = prompt("su descuento es de ");

precio = parseFloat(precio);
descuento = parseFloat(descuento);
precioConDescuento = precio - (precio * descuento / 100);
document.getElementById("elPrecioFinal").value = precioConDescuento;


}
