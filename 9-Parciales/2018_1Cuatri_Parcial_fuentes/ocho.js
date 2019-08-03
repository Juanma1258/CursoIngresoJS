function mostrar() 
{
    var letra;
    var numero;
    var respuesta = true;

    var contadorNumerosPares = 0;
    var contadorNumerosImpares = 0;


    while(respuesta == true)
    {
        letra = prompt("ingrese una letra");
        while((letra < "A" || letra > "Z")&&(letra < "a" || letra > "z"))
        {
            letra = prompt("reingrese letra");
        }
        numero = prompt("ingrese numero");
        numero = parseInt(numero);
        while(isNaN(numero) || numero < -100 || numero > 100)
        {
            numero = prompt("reingrese numero");
            numero = parseInt(numero);
        }
        if(numero %2 == 0)
        {
            contadorNumerosPares++;
        }
            else
            {
                if(numero == 0)
                {
                    contadorNumerosCeros++;
                }
                else
                {
                   contadorNumerosImpares++;
                }
            }
        respuesta = confirm("desea continuar?");
    }
    document.write("la cantidad de numeros pares es " + contadorNumerosPares);
    document.write("la cantidad de numeros impares es " + contadorNumerosImpares);
    
}


