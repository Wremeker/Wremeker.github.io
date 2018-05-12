new WOW().init();

$('.arrivals__shop-cart__item').equalHeights();
$('.eq-height-wrapper-one').equalHeights();
$('.arrivals__shop-cart__item-hover').equalHeights();



$(".arrivals__shop-cart-caourusel").owlCarousel({
	items: 4,
	margin: 15,
	loop: false,
	nav: true,
	navText: '',
	autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	   	 }

});


