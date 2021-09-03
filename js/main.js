$(function () {
	$(window).scroll(function() {
	    $('.ahead').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("bounceInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.mail').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.footer').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomInUp");
	        }
	    });
	});
})