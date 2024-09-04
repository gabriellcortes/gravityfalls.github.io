const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const reverseBtn = document.getElementById('reverse-btn');
const audioPlayer = document.getElementById('audio-player');
const audioSlider = document.getElementById('audio-slider');
const draggableImage = document.getElementById('draggable-image');

let startY = 0;
let isDragging = false;

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

reverseBtn.addEventListener('click', () => {
  audioPlayer.src = 'audio_2.mp3';
  audioPlayer.play();
  reverseBtn.classList.add('hidden');
});

audioPlayer.addEventListener('timeupdate', () => {
  const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  audioSlider.value = value;
});

audioSlider.addEventListener('input', () => {
  const value = (audioSlider.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = audioPlayer.duration - value;
  audioPlayer.playbackRate = -1; // Define a velocidade como normal, mas no sentido inverso
  if (audioPlayer.paused) {
    audioPlayer.play();
  }
});

// Executa a ação após 1 minuto iniciado a página
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    alert("Okay, vou te dar uma mãozinha");
    reverseBtn.classList.remove('hidden');
  }, 60000); // 60000 milissegundos = 1 minuto
});
