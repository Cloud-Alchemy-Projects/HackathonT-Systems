let tables = document.querySelectorAll(".tabla")
var boton = document.querySelectorAll(".boton")
var flechaDerecha = document.getElementById("derecha")
var flechaIzquierda = document.getElementById("izquierda")

var numeroActual = 0
var anterior = 0
var numeroDeTablas = tables.length



function deplazarDerecha(flechaDerecha) {
    flechaDerecha.addEventListener("click", () =>{
        // if (numeroActual==0) {
        //     flechaIzquierda.classList.remove("flecha-opaca")
        // } else {
        //     flechaIzquierda.classList.add("flecha-opaca")

        // }
        if (numeroActual<numeroDeTablas-1) {
            anterior = numeroActual
            numeroActual ++
            x(numeroActual, anterior, tables)
        } 
    })
}
function deplazarIzquierda(flechaIzquierda) {
    flechaIzquierda.addEventListener("click", () =>{
        // if (numeroActual>=numeroDeTablas-1) {
        //     flechaDerecha.classList.remove("flecha-opaca")
        // } else {
        //     flechaDerecha.classList.add("flecha-opaca")

        // }
        if (numeroActual>0) {   
            anterior = numeroActual
            numeroActual --
            x(numeroActual, anterior, tables)
        }
    })
}


function x(numeroActual, anterior, tables)
{
    // Añadir clase "hide" a todas las tablas
    tables[anterior].classList.toggle("hide")
    tables[numeroActual].classList.toggle("hide")
    boton[numeroActual].classList.toggle("selected")
    boton[anterior].classList.toggle("selected")

}

deplazarDerecha(flechaDerecha)
deplazarIzquierda(flechaIzquierda)
