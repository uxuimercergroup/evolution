module.exports = {

  // Concatenate script files
  options: {
    separator: '\n\n'
  },
  core: {
    options: {
      banner:
        '/*!\n' +
        '* Mercer Evolution v<%= package.evolution.version %> - Core JS\n' +
        '* DATE: <%= package.evolution.date %>\n' +
        '* AUTHOR: <%= package.evolution.author %>\n' +
        '* URL: <%= package.evolution.url %>\n' +
        '*/\n\n'
    },
    files: {
      'dist/assets/scripts/evolution.js': [
        'src/assets/scripts/core/foundation/vendor/jquery.js',
        'src/assets/scripts/core/foundation/vendor/jquery.cookie.js',
        'src/assets/scripts/core/foundation/vendor/placeholder.js',
        'src/assets/scripts/core/foundation/vendor/fastclick.js',
        'src/assets/scripts/core/foundation/foundation/foundation.js',
        'src/assets/scripts/core/foundation/foundation/foundation.alert.js',
        'src/assets/scripts/core/foundation/foundation/foundation.accordion.js',
        'src/assets/scripts/core/foundation/foundation/foundation.abide.js',
        'src/assets/scripts/core/foundation/foundation/foundation.dropdown.js',
        'src/assets/scripts/core/foundation/foundation/foundation.equalizer.js',
        'src/assets/scripts/core/foundation/foundation/foundation.offcanvas.js',
        'src/assets/scripts/core/foundation/foundation/foundation.reveal.js',
        'src/assets/scripts/core/foundation/foundation/foundation.tab.js',
        'src/assets/scripts/core/foundation/foundation/foundation.tooltip.js',
        'src/assets/scripts/core/foundation/foundation/foundation.topbar.js',
        'src/assets/scripts/core/lib/jquery/jquery-ui.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.ui.touch-punch.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.dataTables.js',
        'src/assets/scripts/core/lib/jquery/plugins/datatables.foundation.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.autosize.input.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.maskedinput.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.mousewheel.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.mCustomScrollbar.js',
        'src/assets/scripts/core/lib/jquery/plugins/owl.carousel.js',
        'src/assets/scripts/core/lib/mobile/ios-orientationchange-fix.js',
        'src/assets/scripts/core/atoms/abide.js',
        'src/assets/scripts/core/atoms/base.js',
        'src/assets/scripts/core/atoms/dropdowns.js',
        'src/assets/scripts/core/atoms/equalizer.js',
        'src/assets/scripts/core/atoms/helpers.js',
        'src/assets/scripts/core/molecules/accordion.js',
        'src/assets/scripts/core/molecules/autocomplete.js',
        'src/assets/scripts/core/molecules/carousel.js',
        'src/assets/scripts/core/molecules/data_table.js',
        'src/assets/scripts/core/molecules/datepicker.js',
        'src/assets/scripts/core/molecules/off_canvas.js',
        'src/assets/scripts/core/molecules/reveal.js',
        'src/assets/scripts/core/molecules/scroll_pane.js',
        'src/assets/scripts/core/molecules/slider.js',
        'src/assets/scripts/core/molecules/tabs.js',
        'src/assets/scripts/core/molecules/tooltip.js',
        'src/assets/scripts/core/molecules/top_bar.js'
      ]
    }
  },
  site: {
    files: {
      'dist/assets/scripts/site.js': [
        'src/assets/scripts/site.js',
        'src/patterns/organisms/**/*.js'
      ]
    }
  }

};