
let boxBuscar = document.querySelector('.search-box');
let lupa = document.querySelector('.lupa');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
});

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
});
