function mostrar()
{

	var precio;
	var porcentajeDeDescuento;
	var descuento;

	precio = prompt("ingrese precio");
	porcentajeDeDescuento = prompt("ingrese porcentaje");

	descuento = (precio * porcentajeDeDescuento) / 100;
	alert(descuento);



}
