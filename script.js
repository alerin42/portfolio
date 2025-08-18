
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("certificadosCarousel");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const scrollAmount = 250; // px que o carrossel anda por clique

  // Mostrar/esconder botões dinamicamente
  const updateButtons = () => {
    prevBtn.style.display = carousel.scrollLeft > 0 ? "block" : "none";
    nextBtn.style.display =
      carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth
        ? "block"
        : "none";
  };

  // Evento clique nos botões
  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(updateButtons, 400);
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(updateButtons, 400);
  });

  // Atualizar na rolagem manual também
  carousel.addEventListener("scroll", updateButtons);

  // Inicializar
  updateButtons();
});
