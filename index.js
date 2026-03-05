
const nav = document.querySelector("nav")
const open = document.getElementById("menu-open")
const close = document.getElementById("menu-close")
const overlay = document.querySelector(".overlay")

const links = document.querySelectorAll("nav ul li a")

open.addEventListener("click",(e)=>{
e.stopPropagation()

nav.classList.add("active")
overlay.classList.add("active")

open.style.display="none"
close.style.display="block"
})

function fecharMenu(){

nav.classList.remove("active")
overlay.classList.remove("active")

open.style.display="block"
close.style.display="none"

}

close.addEventListener("click",(e)=>{
e.stopPropagation()
fecharMenu()
})

overlay.addEventListener("click",fecharMenu)


/* FECHAR AO CLICAR NO LINK */

links.forEach(link=>{
link.addEventListener("click",()=>{
fecharMenu()
})
})
