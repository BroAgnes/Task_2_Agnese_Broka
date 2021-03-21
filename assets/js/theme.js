const languages = document.querySelectorAll(".language-item");
const nav = document.querySelectorAll(".overlay-navbar .navbar-nav .nav-item");
const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const overlayControl = document.querySelector(".overlay-control");
const buttonUp = document.querySelector(".button-up");

let scrollPosition = window.scrollY;
let choosenLanguage = languages[0];
choosenLanguage.classList.add("js-choosen");
let choosenNav = nav[1];
choosenNav.classList.add("js-choosen");

for (let i = 1; i < nav.length; i++) {
  nav[i].addEventListener("click", function (e) {
    const clikedNav = e.target;
    choosenNav.classList.remove("js-choosen");
    choosenNav = clikedNav;
    choosenNav.classList.add("js-choosen");
  });
}

for (let i = 0; i < languages.length; i++) {
  languages[i].addEventListener("click", function (e) {
    const clikedLan = e.target;
    choosenLanguage.classList.remove("js-choosen");
    choosenLanguage = clikedLan;
    choosenLanguage.classList.add("js-choosen");
  });
}

overlayControl.addEventListener("click", function () {
  openMenu.classList.toggle("js-hidden");
  closeMenu.classList.toggle("js-hidden");
  overlay.classList.toggle("js-hidden");
  buttonUp.classList.toggle("js-hidden");
});

document.addEventListener("scroll", function (e) {
  scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    buttonUp.classList.remove("js-hidden");
  } else {
    buttonUp.classList.add("js-hidden");
  }
});
