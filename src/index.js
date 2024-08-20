import "./style.css";

const backButton = document.querySelector(".back");
const nextButton = document.querySelector(".next");
const circles = document.querySelectorAll(".circle");

backButton.addEventListener("click", () => {
  setSlide(slide - 1);
  resetTimer();
});

nextButton.addEventListener("click", () => {
  setSlide(slide + 1);
  resetTimer();
});

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    setSlide(circle.dataset.index);
    resetTimer();

    circles.forEach((c) => {
      c.classList.remove("active");
    });
    circle.classList.toggle("active");
  });
});

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
  } else {
    slide = index;
  }

  slides.style.left = 0 - slide * 800 + "px";
}

const resetTimer = () => {
  clearInterval(interval);
  setupTimer();
};

setupTimer();
