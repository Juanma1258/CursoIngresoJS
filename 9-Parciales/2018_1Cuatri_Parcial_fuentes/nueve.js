function mostrar()
{
var marca;
var maxMarca;
var peso;
var contPeso = 0;
var maxPeso;
var minPeso;
var temperatura;
var contadorTemperaturaPar = 0;
var acumuladorPeso;
var flagPesoMaximo = false;
var respuesta = true;
var contTemperaturaMenosCero = -0;
var promedioPeso;
var contador = 0
var acumulador = 0;

while(respuesta == true){
    marca = prompt("ingrese marca");
    peso = prompt("ingrese peso");
while(peso < 1 || peso > 100){
    peso = prompt("reingrese peso")
}
    temperatura = prompt("ingrese temperatura");
while(temperatura < -30 || temperatura > 30){
    temperatura = prompt("reingrese temperatura");
}
/* todo esto es solo validación*/

/*punto a) cant de temp pares*/
if(temperatura % 2 == 0){                                                         /*para saber las cant de temperaturas pares */
    contadorTemperaturaPar ++;                                                    /*cuenta la cant de temperaturas */

}
/* punto b) maximo peso */
if(flagPesoMaximo == false || peso > maxPeso){
    maxMarca = marca;
    maxPeso = peso;
    flagPesoMaximo = true;
}
/* punto c) cantidad de productos a -0 grados */
if(temperatura < 0){
    contTemperaturaMenosCero ++;
}
/* punto d) */
contPeso ++;
acumuladorPeso = acumuladorPeso + peso;

respuesta = confirm("desea ingresar otro producto?");
}
document.write(" la cantidad de temperaturas pares es " + contadorTemperaturaPar + " " );
document.write(" el producto maximo es " + maxMarca);
document.write(" la cantidad de temperaturas bajo 0 es " + contTemperaturaMenosCero + " ");
document.write("")
}
/* "do while" primero hace y despues evalúa."while" evalúa y después hace*/