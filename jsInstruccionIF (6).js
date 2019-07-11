function mostrar()
{
var edad;

edad = document.getElementById("edad").value;

if(edad >= 18){
alert("mayor");
	            //mayor
}else{
 //menor o adolescente
	if(edad <13){
		alert("menor");   //menor

	}else
	alert("adolescente"); //adolescente

}


}//FIN DE LA FUNCIÓN

