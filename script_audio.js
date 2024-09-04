const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const reverseBtn = document.getElementById('reverse-btn');
const audioPlayer = document.getElementById('audio-player');
const audioSlider = document.getElementById('audio-slider');
const draggableImage = document.getElementById('draggable-image');

let startY = 0;
let isDragging = false;
let audioChanged = false;
let showedAlert = false;

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

draggableImage.addEventListener('mousedown', (e) => {
  startY = e.clientY;
  isDragging = true;
  draggableImage.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaY = startY - e.clientY;
    if (deltaY > 50 && !showedAlert) {
      alert("Dica: Tente retirar o tubo de memória do mcgucket");
      showedAlert = true;
    }
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggableImage.style.cursor = 'grab';
});

// Exibir o botão de reverter áudio após 2 minutos, se o áudio não tiver sido trocado
setTimeout(() => {
  if (!audioChanged && showedAlert) {
    reverseBtn.classList.remove('hidden');
  }
}, 80000); // 120000 milissegundos = 2 minutos
