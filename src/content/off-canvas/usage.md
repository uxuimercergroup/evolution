##### Setup

To start, create two wrappers to house the page. These are necessary to prevent the off-canvas menus from being visible when they're not open. They also smooth out cross-browser bugs.

- The outer wrapper has the class `.off-canvas-wrapper .evo-off-canvas`.
- The inner wrapper has the class `.off-canvas-wrapper-inner` and the attribute `data-off-canvas-wrapper`.

Inside these wrapper, create an off-canvas menu with the class `.off-canvas` and the attribute `data-off-canvas`. The menu also needs a positioning class, which can be `.position-left` or `.position-right`. Lastly, make sure the off-canvas has a unique ID so it can be targeted.

Along with the menu, the main content of your page will be housed in its own container with the class `.off-canvas-content` and attribute `data-off-canvas-content`.

##### Click Triggers

To create a click trigger that opens the menu, add the attribute `data-open` or `data-toggle` to any element. That element will then open or toggle the menu when clicked on. The value of the data attribute should be the ID of the off-canvas.

##### Multiple Menus

A design can have two menus: one on the left, and one on the right. Be sure that both menus come before the `.off-canvas-content` wrapper—this is required for the CSS to apply correctly.

##### Reveal on Larger Screens

The left- and right-hand off-canvas panes can be set to be persistent on larger screens. Add the class `.reveal-for-medium` or `.reveal-for-large` to the off-canvas menu.

The main content area (`.off-canvas-content`) will be padded to the left or right equal to the width of the container.

The menu will be fixed-position by default, meaning it follows you as you scroll up and down. The menu also gets its own scroll bar if it's taller than the window. To disable these features, set the `$offcanvas-fixed-reveal` variable to `false`.

The slide in/out of the plugin still works when these classes are active. If you use this feature on a larger screen, be sure to hide any click triggers on those larger breakpoints as well. Evolution visibility classes can help you with that.