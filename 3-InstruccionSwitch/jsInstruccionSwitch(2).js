function mostrar()
{
    var mes;
    var mensaje;
    mes = document.getElementById("mes").value;

    switch(mes)
    {
        case "Julio":
        case "Agosto":
            mensaje = "Abrigate que hace frio.";
            break;
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            mensaje = "Falta para el invierno.";
            break;
        default:
            mensaje = "Ya pasamos el frio, ahora calor!!!.";
            break;
            
            
    }
    alert(mensaje);

}//FIN DE LA FUNCIÓN