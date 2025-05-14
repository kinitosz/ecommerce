export default function initSearchBox(){
    let boxBuscar = document.querySelector('[data-searchBox="box"]');
    let lupa = document.querySelector('[data-searchBox="open"]');
    let btnFechar = document.querySelector('[data-searchBox="close"]');
  
    lupa.addEventListener('click', ()=> {
      boxBuscar.classList.add('ativar')
    });
  
    btnFechar.addEventListener('click', ()=> {
        boxBuscar.classList.remove('ativar')
    });
  }
  