var section4 = document.getElementById('fourth-section')
var circulos = document.querySelectorAll('.circulos')
var texto = document.getElementById('4-1-wrapper')

section4.addEventListener("click", () =>{
    if (count<5) {
        count++
    } else {
        count =0
    }

    switch (count) {
        case 0:
            circulos[0].classList.remove("hide");
            circulos[1].classList.add("hide");
            circulos[2].classList.add("hide");
            circulos[3].classList.add("hide");
            circulos[4].classList.add("hide");
            circulos[5].classList.add("hide");
            texto.classList.remove("hide");
            break;
        case 1:
            circulos[0].classList.add("hide");
            circulos[1].classList.remove("hide");
            circulos[2].classList.add("hide");
            circulos[3].classList.add("hide");
            circulos[4].classList.add("hide");
            circulos[5].classList.add("hide");
            texto.classList.remove("hide");
            break;
        case 2:
            circulos[0].classList.add("hide");
            circulos[1].classList.add("hide");
            circulos[2].classList.remove("hide");
            circulos[3].classList.add("hide");
            circulos[4].classList.add("hide");
            circulos[5].classList.add("hide");
            texto.classList.remove("hide");
            break;
        case 3:
            circulos[0].classList.add("hide");
            circulos[1].classList.add("hide");
            circulos[2].classList.add("hide");
            circulos[3].classList.remove("hide");
            circulos[4].classList.add("hide");
            circulos[5].classList.add("hide");
            texto.classList.remove("hide");
            break;
        case 4:
            circulos[0].classList.add("hide");
            circulos[1].classList.add("hide");
            circulos[2].classList.add("hide");
            circulos[3].classList.add("hide");
            circulos[4].classList.remove("hide");
            circulos[5].classList.add("hide");
            texto.classList.remove("hide");
            break;
        case 5:
            circulos[0].classList.add("hide");
            circulos[1].classList.add("hide");
            circulos[2].classList.add("hide");
            circulos[3].classList.add("hide");
            circulos[4].classList.add("hide");
            circulos[5].classList.remove("hide");
            texto.classList.add("hide");
            break;
        default:
            break;
    }
})