let sound = document.getElementById("sound");
let picture = document.getElementById("picture");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");

playBtn.addEventListener("click", playAudio);
pauseBtn.addEventListener("click", pauseAudio);
stopBtn.addEventListener("click", stopAudio);
function playAudio() {
  sound.play();
  picture.src = "traffic.jpg";
}

function pauseAudio() {
  sound.pause();
  picture.src = "rain.jpeg";
}

function stopAudio() {
  sound.pause();
  sound.currentTime = 0;
  picture.src = "rain.jpeg";
}
