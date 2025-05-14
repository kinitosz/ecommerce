export default function initMenuMobileScroll(){
    const menuMobileScroll = document.querySelector('[data-mobile="nav"]');

    function activateScroll(){
        menuMobileScroll.classList.toggle('scroll-ativo', scrollY > 15);
    }

    window.addEventListener('scroll', activateScroll);
}

