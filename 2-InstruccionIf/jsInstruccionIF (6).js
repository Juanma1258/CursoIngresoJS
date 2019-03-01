function mostrar()
{
//tomo la edad
var edad;
edad = document.getElementById("edad").value;
if(edad > 0 && edad < 13){
  
   alert("eres un niño");
}
if(edad > 12 && edad < 18){
  
  alert("eres un adolescente");
}
if(edad > 17){
  alert("eres un adulto")
}
//FIN DE LA FUNCIÓN
}
