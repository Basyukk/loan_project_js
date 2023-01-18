import MainSlider from "./modules/slider/slider-main";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/mini-slider";
import Difference from "./modules/difference";
import Form from "./modules/forms";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";

window.addEventListener("DOMContentLoaded", () => {
	const slider = new MainSlider({
		btns: ".next",
		slider: ".page",
	});
	slider.render();

	const showUpSlider = new MiniSlider({
		slider: ".showup__content-slider",
		prev: ".showup__prev",
		next: ".showup__next",
		activeClass: "card-active",

		animate: true,
	});
	showUpSlider.init();

	const feedSlider = new MiniSlider({
		slider: ".feed__slider",
		prev: ".feed__buttons .slick-prev",
		next: ".feed__buttons .slick-next",
		activeClass: "feed__item-active",
	});
	feedSlider.init();

	const moduleMainSlider = new MainSlider({
		slider: ".moduleapp",
		btns: ".next",
	});
	moduleMainSlider.render();

	const moduleSlider = new MiniSlider({
		slider: ".modules__content-slider",
		prev: ".modules__info-btns .slick-prev",
		next: ".modules__info-btns .slick-next",
		activeClass: "card-active",
		animate: true,
		autoplay: true,
	});
	moduleSlider.init();

	const player = new VideoPlayer(".showup .play", ".overlay");
	player.init();
	const playerModules = new VideoPlayer(".module__video-item .play", ".overlay");
	playerModules.init();

	const difference = new Difference(
		".officerold",
		".officernew",
		".officer__card-item"
	);
	difference.init();
	const info = new ShowInfo(".plus__content");
	info.init();

	// const differenceNew = new Difference(".officernew", ".officer__card-item");
	// differenceNew.init();
	// const differenceOld = new Difference(".officerold", ".officer__card-item");
	// differenceOld.init();

	const form = new Form(".form");
	form.init();
	const download = new Download(".download");
	download.init();
});
