
function mostrar()
{

var ancho;
var largo;
var perimetro;

ancho = prompt("el ancho del rectángulo es ");
largo = prompt("el largo del rectángulo es ");
ancho = parseInt(ancho);
largo = parseInt(largo);
perimetro = 2*(ancho + largo);

alert("el perímetro es: " + perimetro);

}
