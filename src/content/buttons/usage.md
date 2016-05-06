##### Hollow Buttons

Add the `.hollow` class to a button to give it a hollow style.

##### Disabled Buttons
To disable a button, add a class of `.disabled` to an `<a>` button and a `disabled` attribute to a `<button>` tag.

Note: The `.disabled` class is a purely visual style, and won't actually disable a control. For `<button>` elements, you can add the `disabled` attribute to disable it. If you want to disable a link, you should add the `aria-disabled` attribute to mark it as disabled for assistive technology.

##### Add Icons to Buttons
Add an icon to both the left and right sides of a button by adding `data-evo-button-icons="both"` to the `<a>` or `<button>` tag. Note: the class `.evo-icon-position-left` must be added to the left icon tag and a class of `.evo-icon-position-right` must be added to the right icon tag.

Add an icon to the left side of a button by adding `data-evo-button-icons="left"` to the `<a>` or `<button>` tag. Note: the class `.evo-icon-position-left` must be added to the left icon tag

Add an icon to the right side of a button by adding `data-evo-button-icons="right"` to the `<a>` or `<button>` tag. Note: the class `.evo-icon-position-right` must be added to the right icon tag.

##### Button Groups

Add the `.button-group .evo-button-group` class to a container, and inside it place any number of buttons. The buttons are separated by a small border.

Button groups can be sized with the same classes as standard buttons: `.tiny,` `.small`, and `.large`.

##### Even Button Groups

Add the `.expanded` class to the `.button-group .evo-button-group` container to make a full-width button group. Each item will automatically size itself based on how many buttons there are, up to a maximum of eight.

##### Stacked Button Groups

A button group can be made vertical with the `.stacked` class. You can also use `.stacked-for-small` to only stack a button group on small screens, or `.stacked-for-medium` to only stack on small and medium screens.

##### Accessibility

Make sure that the text of the button is descriptive. If for some reason, your button contains no readable text (for example, just a symbol or icon), add screen reader-only text to the button to clarify it's purpose. The symbol or icon should be wrapped in an element with the attribute `aria-hidden="true"`, to prevent screen readers from trying to pronounce the symbol.

Use the `.show-for-sr` class to define screen reader-only text.

You can also use an `aria-label` attribute to give a screen reader the literal purpose of the button if there is no text in it. If there is no `<a href="">` then simply add the `tabindex="0"` to the `div` or `span` to make it focusable.