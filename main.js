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
