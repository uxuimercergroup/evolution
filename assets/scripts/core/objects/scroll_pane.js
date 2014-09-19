//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Scroll Pane JS
// DATE - May 30, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// SCROLL PANE

// Depends on Malihu Jquery Custom Scrollbar Plugin
// assets/scripts/core_vX.x/lib/jquery/plugins/jquery.mcustomscrollbar.js
// https://github.com/malihu/malihu-custom-scrollbar-plugin

// Configuration Options, Methods, and Callbacks
// For explanation of configuration options, methods, and callbacks please visit: http://manos.malihu.gr/jquery-custom-content-scroller/

//--------------------------------------------------------------------------------------------------------

	var mulScrollPaneDefaults = {
		setWidth: false,
		setHeight: false,
		setTop: 0,
		setLeft: 0,
		axis: "y",
		scrollbarPosition: "inside",
		scrollInertia: 950,
		autoDraggerLength: true,
		autoHideScrollbar: true,
		autoExpandScrollbar: true,
		alwaysShowScrollbar: 0,
		snapAmount: null,
		snapOffset: 0,
		mouseWheel:{
			enable: true,
			scrollAmount: "auto",
			axis: "y",
			preventDefault: false,
			deltaFactor: "auto",
			normalizeDelta: false,
			invert: false
		},
		scrollButtons:{
			enable: false,
			scrollType: "stepless",
			scrollAmount: "auto"
		},
		keyboard:{
			enable: true,
			scrollType: "stepless",
			scrollAmount: "auto"
		},
		contentTouchScroll: 25,
		advanced:{
			autoExpandHorizontalScroll: false,
			autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
			updateOnContentResize: true,
			updateOnSelectorLength: true
		},
		theme:"dark",
		callbacks:{
			onScrollStart: false,
			onScroll: false,
			onTotalScroll: false,
			onTotalScrollBack: false,
			whileScrolling: false,
			onTotalScrollOffset: 0,
			onTotalScrollBackOffset: 0,
			alwaysTriggerOffsets: true
		},
		live: true
	};


	// Default Scroll Pane
	var mulScrollPane = function(){		
		jQuery('.js-mul-scroll-pane').mCustomScrollbar(jQuery.extend({},mulScrollPaneDefaults));
	}

	// Initialize Default Scroll Pane
	mulScrollPane();


	// Custom Scroll Pane Function
	var mulScrollPaneCustom = function(scrollPaneCustomClass, options){

		// Variable to define custom class of scroll pane
		var scrollPaneCustom = jQuery('.'+scrollPaneCustomClass);

		// Make specific dialog resource div into a dialog and add modal dialog default options and then pass in any additional or overriding options
		scrollPaneCustom.mCustomScrollbar(jQuery.extend({},mulScrollPaneDefaults,options));
		
	}

	// Horizontal Scroll Pane Initialization
	mulScrollPaneCustom('js-mul-scroll-pane-horizontal',{
		axis:"x",
		mouseWheel:{
			axis:"x"
		},
		advanced:{
			autoExpandHorizontalScroll: true
		}
	});

	// Horizontal + Vertical Scroll Pane Initialization
	mulScrollPaneCustom('js-mul-scroll-pane-horizontal-vertical',{
		axis:"yx",
		advanced:{
			autoExpandHorizontalScroll: true
		}
	});
