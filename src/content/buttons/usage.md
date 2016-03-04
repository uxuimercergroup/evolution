##### Disabling Buttons
* To disable a button, add a class of `.disabled` to the `<a>` or `<button>` tag

##### Add Icons to Buttons
* Add an icon to both the left and right sides of a button by adding `data-evo-button-icons="both"` to the `<a>` or `<button>` tag. Note: the class `.evo-icon-position-left` must be added to the left icon tag and a class of `.evo-icon-position-right` mustr be added to the right icon tag.
* Add an icon to the left side of a button by adding `data-evo-button-icons="left"` to the `<a>` or `<button>` tag. Note: the class `.evo-icon-position-left` must be added to the left icon tag
* Add an icon to the right side of a button by adding `data-evo-button-icons="right"` to the `<a>` or `<button>` tag. Note: the class `.evo-icon-position-right` must be added to the right icon tag. 

##### Create Even Button Groups

Adding an `.even` class with the specified number of buttons in that group allows the button group to evenly expand to the edges of its container. You can use the even class up to `.even-8`.

##### Create a Button Bar
Wrap two or more button groups in a `<div>` with the class  `.button-bar` 

##### Stack Buttons

Change the orientation of a button group with the stack classes:
* `.stack`: Stacks buttons vertically.
* `.stack-for-small`: Stacks buttons vertically on small screens and horizontally on large screens

##### Accessibility

You can use an `aria-label="submit form"` attribute to give a screen reader the literal purpose of the button if there is no text in it. If there is no `<a href="">` then simply add the `tabindex="0"` to the `div` or `span` to make it focusable.
