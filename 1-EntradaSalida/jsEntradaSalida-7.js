/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var uno;
var dos
function sumar()
{	
	var uno;
    var dos;
    var suma;
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    uno = parseInt(uno);
    dos = parseInt(dos);
    suma = uno + dos
    alert("la suma es " + suma);
}

function restar()
{
	var resta;
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    uno = parseInt(uno);
    dos = parseInt(dos);
    resta = uno - dos
    alert("la resta es " + resta);
}

function multiplicar()
{ 
	var multiplicar;
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    uno = parseInt(uno);
    dos = parseInt(dos);
    multiplicar = uno * dos
    alert("la multiplicación es " + multiplicar);
}

function dividir()
{
	var dividir;
    uno = document.getElementById("numeroUno").value;
    dos = document.getElementById("numeroDos").value;
    uno = parseInt(uno);
    dos = parseInt(dos);
    dividir = uno % dos
    alert("la división es " + dividir);
}

