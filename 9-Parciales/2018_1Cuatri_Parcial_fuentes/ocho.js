function mostrar() {
    var letra;
    var respuesta;
    var numero;
    var contadorNumeroPar;
    var contadorNumeroImpar;
    var contadorCero;
    var acumuladorNumeroNegativo;
    var acumuladorNumeroPositivo;
    var contadorNumeroPositivo;
    var promedio;

    letra = true;
    respuesta = true;
    contadorNumeroPar = 0;
    contadorNumeroImpar = 0;
    contadorCero = 0;
    acumuladorNumeroNegativo = 0;
    contadorNumeroPositivo = 0;
    acumuladorNumeroPositivo = 0;

    while (respuesta == true) {

        numero = prompt("ingrese numero");
        numero = parseInt(numero);
        while (numero < -100 || numero > 100) {
            numero = prompt("reingrese numero");
        }
        letra = prompt("ingrese letra");
        while (isNaN(letra) == false) {
            letra = prompt("reingrese letra")
        }

        if (numero % 2 == 0) {
            contadorNumeroPar++;
        }
        else {
            contadorNumeroImpar++;
        }
        if (numero == 0) {
            contadorCero++;
        }
        if (numero < 0) {
          acumuladorNumeroNegativo = acumuladorNumeroNegativo + numero;

        }
        else{
            contadorNumeroPositivo++
            acumuladorNumeroPositivo = acumuladorNumeroPositivo + numero;
        }
        promedio = acumuladorNumeroPositivo / 100 * contadorNumeroPositivo;
        respuesta = confirm("seguir");
    }
    document.write("los numeros pares son " + contadorNumeroPar);
    document.write("la cantidad de numeros impares es" + contadorNumeroImpar);
    document.write("la cantidad de ceros es " + contadorCero);
    document.write("la suma de los numeros negativos es " + acumuladorNumeroNegativo);
    document.write("el promedio de los numeros positivos es " + promedio);
}


