$ = jQuery.noConflict();
$(document).ready(function() {
	$('.humburger').click(function(){
		$('.humburger i').toggleClass('fa fa-bars');
		$('.humburger i').toggleClass('fa fa-times');
		$('.menu').fadeToggle();
		
	});
})