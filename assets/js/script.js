const togglerBtn = document.querySelector(".navbar-toggler-icon");
const menu = document.querySelector(".navbar-nav");
togglerBtn.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.classList.toggle("active");
  if (document.body.classList.contains("active")) {
    e.target.setAttribute("src", "assets/images/icon-menu-close.svg");
  } else {
    e.target.setAttribute("src", "assets/images/icon-menu.svg");
  }
});
