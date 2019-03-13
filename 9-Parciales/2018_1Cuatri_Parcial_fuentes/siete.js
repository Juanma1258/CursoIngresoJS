function mostrar() {

    var nota;
    var sexo;
    var notaMin;
    var sexoMin;
    var promedio;

    var flagNotaMinima = false;
    var contadorVaron = 0;
    var contador = 0;
    var acumuladorNota = 0;

    while (contador < 3) {
        contador++;


        nota = prompt("ingrese nota");
        nota = parseInt(nota);
        acumuladorNota = parseInt(acumuladorNota);
        acumuladorNota = acumuladorNota + nota

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
    }
    promedio = acumuladorNota / contador;
    document.write("el promedio es " + promedio);
    document.write("La nota minima es" + notaMin + " y el sexo es " + sexoMin);
    document.write("La cantidad de varones con una nota mayor a 6 es " + contadorVaron);

}

