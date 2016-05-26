##### Dropdown Sizes

The dropdown has a default width of 300px. 

The size of the dropdown can be changed by adding the following classes:
- `tiny`: Make the dropdown have a max-width of 100px 
- `small`: Make the dropdown have a max-width of 200px
- `large`: Make the dropdown have a max-width of 400px 

##### Dropdown Positioning

By default, a dropdown anchors below the button that opened it. Add the class `.top`, `.right`, or `.bottom` to the dropdown to change this.

##### Dropdown Hover

To make a dropdown accessible by hover, add `data-hover="true"` `data-hover-pane="true"` to the target element. The optional setting `data-hover-delay` allows you to set a time (in milliseconds) that will set your own custom delay to the element. The default setting is 150ms.

##### Autoclose

The autoclose option is enabled by default and allows the dropdown to close automatically when a link is clicked within the dropdown. To disable (keep dropdowns persisting), set the attribute `data-close-on-click` to `false`.