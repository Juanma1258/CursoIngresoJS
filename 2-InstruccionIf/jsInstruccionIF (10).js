function mostrar()
{
	var numero;
	var nota;

	numero = Math.floor(Math.random()*(11-1))+1;

	if(numero == 9 || numero == 10)
	{
		nota = "excelente";
	}
	else
	{
		if(numero > 4)
		{
			nota = "aprobado";
		}
		else
		{
			nota = "desaprobado";
		}
	}
	alert( numero + nota);
}//FIN DE LA FUNCIÓN