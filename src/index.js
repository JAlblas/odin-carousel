import "./style.css";

const backButton = document.querySelector(".back");
const nextButton = document.querySelector(".next");
const circles = document.querySelector(".circles");
const slides = document.querySelector(".slides");

let slide = 0;
let interval;

const setupTimer = () => {
  interval = setInterval(function () {
    setSlide(slide + 1);
  }, 5000);
};

function setSlide(index) {
  if (index > 4) {
    slide = 0;
    slides.style.left = "0px";
  } else if (index < 0) {
    slide = 4;
  } else {
    slide = index;
  }

  slides.style.left = 0 - slide * 1200 + "px";
}

const resetTimer = () => {
  clearInterval(interval);
  setupTimer();
};

setupTimer();

backButton.addEventListener("click", () => {
  setSlide(slide - 1);
  resetTimer();
});

nextButton.addEventListener("click", () => {
  setSlide(slide + 1);
  resetTimer();
});

circles.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    const circle = e.target;
    setSlide(circle.dataset.index);
    resetTimer();

    document.querySelectorAll(".circle").forEach((c) => {
      c.classList.remove("active");
    });
    circle.classList.toggle("active");
  }
});
