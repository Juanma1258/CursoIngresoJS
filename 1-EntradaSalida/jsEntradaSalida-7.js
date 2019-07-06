/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var unNumero;
    var otroNumero;
    var suma;

    unNumero = document.getElementById("numeroUno").value;
    otroNumero = document.getElementById("numeroDos").value; 

    unNumero = parseInt(unNumero);
    otroNumero = parseInt(otroNumero);

    suma = unNumero + otroNumero;

    alert(suma);

}
function restar()
{
    var unNumero;
    var otroNumero;
    var resta;

    unNumero = document.getElementById("numeroUno").value;
    otroNumero = document.getElementById("numeroDos").value; 

    unNumero = parseInt(unNumero);
    otroNumero = parseInt(otroNumero);

    resta = unNumero - otroNumero;

    alert(resta);

}
function multiplicar()
{
    var unNumero;
    var otroNumero;
    var multiplicacion;

    unNumero = document.getElementById("numeroUno").value;
    otroNumero = document.getElementById("numeroDos").value;

    unNumero = parseInt(unNumero);
    otroNumero = parseInt(otroNumero);
    
    multiplicacion = unNumero * otroNumero;

    alert(multiplicacion);

}
function dividir()
{
    var unNumero;
    var otroNumero;
    var division;

    unNumero = document.getElementById("numeroUno").value;
    otroNumero = document.getElementById("numeroDos").value; 

    unNumero = parseInt(unNumero);
    otroNumero = parseInt(otroNumero);

    
    division = unNumero / otroNumero;

    alert(division);
}