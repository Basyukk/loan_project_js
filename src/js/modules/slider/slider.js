export default class Slider {
    constructor({slider ='', btns='', next ='', prev =''}={}){
        this.slider = document.querySelector(slider);
        this.slides = [...this.slider.children];
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
}
