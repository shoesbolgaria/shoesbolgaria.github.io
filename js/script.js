$(document).ready(function () {

  $('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
    return false;
  });
    
    	if ($(window).width() <= 767) {
		$('.owl-carousel').owlCarousel({
			dots: false,
			responsive: {
				0: {
					items: 1
				}
			}
		});
	} else if ($(window).width() <= 991) {
		$('.owl-carousel').owlCarousel({
			dots: false,
			responsive: {
				0: {
					items: 2
				}
			}
		});
	} else {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			autoplay: false,
			autoplayTimeout: 3000,
			smartSpeed: 850,
			autoplayHoverPause: true,
			animate: true,
			autoHeight: false,
			dots: false,
			responsive: {
				0: {
					items: 4
				}
			}
		});
	}

});
