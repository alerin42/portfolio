const carousel = document.querySelector(".certificados-carousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let cardWidth = carousel.querySelector("a").offsetWidth + 30;

function toggleButtons() {
  prevBtn.style.display = carousel.scrollLeft > 0 ? "block" : "none";
  nextBtn.style.display =
    carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth
      ? "block"
      : "none";
}

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

carousel.addEventListener("scroll", toggleButtons);

window.addEventListener("load", toggleButtons);
window.addEventListener("resize", () => {
  cardWidth = carousel.querySelector("a").offsetWidth + 30;
  toggleButtons();
});
