const track = document.querySelector('.carrosel-linha');
const nextBtn = document.querySelector('.botao-direita');
const prevBtn = document.querySelector('.botao-esquerda');

// Função para avançar
nextBtn.addEventListener('click', () => {
  const firstCard = track.firstElementChild;
  
  // Aplica uma transição suave para o lado
  track.style.transition = 'transform 0.3s ease-out';
  track.style.transform = `translateX(-${firstCard.offsetWidth + 20}px)`; // Tamanho do card + gap

  // Espera a animação acabar, move o elemento no DOM e reseta a posição
  setTimeout(() => {
    track.style.transition = 'none';
    track.appendChild(firstCard); // Move o primeiro para o final
    track.style.transform = 'translateX(0)';
  }, 300);
});

// Função para voltar
prevBtn.addEventListener('click', () => {
  const lastCard = track.lastElementChild;
  
  // Move o último elemento para o início antes de animar
  track.style.transition = 'none';
  track.insertBefore(lastCard, track.firstElementChild);
  track.style.transform = `translateX(-${lastCard.offsetWidth + 20}px)`;

  // Força o navegador a reconhecer a mudança de posição e aplica a animação deslizando de volta para o 0
  setTimeout(() => {
    track.style.transition = 'transform 0.3s ease-out';
    track.style.transform = 'translateX(0)';
  }, 1);
});