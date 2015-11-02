//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v3.0.1 - Core JS
// DATE - June 3, 2015
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// FOUNDATION VENDOR LIBRARIES
// =======================================================================================================

@import "core/foundation/vendor/jquery.js";
@import "core/foundation/vendor/jquery.cookie.js";
@import "core/foundation/vendor/placeholder.js";
@import "core/foundation/vendor/fastclick.js";


// =======================================================================================================
// FOUNDATION CORE LIBRARIES
// =======================================================================================================

@import 'core/foundation/foundation/foundation.js';


// =======================================================================================================
// FOUNDATION PLUGIN LIBRARIES
// =======================================================================================================

@import 'core/foundation/foundation/foundation.alert.js';
@import 'core/foundation/foundation/foundation.accordion.js';
// @import 'core/foundation/foundation/foundation.clearing.js'; // Not Used
@import 'core/foundation/foundation/foundation.abide.js';
@import 'core/foundation/foundation/foundation.dropdown.js';
@import 'core/foundation/foundation/foundation.equalizer.js';
// @import 'core/foundation/foundation/foundation.interchange.js'; // Not Used
// @import 'core/foundation/foundation/foundation.joyride.js'; // Not Used
@import 'core/foundation/foundation/foundation.magellan.js'; // Not Used
@import 'core/foundation/foundation/foundation.offcanvas.js';
// @import 'core/foundation/foundation/foundation.orbit.js'; // Not Used
@import 'core/foundation/foundation/foundation.reveal.js';
@import 'core/foundation/foundation/foundation.tab.js';
@import 'core/foundation/foundation/foundation.tooltip.js';
@import 'core/foundation/foundation/foundation.topbar.js';
// @import 'core/foundation/foundation/foundation.slider.js'; // Not Used


// =======================================================================================================
// JQUERY UI LIBRARIES
// =======================================================================================================

// jQuery UI Custom Build (http://jqueryui.com/download/), includes:
// Core
// Widget
// Mouse
// Position
// Autocomplete
// Datepicker
// Menu
// Slider

@import "core/lib/jquery/jquery-ui.js";


// =======================================================================================================
// JQUERY PLUGIN LIBRARIES
// =======================================================================================================

// jQuery UI mobile plugins
@import "core/lib/jquery/plugins/jquery.ui.touch-punch.js"; // Enables the use of touch events on sites using the jQuery UI user interface library, https://github.com/furf/jquery-ui-touch-punch

// jQuery Component plugins
@import "core/lib/jquery/plugins/jquery.dataTables.js";
@import "core/lib/jquery/plugins/datatables.foundation.js";
@import "core/lib/jquery/plugins/jquery.autosize.input.js";
@import "core/lib/jquery/plugins/jquery.maskedinput.js";
@import "core/lib/jquery/plugins/jquery.mousewheel.js";
@import "core/lib/jquery/plugins/jquery.mCustomScrollbar.js";
@import "core/lib/jquery/plugins/owl.carousel.js";


// =======================================================================================================
// JS LIBRARIES
// =======================================================================================================

// Masonary JS - Masonry is a JavaScript grid layout library. It works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall.
@import "core/lib/js/masonry.pkgd.js";

// imagesLoaded JS - Unloaded images can throw off Masonry layouts and cause item elements to overlap. imagesLoaded resolves this issue.
@import "core/lib/js/imagesloaded.pkgd.js";


// =======================================================================================================
// POLYFILL LIBRARIES
// =======================================================================================================



// =======================================================================================================
// MOBILE LIBRARIES
// =======================================================================================================

@import "core/lib/mobile/ios-orientationchange-fix.js"; // iOS orientation change fix for zooming, https://github.com/scottjehl/iOS-Orientationchange-Fix


// =======================================================================================================
// CORE JS LIBRARIES
// =======================================================================================================

// CORE
@import "core/base/abide.js";
@import "core/base/base.js";
@import "core/base/dropdowns.js";
@import "core/base/equalizer.js";
@import "core/base/helpers.js";

// CORE UI
@import "core/objects/accordion.js";
@import "core/objects/autocomplete.js";
@import "core/objects/carousel.js";
@import "core/objects/data_table.js";
@import "core/objects/datepicker.js";
@import "core/objects/magellan.js";
@import "core/objects/off_canvas.js";
@import "core/objects/reveal.js";
@import "core/objects/scroll_pane.js";
@import "core/objects/slider.js";
@import "core/objects/tabs.js";
@import "core/objects/tooltip.js";
@import "core/objects/top_bar.js";