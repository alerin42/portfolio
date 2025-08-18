document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("certificadosCarousel");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  const checkScroll = () => {
    if (carousel.scrollWidth > carousel.clientWidth) {
      prevBtn.style.display = "block";
      nextBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    }
  };

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -250, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 250, behavior: "smooth" });
  });

  checkScroll();
  window.addEventListener("resize", checkScroll);
});
