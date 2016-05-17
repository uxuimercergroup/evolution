##### Data Options and Attributes

Below is a list of the data attribute options and other attributes that you can use with the Off-Canvas.
***

**data-close-on-click**
- default_value: true
- option_value: *true/false*
- description: Allow the user to click outside of the menu to close it.
***

**data-transition-time**
- default_value: 500
- option_value: --
- description: Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
***

**data-position**
- default_value: left
- option_value: **left, right**
- description: Direction the offcanvas opens from. Determines class applied to body.
***

**data-force-top**
- default_value: true
- option_value: *true/false*
- description: Force the page to scroll to top on open.
***

**data-is-revealed**
- default_value: false
- option_value: *true/false*
- description: Allow the offcanvas to remain open for certain breakpoints.
***

**data-reveal-on**
- default_value: reveal-for-large
- option_value: --
- description: Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the 
`revealClass` option.
***

**data-auto-focus**
- default_value: true
- option_value: *true/false*
- description: Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
***

**data-reveal-class**
- default_value: reveal-for-large
- option_value: **`reveal-for-large` `reveal-for-medium`**
- description: Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
***

**data-trap-focus**
- default_value: true
- option_value: *true/false*
- description: Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
