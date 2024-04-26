let playing = true;
function changeButton() {
  let play = document.getElementById("play-Button-Image");
  let stop = document.getElementById("stop-Button-Image");
  if (playing == true) {
    play.style.display = "none";
    stop.style.display = "block";
    playing = false;
  } else {
    play.style.display = "block";
    stop.style.display = "none";
    playing = true;
  }
}
