const moon = document.querySelector(".moon");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  moon.style.top = `calc(20% - ${scrollY * 0.5}px)`;
});