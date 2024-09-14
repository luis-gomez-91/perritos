document.addEventListener("DOMContentLoaded", function(){
    
    async function dogService() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const perritos = await response.json();
        console.log(perritos.status)
        return perritos.message
    }

    const botonGenerar = document.querySelector(".btn-generar")

    botonGenerar.addEventListener('mouseover', () => {
        botonGenerar.classList.add('shadow-md')
        botonGenerar.classList.remove('shadow-sm')
    })

    botonGenerar.addEventListener('mouseout', () => {
        botonGenerar.classList.add('shadow-sm')
        botonGenerar.classList.remove('shadow-md')
    })

    const dogContainer = document.getElementById("div-img")

    botonGenerar.addEventListener("click", async function() {
        dogContainer.style.background = "url("+await dogService()+")"
        dogContainer.style.backgroundPosition = "center"
        dogContainer.style.backgroundSize = "cover"
        const audio = document.getElementById("miAudio")
        audio.play()
    })

    const resizeDogContainer = () => {
        const vw = window.innerWidth
        const vh = window.innerHeight
        let size = vh / 2
        if (vh > vw) {
            size = vw / 2
        }
        dogContainer.style.width = size + "px"
        dogContainer.style.height = size + "px"
    }

    window.addEventListener('resize', () => {
        resizeDogContainer()
    })

    resizeDogContainer()
})