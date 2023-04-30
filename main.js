// lear
// Pricing Component

window.addEventListener("DOMContentLoaded", () => {
  const switchBtn = document.querySelector(".switch-btn");
  const periodText = document.querySelectorAll(".period");
  const hiddenPrice = document.querySelectorAll(".hidden-price");

  switchBtn.addEventListener("click", () => {
    switchBtn.classList.toggle("active");
    periodText.forEach((item) => item.classList.toggle("active"));
    hiddenPrice.forEach((item) => item.classList.toggle("active"));
  });
});
