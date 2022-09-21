const app = document.getElementById('app')
const ancora = document.querySelectorAll('a')
const relogio = document.getElementsByClassName('relogio-rodape')[0]



const animaFaixa = () => {
    let width = 90

    setInterval( () => {
          faixa.style.width  =  `${Math.random() * width}%`     
    }, 150)
}


ancora.forEach( a => {
    a.addEventListener('click', (evt) =>{
         evt.preventDefault()
       
         const  pagina = evt.target.getAttribute('data-target') + ".html"

         fetch(pagina)
         .then(resp => resp.text())
         .then( resp => app.innerHTML = resp)

         scrollTo(0,0)

    })
})

const processaEnvio = (evt) => {
    
    evt.preventDefault()
    alert("dados do formulario capturados")
    return

}




