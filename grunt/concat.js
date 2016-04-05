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
      'dist/assets/scripts/evolution.js': [
        'node_modules/jquery/dist/jquery.js',
        'src/assets/scripts/core/foundation/foundation/foundation.js',
        'src/assets/scripts/core/foundation/foundation/foundation.alert.js',
        'src/assets/scripts/core/foundation/foundation/foundation.accordion.js',
        'src/assets/scripts/core/foundation/foundation/foundation.abide.js',
        'src/assets/scripts/core/foundation/foundation/foundation.dropdown.js',
        'src/assets/scripts/core/foundation/foundation/foundation.equalizer.js',
        'src/assets/scripts/core/foundation/foundation/foundation.magellan.js',
        'src/assets/scripts/core/foundation/foundation/foundation.offcanvas.js',
        'src/assets/scripts/core/foundation/foundation/foundation.reveal.js',
        'src/assets/scripts/core/foundation/foundation/foundation.tab.js',
        'src/assets/scripts/core/foundation/foundation/foundation.tooltip.js',
        'src/assets/scripts/core/foundation/foundation/foundation.topbar.js',
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
        'src/assets/scripts/core/lib/jquery/plugins/jquery.autosize.input.js',
        'src/assets/scripts/core/lib/jquery/plugins/jquery.maskedinput.js',
        'src/assets/scripts/core/lib/jquery/plugins/owl.carousel.js',
        'bower_components/AniJS/dist/anijs.js',
        'bower_components/AniJS/dist/helpers/dom/anijs-helper-dom.js',
        'bower_components/AniJS/dist/helpers/scrollreveal/anijs-helper-scrollreveal.js',
        'bower_components/AniJS/dist/event_systems/jquery/anijs-jquery-event-system.js',
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
        'node_modules/clipboard/dist/clipboard.js',
        'src/assets/scripts/site.js',
        'src/patterns/organisms/**/*.js'
      ]
    }
  }

};