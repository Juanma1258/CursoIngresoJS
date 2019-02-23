function mostrar()
{

	var suma = 0;
	var num, cont = 0;
  var promedio;


document.getElementById('suma').value= suma;
document.getElementById('promedio').value= promedio/5;
while(cont < 5){
  cont ++;
  num = prompt("ingrese un numero");
  num = parseInt(num);
  suma += num;
}
promedio = suma / cont;
while(!isNaN(num)){
  num = prompt("vuelva a intentarlo");
  num = parseInt(num);
}
}//FIN DE LA FUNCIÓN
