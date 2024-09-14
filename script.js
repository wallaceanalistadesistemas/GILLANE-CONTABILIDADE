document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let slideIndex = 0;
    
    nextButton.addEventListener('click', function() {
      slideIndex++;
      updateSlidePosition();
    });
    
    prevButton.addEventListener('click', function() {
      slideIndex--;
      updateSlidePosition();
    });
    
    function updateSlidePosition() {
      const slideWidth = carouselContainer.clientWidth;
      carouselContainer.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }
  });
  