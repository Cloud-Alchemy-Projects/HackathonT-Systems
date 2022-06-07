const card = document.querySelectorAll('.card')
const infoContainer = document.querySelectorAll('.first-info')
const semblanzas = document.querySelectorAll('.semblanza-container')


setTimeout(()=>{
    infoContainer[0].classList.add('move-info')
    semblanzas[0].classList.remove('hide-semblanza')

}, 1500)

setTimeout(()=>{
    infoContainer[0].classList.remove('move-info')
    semblanzas[0].classList.add('hide-semblanza')
}, 3500)

function moveText(){

    card.forEach((element, index) => {
        element.addEventListener('mousemove', () =>{
            infoContainer[index].classList.add('move-info')
            // infoContainer[index].classList.add('hide-info')
            semblanzas[index].classList.remove('hide-semblanza')
        })
        element.addEventListener('mouseleave', () =>{
            infoContainer[index].classList.remove('move-info')
            // infoContainer[index].classList.remove('hide-info')
            semblanzas[index].classList.add('hide-semblanza')
        })
    });
}

moveText()