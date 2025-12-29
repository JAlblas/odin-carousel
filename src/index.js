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
  let newIndex = slide - 1;
  setSlide(newIndex);
  resetTimer();
  updateCircleUI(slide);
});

nextButton.addEventListener("click", () => {
  let newIndex = slide + 1;
  setSlide(newIndex);
  resetTimer();
  updateCircleUI(slide);
});

circles.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    const circle = e.target;
    setSlide(circle.dataset.index);
    resetTimer();
    updateCircleUI(circle.dataset.index);
  }
});

const updateCircleUI = (index) => {
  document.querySelectorAll(".circle").forEach((c) => {
    c.classList.remove("active");
  });
  const circle = document.querySelector(`div[data-index="${index}"]`);
  circle.classList.toggle("active");
};
