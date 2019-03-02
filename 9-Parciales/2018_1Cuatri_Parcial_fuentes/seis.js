function mostrar()
{

var hora = document.getElementById("laHora").value;

hora = parseInt(hora);

switch(hora){
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
     alert("es de mañana");
     break;
    case 12 :
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
     alert("es de tarde");
     break;
     default:
     if(hora >= 20 && hora <= 24 || hora >= 1 && hora <= 5){
        alert("es de noche")
         if(hora < 24 && hora > 5){
            alert("a dormir")
         }
         
     }
     else{
         alert(" la hora es incorrecta")
     }
     break;

}
}
