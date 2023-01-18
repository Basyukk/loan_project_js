/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_slider_mini_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider/mini-slider */ "./src/js/modules/slider/mini-slider.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_showInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showInfo */ "./src/js/modules/showInfo.js");
/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/download */ "./src/js/modules/download.js");







window.addEventListener("DOMContentLoaded", () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    btns: ".next",
    slider: ".page"
  });
  slider.render();
  const showUpSlider = new _modules_slider_mini_slider__WEBPACK_IMPORTED_MODULE_2__["default"]({
    slider: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: "card-active",
    animate: true
  });
  showUpSlider.init();
  const feedSlider = new _modules_slider_mini_slider__WEBPACK_IMPORTED_MODULE_2__["default"]({
    slider: ".feed__slider",
    prev: ".feed__buttons .slick-prev",
    next: ".feed__buttons .slick-next",
    activeClass: "feed__item-active"
  });
  feedSlider.init();
  const moduleMainSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    slider: ".moduleapp",
    btns: ".next"
  });
  moduleMainSlider.render();
  const moduleSlider = new _modules_slider_mini_slider__WEBPACK_IMPORTED_MODULE_2__["default"]({
    slider: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true
  });
  moduleSlider.init();
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"](".showup .play", ".overlay");
  player.init();
  const playerModules = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_1__["default"](".module__video-item .play", ".overlay");
  playerModules.init();
  const difference = new _modules_difference__WEBPACK_IMPORTED_MODULE_3__["default"](".officerold", ".officernew", ".officer__card-item");
  difference.init();
  const info = new _modules_showInfo__WEBPACK_IMPORTED_MODULE_5__["default"](".plus__content");
  info.init();

  // const differenceNew = new Difference(".officernew", ".officer__card-item");
  // differenceNew.init();
  // const differenceOld = new Difference(".officerold", ".officer__card-item");
  // differenceOld.init();

  const form = new _modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"](".form");
  form.init();
  const download = new _modules_download__WEBPACK_IMPORTED_MODULE_6__["default"](".download");
  download.init();
});

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Difference; });
class Difference {
  constructor(oldOfficer, newOfficer, items) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    try {
      this.oldItems = this.oldOfficer.querySelectorAll(items);
      this.newItems = this.newOfficer.querySelectorAll(items);
    } catch (e) {}
    this.oldCounter = 0;
    this.newCounter = 0;
  }
  hideItems(items) {
    items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        item.style.display = "none";
      }
    });
  }
  bindTriggers(container, items, counter) {
    container.querySelector(".plus").addEventListener("click", () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = "flex";
        counter++;
      } else {
        items[counter].style.display = "flex";
        items[items.length - 1].remove();
      }
    });
  }
  init() {
    try {
      this.hideItems(this.oldItems);
      this.hideItems(this.newItems);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    } catch (e) {}
  }
}
// export default class Difference {
// 	constructor(officer, items) {
// 		this.officer = document.querySelector(officer);
// 		try {
// 		} catch (e) {
// 			this.items = this.officer.querySelectorAll(items);
// 		}
// 		this.counter = 0;
// 	}
// 	hideItems(items) {
// 		items.forEach((item, i, arr) => {
// 			if (i !== arr.length - 1) {
// 				item.style.display = "none";
// 			}
// 		});
// 	}

// 	bindTriggers(container, items, counter) {
// 		container.querySelector(".plus").addEventListener("click", () => {
// 			if (counter !== items.length - 2) {
// 				items[counter].style.display = "flex";
// 				counter++;
// 			} else {
// 				items[counter].style.display = "flex";
// 				items[items.length - 1].remove();
// 			}
// 		});
// 	}
// 	init() {
// 		try {
// 			this.hideItems(this.items);
// 			this.bindTriggers(this.officer, this.items, this.counter);
// 		} catch (e) {}
// 	}
// }

/***/ }),

/***/ "./src/js/modules/download.js":
/*!************************************!*\
  !*** ./src/js/modules/download.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Download; });
class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = "assets/img/mainbg.jpg";
  }
  downloadItem(path) {
    const element = document.createElement("a");
    element.setAttribute("href", path);
    element.setAttribute("download", "nice_picture");
    element.style.display = "none";
    document.body.appendChild(element);
    // element.preventDefault();

    element.click();
    document.body.removeChild(element);
  }
  init() {
    this.btns.forEach(item => {
      item.addEventListener("click", e => {
        e.stopPropagation();
        this.downloadItem(this.path);
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
class Form {
  constructor(forms) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll("input");
    this.message = {
      loading: "Загрузка...",
      success: "Спасибо! Скоро мы с вами свяжемся!",
      failure: "Что-то пошло не так..."
    };
    this.path = "assets/question.php";
  }
  clearInputs() {
    this.inputs.forEach(input => {
      input.value = "";
    });
  }
  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');
    mailInputs.forEach(input => {
      input.addEventListener("keypress", function (e) {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }
  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }
  init() {
    this.checkMailInputs();
    console.log(this);
    this.forms.forEach(item => {
      item.addEventListener("submit", e => {
        e.preventDefault();
        let statusMessage = document.createElement("div");
        statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;
        item.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;
        const formData = new FormData(item);
        this.postData(this.path, formData).then(res => {
          console.log(res);
          statusMessage.textContent = this.message.success;
        }).catch(() => {
          statusMessage.textContent = this.message.failure;
        }).finally(() => {
          this.clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 6000);
        });
      });
    });
  }
}

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector(".close");
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }
  bindTriggers() {
    this.btns.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest(".module__video-item").nextElementSibling;
        if (i % 2 == 0) {
          blockedElem.setAttribute("data-disabled", "true");
        }
      } catch (e) {}
      btn.addEventListener("click", () => {
        if (!btn.closest(".module__video-item") || btn.closest(".module__video-item").getAttribute("data-disabled") !== "true") {
          this.activeBtn = btn;
          if (document.querySelector("iframe#frame")) {
            this.overlay.style.display = "flex";
            if (this.path !== btn.getAttribute("data-url")) {
              this.path = btn.getAttribute("data-url");
              this.player.loadVideoById({
                videoId: this.path
              });
            }
          } else {
            this.path = btn.getAttribute("data-url");
            this.createPlayer(this.path);
          }
        }
      });
    });
  }
  bindCloseBtn() {
    this.close.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }
  createPlayer(url) {
    this.player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
      events: {
        onStateChange: this.onPlayerStateChange
      }
    });
    this.overlay.style.display = "flex";
  }
  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest(".module__video-item").nextElementSibling;
      const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);
      if (state.data === 0) {
        if (blockedElem.querySelector(".play__circle").classList.contains("closed")) {
          blockedElem.querySelector(".play__circle").classList.remove("closed");
          blockedElem.querySelector("svg").remove();
          blockedElem.querySelector(".play__circle").appendChild(playBtn);
          blockedElem.querySelector(".play__text").textContent = "play video";
          blockedElem.querySelector(".play__text").classList.remove("attention");
          blockedElem.style.opacity = 1;
          blockedElem.style.filter = "none";
          blockedElem.setAttribute("data-disabled", "false");
        }
      }
    } catch (e) {}
  }
  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.bindTriggers();
      this.bindCloseBtn();
    }
  }
}

/***/ }),

/***/ "./src/js/modules/showInfo.js":
/*!************************************!*\
  !*** ./src/js/modules/showInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowInfo; });
class ShowInfo {
  constructor(trigger) {
    this.btn = document.querySelectorAll(trigger);
  }
  init() {
    this.btn.forEach(btn => {
      const sibling = btn.closest(".module__info-show").nextElementSibling;
      btn.addEventListener("click", () => {
        if (!sibling.classList.contains("msg")) {
          sibling.classList.add("msg");
          btn.querySelector("svg").innerHTML = `<path d="M5.16699 1.00033C5.16699 0.540088 5.54009 0.166992 6.00033 0.166992C6.46056 0.166992 6.83366 0.540088 6.83366 1.00033V11.0003C6.83366 11.4606 6.46056 11.8337 6.00033 11.8337C5.54009 11.8337 5.16699 11.4606 5.16699 11.0003V1.00033Z" fill="white"/>
                    <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"/>`;
        } else {
          btn.querySelector("svg").innerHTML = ` <path d="M1.00033 6.83366C0.540088 6.83366 0.166992 6.46056 0.166992 6.00033C0.166992 5.54009 0.540088 5.16699 1.00033 5.16699H11.0003C11.4606 5.16699 11.8337 5.54009 11.8337 6.00033C11.8337 6.46056 11.4606 6.83366 11.0003 6.83366H1.00033Z" fill="white"/>`;
          sibling.classList.remove("msg");
          sibling.style.marginTop = "20px";
        }
      });
    });
  }
}

// export default class ShowInfo {
// 	constructor(triggers) {
// 		this.btns = document.querySelectorAll(triggers);
// 	}

// 	init() {
// 		this.btns.forEach((btn) => {
// 			btn.addEventListener("click", () => {
// 				const sibling = btn.closest(".module__info-show").nextElementSibling;

// 				sibling.classList.toggle("msg");
// 				sibling.style.marginTop = "20px";
// 			});
// 		});
// 	}
// }

/***/ }),

/***/ "./src/js/modules/slider/mini-slider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/mini-slider.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(slider, next, prev, activeClass, animate, autoplay) {
    super(slider, next, prev, activeClass, animate, autoplay);
  }
  decorizeSlides() {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector(".card__title").style.opacity = "0.4";
        slide.querySelector(".card__controls-arrow").style.opacity = "0";
      }
    });
    this.slides[this.idx].classList.add(this.activeClass);
    if (this.animate) {
      this.slides[this.idx].querySelector(".card__title").style.opacity = "1";
      this.slides[this.idx].querySelector(".card__controls-arrow").style.opacity = "1";
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

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(btns) {
    super(btns);
  }
  showSlides(n) {
    this.slides.forEach(element => {
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
    this.showSlides(this.slideIndex += n);
  }
  bindTriggers() {
    this.btns.forEach(item => {
      item.addEventListener("click", () => {
        this.plusSlides(1);
      });
      item.parentNode.previousElementSibling.addEventListener("click", e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    document.querySelectorAll(".module__info-controls .prev").forEach(item => {
      item.addEventListener("click", e => {
        e.stopPropagation();
        e.preventDefault();
        this.plusSlides(-1);
      });
    });
    document.querySelectorAll(".nextmodule").forEach(item => {
      item.addEventListener("click", e => {
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

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor() {
    let {
      slider = null,
      btns = null,
      next = null,
      prev = null,
      activeClass = null,
      autoplay,
      animate
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map