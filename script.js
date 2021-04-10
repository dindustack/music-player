const image = document.querySelector("img");
const music = document.querySelector("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const previousButton = document.getElementById("prev");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");

// Music
const songs = [
  {
    name: "dindustack-1",
    displayName: "Electric Chill Machine",
    artist: "Slide Orange",
  },
  {
    name: "dindustack-2",
    displayName: "Grill Cakes",
    artist: "Smokie Norful",
  },
  {
    name: "dindustack-3",
    displayName: "Host Groove",
    artist: "Wind Glory",
  },
  {
    name: "dindustack-4",
    displayName: "Biro Style",
    artist: "Blue Ray",
  },
];

// Check if song is playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute("title", "Pause");
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "Play");
  music.pause();
}

playButton.addEventListener("click", () =>
  isPlaying ? pauseSong() : playSong()
);

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Next Song
function prevSong() {
  songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
  }
}

// Event Listeners
previousButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);
music.addEventListener('timeupdate', updateProgressBar);
