module.exports = {

  // Concatenate script files
  options: {
    separator: '\n\n'
  },
  core: {
    options: {
      banner:
        '/*!\n' +
        '* Mercer Evolution v<%= package.version %> - Core JS\n' +
        '* DATE: <%= package.date %>\n' +
        '* AUTHOR: <%= package.author %>\n' +
        '* URL: <%= package.homepage %>\n' +
        '*/\n\n'
    },
    files: {
      'dist/assets/js/evolution.js': [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/what-input/what-input.js',
        'node_modules/foundation-sites/js/foundation.core.js',
        'node_modules/foundation-sites/js/foundation.util.mediaQuery.js',
        'node_modules/foundation-sites/js/foundation.abide.js',
        'node_modules/foundation-sites/js/foundation.accordion.js',
        'node_modules/foundation-sites/js/foundation.accordionMenu.js',
        'node_modules/foundation-sites/js/foundation.drilldown.js',
        'node_modules/foundation-sites/js/foundation.dropdown.js',
        'node_modules/foundation-sites/js/foundation.dropdownMenu.js',
        'node_modules/foundation-sites/js/foundation.equalizer.js',
        'node_modules/foundation-sites/js/foundation.interchange.js',
        'node_modules/foundation-sites/js/foundation.magellan.js',
        'node_modules/foundation-sites/js/foundation.offcanvas.js',
        'node_modules/foundation-sites/js/foundation.orbit.js',
        'node_modules/foundation-sites/js/foundation.responsiveMenu.js',
        'node_modules/foundation-sites/js/foundation.responsiveToggle.js',
        'node_modules/foundation-sites/js/foundation.reveal.js',
        'node_modules/foundation-sites/js/foundation.slider.js',
        'node_modules/foundation-sites/js/foundation.sticky.js',
        'node_modules/foundation-sites/js/foundation.tabs.js',
        'node_modules/foundation-sites/js/foundation.toggler.js',
        'node_modules/foundation-sites/js/foundation.tooltip.js',
        'node_modules/foundation-sites/js/foundation.util.box.js',
        'node_modules/foundation-sites/js/foundation.util.keyboard.js',
        'node_modules/foundation-sites/js/foundation.util.motion.js',
        'node_modules/foundation-sites/js/foundation.util.nest.js',
        'node_modules/foundation-sites/js/foundation.util.timerAndImageLoader.js',
        'node_modules/foundation-sites/js/foundation.util.touch.js',
        'node_modules/foundation-sites/js/foundation.util.triggers.js',
        'bower_components/jquery-ui/ui/core.js',
        'bower_components/jquery-ui/ui/widget.js',
        'bower_components/jquery-ui/ui/mouse.js',
        'bower_components/jquery-ui/ui/position.js',
        'bower_components/jquery-ui/ui/autocomplete.js',
        'bower_components/jquery-ui/ui/datepicker.js',
        'bower_components/jquery-ui/ui/menu.js',
        'bower_components/jquery-ui/ui/slider.js',
        'node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.js',
        'node_modules/datatables.net/js/jquery.dataTables.js',
        'node_modules/datatables.net-zf/js/dataTables.foundation.js',
        'src/assets/js/core/lib/jquery/plugins/jquery.autosize.input.js',
        'src/assets/js/core/lib/jquery/plugins/jquery.maskedinput.js',
        'src/assets/js/core/lib/jquery/plugins/owl.carousel.js',
        'src/assets/js/core/lib/mobile/ios-orientationchange-fix.js',
        'src/assets/js/core/atoms/buttons.js',
        'src/assets/js/core/atoms/helpers.js',
        'src/assets/js/core/molecules/autocomplete.js',
        'src/assets/js/core/molecules/carousel.js',
        'src/assets/js/core/molecules/data_table.js',
        'src/assets/js/core/molecules/datepicker.js',
        'src/assets/js/core/molecules/slider.js',
        'src/assets/js/core/molecules/top_bar.js'
      ]
    }
  },
  animation: {
    options: {
      banner:
        '/*!\n' +
        '* Mercer Evolution v<%= package.version %> - Animation JS\n' +
        '* DATE: <%= package.date %>\n' +
        '* AUTHOR: <%= package.author %>\n' +
        '* URL: <%= package.homepage %>\n' +
        '*/\n\n'
    },
    files: {
      'dist/assets/js/evolution-animations.js': [
        'bower_components/AniJS/dist/anijs.js',
        'bower_components/AniJS/dist/helpers/dom/anijs-helper-dom.js',
        'bower_components/AniJS/dist/helpers/scrollreveal/anijs-helper-scrollreveal.js',
        'bower_components/AniJS/dist/event_systems/jquery/anijs-jquery-event-system.js'
      ]
    }
  },
  site: {
    files: {
      'dist/assets/js/app.js': [
        'node_modules/clipboard/dist/clipboard.js',
        'src/assets/js/app/lib/prism/prism.js',
        'src/assets/js/app.js',
        'src/patterns/organisms/**/*.js'
      ]
    }
  }

};