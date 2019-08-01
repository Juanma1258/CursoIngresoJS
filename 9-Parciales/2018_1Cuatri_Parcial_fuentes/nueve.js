function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta = true;
    var contadorTemperatura;

    while(respuesta == true)
    {
        marca = prompt("ingrese marca");
    peso = prompt("ingrese peso");
    while(isNaN(peso) || peso < 1 || peso > 100)
    {
        peso = prompt("reingrese peso");
    }

    temperatura = prompt("ingrese temperatura");
    while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
    {
        temperatura = prompt("reingrese temperatura");
        contadorTemperatura++
    }
    respuesta = confirm("desea continuar?");
    }
    document.write("cantidad de temperaturas:" + contadorTemperatura);

}