document.addEventListener("DOMContentLoaded", function(){
    
    async function dogService() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const perritos = await response.json();
        console.log(perritos.status)
        return perritos.message
    }

    const boton = document.querySelector(".btn-generar")
    boton.addEventListener("click", async function() {
        

        const contendorPerro = document.getElementById("div-img")
        contendorPerro.style.background = "url("+await dogService()+")"
        contendorPerro.style.backgroundPosition = "center"
        contendorPerro.style.backgroundSize = "cover"

        const audio = document.getElementById("miAudio")
        audio.play()

    })





})