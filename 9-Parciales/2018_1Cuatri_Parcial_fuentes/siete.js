function mostrar() 
{
    var contador = 0;
    var nota;
    var sexo;

    var notaMasBaja = 0;
    var sexoNotaMasBaja = 0;

    while(contador < 2)
    {
        nota = prompt("ingrese nota");
        nota = parseInt(nota);
    while(isNaN(nota) || nota < 0 || nota > 10)
    {
        nota = prompt("reingrese nota");
    }

        sexo = prompt("ingrese sexo");
    while(sexo != "f" && sexo != "m")
    {
        sexo = prompt("reingrese sexo");
    }
      if(contador == 0)
      {
        notaMasBaja = nota;
        sexoNotaMasBaja = sexo;
      }
      else
      {
          if(nota < notaMasBaja)
          {
              notaMasBaja = nota;
              sexoNotaMasBaja = sexo
          }
 
        contador++
    }
   
    contador++
    }
    document.write("nota mas baja " + notaMasBaja);
    document.write("sexo con la nota mas baja" + sexoNotaMasBaja);
}

