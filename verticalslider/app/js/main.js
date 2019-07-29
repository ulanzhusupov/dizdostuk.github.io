import SimpleParallax from "./simpleParrallax/simpleParallax";
var image = document.getElementsByClassName('vertical_slider__content');
new SimpleParallax(image, {
	delay: .2,
	transition: 'cubic-bezier(0,0,0,1)'
});

let sliderWrap = document.getElementById('vertical_slider--wrapper');
let sliderContainer = document.getElementById('vertical_slider');

sliderContainer.addEventListener('touchmove', (e) => {
	for(let i = 0; i < e.touches.length; i++) {
		let touch = e.touches[i];
		console.log(touch)
	}
}, false);