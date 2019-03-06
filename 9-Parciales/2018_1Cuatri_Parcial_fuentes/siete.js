function mostrar()
{
var nota;
var sexo;
var contVaron = 0;
var nota;
var respuesta = true;

while( respuesta == true){
nota = prompt("ingrese nota");
while(nota < 0 || nota > 10){
    nota = prompt("reingrese nota");
}
sexo = prompt("ingrese sexo");
while(sexo != "m" && sexo != "f"){
    sexo = prompt("reingrese sexo");
}
if(sexo == "m"){
    contVaron ++;
    
}
respuesta = confirm("desea ingresar mas datos?");
}
 if(contVaron == 5){
     document.write("la cantidad de varones es " + contVaron);
}
}
