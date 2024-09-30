document
  .querySelector(".marquee span")
  .addEventListener("mouseover", function () {
    this.style.animationPlayState = "paused"; // Pause animation
  });

document
  .querySelector(".marquee span")
  .addEventListener("mouseout", function () {
    this.style.animationPlayState = "running"; // Resume animation
  });
