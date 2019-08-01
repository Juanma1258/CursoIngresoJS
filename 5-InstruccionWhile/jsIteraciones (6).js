function mostrar()
{   
    var numero;
    var contador = 0;
    var acumulador = 0;
    var promedio;

    while(contador < 3)
    {
        numero = prompt("ingrese un numero");
        numero = parseInt(numero);
        contador++
        acumulador += numero;
    }
    promedio = acumulador / contador;
    document.getElementById("suma").value = acumulador;
    document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN
