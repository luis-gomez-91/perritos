document.addEventListener("DOMContentLoaded", function() {
    async function dogService() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const perritos = await response.json();
            return perritos.message;
        } catch (error) {
            console.error('Error fetching dog image:', error);
            return 'https://via.placeholder.com/400'; // Imagen de placeholder en caso de error
        }
    }

    const botonGenerar = document.querySelector(".btn-generar");
    const dogContainer = document.getElementById("div-img");
    const audio = document.getElementById("miAudio");
    const sun = document.querySelector('#sun-icon');
    const moon = document.querySelector('#moon-icon');

    const generarImagen = async () => {
        const imageUrl = await dogService();
        dogContainer.style.background = `url(${imageUrl})`;
        dogContainer.style.backgroundPosition = "center";
        dogContainer.style.backgroundSize = "cover";
        audio.play();
    };

    botonGenerar.addEventListener("click", () => {
        generarImagen();
    });

    const resizeDogContainer = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        let size = vh / 2;
        if (vh > vw) {
            size = vw / 2;
        }
        dogContainer.style.width = `${size}px`;
        dogContainer.style.height = `${size}px`;
    };

    window.addEventListener('resize', resizeDogContainer);

    resizeDogContainer();
    generarImagen();

    const detectarTemaOscuro = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log(detectarTemaOscuro())
    const aplicarTema = (esOscuro) => {
        if (esOscuro) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            sun.style.display = 'block';
            moon.style.display = 'none';
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            sun.style.display = 'none';
            moon.style.display = 'block';
        }
    };

    aplicarTema(detectarTemaOscuro());

    sun.addEventListener('click', () => aplicarTema(false));
    moon.addEventListener('click', () => aplicarTema(true));

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        aplicarTema(e.matches);
    });
});
