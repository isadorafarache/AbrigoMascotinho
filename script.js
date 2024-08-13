const imgs = document.getElementById("imagens");
const imagens = document.querySelectorAll("#imagens img");

let idx = 0;

function carrossel() {
    idx++;

<<<<<<< HEAD
    // Reinicie o índice se ele exceder o número de imagens
    if (idx >= imagens.length) {
        idx = 0;
    }

    // Atualize a transformação para o próximo slide
    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

// Altere o intervalo conforme necessário
setInterval(carrossel, 2000);
=======
    if (idx > imagens.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 200}px)`;

}

setInterval(carrossel, 1800);
>>>>>>> 816dfc6e5b6f0f5550bc289e11c7a7563dcc8194
