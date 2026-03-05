/* =========================
MENU MOBILE
========================= */

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

links.forEach(link=>{
link.addEventListener("click",fecharMenu)
})

/* =========================
SCROLL LOGO
========================= */

const logoTopo = document.getElementById("logo-topo")

logoTopo.addEventListener("click",()=>{
window.scrollTo({
top:0,
behavior:"smooth"
})
})

/* =========================
CONFIG WHATSAPP GLOBAL
========================= */

const WHATSAPP_NUMBER = "5531986763652"

/* =========================
CARDS RECEITA
========================= */

const cards = document.querySelectorAll(".card-receita")

cards.forEach(card=>{

const btnReceita = card.querySelector(".btn-receita")
const btnWhats = card.querySelector(".btn-whats")

const nomeReceita = card.dataset.nome

btnReceita.addEventListener("click",()=>{

card.classList.add("flip")

})

card.addEventListener("mouseleave",()=>{

card.classList.remove("flip")

})

btnWhats.addEventListener("click",()=>{

const mensagem = `Olá Rebecca, eu quero aprender a fazer ${nomeReceita}`

const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`

window.open(url,"_blank")

})

})

/* =========================
NOVIDADES → WHATSAPP
========================= */

const btnAprender = document.querySelectorAll(".btn-aprender")

btnAprender.forEach(btn => {

const card = btn.closest("article")
const nomeReceita = card.dataset.nome

btn.addEventListener("click",()=>{

const mensagem = `Olá Rebecca, eu quero aprender a fazer ${nomeReceita}`

const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`

window.open(url,"_blank")

})

})