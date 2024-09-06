const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const reverseBtn = document.getElementById('reverse-btn');
const resetBtn = document.getElementById('reset-btn');
const audioPlayer = document.getElementById('audio-player');
const audioSlider = document.getElementById('audio-slider');
const draggableImage = document.getElementById('draggable-image');

let startY = 0;
let isDragging = false;

playBtn.addEventListener('click', () => {
  audioPlayer.play();
  playBtn.disabled = true;
  pauseBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
  audioPlayer.pause();
  playBtn.disabled = false;
  pauseBtn.disabled = true;
});

reverseBtn.addEventListener('click', () => {
  audioPlayer.src = 'audio_2.mp3';
  audioPlayer.play();
  reverseBtn.classList.add('hidden');
  playBtn.disabled = true;
  pauseBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
  playBtn.disabled = true;
  pauseBtn.disabled = false;
});

audioPlayer.addEventListener('timeupdate', () => {
  const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  audioSlider.value = value;
});

audioPlayer.addEventListener('ended', () => {
  playBtn.disabled = false;
  pauseBtn.disabled = true;
  reverseBtn.classList.remove('hidden');
});

audioSlider.addEventListener('input', () => {
  const value = (audioSlider.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = value;
});

// Executa a ação após 1 minuto iniciado a página
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    alert("Okay, vou te dar uma mãozinha");
    reverseBtn.classList.remove('hidden');
  }, 60000); // 60000 milissegundos = 1 minuto
});
