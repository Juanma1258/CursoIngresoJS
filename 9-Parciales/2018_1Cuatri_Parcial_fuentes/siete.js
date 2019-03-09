function mostrar() {
    var nota;
    var sexo;
    var contVaron = 0;
    var contador = 0;
    var flagNotaMinima = false;
    var notaMin;
    var sexoMin;
    var acumulador = 0;
    var promedio;


    while (contador < 3) {
        contador++;


        nota = prompt("ingrese nota");
        while (nota < 0 || nota > 10) {
            nota = prompt("reingrese nota");
        }
        sexo = prompt("ingrese sexo");
        while (sexo != "m" && sexo != "f") {
            sexo = prompt("reingrese sexo");
        }

        if (flagNotaMinima == false || nota < notaMin || sexo == "f" && sexo == "m") {
            sexoMin = sexo;
            notaMin = nota;
            flagNotaMinima = true;
        }
        if (sexo == "m" && nota > 6) {
            contadorVaron++;

        }

        acumulador = acumulador + nota;
        contador++;
        
    }
    promedio = acumulador / contador;

    alert("el promedio es " + promedio + "." + "La nota minima es " + notaMin + " y el sexo es " + sexoMin + ".La cantidad de varones con una nota mayor a 6 es " + contVaron);

}

