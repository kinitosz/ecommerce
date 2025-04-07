function filtro(){
  const filtroItens = document.querySelectorAll('.filtros li')
  const produtos = document.querySelectorAll('.slot')
  const boxSel = document.querySelectorAll('span')

  function ativarItem(e){
    produtos.forEach((produto) => {
      let item = e.target.innerText.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
      if(produto.classList.contains(item)){
        produto.classList.toggle('item-ativo')
      }
    })

    boxSel.forEach((box) => {
      let item = e.target.innerText.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
      if(box.classList.contains(item)){
        box.classList.toggle('ativo')
      }
    })
  } 

  filtroItens.forEach((item) => {
    item.addEventListener('click', ativarItem)
  })
}
filtro()