const carousel = document.getElementById("certificadosCarousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

// Função para atualizar visibilidade das setas
function updateArrows() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  prevBtn.style.display = carousel.scrollLeft > 0 ? "block" : "none";
  nextBtn.style.display = carousel.scrollLeft < maxScrollLeft ? "block" : "none";
}

// Scroll ao clicar nos botões
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -250, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 250, behavior: "smooth" });
});

// Atualiza ao rolar
carousel.addEventListener("scroll", updateArrows);

// Chama no início
updateArrows();
