/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precio1; 
var precio2;
var precio3;
function Sumar () 
{
var suma;
precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;
precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);
suma = precio1 + precio2 + precio3;
alert( "el resultado es: " +  suma);
}
function Promedio () 
{
var sumaDePrecios;
var resultado;
precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;
precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);
sumaDePrecios = parseInt(sumaDePrecios);
sumaDePrecios = precio1 + precio2 + precio3;
resultado = sumaDePrecios / 3;
alert("el promedio es: " + resultado);
}
function PrecioFinal () 
{
var sumaTotalDeProductos;
var resultado;
var iva;
precio1 = document.getElementById("PrecioUno").value;
precio2 = document.getElementById("PrecioDos").value;
precio3 = document.getElementById("PrecioTres").value;
precio1 = parseInt(precio1);
precio2 = parseInt(precio2);
precio3 = parseInt(precio3);
sumaTotalDeProductos = parseInt(sumaTotalDeProductos);
resultado = parseInt(resultado);
iva = parseInt(iva);
sumaTotalDeProductos = precio1 + precio2 + precio3;
resultado = sumaTotalDeProductos / 100;
resultado = resultado * 21 + sumaTotalDeProductos;

alert(resultado);


}