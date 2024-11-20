// *** CAROUSEL ***
// TODO

carousel = document.querySelector(".carousel__container");
carousel.scrollLeft = 520;
carousel.scrollBy({ left: +260, behavior: "smooth" });
carousel.scrollBy({ left: -260, behavior: "smooth" });

prevButton = document.querySelector(".carousel__button--prev");

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");


if (carousel) {
    prevButton.addEventListener("click", () => {
      const currentScroll = carousel.scrollLeft;
      carousel.scrollTo({
        left: currentScroll - itemWidth,
        behavior: 'smooth',
      });
    });
  
    nextButton.addEventListener("click", () => {
      const currentScroll = carousel.scrollLeft;
      carousel.scrollTo({
        left: currentScroll + itemWidth,
        behavior: 'smooth',
      });
    });
  }
  