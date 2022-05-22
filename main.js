// Navbar

const menuIcon = document.querySelector("#menu-icon");
let Navbar = document.querySelector(".nav");

menuIcon.addEventListener("click", function () {
  Navbar.classList.toggle("active");
  menuIcon.classList.toggle("fa-close");
});

// End Navbar

// Services

let tabButtons = document.querySelectorAll(".tab");
let tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabPanes.forEach((content) => {
      content.classList.remove("active");
    });
    tabButtons.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabButtons[index].classList.add("active");
    tabPanes[index].classList.add("active");
  });
});

// End Services

// Accordion

let accordionTilte = document.querySelectorAll(".accordion__button");
let accordionContent = document.querySelectorAll(".accordion__content");
let accordionIcons = document.querySelectorAll(".accordion .icon");

accordionTilte.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    accordionContent[index].classList.toggle("active");
    accordionIcons[index].classList.replace("fa-plus", "fa-minus");

    accordionContent.forEach((content, contentIndex) => {
      if (contentIndex !== index) {
        accordionTilte[contentIndex].classList.remove("active");
        accordionContent[contentIndex].classList.remove("active");
        accordionIcons[contentIndex].classList.replace("fa-minus", "fa-plus");
      }
    });
  });
});

// End Accordion 