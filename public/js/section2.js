let tables = document.querySelectorAll(".tabla")
var boton = document.querySelectorAll(".boton")
var flechaDerecha = document.getElementById("derecha")
var flechaIzquierda = document.getElementById("izquierda")

var numeroActual = 0
var anterior = 0
var numeroDeTablas = tables.length


/**
 * Muestra la tabla derecha a la actual
 * @param {HTMLElement} flechaDerecha La flecha a la derecha de la Sección 2 (i.e., Innovative and Talented Minds)
 */
function deplazarDerecha(flechaDerecha) {
    flechaDerecha.addEventListener("click", () =>{

        /* Independientemente de en qué tabla se presione la flecha
           derecha, el usuario tiene la opción para regresar a la izquierda.

           Por ende, la flecha izquierda se habilita.
         */
        flechaIzquierda.classList.remove("flecha-opaca");
        flechaIzquierda.classList.add("flecha");

        /**
         * La última tabla antes de que la flecha derecha se opaque
         */
        const LIMITE_SUPERIOR = numeroDeTablas - 2;

        if (numeroActual<LIMITE_SUPERIOR) {
            anterior = numeroActual
            numeroActual ++
            mostrarTabla(numeroActual, anterior, tables)
            flechaDerecha.classList.remove("flecha-opaca");
            flechaDerecha.classList.add("flecha");
        }
        else if(numeroActual === LIMITE_SUPERIOR)
        {
            anterior = numeroActual
            numeroActual ++
            mostrarTabla(numeroActual, anterior, tables)
            flechaDerecha.classList.remove("flecha");
            flechaDerecha.classList.add("flecha-opaca");
        }
    })
}

/**
 * Muestra la tabla izquierda a la actual
 * @param {HTMLElement} flechaIzquierda La flecha a la izquierda de la Sección 2 (i.e., Innovative and Talented Minds)
 */
function deplazarIzquierda(flechaIzquierda) {
    flechaIzquierda.addEventListener("click", () =>{

        /* Independientemente de en qué tabla se presione la flecha
           izquierda, el usuario tiene la opción para regresar a la derecha.

           Por ende, la flecha derecha se habilita.
         */
        flechaDerecha.classList.remove("flecha-opaca");
        flechaDerecha.classList.add("flecha");
        
        /**
         * La última tabla antes de que la flecha izquierda se opaque
         */
        const LIMITE_INFERIOR = 1;

        if (numeroActual>LIMITE_INFERIOR) {
            anterior = numeroActual
            numeroActual --
            mostrarTabla(numeroActual, anterior, tables)
            flechaIzquierda.classList.remove("flecha-opaca");
            flechaIzquierda.classList.add("flecha");
        }
        else if(numeroActual === LIMITE_INFERIOR)
        {
            anterior = numeroActual;
            numeroActual--;
            mostrarTabla(numeroActual, anterior, tables);
            flechaIzquierda.classList.remove("flecha");
            flechaIzquierda.classList.add("flecha-opaca");
        }
    })
}

/**
 * Oculta la tabla anterior y muestra la tabla actual
 * Asimismo, selecciona y deselecciona los botones correspondientes
 * @param {Number} numeroActual El índice de la tabla actual
 * @param {Number} anterior El índice de la tabla previa al desplace
 * @param {HTMLElement[]} tables La colección de tablas de la Sección 2 (i.e., Innovative and Talented Minds)
 */
function mostrarTabla(numeroActual, anterior, tables)
{
    tables[anterior].classList.toggle("hide")
    tables[numeroActual].classList.toggle("hide")

    boton[anterior].classList.toggle("selected")
    boton[numeroActual].classList.toggle("selected")
}

deplazarDerecha(flechaDerecha)
deplazarIzquierda(flechaIzquierda)
