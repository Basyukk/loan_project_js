import Slider from "./slider";
export default class MainSlider extends Slider {
	constructor(btns) {
		super(btns);
	}
	showSlides(n) {
		this.slides.forEach((element) => {
			element.style.display = "none";
		});
		if (n > this.slides.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = this.slides.length;
		}

		try {
			if (n === 3) {
				document.querySelector(".hanson").classList.add("animate__animated");

				setTimeout(() => {
					document.querySelector(".hanson").style.display = "block";
					document.querySelector(".hanson").classList.add("animate__slideInUp");
				}, 3000);
			} else {
				document.querySelector(".hanson").style.display = "none";
				document.querySelector(".hanson").classList.remove("animate__slideInUp");
			}
		} catch (e) {}

		this.slides[this.slideIndex - 1].style.display = "block";
	}

	plusSlides(n) {
		this.showSlides((this.slideIndex += n));
	}

	bindTriggers() {
		this.btns.forEach((item) => {
			item.addEventListener("click", () => {
				this.plusSlides(1);
			});

			item.parentNode.previousElementSibling.addEventListener("click", (e) => {
				e.preventDefault();
				this.slideIndex = 1;
				this.showSlides(this.slideIndex);
			});
		});

		document.querySelectorAll(".module__info-controls .prev").forEach((item) => {
			item.addEventListener("click", (e) => {
				e.stopPropagation();
				e.preventDefault();
				this.plusSlides(-1);
			});
		});

		document.querySelectorAll(".nextmodule").forEach((item) => {
			item.addEventListener("click", (e) => {
				e.stopPropagation();
				e.preventDefault();
				this.plusSlides(1);
			});
		});
	}

	render() {
		if (this.slider) {
			try {
				this.showSlides(this.slideIndex);
				this.bindTriggers();
			} catch (e) {}
		}
	}
}
