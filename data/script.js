const lyrics = [
  {
    english: "She's a lady, and I am just a line without a hook",
    translation:
      "dia wanita yang istimewa dan aku bukanlah siapa-siapa",
    time: 0,
  },
  {
    english: "Oh, baby, I am a wreck when I'm without you",
    translation: "Sayang, begitu remuknya aku saat jauh dari dirimu",
    time: 7000,
  },
  {
    english: "I need you here to stay",
    translation: "Aku ingin kau tetap di sini bersama denganku",
    time: 11500,
  },
  {
    english: "I broke all my bones that day I found you",
    translation: "Kuusahakan yang terbaik sedari pertama kita berjumpa",
    time: 14700,
  },
  {
    english: "Crying at the lake",
    translation: "Kusembunyikan semua sedihku",
    time: 19400,
  },
];

const lyricElement = document.getElementById("lyric");
const translationElement = document.getElementById("translation");
const audio = document.getElementById("song");
const chorusDuration = 22000; // Total durasi chorus dalam milidetik (20 detik)
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

function displayLyrics() {
  lyrics.forEach((lyric) => {
    setTimeout(() => {
      lyricElement.textContent = lyric.english;
      translationElement.textContent = lyric.translation;
    }, lyric.time);
  });
}

playBtn.addEventListener("click", () => {
  audio.play();
  displayLyrics();
});

// Event listener untuk tombol pause
pauseBtn.addEventListener("click", () => {
  audio.pause();
});
audio.addEventListener("play", () => {
  displayLyrics(); // Memulai lirik pertama kali
//   setInterval(displayLyrics, chorusDuration); // Mengulang setiap chorus selesai
});