function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
case "Julio":
case "Agosto":
alert("abrigate que hace frío");
break;

case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
alert("falta");
break;

case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre":
alert("hace calor");
break;
}




}//FIN DE LA FUNCIÓN