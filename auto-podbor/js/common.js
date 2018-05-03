$(function() {

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


