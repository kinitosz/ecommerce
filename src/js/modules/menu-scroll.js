export default function initMenuScroll(){
    const menuScroll = document.querySelector('[data-menu]');

    function activateScroll(){
        menuScroll.classList.toggle('scroll-ativo', scrollY > 15);
    }

    window.addEventListener('scroll', activateScroll);
}

