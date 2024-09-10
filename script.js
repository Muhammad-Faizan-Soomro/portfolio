const mobNavbar = document.getElementById("mobile-nav");
const navbarButton = document.getElementById("nav-button");
const navbarCloseBtn = document.getElementById("close-nav");
const body = document.body;
const tag = document.querySelectorAll("#navbar a");

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

const tl = gsap.timeline();

gsap.from("#main-heading", {
  opacity: 0,
  duration: 1,
  x: -100,
  delay: 1,
});

gsap.from("#navbar", {
  opacity: 0,
  y: -100,
  duration: 0.3,
  delay: 1,
});

gsap.from("#image", {
  opacity: 0,
  rotate: 360,
  filter: "grayscale(100%)",
  duration: 1,
  delay: 1,
  scale: 0.1,
});

gsap.from("#navbar a", {
  opacity: 0,
  duration: 0.5,
  delay: 1.5,
  stagger: 0.3,
  y: -30,
  scale: 0.8,
});

tl.from("#landing-page h2,#landing-page p", {
  opacity: 0,
  duration: 0.4,
  stagger: 0.25,
  y: 30,
  delay: 1.4,
});

gsap.from("#socials", {
  opacity: 0,
  duration: 1,
  x: 100,
  delay: 1,
});

tl.to("#downloadBtn", {
  opacity: 1,
  duration: 0.4,
  y: -17,
});

// gsap.from("#downloadBtn",{
//   opacity:0,
//   delay:3.5,
//   duration:0.8,
//   y:30
// })

for (let i = 0; i < tag.length; i++) {
  tag[i].addEventListener("mouseenter", () => {
    gsap.to(tag[i], { scale: 1.2, duration: 0.2 });
  });

  tag[i].addEventListener("mouseleave", () => {
    gsap.to(tag[i], { scale: 1, duration: 0.2 });
  });

  tag[i].addEventListener("click", () => {
    gsap.from(tag[i], { scale: 0.6, duration: 0.3 });
  });
}


