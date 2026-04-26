const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const mobileLinks = document.querySelectorAll(".header__mobile-link");

if (header && burger) {
  burger.addEventListener("click", () => {
    header.classList.toggle("is-open");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      header.classList.remove("is-open");
    }
  });
}
