let datauser = ["Pepe"];
let datapassword = ["Pepe123"];
function validate() {
  let url = new URL(window.location.href);
  let search = url.searchParams;
  let user = search.get("user");
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == datauser[0] && password == datapassword[0]) {
    window.location.href = "index.html";
  }
  if (user == datauser[0] && password == datapassword[0]) {
    window.location.href = "index.html";
  }
  if ((username = "" && password == "")) {
    alert("Debes rellenar todos los campos");
  }
}
