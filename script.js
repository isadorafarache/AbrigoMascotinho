const imgs = document.getElementById("imagens");
const imagens = document.querySelectorAll("#imagens img");

let idx = 0;

function carrossel() {
    idx++;
    // Reinicie o índice se ele exceder o número de imagens
    if (idx >= imagens.length) {
        idx = 0;
    }

    // Atualize a transformação para o próximo slide
    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

// Altere o intervalo conforme necessário
setInterval(carrossel, 2000);
