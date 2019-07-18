function mostrar() 
{
    var planeta;
    var mensaje;

    planeta = prompt("ingrese un planeta");

    switch( planeta)
    {
        case "mercurio":
        case "venus":
            mensaje = "acá hace más calor";
            break;
        case "tierra":
            mensaje = "acá vivimos";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            mensaje = "acá hace más frio";
            break;
        default:
            mensaje = "no es un planeta válido";
            break;
    }
    alert(mensaje);
}

