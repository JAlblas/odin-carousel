import "./style.css";

const dropdownMenus = document.querySelectorAll(".dropdown-menu");
const dropdownButtons = document.querySelectorAll(".dropdown-button");

dropdownButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    const dropdownContent =
      button.parentElement.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("hidden");
  });
});

dropdownMenus.forEach((menu) => {
  console.log(menu);
  menu.addEventListener("mouseleave", () => {
    const content = menu.querySelector(".dropdown-content");
    content.classList.toggle("hidden");
  });
});
