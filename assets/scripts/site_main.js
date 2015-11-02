// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

	// SCROLL TO TOP
	var evoScrollToTop = function(){
		jQuery('[data-scroll-to-top]').click(function(e){
			jQuery('body,html').animate({
				scrollTop: 0
			}, 500);
			e.preventDefault();
		});
	}

	// SCROLL TO LOCATION
	var evoScrollToLocation = function(){
		jQuery('[data-scroll-to-location]').click(function(e){
			var scrollToLocationValue = jQuery(this).attr('href');
			jQuery('html, body').animate({
				scrollTop: jQuery(scrollToLocationValue).offset().top
			}, 500);
			e.preventDefault();
		});
	}

	// PARALLAX SCROLLING
	var evoParallaxScroll = function(){	
    	var window = jQuery(window);
        jQuery('[data-type="background"]').each(function(){
     		var bgobj = jQuery(this);               
	      	jQuery(window).scroll(function(e) {                              
	        	var yPos = jQuery-(window.scrollTop() / bgobj.data('speed')); 
	        	var coords = '50% '+ yPos + 'px';
	        	bgobj.css({ backgroundPosition: coords });
	        	e.preventDefault();
  			});
  		});
    }

    // CUSTOMIZE HOME PAGE CAROUSEL DEFAULTS
    var evoCarouselDefaults = {
		addClassActive: false, // Add "active" classes on visible items. Works with any numbers of items on screen.
		autoHeight: true, // Add height to owl-wrapper-outer so you can use diffrent heights on slides. Use it only for one item per page setting.
		autoPlay: true, // Change to any integrer for example autoPlay : 5000 to play every 5 seconds. If you set autoPlay: true default speed will be 5 seconds.
		baseClass: 'owl-carousel', // Automaticly added class for base CSS styles.
		dragBeforeAnimFinish: true, // Ignore whether a transition is done or not (only dragging).
		itemsScaleUp: false, // Option to not stretch items when it is less than the supplied items.
		jsonPath: false, // Allows you to load directly from a jSon file. The JSON structure you use needs to match the owl JSON structure used here. To use custom JSON structure see jsonSuccess option.
		jsonSuccess: false, // Success callback for $.getJSON build in into carousel.
		mouseDrag: true, // Turn off/on mouse events.
		lazyLoad: false, // Delays loading of images. Images outside of viewport won't be loaded before user scrolls to them. Great for mobile devices to speed up page loadings. IMG need special markup class="lazyOwl" and data-src="your img path"
		navigation: false, // Display "next" and "prev" buttons
		navigationText: [
			'<i class="evo-icon-arrow-left2 evo-icon-position-left" title="Previous"></i>',
			'<i class="evo-icon-arrow-right2 evo-icon-position-right" title="Next"></i>'
		], // You can cusomize your own text for navigation. To get empty buttons use navigationText : false. Also HTML can be used here.
		pagination: true, // Show pagination
		paginationNumbers: false, // Show numbers inside pagination buttons
		paginationSpeed: 400, // Pagination speed in milliseconds
		responsive: true, // You can use Owl Carousel on desktop-only websites too! Just change that to "false" to disable resposive capabilities
		responsiveBaseWidth: window, // Owl Carousel check window for browser width changes. You can use any other jQuery element to check width changes for example ".owl-demo". Owl will change only if ".owl-demo" get new width.
		responsiveRefreshRate: 200, // Check window width changes every 200ms for responsive actions
		rewindNav: true, // Slide to first item. Use rewindSpeed to change animation speed.
		rewindSpeed: 1000, // Rewind speed in milliseconds
		scrollPerPage: false, // Scroll per page not per item. This affect next/prev buttons and mouse/touch dragging.
		singleItem: true, // Display only one item
		slideSpeed: 300, // Slide speed in milliseconds
		stopOnHover: true, // Stop autoplay on mouse hover
		theme: null, // Default Owl CSS styles for navigation and buttons. Change it to match your own theme.
		touchDrag: true // Turn off/on touch events.
	};

	// MASONRY LAYOUT WITH IMAGES
	var evoMasonaryImages = function(){
		var evoMasonryLayoutCtn = jQuery('[data-evo-masonry-layout]').imagesLoaded( function() {
		
			// init Masonry after all images have loaded
			evoMasonryLayoutCtn.masonry({
				itemSelector: '[data-evo-masonry-layout] li'
			});

		});
	}

// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------	

});

$(function() {

	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		// SCROLL TO TOP
		evoScrollToTop();

		// SCROLL TO LOCATION
		evoScrollToLocation();

		// PARALLAX SCROLLING
		evoParallaxScroll();

		//HOME PAGE CAROUSEL
		evoCarousel('evo-carousel-example');

		// JS LIBRARY INITS

			// GOOGLE PRETTIFY INIT (for code snippet coloring/formating)
			prettyPrint();

		// MASONRY LAYOUT WITH IMAGES
		evoMasonaryImages();


	// LIBRARY EXAMPLES
	//----------------------------------------------------------------------------------------------------
		

});