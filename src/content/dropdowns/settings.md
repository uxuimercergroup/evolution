##### Data Options and Attributes

Below is a list of the data attribute options and other attributes that you can use with the Dropdowns atom.
***

**aria-autoclose**
- default_value: true
- option_value: **true, false**
- description: To disable (keep dropdowns persisting), set the attribute `aria-autoclose` to `false`.
***

**aria-label**
- default_value: --
- option_value: *Text*
- description: This will give you a value for the `aria-label` attribute, used for accessibility
***

**aria-hidden**
- default_value: --
- option_value: *Text*
- description: This will give you a value for the `aria-hidden` attribute, used for accessibility
***

**aria-expanded**
- default_value: --
- option_value: *Text*
- description: This will give you a value for the `aria-expanded` attribute, used for accessibility
***

**size**
- default_value: medium
- option_value: **tiny, small, medium, large, mega (full width)**
- description: Add one of the option values on the `class` attribute of the dropdown
***

**positioning**
- default_value: bottom
- option_value: **top, bottom, left, right**
- description: Specify the alignment using `align` property in `data-options` on the target element
***

**hover_timeout**
- default_value: 150
- option_value: *integer*
- description: Specify custom delay (in milliseconds) using `hover_timeout` in `data-options` on the target element