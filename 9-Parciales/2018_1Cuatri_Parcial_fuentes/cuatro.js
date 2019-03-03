function mostrar()
{

var num1;
var num2;
var suma;
var resta;
num1 = prompt("ingrese el num");
num2 = prompt("ingrese el num");
if( num1 == num2){
    alert( num1 + num2 );
}
num1 = parseInt(num1);
num2 = parseInt(num2);
resta = num1 - num2;
suma = num2 + num1;

if(num1 > num2){
    alert(resta);
}
if( num2 > num1){
    alert(suma);
    if(suma > 10){
        alert(suma +" se pasa de 10");
    }
}
}
