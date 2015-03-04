//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.6 - Core JS
// DATE - January 13, 2015
// AUTHOR - Doug Fraize, Matthew Holmes, Doug Richar, Vinod Bhatt
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
// @import 'core/foundation/foundation/foundation.accordion.js';
@import 'core/foundation/foundation/foundation.clearing.js';
@import 'core/foundation/foundation/foundation.abide.js';
// @import 'core/foundation/foundation/foundation.dropdown.js';
// @import 'core/foundation/foundation/foundation.equalizer.js';
// @import 'core/foundation/foundation/foundation.interchange.js';
// @import 'core/foundation/foundation/foundation.joyride.js';
// @import 'core/foundation/foundation/foundation.magellan.js';
@import 'core/foundation/foundation/foundation.offcanvas.js';
// @import 'core/foundation/foundation/foundation.orbit.js';
@import 'core/foundation/foundation/foundation.reveal.js';
// @import 'core/foundation/foundation/foundation.tab.js';
// @import 'core/foundation/foundation/foundation.tooltip.js';
@import 'core/foundation/foundation/foundation.topbar.js';
// @import 'core/foundation/foundation/foundation.slider.js'; // Using jQuery UI Slider instead


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
@import "core/lib/jquery/plugins/footable.js"; // Marked for removal (DataTables.js replaces)
@import "core/lib/jquery/plugins/footable.filter.js"; // Marked for removal (DataTables.js replaces)
@import "core/lib/jquery/plugins/footable.sort.js"; // Marked for removal (DataTables.js replaces)
@import "core/lib/jquery/plugins/jquery.maskedinput.js";
@import "core/lib/jquery/plugins/jquery.mousewheel.js";
@import "core/lib/jquery/plugins/jquery.mCustomScrollbar.js";
@import "core/lib/jquery/plugins/owl.carousel.js";
@import "lib/jquery/plugins/jquery.autosize.input.js";
// @import "core/lib/jquery/plugins/jquery.smartmenus.js"; // Marked for removal (Foundation replaces)
// @import "core/lib/jquery/plugins/jquery.tooltipster.js"; // Marked for removal (Foundation replaces)
// @import "core/lib/jquery/plugins/jquery.ui.dialog-clickoutside.js"; // Marked for removal (Foundation replaces)
// @import "core/lib/jquery/plugins/jquery.ui.tabs.paging.js"; // Marked for removal (Foundation replaces)


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

@import "core/global/helpers.js";
@import "core/base/base.js";
// @import "core/base/header.js"; // Marked for removal (Need to research. Foundation?)
// @import "core/base/menus.js"; // Marked for removal (Foundation replaces)
// @import "core/objects/accordion.js"; // Marked for removal (Foundation replaces)
// @import "core/objects/advanced_filter.js"; // Keep but use Foundation Reveal
// @import "core/objects/alternate_views_badge.js"; // Keep but use Foundation Tabs
@import "core/objects/autocomplete.js";
@import "core/objects/carousel.js";
// @import "core/objects/content_modal.js"; // Keep but use Foundation Reveal + Tabs
@import "core/objects/datepicker.js";
// @import "core/objects/dialog.js"; // Marked for removal (Foundation replaces)
@import "core/objects/off_canvas.js";
// @import "core/objects/profile_containers.js"; // Marked for removal (Foundation replaces)
@import "core/objects/scroll_pane.js";
@import "core/objects/slider.js";
@import "core/objects/tables.js"; // Replaced with DataTables.js stuff
// @import "core/objects/tabs.js"; // Marked for removal (Foundation replaces)
// @import "core/objects/tooltip.js"; // Marked for removal (Foundation replaces)
@import "core/objects/top_bar.js";
