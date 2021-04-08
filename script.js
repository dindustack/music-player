const music = document.querySelector('audio');
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const currentTime = document.getElementById('current-time')
const duration = document.getElementById('duration')
const previousButton = document.getElementById('prev')
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

// Check if song is playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true
    playButton.classList.replace('fa-play', 'fa-pause')
    playButton.setAttribute('title', 'Pause')
    music.play()
}

function pauseSong() {
    isPlaying = false;
    playButton.classList.replace("fa-pause", "fa-play");
    playButton.setAttribute("title", "Play");
    music.pause ()
}

playButton.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))

console.log(playButton.attributes)