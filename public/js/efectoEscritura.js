//Definicion de nuestro activador para la animacion cuando el usuario hace scroll y llega a la seccion de dicha animacion
function scrollTrigger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
      addObserver(el, options)
  })
}

//Definicion de la funcion del observador
function addObserver(el, options){
  if(!('IntersectionObserver' in window)){ //Mediante un IF nos permite saber si esta en la ventana
      if(options.cb){
          options.cb(el)
      }else{
          entry.target.classList.add('active') //Seleccionamos el objetivo que va a el observador va esta vigilando
      }
      return
  }
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
      entries.forEach(entry =>  {
          if(entry.isIntersecting){
              if(options.cb){
                  options.cb(el) 
              }else{
                  entry.target.classList.add('active')
              }
              observer.unobserve(entry.target)
          }
      })
  }, options)
  observer.observe(el)
}
// Example usages:
scrollTrigger('.section3-regular-text')

scrollTrigger('.scroll-reveal', {
  rootMargin: '-200px',
})