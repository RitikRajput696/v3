const hamBurger = document.querySelector(".hamburger");
const showNav = document.querySelector(".nav__links");
console.log("help me");

// hamburger show/hide
hamBurger.addEventListener("click", () => {
  console.log("mujhe mat chuo");
  showNav.classList.toggle("nav-active");
});
