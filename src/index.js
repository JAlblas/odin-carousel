import "./style.css";

const images = document.querySelectorAll("img");

images.forEach((image) => {
  const index = parseInt(image.dataset.index);
  let currentLeft = parseInt(image.style.left) || 0;
  image.style.left = currentLeft + index * 100 + "px";
});

const slides = document.querySelector(".slides");

let slide = 0;

setInterval(function () {
  //let currentLeft = parseInt(slides.style.left) || 0;
  slides.style.left = 0 - slide * 500 + "px";

  if (slide > 4) {
    slide = 0;
    //currentLeft = 0;
    slides.style.left = "0px";
  } else {
    slide++;
  }

  console.log(slides.style.left);
}, 2000);
