const imagem = document.getElementById('imagemPlayPause');
const musica = document.getElementById('minhaMusica');

// Adicionamos o evento de clique
imagem.addEventListener('click', function() {
    if (musica.paused) {
        musica.play();
    } else { 
        musica.pause();
    }
});