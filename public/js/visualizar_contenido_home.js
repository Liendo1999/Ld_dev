'use strict'

/*Menu del Home*/
window.addEventListener("load",trigger);

var f_bt = document.getElementById("FB");
var f_sect = document.getElementById("F_Section");
var b_bt = document.getElementById("BB");
var b_sect = document.getElementById("B_Section");
var o_bt = document.getElementById("UB");
var o_sect = document.getElementById("UP_Section");

function trigger() {
  f_bt.addEventListener("click",show_front);
  b_bt.addEventListener("click",show_back);
  o_bt.addEventListener("click",show_other);
}
function show_front() {
    f_bt.style.setProperty("opacity","100%");
    f_sect.className = "C_item";
    b_bt.style.setProperty("opacity", "60%");
    b_sect.className = "no_show";
    o_bt.style.setProperty("opacity", "60%");
    o_sect.className = "no_show";
}
function show_back() {
    b_bt.style.setProperty("opacity","100%");
    b_sect.className = "C_item";
    f_bt.style.setProperty("opacity", "60%");
    f_sect.className = "no_show";
    o_bt.style.setProperty("opacity", "60%");
    o_sect.className = "no_show";
}
function show_other() {
    o_bt.style.setProperty("opacity","100%");
    o_sect.className = "C_item";
    b_bt.style.setProperty("opacity", "60%");
    b_sect.className = "no_show";
    f_bt.style.setProperty("opacity", "60%");
    f_sect.className = "no_show";
}

/*Flip Cards*/
var array_elementos = document.querySelectorAll(".C_Item");
array_elementos.forEach(i => i.addEventListener("click", ()=> {
  let front = i.firstElementChild;
  let back = i.lastElementChild;
  let s_f = front.style.getPropertyValue("transform");
  let s_b = back.style.getPropertyValue("transform");
  console.log(s_f);
  console.log(s_b);
  if (s_f == "perspective(600px) rotateX(-180deg)"){
    front.style.setProperty("transform","perspective(600px) rotateX(0deg)");
    back.style.setProperty("transform","perspective(600px) rotateX(180deg)");
  }else {front.style.setProperty("transform","perspective(600px) rotateX(-180deg)");
    back.style.setProperty("transform","perspective(600px) rotateX(0deg)");}

} ))





