function mostrar() {

    var unNumero;
    var otroNumero;
    var suma;

    unNumero = prompt("ingrese el num");
    otroNumero = prompt("ingrese el num");

    unNumero = parseInt(unNumero);
    otroNumero = parseInt(otroNumero);
    suma = unNumero + otroNumero;

    if (unNumero == otroNumero) {
        alert(unNumero + "" + otroNumero);
    }
    else {
        if (unNumero > otroNumero) {
            alert(unNumero - otroNumero);
        }
        else {

            alert(otroNumero + unNumero);


            if (suma > 10) {
                alert(suma + " se pasa de 10")
            }

        }
    }
}
