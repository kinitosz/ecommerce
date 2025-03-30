function slideHome() {

  let count = 1;
  const radio = document.querySelectorAll('.slides input')
  const btn = document.querySelectorAll('label[class^="manual"]')
  let interval = setInterval(function(){
      nextImage();
      imgAtiva();
  }, 6000)
      
  document.getElementById("radio1").checked = true;
  

  function nextImage(){
      count++;
      if(count > 4){
          count = 1;
      }

      document.getElementById("radio" + count).checked = true;
  }

  function imgAtiva(){
      
      radio.forEach((item, index) => {
      if(item.checked){
          btn[index].classList.add('ativo')
      } else {
          btn[index].classList.remove('ativo')
      }
      })     
  }

  function resetLoop(){
      clearInterval(interval)
      interval = setInterval(function(){
          nextImage();
          imgAtiva();
      }, 6000)
  }

  radio.forEach((e) => {
      e.addEventListener('click', imgAtiva)
  })
  radio.forEach((e) => {
      e.addEventListener('click',resetLoop)
  })


}
slideHome()