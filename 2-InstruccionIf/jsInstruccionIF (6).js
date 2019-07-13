function mostrar()
{
var edad;
var mensaje;

edad = document.getElementById("edad").value;

if(edad >= 18)
{
mensaje = "adulto";
	            //adulto
}
else
{
 //menor o adolescente
	if(edad <13)
	{
		mensaje = "niño";   //niño

	}
	else
	{
		mensaje = "adolescente"; //adolescente
	}
	
}
alert(mensaje)


}//FIN DE LA FUNCIÓN

