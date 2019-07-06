/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

var unNumero;
var otroNumero;
var resto;

unNumero = document.getElementById("numeroDividendo").value;
otroNumero = document.getElementById("numeroDivisor").value;

unNumero = parseInt(unNumero);
otroNumero = parseInt(otroNumero);

resto = unNumero % otroNumero;

alert(resto);
}
