
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


function slideHome() {

    let count = 1;
    const radio = document.querySelectorAll('.slides input')
    const btn = document.querySelectorAll('label[class^="manual"]')
    
    document.getElementById("radio1").checked = true;
    setInterval( function(){
        nextImage();
        ativarImage();
    }, 6000)

    function nextImage(){
        count++;
        if(count > 4){
            count = 1;
        }

        document.getElementById("radio" + count).checked = true;
    }

    radio.forEach((e) => {
        e.addEventListener('click', ativarImage)
    })

    function ativarImage(){
        radio.forEach((item, index) => {
        if(item.checked){
            btn[index].classList.add('ativo')
        } else {
            btn[index].classList.remove('ativo')
        }
        })
        item.addEventListener('click', selImage)
    }
}
slideHome()


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
