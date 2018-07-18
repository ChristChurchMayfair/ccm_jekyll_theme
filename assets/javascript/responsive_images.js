class ResponsiveBackgroundImage {

    constructor(element) {
        this.element = element;
        this.img = element.querySelector('img');
        this.src = '';

        console.log(element);

        this.img.addEventListener('load', () => {
            this.update();
        });

        if (this.img.complete) {
            this.update();
        }
    }

    update() {
        console.log(`currentSrc: ${this.img.currentSrc}`);
        console.log(`current Src: ${this.img.src}`);
        let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
        console.log(`new src: ${src}`);
        if (this.src !== src) {
            this.src = src;
            console.log(`Setting: ${this.src}`);
            this.element.style.backgroundImage = 'url("' + this.src + '")';
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded responsive background images script...");
    let elements = document.querySelectorAll('[responsive-background-image]');  
    for (let i=0; i<elements.length; i++) {  
    new ResponsiveBackgroundImage(elements[i]);
    } 
});