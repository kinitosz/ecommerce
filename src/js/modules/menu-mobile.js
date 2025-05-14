export default function initMenuMobile() {

    const btn = document.querySelector('[data-mobile="btn"]')
    const menuMobile = document.querySelector('[data-mobile="nav"]');

    btn.addEventListener('click', () => {
      menuMobile.classList.toggle('open')
    }) 
}