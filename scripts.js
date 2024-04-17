

const myobserver = new IntersectionObserver((entries) => {
  entries.forEach( (entry) => {
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myobserver.observe(element))

function abrirmodal(){
  const modal = document.getElementById('Janela-modal')
  modal.classList.add('abrir')

  modal.addEventListener('click', (e) => {
    if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
      modal.classList.remove('abrir')
    }
  })
}