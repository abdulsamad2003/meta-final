let navLines = document.querySelector(".nav-lines");
let navLinks = document.querySelector(".nav-links");

navLines.addEventListener("click", () => {
  navLinks.style.left = "0";
  navLines.style.zIndex = "-1";
});

let removeNavLinks = document.querySelector(".nav-slider");

removeNavLinks.addEventListener("click", () => {
  navLinks.style.left = "-100%";
  navLines.style.zIndex = "1";
});
