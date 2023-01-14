export default class Slider {
	constructor({
		slider = null,
		btns = null,
		next = null,
		prev = null,

		activeClass = null,
		autoplay,
		animate,
	} = {}) {
		this.slider = document.querySelector(slider);
		try {
			this.slides = [...this.slider.children];
		} catch (e) {}
		// this.slides = document.querySelectorAll(slides);
		this.btns = document.querySelectorAll(btns);
		this.prev = document.querySelector(prev);
		this.next = document.querySelector(next);
		this.activeClass = activeClass;
		this.animate = animate;
		this.autoplay = autoplay;
		this.slideIndex = 1;
		this.idx = 0;
	}
}
