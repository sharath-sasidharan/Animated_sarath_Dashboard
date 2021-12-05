const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// dark theme

let themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle("fa-sun");

  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
});
