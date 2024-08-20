import "./style.css";

const images = document.querySelectorAll("img");
const backButton = document.querySelector(".back");
const nextButton = document.querySelector(".next");

backButton.addEventListener("click", () => {
  setSlide(slide - 1);
});

nextButton.addEventListener("click", () => {
  setSlide(slide + 1);
});

images.forEach((image) => {
  const index = parseInt(image.dataset.index);
  let currentLeft = parseInt(image.style.left) || 0;
  image.style.left = currentLeft + index * 100 + "px";
});

const slides = document.querySelector(".slides");

let slide = 0;

setInterval(function () {
  setSlide(slide + 1);
}, 2000);

function setSlide(index) {
  slide = index;

  console.log(slide);

  if (index > 4) {
    slide = 0;
    slides.style.left = "0px";
  }

  slides.style.left = 0 - index * 800 + "px";
}
