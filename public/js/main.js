'use strict'
window.addEventListener("load",inicio);
function inicio() {
  menu_escritorio()
  color()
}

function color() {
  let pag_actual = location.pathname;
  let h_bt = document.querySelector("#home_bt");
  let p_bt = document.querySelector("#portafolio_bt");
  let c_bt = document.querySelector("#contacto_bt");
  let b_bt = document.querySelector("#blog_bt");
  switch (pag_actual) {
    case "/":
      h_bt.style.setProperty("color" ,"#FFB900");
      break
    case "/blog.html":
      b_bt.style.setProperty("color" ,"#FF4E1D");
      break
    case "/contacto.html":
      c_bt.style.setProperty("color" ,"#cc147e");
      break
    case "/portafolio.html":
      p_bt.style.setProperty("color","#009994")
  }
}

function mostrar_menu() {
  let state = menu.className;
  if (state == "open") {
    control.className = "close";
    menu.className = "close";
  } else {
    control.className = "open";
    menu.className = "open";
   }
}

function menu_escritorio() {
  let pantalla = screen.width;
  console.log(pantalla)
  if (pantalla>1024){
    menu.className = "open";
  }
}

const menu_control = document.querySelector("#menu_control");
const control = document.querySelector("#control");
const menu = document.querySelector("#menu_header")

/*Muestra el Menu*/
control.addEventListener("click", mostrar_menu)
/*Muestra menu un tamaño grande*/
/*Flecha de subida*/
document.querySelector("#flecha_container").addEventListener('click',() =>{
  window.scrollTo({
    top: 0,
    behavior:"smooth"
  })

})


