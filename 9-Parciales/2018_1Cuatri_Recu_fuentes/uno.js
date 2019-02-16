
function mostrar()
{
var peso1;
var peso2;
var mascota1;
var mascota2;
var pesoTotal;
mascota1 = prompt("ingrese el nombre de su mascota");
mascota2 = prompt("ingrese el nombre de su mascota");
peso1 = prompt("peso de su mascota");
peso2 = prompt("peso de su mascota");
peso1 = parseInt(peso1);
peso2 = parseInt(peso2);
pesoTotal = peso1 + peso2;
alert("tenés dos mascotas: " + mascota1 + " y " + mascota2 + ",que pesan: " + peso1 + " y " + peso2 + " kilos, la suma de los kilos es: " + pesoTotal);

}
