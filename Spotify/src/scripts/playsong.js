function playmusic(song) {
  if (song == "mai") {
    let audio = new Audio("src/audios/mai.mp3");
    audio.play();
  } else if (song == "sinsenal") {
    let audio = new Audio("src/audios/sinsenal.mp3");
    audio.play();
  } else if (song == "neverita") {
    let audio = new Audio("src/audios/neverita.mp3");
    audio.play();
  }
}
