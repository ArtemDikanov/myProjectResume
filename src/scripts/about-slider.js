export function sliderGallery() {
    const scrollContainer = document.querySelector('.about-gallery');
    const leftButton = document.querySelector('.picturesLeftButton');
    const rightButton = document.querySelector('.picturesRightButton');
  
    const slides = Array.from(scrollContainer.children);

    let currentIndex = 0;

    function updateSlide() {
        slides.forEach((slide, index) => {
            if(index === currentIndex) {
                slide.style.cssText ='display:block'
            } else {
                slide.style.cssText = 'display:none'
            }
        })
    }

    updateSlide()

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide()
        }
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide()
        }
    });

    console.log(slides)

}