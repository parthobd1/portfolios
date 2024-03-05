(function($){
	'use strict'
	//menu fixed:
	$(window).scroll( function(){
		var durotto = $(window).scrollTop();
		if (durotto > 120) {
			$('.header').addClass('.fixed')
			$('#header').css({
				color: "#111",
				background: "#05B4FF50",
				hight: "80"
				
			})

		} else{

			$('.header').removeClass('.fixed')
			$('#header').css({
				color: "#FFF",
				background: "transparent",
			})
		}
	});

	// The Mobile menu:
	$('.mobile-bar').on('click', function(){
		$('.mobile-menu-icon').fadeIn({});
	});
	$('.bar-icon-close').on('click', function(){
		$('.mobile-menu-icon').fadeOut({});
	});
/*
	// Resize the menu:
	$(window).resize(function(){
		var screenSize = $(window).width();
		if (screenSize > 991) {
			$('.mobile-menu-icon').css({
				display:'none'
			});
		}
	});
*/
	

}) (jQuery);