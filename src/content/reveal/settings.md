##### Data Options and Attributes

Below is a list of the data attribute options and other attributes that you can use with the Reveal molecule.
***

**data-animation-in**
- Default Value: slide-in-left
- Option Value: --
- Description: Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
***

**data-animation-out**
- Default Value: slide-out-right
- Option Value: --
- Description: Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
***

**data-show-delay**
- Default Value: 10
- Option Value: --
- Description: Time, in ms, to delay the opening of a modal after a click if no animation used.
***

**data-hide-delay**
- Default Value: 10
- Option Value: --
- Description: Time, in ms, to delay the closing of a modal after a click if no animation used.
***

**data-close-on-click**
- Default Value: true
- Option Value: **true, false**
- Description: Allows a click on the body/overlay to close the modal.
***

**data-close-on-esc**
- Default Value: true
- Option Value: **true, false**
- Description: Allows the modal to close if the user presses the `ESCAPE` key.
***

**data-multiple-opened**
- Default Value: false
- Option Value: **true, false**
- Description: If true, allows multiple modals to be displayed at once.
***

**data-v-offset**
- Default Value: auto
- Option Value: --
- Description: Distance, in pixels, the modal should push down from the top of the screen.
***

**data-h-offset**
- Default Value: auto
- Option Value: --
- Description: Distance, in pixels, the modal should push in from the side of the screen.
***

**data-full-screen**
- Default Value: false
- Option Value: **true, false**
- Description: Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
***

**data-btm-offset-pct**
- Default Value: 10
- Option Value: --
- Description: Percentage of screen height the modal should push up from the bottom of the view.
***

**data-overlay**
- Default Value: true
- Option Value: **true, false**
- Description: Allows the modal to generate an overlay div, which will cover the view when modal opens.
***

**data-reset-on-close**
- Default Value: false
- Option Value: **true, false**
- Description: Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
***

**data-deep-link**
- Default Value: false
- Option Value: **true, false**
- Description: Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.