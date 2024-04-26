function changeUser() {
  let url = new URL(window.location.href);
  let username = url.searchParams.get("user");
  let changeuser = (document.getElementById("greeting").innerHTML =
    "Bienvenido de nuevo " + username);
  let changesession = (document.getElementById("sessionuser").innerHTML =
    username);
}
