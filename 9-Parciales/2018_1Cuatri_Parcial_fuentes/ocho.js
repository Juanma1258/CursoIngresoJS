function mostrar() {
    var respuesta;
    var letra;
    var contadorNumeroPar;
    var contadorNumeroImpar;
    var respuesta;


    letra = true;
    contadorNumeroPar = 0;
    contadorNumeroImpar = 0;
    respuesta = true;

    while (respuesta == true) {

        numero = prompt("ingrese numero");
        while (numero < -100 || numero > 100) {
            numero = prompt("reingrese numero");
        }
        letra = prompt("ingrese letra");
        while (isNaN(letra) == false) {
            letra = prompt("reingrese letra")
        }

        if (numero % 2 == 0) {
            contadorNumeroPar++;
        } else 
        {
            contadorNumeroImpar++;
        }
        respuesta = confirm("seguir");
    }

    document.write("los numeros pares son " + contadorNumeroPar);
    document.write("la cantidad de numeros impares es" + contadorNumeroImpar);
}


