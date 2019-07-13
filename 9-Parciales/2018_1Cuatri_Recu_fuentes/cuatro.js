function mostrar()
{
    var primerNumero;
    var segundoNumero;
    var resultado;

    primerNumero = prompt("ingrese un numero");
    segundoNumero = prompt("ingrese otro numero");

    if(primerNumero == segundoNumero)
    {
        resultado = primerNumero + segundoNumero;
    }
    else
    {

        if(primerNumero > segundoNumero)
        {
            resultado = primerNumero / segundoNumero;
        }
        else
        {
            primerNumero = parseInt(primerNumero);
            segundoNumero = parseInt(segundoNumero);
            resultado = primerNumero + segundoNumero;
            if(resultado < 50)
            {
                resultado = " dsasaddsa " + resultado + " dsadasdadsadsa"
            }
        }
    } 
    alert(resultado);
}
