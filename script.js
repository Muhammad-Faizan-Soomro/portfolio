const mobNavbar = document.getElementById("mobile-nav");
const navbarButton = document.getElementById("nav-button");
const navbarCloseBtn = document.getElementById("close-nav");
const body = document.body;

const openNavber = () => {
  mobNavbar.classList.remove("hidden");
  body.classList.add("overflow-hidden");
};

const closeNavber = () => {
  mobNavbar.classList.add("hidden");
  body.classList.remove("overflow-hidden");
};

navbarButton.addEventListener("click", openNavber);
navbarCloseBtn.addEventListener("click", closeNavber);