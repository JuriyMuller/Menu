const nav = document.querySelector("#nav");
const btn = document
  .querySelector(".nav-burger")
  .addEventListener("click", addMenu);
function addMenu() {
  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}
