function mostrar()
{
    var numero;

    numero = prompt("ingrese numero");

    while( numero <= 0 || numero >= 9)
    {
      numero = prompt("reingrese numero");
    
    }
    document.getElementById("Numero").value = numero;
    
      


}//FIN DE LA FUNCIÓN
