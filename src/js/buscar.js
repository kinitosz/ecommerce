
let boxBuscar = document.querySelector('.search-box');
let lupa = document.querySelector('.lupa');
let btnFechar = document.querySelector('.btn-fechar');
let count = 1;
document.getElementById("radio1").checked = true;
const menuScroll = document.querySelector('.menu')
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;
}


lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
});

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
});

setInterval( function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if(count > 3){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    };

}

function activateScroll(){
    menuScroll.classList.toggle('ativo', scrollY > 15);
}

window.addEventListener('scroll', activateScroll);