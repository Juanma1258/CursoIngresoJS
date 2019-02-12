/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    sueldo = document.getElementById("sueldo").value;
    sueldo = parseInt(sueldo);
    aumento = sueldo * 0.1;
    sueldoconAumento = sueldo + aumento;
    document.getElementById("resultado").value = sueldoconAumento;
}
