function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var respuesta = true;
    var contadorTemperaturasPares = 0;
    var pesoMaximo = 0;

    while(respuesta == true)
    {
        marca = prompt("ingrese marca");
    
        peso = prompt("ingrese peso");
        peso = parseInt(peso);
        while(isNaN(peso) || peso < 1 || peso > 100)
        {
            peso = prompt("reingrese peso");
        }
        temperatura = prompt("ingrese temperatura");
        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("reingrese temperatura");
            
            
        }
        if(temperatura % 2 == 0 )
            {
                contadorTemperaturasPares++;   
            }
       
      
        respuesta = confirm("desea continuar?");
    }
    document.write(" la cantidad de temperaturas pares es:" + contadorTemperaturasPares);
    document.write(" el peso maximo es:" + pesoMaximo + "y la marca es " + marca);

}   
   
