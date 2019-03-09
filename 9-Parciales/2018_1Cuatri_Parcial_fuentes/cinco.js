function mostrar() {

    var continente;
    var formaPago;
    var cantidadDeDias;
    var importeBruto;
    var descuento;
    var precioFinal;

    continente = prompt("ingrese continente");
    formaPago = prompt("froma de pago");
    cantidadDeDias = prompt("ingrese cantidad de dias");

    importeBruto = cantidadDeDias * 100
    switch(continente){
        case "america":
        if(formaPago == "debito"){
            descuento = 60
        } else{
            descuento = 50; //         ó  50/100 
        }
        break;
        case "africa":
        break;
        case "europa":
        break;
        default:
        break;
    }
    precioFinal = importeBruto* descuento/ 100;
}

