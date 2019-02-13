function mostrar()
{
var precio;
var porcentajedeDescuento;
var precioFinal;
precio = prompt("el precio es ");
porcentajedeDescuento = prompt("su decuento es de ");

precio = parseInt(precio);
porcentajedeDescuento = parseInt(porcentajedeDescuento);
precioFinal = precio - precio * porcentajedeDescuento / 100;
document.getElementById("elPrecioFinal").value = precioFinal;


}
