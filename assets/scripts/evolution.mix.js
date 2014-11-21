//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core v2.5 - Core JS
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// JQUERY/JQUERY UI LIBRARIES
// =======================================================================================================

@import "core/lib/jquery/jquery_1.10.2.js";
@import "core/lib/jquery/jquery_ui_1.10.3.js";


// =======================================================================================================
// JQUERY PLUGIN LIBRARIES
// =======================================================================================================

// jQuery UI mobile plugins
@import "core/lib/jquery/plugins/jquery.ui.touchpunch.js"; // Enables the use of touch events on sites using the jQuery UI user interface library, https://github.com/furf/jquery-ui-touch-punch

// jQuery Component plugins
@import "core/lib/jquery/plugins/jquery.footables.core.js";
@import "core/lib/jquery/plugins/jquery.footables.filter.js";
@import "core/lib/jquery/plugins/jquery.footables.sorting.js";
@import "core/lib/jquery/plugins/jquery.maskedinput.js";
@import "core/lib/jquery/plugins/jquery.mousewheel.js";
@import "core/lib/jquery/plugins/jquery.mcustomscrollbar.js";
@import "core/lib/jquery/plugins/jquery.owlcarousel.js";
@import "core/lib/jquery/plugins/jquery.smartmenus.js";
@import "core/lib/jquery/plugins/jquery.tooltipster.js";
@import "core/lib/jquery/plugins/jquery.ui.dialog.clickoutside.js";
@import "core/lib/jquery/plugins/jquery.ui.tabs.paging.js";


// =======================================================================================================
// POLYFILL LIBRARIES
// =======================================================================================================

@import "core/lib/polyfills/placeholder/jquery.placeholder.js"; // HTML5 placeholder polyfill for IE8+, depends on jQuery, https://github.com/matoilic/jquery.placeholder


// =======================================================================================================
// MOBILE LIBRARIES
// =======================================================================================================

@import "core/lib/mobile/ios-orientationchange-fix.js"; // iOS orientation change fix for zooming, https://github.com/scottjehl/iOS-Orientationchange-Fix


// =======================================================================================================
// CORE JS LIBRARIES
// =======================================================================================================

@import "core/global/helpers.js";
@import "core/base/base.js";
@import "core/base/header.js";
@import "core/base/menus.js";
@import "core/objects/accordion.js";
@import "core/objects/advanced_filter.js";
@import "core/objects/alternate-views-badge.js";
@import "core/objects/autocomplete.js";
@import "core/objects/carousel.js";
@import "core/objects/content_modal.js";
@import "core/objects/datepicker.js";
@import "core/objects/dialog.js";
@import "core/objects/scroll_pane.js";
@import "core/objects/slider.js";
@import "core/objects/tables.js"; // Requires FooTables jQuery component plugins to be enabled
@import "core/objects/tabs.js";
@import "core/objects/tooltip.js";