const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const reverseBtn = document.getElementById('reverse-btn');
const audioPlayer = document.getElementById('audio-player');
const audioSlider = document.getElementById('audio-slider');
const draggableImage = document.getElementById('draggable-image');

let startY = 0;
let isDragging = false;
let audioChanged = false;

let timer;

playBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  }
});

pauseBtn.addEventListener('click', () => {
  if (!audioPlayer.paused) {
    audioPlayer.pause();
    pauseBtn.classList.add('hidden');
    playBtn.classList.remove('hidden');
  }
});

// Iniciar o timer de 1 minuto
timer = setTimeout(() => {
  alert("Dica: Tente retirar o tubo de memória do mcgucket");
  reverseBtn.classList.remove('hidden');
  audioPlayer.src = 'audio_2.mp3';
  audioPlayer.play();
  reverseBtn.classList.add('hidden');
}, 60000); // 60000 milissegundos = 1 minuto

audioPlayer.addEventListener('timeupdate', () => {
  const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  audioSlider.value = value;

  // Reiniciar o timer sempre que o áudio for reproduzido
  clearTimeout(timer);
  timer = setTimeout(() => {
    alert("Dica: Tente retirar o tubo de memória do mcgucket");
    reverseBtn.classList.remove('hidden');
    audioPlayer.src = 'audio_2.mp3';
    audioPlayer.play();
    reverseBtn.classList.add('hidden');
  }, 60000);
});

audioSlider.addEventListener('input', () => {
  const value = (audioSlider.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = value;
  if (audioPlayer.paused) {
    audioPlayer.play();
  }

  // Reiniciar o timer sempre que o slider for movido
  clearTimeout(timer);
  timer = setTimeout(() => {
    alert("Dica: Tente retirar o tubo de memória do mcgucket");
    reverseBtn.classList.remove('hidden');
    audioPlayer.src = 'audio_2.mp3';
    audioPlayer.play();
    reverseBtn.classList.add('hidden');
  }, 60000);
});
