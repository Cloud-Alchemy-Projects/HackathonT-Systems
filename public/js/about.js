const card = document.querySelectorAll('.card')
const infoContainer = document.querySelectorAll('.first-info')
const semblanzas = document.querySelectorAll('.semblanza-container')

card.forEach((element, index) => {
    element.addEventListener('mousemove', () =>{
        infoContainer[index].classList.add('hide-info')
        semblanzas[index].classList.remove('hide-semblanza')
    })
    element.addEventListener('mouseleave', () =>{
        infoContainer[index].classList.remove('hide-info')
        semblanzas[index].classList.add('hide-semblanza')
    })
});