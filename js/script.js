document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images a");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let counter = 0;
  const totalImages = images.length;

  function updateCarousel() {
    const size = carouselImages.clientWidth / 4; // Ajustar para um quarto da largura visível do carrossel
    carouselImages.style.transform = "translateX(" + -size * counter + "px)";
    carouselImages.style.transition = "transform 0.5s ease-in-out";
  }

  nextButton.addEventListener("click", () => {
    if (counter >= totalImages - 1) {
      counter = 0;
      carouselImages.style.transition = "none";
      updateCarousel();
      setTimeout(() => {
        carouselImages.style.transition = "transform 0.5s ease-in-out";
        counter++;
        updateCarousel();
      }, 50);
    } else {
      counter++;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", () => {
    if (counter <= 0) {
      counter = totalImages - 1;
      carouselImages.style.transition = "none";
      updateCarousel();
      setTimeout(() => {
        carouselImages.style.transition = "transform 0.5s ease-in-out";
        counter--;
        updateCarousel();
      }, 50);
    } else {
      counter--;
      updateCarousel();
    }
  });

  // Redimensionar evento para recalcular tamanho da imagem
  window.addEventListener("resize", updateCarousel);

  // Atualiza o carrossel no carregamento inicial
  updateCarousel();
});
