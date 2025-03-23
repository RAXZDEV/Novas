  // SIDE MENU FUNCTION
let bg = document.querySelector('#bg')
let menu = document.querySelector('#menu')
let close = document.querySelector('#close')
let nav = document.querySelector('.horizontal')
let body = document.querySelector('body')

menu.onclick = function(){
  nav.style = 'right: 0%';
  gsap.from('.horizontal li',{
    y: -30,
    stagger: 0.2,
    opacity: 0,
  })
  close.style = 'transform: rotate(360deg)';
  bg.style = 'opacity: 0.2; pointer-events: visible';
  body.style = 'overflow: hidden'
}
close.onclick = function() {
  nav.style = 'right: -100%'
  close.style = 'transform: rotate(0deg)'
  bg.style = 'opacity: 0; pointer-events: none';
  body.style = 'overflow: visiable'
}
bg.onclick = function() {
  nav.style = 'right: -100%'
  close.style = 'transform: rotate(0deg)'
  bg.style = 'opacity: 0; pointer-events: none';
  body.style = 'overflow: visiable'
}
  // FAQ ARROW CHANGE ON CLICK

/*let arrow = document.querySelector('[data-name]')
let host = false;
function rotate() {
  
  if (host == false) {
    host = true
    arrow.style ='transform: rotate(180deg)'
  }
  else{
    host = false
    arrow.style ='transform: rotate(0deg)'
  }
}*/

let container = document.querySelectorAll('summary');
const arrows = document.querySelectorAll('#arrow')

container.forEach(faq => {
  arrows.forEach(arrow => {
    const index = arrow.dataset.index;
    let host = false
    let host2 = false
    let host3 = false
    let host4 = false
  
    arrow.addEventListener('click', function() {
      switch (index) {
        case "1":
          if (host == false) {
            host = true
            arrow.style = 'transform: rotate(180deg)'
          }
          else {
            host = false
            arrow.style = 'transform: rotate(0deg)'
          }
          break;
        case "2":
          if (host2 == false) {
            host2 = true
            arrow.style = 'transform: rotate(180deg)'
          }
          else {
            host2 = false
            arrow.style = 'transform: rotate(0deg)'
          }
          break;
        case "3":
          if (host3 == false) {
            host3 = true
            arrow.style = 'transform: rotate(180deg)'
          }
          else {
            host3 = false
            arrow.style = 'transform: rotate(0deg)'
          }
          break;
        case "4":
          if (host4 == false) {
            host4 = true
            arrow.style = 'transform: rotate(180deg)'
          }
          else {
            host4 = false
            arrow.style = 'transform: rotate(0deg)'
          }
          break;
      }
    })
  })
})

  // Page loader functionality
window.addEventListener('load', function(){
  document.querySelector('.load').classList.add('hide')
  body.classList.add('scroll')
})
