// *** CAROUSEL ***
// TODO


const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");


if (carousel) {
    prevButton.addEventListener("click", () => {
      const currentScroll = carousel.scrollLeft;
      carousel.scrollTo({
        left: currentScroll - 100,
        behavior: 'smooth',
      });
    });
  
    nextButton.addEventListener("click", () => {
      const currentScroll = carousel.scrollLeft;
      carousel.scrollTo({
        left: currentScroll + 100,
        behavior: 'smooth',
      });
    });
  }


  