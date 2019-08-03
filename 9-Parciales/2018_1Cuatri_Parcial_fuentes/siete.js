function mostrar() 
{
    var contador = 0;
    var acumuladorNotas = 0
    var nota;
    var sexo;

    var notaMasBaja;
    var sexoNotaMasBaja;
    var contadorVarones = 0;

    while(contador < 3)
    {
        nota = prompt("ingrese nota");
        nota = parseInt(nota);
        while(isNaN(nota) || nota < 0 || nota > 10)
        {
            nota = prompt("reingrese nota"); // al pedir que reingrese, nota vuelve a se run string
            nota = parseInt(nota); 
        }
        sexo = prompt("ingrese sexo");
        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("reingrese sexo");
        }
        if(contador == 0 || nota < notaMasBaja)
        {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;

        }
        if(nota >= 6 && sexo == "m")
        {
            contadorVarones++;
        }

        contador++;
        acumuladorNotas = acumuladorNotas + nota;
    }
    promedio = acumuladorNotas / contador;

    document.write("la nota mas baja es " + notaMasBaja + " y el sexo es " + sexoNotaMasBaja);
    document.write(".La cantidad de varones con nota mayor o igual a 6 es " + contadorVarones);
    document.write("el promedio de las notas totales es " + promedio);

}

