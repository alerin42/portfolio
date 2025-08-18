const carousel = document.querySelector(".certificados-carousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let cardWidth = carousel.querySelector("a").offsetWidth + 30;

// Função que mostra/esconde botões
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

/* ===== ANIMAÇÃO DE ENTRADA ===== */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".certificados-carousel a").forEach((card) => {
  observer.observe(card);
});
