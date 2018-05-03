$(function() {

	$('.menu-link').click(function(){
		$('.menu-link').toggleClass('menu-link_active');//для меню иконки
		$('.menu-devices').toggleClass('menu-devices_active');//сама меню при разреш. меньше 992px
	});

	$('.menu-link_active').click(function() {
		$('.menu-link').toggleClass('menu-link_active');
	});

	$('.menu-devices a').click(function() {
		$('.menu-link').toggleClass('menu-link_active');
		$('.menu-devices').toggleClass('menu-devices_active');
	});

	$('.sliders').bxSlider();

	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");

		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});

		return false;
	});

	// По стандарту
    jQuery.scrollSpeed(100, 800);
    // Собственная анимация при прокрутке 
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');
    
    
    

	
	

});


