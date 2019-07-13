function mostrar() 
{
var unNumero;
var otroNumero;
var resultado;

unNumero = prompt("ingrese un numero");
otroNumero = prompt("ingrese otro numero");

if(unNumero == otroNumero){
    resultado = unNumero + otroNumero;
//concateno
    }else{
        if(unNumero > otroNumero){
            resultado = unNumero - otroNumero;
        //resto
        }else{
        //sumo
            unNumero = parseInt(unNumero);
            otroNumero = parseInt(otroNumero);
            resultado = unNumero + otroNumero;
        }
        if(resultado > 10){
            resultado = "el resultado es " + resultado + " y supera los 10";
        }
    }

    alert(resultado);

}