const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const reverseBtn = document.getElementById('reverse-btn');
const audioPlayer = document.getElementById('audio-player');
const audioSlider = document.getElementById('audio-slider');
const draggableImage = document.getElementById('draggable-image');

let startY = 0;
let isDragging = false;
let audioChanged = false;

playBtn.addEventListener('click', () => {
  audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
  audioPlayer.pause();
});

reverseBtn.addEventListener('click', () => {
  audioPlayer.src = 'audio_2.mp3';
  audioPlayer.play();
  reverseBtn.classList.add('hidden');
  audioChanged = true;
});

audioPlayer.addEventListener('timeupdate', () => {
  const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  audioSlider.value = value;
});

audioSlider.addEventListener('input', () => {
  const value = (audioSlider.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = value;
});

draggableImage.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
  isDragging = true;
  draggableImage.style.cursor = 'grabbing';
});

draggableImage.addEventListener('touchmove', (e) => {
  if (isDragging) {
    const deltaY = startY - e.touches[0].clientY;
    if (deltaY > 50) { // Ajuste o valor conforme necessário
      reverseBtn.classList.remove('hidden');
    }
  }
});

draggableImage.addEventListener('touchend', () => {
  isDragging = false;
  draggableImage.style.cursor = 'grab';
});

// Exibir mensagem após 2 minutos se o áudio não tiver sido trocado
setTimeout(() => {
  if (!audioChanged) {
    alert("Dica: Tente retirar o tubo de memória do mcgucket");
  }
}, 60000); // 120000 milissegundos = 2 minutos
