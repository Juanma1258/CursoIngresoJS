function mostrar()
{
var gasto1;
var gasto2;
var gasto3;
var gastoTotal
var resultadofinal
gasto1 = prompt("Pepito gastó ");
gasto2 = prompt("Gastón gastó ");
gasto3 = prompt("Juan gastó ");
gasto1 = parseInt(gasto1);
gasto2 = parseInt(gasto2);
gasto3 = parseInt(gasto3);
gastoTotal = parseInt(gastoTotal);
gastoTotal = gasto1 + gasto2 + gasto3;
resultadofinal = gastoTotal / 3;
document.getElementById("elPrecioFinal").value = resultadofinal;


}
