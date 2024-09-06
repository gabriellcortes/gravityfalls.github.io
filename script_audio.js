const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const reverseBtn = document.getElementById('reverse-btn');
const audioPlayer = document.getElementById('audio-player');
const audioSlider = document.getElementById('audio-slider');

let isPlaying = false;

playBtn.addEventListener('click', () => {
  audioPlayer.play();
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  isPlaying = true;
});

pauseBtn.addEventListener('click', () => {
  audioPlayer.pause();
  pauseBtn.classList.add('hidden');
  playBtn.classList.remove('hidden');
  isPlaying = false;
});

resetBtn.addEventListener('click', () => {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  isPlaying = true;
});

audioPlayer.addEventListener('ended', () => {
  audioPlayer.currentTime = 0;
  playBtn.classList.remove('hidden');
  pauseBtn.classList.add('hidden');
  isPlaying = false;
});

audioPlayer.addEventListener('timeupdate', () => {
  audioSlider.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

// Executa a ação após 1 minuto iniciado a página
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    alert("Okay, vou te dar uma mãozinha");
    reverseBtn.classList.remove('hidden');
  }, 60000); // 60000 milissegundos = 1 minuto
});

reverseBtn.addEventListener('click', () => {
  audioPlayer.src = 'audio_2.mp3';
  audioPlayer.play();
  reverseBtn.classList.add('hidden');
});
