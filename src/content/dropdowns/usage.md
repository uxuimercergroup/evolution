##### Dropdown Sizes

The size of the dropdown can be changed by adding the following classes:
* `tiny`: Make the dropdown have a max-width of 200px 
* `small`: Make the dropdown have a max-width of 300px 
* `medium`: Make the dropdown have a max-width of 500px 
* `large`: Make the dropdown have a max-width of 800px 
* `mega`: Make the dropdown go full 100% width 

##### Dropdown Positioning

Dropdowns may be positioned on the top, bottom, left, or right of the target element.The default position is bottom and you do not need to change anything to get your tooltip positioned bottom. To set other alignments, just specify the align property in `data-options="align:top"` on the target element.

When the dropdown does not fit in the container, it will automatically be changed to `align: bottom`. If this is not the desired behavior, you can override this by specifying the `ignore_repositioning` property in the `data-options`.

##### Dropdown Hover

To make a dropdown accessible by hover, add `data-options="is_hover:true; hover_timeout:1200"` to the target element. The optional setting `hover_timeout` allows you to set a time (in milliseconds) that will set your own custom delay to the element. The default setting for `hover_timeout` is 150ms.

##### Autoclose

The autoclose option is enabled by default and allows the dropdown to close automatically when a link is clicked within the dropdown. To disable (keep dropdowns persisting), set the attribute `aria-autoclose` to `false`.

##### Accessibility
* Include `aria-hidden="true"` on the `<ul>` tag to indicate that the list is hidden in a dropdown
* Include `aria-expanded="false"` on the wrapper tag to indicate that the dropdown is collapsed
* Include `aria-controls="dropdownID"` confirms that which button controls the input.
