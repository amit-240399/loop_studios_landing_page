const hamburger = document.querySelector(".hamburger-icon");
const links = document.querySelectorAll(".nav-links");
const menu = document.getElementById("menu-icon");

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    hamburger.parentNode.classList.remove("menu");
    menu.src = "images/icon-hamburger.svg";
  });
});

hamburger.addEventListener("click", () => {
  hamburger.parentNode.classList.toggle("menu");
  if (menu.getAttribute("src") == "images/icon-hamburger.svg") {
    menu.src = "images/icon-close.svg";
  } else {
    menu.src = "images/icon-hamburger.svg";
  }
});
