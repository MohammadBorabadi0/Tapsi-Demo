// Navbar

const menuIcon = document.querySelector("#menu-icon");
let Navbar = document.querySelector(".nav");

menuIcon.addEventListener("click", function () {
  Navbar.classList.toggle("active");
  menuIcon.classList.toggle("fa-close");
});

// End Navbar
