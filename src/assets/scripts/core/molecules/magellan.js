//--------------------------------------------------------------------------------------------------------
// Mercer Evolution v{{ evo_meta_version }} - Magellan JS
// DATE: {{ evo_meta_date }}
// AUTHOR: {{ evo_meta_author }}
// URL: {{ evo_meta_url }}
//--------------------------------------------------------------------------------------------------------

$(document).foundation({

	// FOUNDATION MAGELLAN OPTIONS
	"magellan-expedition": {
		// active_class: 'active',		// specify the class used for active sections
		// threshold: 0,				// how many pixels until the magellan bar sticks, 0 = auto
		destination_threshold: 56,		// pixels from the top of destination for it to be considered active
		// throttle_delay: 50,			// calculation throttling to increase framerate
		// fixed_top: 0					// top distance in pixels assigend to the fixed element on scroll
		// offset_by_height: true		// whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
	}

});