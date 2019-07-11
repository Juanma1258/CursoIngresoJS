function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	nota = parseInt(Math.random()*10 + 1);
	
	if(nota == 10 || nota == 9){
		alert( "Tu nota es " + nota + " .Excelente");
	}
	
	if(nota >= 4 && nota < 9){
		alert( "Tu nota es " + nota + " .Aprobaste");
	}
	if(nota < 4){
		alert("Tu nota es " + nota + " .Vamos, la próxima se puede");
	}
	

}//FIN DE LA FUNCIÓN