const mobNavbar = document.getElementById("mobile-nav");
const navbarButton = document.getElementById("nav-button");
const navbarCloseBtn = document.getElementById("close-nav");
const body = document.body;
const tag = document.querySelectorAll("#navbar a");
let mm = gsap.matchMedia();

const tl = gsap.timeline();
const workTL = gsap.timeline();

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

mm.add("(min-width: 1024px)", () => {
  gsap.from("#imageDiv", {
    opacity: 0,
    delay: 1,
  });

  gsap.from("#main-heading", {
    opacity: 0,
    duration: 1,
    x: -100,
    ease: "bounce.out",
    delay: 1,
  });

  gsap.from("#navbar", {
    opacity: 0,
    y: -100,
    duration: 0.3,
    ease: "bounce.out",
    delay: 1,
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
    ease: "bounce.out",
  });

  tl.to("#downloadBtn", {
    opacity: 1,
    duration: 0.4,
    y: -17,
  });

  gsap.to("#skills", {
    transform: "translateX(-80%)",
    scrollTrigger: {
      trigger: "#skill-animation",
      scroller: "body",
      start: "top 0%",
      end: "top -30%",
      scrub: 5,
    },
  });

  gsap.from("#about h2", {
    opacity: 0,
    y: 30,
    scale: 0.1,
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      start: "top 75%",
      end: "top 35%",
      scrub: true,
    },
  });

  gsap.from("#about-me span", {
    opacity: 0,
    scale: 0.1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#about-me",
      scroller: "body",
      start: "top 75%",
      end: "top 35%",
      scrub: true,
    },
  });

  gsap.from("#work h2", {
    opacity: 0,
    y: 30,
    scale: 0.1,
    scrollTrigger: {
      trigger: "#work h2",
      scroller: "body",
      start: "top 60%",
      end: "top 40%",
      scrub: true,
    },
  });

  gsap.from(".project", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#main-work",
      scroller: "body",
      start: "top 60%",
      end: "top 60%",
      scrub: true,
    },
  });

  gsap.from("#contact > h2", {
    opacity: 0,
    y: 30,
    scale: 0.1,
    scrollTrigger: {
      trigger: "#contact h2",
      scroller: "body",
      start: "top 75%",
      end: "top 60%",
      scrub: true,
    },
  });

  workTL.from(
    "#left-contact h2",
    {
      scrollTrigger: {
        trigger: "#left-contact",
        scroller: "body",
        start: "top 85%",
        end: "top 70%",
        scrub: true,
      },
      opacity: 0,
      x: -500,
      scale: 0.1,
    },
    "same"
  );

  workTL.from(
    "#left-contact p",
    {
      scrollTrigger: {
        trigger: "#left-contact",
        scroller: "body",
        start: "top 85%",
        end: "top 70%",
        scrub: true,
      },
      opacity: 0,
      x: 500,
      scale: 0.1,
    },
    "same"
  );

  gsap.from("#left-contact div", {
    scrollTrigger: {
      trigger: "#left-contact",
      scroller: "body",
      start: "top 70%",
      end: "top 60%",
      scrub: true,
    },
    opacity: 0,
    y: 500,
    scale: 0.1,
  });

  gsap.from("#right-contact input, #right-contact textarea", {
    scrollTrigger: {
      trigger: "#right-contact",
      scroller: "body",
      start: "top 70%",
      end: "top 50%",
      scrub: true,
    },
    opacity: 0,
    ease: "slow(0.7,0.7,false)",
    y: 500,
    scale: 0.1,
    stagger: 0.8,
  });

  gsap.to("#sendBtn", {
    opacity: 1,
    y: -30,
    scrollTrigger: {
      trigger: "#right-contact",
      scroller: "body",
      start: "top 50%",
      end: "top 31%",
      scrub: true,
    },
  });

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
});

const form = document.getElementById("form");
const result = document.getElementsByClassName("sendBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  for (let i = 0; i < result.length; i++) {
    result[i].innerHTML = "Please wait...";
  }

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        for (let i = 0; i < result.length; i++) {
          result[i].innerHTML = json.message;
        }
      } else {
        console.log(response);
        for (let i = 0; i < result.length; i++) {
          result[i].innerHTML = json.message;
        }
      }
    })
    .catch((error) => {
      console.log(error);
      for (let i = 0; i < result.length; i++) {
        result[i].innerHTML = "Something Went Wrong!";
      }
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        for (let i = 0; i < result.length; i++) {
          result[i].innerHTML = "Send";
        }
      }, 3000);
    });
});

const cards = document.querySelectorAll(".card");

mm.add("(max-width: 767px)", () => {
  cards.forEach((card, index) => {
    if (index < cards.length - 1) {
      gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 20%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }
  });
});
