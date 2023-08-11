document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelector(".container");
  const img = document.querySelectorAll(".container img");

  let idx = 0;

  function carrossel() {
    idx = (idx + 1) % img.length;
    imgs.style.transform = `translateX(${-idx * 400}px)`;
  }

  setInterval(carrossel, 1800);
});


var darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", function() {
  document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});
