// load.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Reinitialize navbar functionality after it loads
      initNavbar();
    })
    .catch(error => console.log("Navbar failed to load", error));
});

function initNavbar() {
  const menuIcon = document.getElementById("menu-icon");
  const navbarLinks = document.getElementById("navbar-links");
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  let isMobile = window.innerWidth <= 768;

  menuIcon.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      if (isMobile) {
        e.stopPropagation();
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle("active");
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (isMobile && !e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-content.active").forEach(content => {
        content.classList.remove("active");
      });
    }
  });

  window.addEventListener("resize", function () {
    isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      document.querySelectorAll(".dropdown-content").forEach(content => content.classList.remove("active"));
      navbarLinks.classList.remove("active");
    }
  });
}
