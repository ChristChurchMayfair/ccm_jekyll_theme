function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class Carousel {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.src = '';
        this.currentSlideIndex = null;

        console.log("Creating carousel on: " + this.rootElement);

        this.pictures = Array.from(this.rootElement.getElementsByClassName("carousel-image"));

        console.log(this.pictures);
        this.setCurrentSlide(0);
    }

    setCurrentSlide(newCurrentSlideIndex) {
        console.log("Set current slide to: " + newCurrentSlideIndex);
        //Remove current slide
        if (this.currentSlideIndex !== null) {
            this.pictures[this.currentSlideIndex].style.opacity = 0;
            setTimeout( (function() {
                this.style.display = 'none';
            }).bind(this.pictures[this.currentSlideIndex]), 500);
        }

        this.currentSlideIndex = newCurrentSlideIndex;

        setTimeout( (function() {
            this.style.display = 'block';
            this.style.opacity = 1;
        }).bind(this.pictures[this.currentSlideIndex]), 500);
        // this.pictures[this.currentSlideIndex].style.display = "block";
        // this.pictures[this.currentSlideIndex].style.opacity = 1;
        
    }

    nextSlide() {
        console.log("Next slide called");
        console.log("Current Slide: " + this.currentSlideIndex);
        var nextSlideIndex = this.currentSlideIndex + 1;
        console.log(this);
        console.log(this.pictures);
        if (nextSlideIndex >= this.pictures.length) {
            nextSlideIndex = 0;
        }
        console.log("Next Slide: " + nextSlideIndex);
        this.setCurrentSlide(nextSlideIndex);
    }
}

//Do things when the DOM content has loaded so that we can safely manipulate the DOM.
document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded the carousel script");
    var carouselRoots = Array.from(document.querySelectorAll(".carousel-images"));
    console.log(carouselRoots);
    var carousels = carouselRoots.map(rootElement => new Carousel(rootElement));

    
    window.setInterval(function() {
        console.log("Advancing carousels...");
        carousels.forEach(carousel => carousel.nextSlide());
    }, 5000);

});
