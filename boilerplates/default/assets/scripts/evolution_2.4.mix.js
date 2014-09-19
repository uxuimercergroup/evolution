//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Core 2.4 - Core JS
// DATE - April 4, 2014
// AUTHOR - Doug Fraize, Matthew Holmes
//--------------------------------------------------------------------------------------------------------

//========================================================================================================
// JQUERY/JQUERY UI LIBRARIES
//========================================================================================================

@import "core_v2-4/lib/jquery/jquery_1.10.2.js";
@import "core_v2-4/lib/jquery/jquery_ui_1.10.3.js";


//========================================================================================================
// JQUERY PLUGIN LIBRARIES
//========================================================================================================

// jQuery UI mobile plugins
@import "core_v2-4/lib/jquery/plugins/jquery.ui.touchpunch.js"; // Enables the use of touch events on sites using the jQuery UI user interface library, https://github.com/furf/jquery-ui-touch-punch

// jQuery Component plugins
@import "core_v2-4/lib/jquery/plugins/jquery.footables.core.js";
@import "core_v2-4/lib/jquery/plugins/jquery.footables.filter.js";
@import "core_v2-4/lib/jquery/plugins/jquery.footables.sorting.js";
@import "core_v2-4/lib/jquery/plugins/jquery.maskedinput.js";
@import "core_v2-4/lib/jquery/plugins/jquery.mousewheel.js";
@import "core_v2-4/lib/jquery/plugins/jquery.mcustomscrollbar.js";
@import "core_v2-4/lib/jquery/plugins/jquery.tooltipster.js";
@import "core_v2-4/lib/jquery/plugins/jquery.ui.dialog.clickoutside.js";
@import "core_v2-4/lib/jquery/plugins/jquery.ui.tabs.paging.js";


//========================================================================================================
// POLYFILL LIBRARIES
//========================================================================================================

@import "core_v2-4/lib/polyfills/placeholder/jquery.placeholder.js"; // HTML5 placeholder polyfill for IE8+, depends on jQuery, https://github.com/matoilic/jquery.placeholder


//========================================================================================================
// MOBILE LIBRARIES
//========================================================================================================

@import "core_v2-4/lib/mobile/ios-orientationchange-fix.js"; // iOS orientation change fix for zooming, https://github.com/scottjehl/iOS-Orientationchange-Fix


//========================================================================================================
// CORE JS LIBRARIES
//========================================================================================================

@import "core_v2-4/base/base.js";
@import "core_v2-4/base/helpers.js";
@import "core_v2-4/components/advanced_filter.js";
@import "core_v2-4/components/autocomplete.js";
@import "core_v2-4/components/content_modal.js";
@import "core_v2-4/components/datepicker.js";
@import "core_v2-4/components/dialog.js";
@import "core_v2-4/components/menus.js";
@import "core_v2-4/components/scroll_pane.js";
@import "core_v2-4/components/tables.js"; // Requires FooTables jQuery component plugins to be enabled
@import "core_v2-4/components/tabs.js";
@import "core_v2-4/components/tooltip.js";