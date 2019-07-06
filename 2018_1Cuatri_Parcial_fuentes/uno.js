
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("ingrese el ancho");
	largo = prompt("ingrese el largo");

	ancho = parseInt(ancho);
	largo = parseInt(largo);


	perimetro = (ancho*2) + (largo*2);

	alert(perimetro);



}
