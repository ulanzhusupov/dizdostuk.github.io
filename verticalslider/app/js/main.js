// import SimpleParallax from "./simpleParrallax/simpleParallax";
// var image = document.getElementsByClassName('vertical_slider__content');
// new SimpleParallax(image, {
// 	delay: .2,
// 	transition: 'cubic-bezier(0,0,0,1)'
// });

let sliderWrap = document.getElementById('vertical_slider--wrapper');
let sliderContainer = document.getElementById('vertical_slider');
let dots = document.getElementsByClassName('pagination_dot');
console.log(dots[0])
let currentSlide = 0;
let slideIndex = 0;

let touchStarted = 0;
sliderContainer.addEventListener('touchstart', (e) => {
	touchStarted = e.changedTouches[0].pageY;
}, false);

let touchEnded = 0;
sliderContainer.addEventListener('touchend', (e) => {
	touchEnded = e.changedTouches[0].pageY;
	if(touchEnded < touchStarted) {
		if(currentSlide === -200) return;
		slideIndex++;
		dots[slideIndex-1].classList.remove('active');
		dots[slideIndex].classList.add('active');
		
		currentSlide -= 100;
		sliderWrap.style.marginTop = currentSlide + 'vh';
	}
	if(touchEnded > touchStarted) {
		if(currentSlide === 0) return;
		slideIndex--;
		dots[slideIndex+1].classList.remove('active');
		dots[slideIndex].classList.add('active');

		currentSlide += 100;
		sliderWrap.style.marginTop = currentSlide + 'vh';
	}
}, false)