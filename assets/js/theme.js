const languages = document.querySelectorAll(".language-item");
const nav = document.querySelectorAll(".overlay-navbar .navbar-nav .nav-item");
const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-btn");
const overlay = document.querySelector(".overlay");
const overlayControl = document.querySelector(".overlay-control");
const buttonUp = document.querySelector(".button-up");
const buttonUpStop = document.querySelector(".button-up-hidden");
const mainContainer = document.querySelector(".container-main");
const videoContainer = document.querySelector(".video-container");
const videoControls = document.querySelectorAll(".video-controls");
const videoPlay = document.querySelector(".video-play");

let overlayOffset = overlay.offsetHeight;
let mainContainerOffsetTop = mainContainer.offsetTop;
let scrollPosition = window.pageYOffset;
let buttonUpStopPosition = buttonUpStop.offsetTop;
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
  scrollPosition = window.pageYOffset;
  overlayOffset = overlay.offsetHeight;
  mainContainerOffsetTop = mainContainer.offsetTop;
  buttonUpStopPosition = buttonUpStop.offsetTop;
  const windowPos =
    mainContainerOffsetTop +
    buttonUpStop.offsetParent.offsetTop +
    buttonUpStopPosition;
  if (!overlay.classList.contains("js-hidden")) {
  } else if (scrollPosition + overlayOffset > windowPos) {
    buttonUp.classList.add("js-button-up-stopped");
  } else if (scrollPosition > 0) {
    buttonUp.classList.remove("js-button-up-stopped");
    buttonUp.classList.remove("js-hidden");
  } else {
    buttonUp.classList.remove("js-button-up-stopped");
    buttonUp.classList.add("js-hidden");
  }
});

videoContainer.addEventListener("click", function () {
  videoControls.forEach((el) => el.classList.toggle("js-hidden"));
  if (videoPlay.paused) {
    videoPlay.play();
  } else {
    videoPlay.pause();
  }
});
