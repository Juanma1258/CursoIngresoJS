/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var sueldo;
var resultado;
function mostrarAumento()
{
sueldo = document.getElementById("sueldo");
resultado = document.getElementById("resultado");
	sueldo = parseInt(sueldo);
    resultado = parseInt(resultado);
    resultado = sueldo + sueldo * 10;
    alert("Su sueldo aumento un " + resultado + " %");
}
