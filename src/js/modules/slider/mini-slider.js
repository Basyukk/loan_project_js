import Slider from "./slider";

export default class MiniSlider extends Slider {
	constructor(slider, next, prev, activeClass, animate, autoplay) {
		super(slider, next, prev, activeClass, animate, autoplay);
	}

	decorizeSlides() {
		this.slides.forEach((slide) => {
			slide.classList.remove(this.activeClass);
			if (this.animate) {
				slide.querySelector(".card__title").style.opacity = "0.4";
				slide.querySelector(".card__controls-arrow").style.opacity = "0";
			}
		});

		this.slides[this.idx].classList.add(this.activeClass);

		if (this.animate) {
			this.slides[this.idx].querySelector(".card__title").style.opacity = "1";
			this.slides[this.idx].querySelector(".card__controls-arrow").style.opacity =
				"1";
			// this.slides[this.idx].classList.add(this.activeClass);
		}
	}

	bindTriggers() {
		this.next.addEventListener("click", () => {
			this.nextSlide();
		});
	}

	nextSlide() {
		if (this.idx >= this.slides.length - 1) {
			this.idx = 0;
			this.slider.appendChild(this.slides[this.slides.length - 1]);
			this.decorizeSlides();
			console.log("more");
		} else {
			this.slider.appendChild(this.slides[this.idx++]);
			this.decorizeSlides();
			console.log(this.idx);
		}
	}
	// this.prev.addEventListener("click", () => {
	// 	this.idx--;
	// 	if (this.idx < 0) this.idx = this.slides.length - 1;
	// 	// this.slider.appendChild(this.slides[this.idx--]);

	// 	// let last = this.slides[this.slides.length - 1];
	// 	// this.slider.insertBefore(last, this.slides[this.idx]);
	// 	// this.decorizeSlides();
	// });

	init() {
		try {
			this.slider.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;`;
			this.bindTriggers();
			this.decorizeSlides();
		} catch (e) {}

		// if (this.autoplay) {
		// 	setInterval(() => this.nextSlide(), 3000);
		// }
	}
}
