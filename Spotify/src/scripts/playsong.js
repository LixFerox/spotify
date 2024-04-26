let audio;
let duration;
function playmusic(song) {
  if (song == "mai") {
    if (audio && !audio.paused) {
      audio.pause();
    } else {
      duration = document.getElementById("duration").innerHTML = "3:04";
      audio = new Audio("https://files.catbox.moe/p1iike.mp3");
      audio.play();
    }
  } else if (song == "sinsenal") {
    if (audio && !audio.paused) {
      audio.pause();
    } else {
      duration = document.getElementById("duration").innerHTML = "3:05";
      audio = new Audio("https://files.catbox.moe/mw08iz.mp3");
      audio.play();
    }
  } else if (song == "neverita") {
    if (audio && !audio.paused) {
      audio.pause();
    } else {
      duration = document.getElementById("duration").innerHTML = "2:53";
      audio = new Audio("https://files.catbox.moe/n6t7qm.mp3");
      audio.play();
    }
  } else if (song == "tusa") {
    if (audio && !audio.paused) {
      audio.pause();
    } else {
      duration = document.getElementById("duration").innerHTML = "3:20";
      audio = new Audio("https://files.catbox.moe/f0rasw.mp3");
      audio.play();
    }
  } else if (song == "dameCalor") {
    if (audio && !audio.paused) {
      audio.pause();
    } else {
      duration = document.getElementById("duration").innerHTML = "2:59";
      audio = new Audio("https://files.catbox.moe/rbh3r4.mp3");
      audio.play();
    }
  } else if (song == "malDeAmores") {
    if (audio && !audio.paused) {
      audio.pause();
    } else {
      duration = document.getElementById("duration").innerHTML = "2:53";
      audio = new Audio("https://files.catbox.moe/u3mlbi.mp3");
      audio.play();
    }
  }
}
