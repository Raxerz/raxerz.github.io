
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {

	/*
	    Navigation
	*/

		$('a[href*=#]').bind("click", function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
						scrollTop: $(anchor.attr('href')).offset().top
				}, 1000);
				e.preventDefault();
		});

	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});

	$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
	})

	// -------------------------------------------------------------
	// Progress Bar
	// -------------------------------------------------------------

	$('.skill-progress').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
					$.each($('div.progress-bar'),function(){
							$(this).css('width', $(this).attr('aria-valuenow')+'%');
					});
					$(this).unbind('inview');
			}
	});

	$('window').scroll(function() {
			if ($(this).scrollTop() > 100) {
					$('.scroll-up').fadeIn();
			} else {
					$('.scroll-up').fadeOut();
			}
	});

    /*
        Background slideshow
    */
    /*
        Wow
    */
    new WOW().init();

});


jQuery(window).load(function() {

	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");

});
