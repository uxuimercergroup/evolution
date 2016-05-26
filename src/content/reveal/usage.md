##### General

A modal is just an empty container, so you can put any kind of content inside it, from text to forms to video to an entire grid.

To create a modal, add the class `.reveal .evo-reveal`, the attribute `data-reveal`, and a unique ID to a container.

You'll also need a way to open the modal. Add the attribute `data-open` to any element. The value of `data-open` should be the ID of the modal.

You'll also need a way to close the modal from inside. By default, modals will close if clicked outside of, or if the `esc` key is pressed. However, you'll generally also want to add your own click trigger. Add the attribute `data-close` to any element within the modal to add one.

You can use the close button to do this.

##### Sizing

On small screens, a modal is always 100% of the width of the screen. On medium-sized screens and larger, the width changes to 80%.

The size of a modal can be changed with these sizing classes, which are added to the modal container:

- `.tiny`: 30% wide
- `.small`: 50% wide
- `.large`: 90% wide
- `.full`: 100% width and height, defaults the `escClose` option to true, as well as creates a close button.

##### Full-screen

A full-screen modal is 100% of the width and height of the window. Add the `.full` class to make it go.

##### No Overlay

To remove the overlay, add the attribute `data-overlay="false"` to the modal.