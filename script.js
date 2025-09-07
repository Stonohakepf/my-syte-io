const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");

// відкриваємо меню
hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
});

// закриваємо меню по хрестику
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// закриваємо меню по кліку на пункт
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
