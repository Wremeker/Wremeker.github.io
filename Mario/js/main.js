new WOW().init();


$(document).ready(function  () {

	$(".toggle-menu").click(function() {
		$(this).toggleClass("on");
		 $(".main-responsive-menu").slideToggle();
		 return false;
	});

	$('.before-after__slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		smartSpeed: 230,
		navText: ["<i class='fa fa-arrow-circle-o-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-circle-o-right' aria-hidden='true'></i>"]
	});
	$('.our-works-content__slider').owlCarousel({
		nav: true,
		navText: "",
		items: 4,
		loop: true,
		dotsEach: true,
		smartSpeed: 200,
		autoplay: true,
		responsive:{
		    0:{
		        items:1,
		        nav: true,
		        dots: true
		        
		    },
		    600:{
		        items:2,
		        nav: true,
		        dots: true
		        
		    },
		    1000:{
		        items:4,
		        nav: true,
		        dots: true
		       
		    }
		}
		
	});

	$(".numbers").waypoint(function() {
		this.destroy();
		$(".animate-number").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			"font-size": "50px",
			},1000);
		});
	},{

		offset: '70%',

	});

	$('.red-button').magnificPopup({
			type: 'inline',

	});

	$(".footer__menu .toggle-menu").click(function  () {
		$("html body").animate({scrollTop: $(document).height() + 200}, "slow");
		return false;
	});
});

$(window).resize(function () {
		
		if ( $(window).width() > 1200) {
			
			$('.top-header__menu').find(".main-responsive-menu").removeAttr('style');
			
		}
	});
$(window).resize(function () {
		
		if ( $(window).width() > 1200) {
			
			$('.footer__menu ').find('.main-responsive-menu').removeAttr('style');
			
		}
	});
