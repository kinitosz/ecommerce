function searchBox(){
    let boxBuscar = document.querySelector('.search-box');
    let lupa = document.querySelector('.lupa');
    let btnFechar = document.querySelector('.btn-fechar');
  
    lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
    });
  
    btnFechar.addEventListener('click', ()=> {
        boxBuscar.classList.remove('ativar')
    });
  }
  searchBox()
  




function menuShow() {
    let menuMobile = document.querySelector('.mobile-nav');
    menuMobile.classList.toggle('open')
}

function menuDinamicScroll(){
    const menuScroll = document.querySelector('.menu');

    function activateScroll(){
        menuScroll.classList.toggle('ativo', scrollY > 15);
    }

    window.addEventListener('scroll', activateScroll);
}
menuDinamicScroll()
