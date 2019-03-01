function mostrar()
{
//tomo la edad  
edad = document.getElementById("edad").value;
estadoCivil = document.getElementById("estadoCivil").value;

if(estadoCivil != "Soltero" && edad < 18){
alert("eres demasiado pequeño para NO ser soltero");
}


}//FIN DE LA FUNCIÓN