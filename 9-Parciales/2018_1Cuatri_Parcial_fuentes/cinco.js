function mostrar()
{

var planetas;

planetas = prompt("ingrese el nombre de un planeta");

switch(planetas){
    case "mercurio":
    case "venus":
    alert("acá hace más calor");
    break;
    case "tierra":
    alert("acá vivimos");
    break;
    case "urano":
    case "neptuno":
    alert("acá hace más frío");
    break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "pluton":
    default:
    alert("no está en la lista");
    break;
}
}
