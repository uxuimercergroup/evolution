##### Sizing Forms
* You can size inputs using column sizes, like `.large-6`, `.small-6`.
* You can create row elements inside your form and use columns for the form, including inputs, labels and more. 

##### Inline Forms
*  Put the label inside a different column to the left of the input.
*  Add a class of `.right` to the label to have it align to the right.
*  Adding a class of `.inline` will have it vertically center against an input
*  You can use one or both of these classes to accomplish the look you want.
*  Add the `.middle` class to vertically align the label with its input.

##### Error Text and Abide Validation
* Put the required attribute on the form element that needs validation and add a `<small>` tag with a class of `.error` along with error help text under that form element.
* If your form elements are not contained in a label then you need to make sure the label's for attribute matches up with the id of the associated form element. 

##### Help Text
* Attach a class of `.evo-form-help-text` either to the individual elements (label, input, small) or to a column/div.
* Whenever you use help text, give the text a unique ID, and add the attribute `aria-describedby` to the input.

##### Defining a Fieldset

`<fieldset>` is used as a wrapper right inside the form element. Right after you define a fieldset, you can include a legend title by using `<legend>`. The <fieldset> element is not styled by default. Those styles are contained in the `.fieldset` class.

##### Pre/Postfix Labels & Actions

* Use `<div class="row collapse">` to create label/action/input combinations. * You use columns to define the size of the pre/postfix `<span class="postfix">` or `<span class="prefix">`.
* You can also give a button/input pair a radius or a rounded edge by adding the classes `prefix-radius`, `postfix-radius`, `prefix-round` or `postfix-round` to the row that contains the elements. For example, `<div class="row collapse postfix-round">` will add a rounded edge to the left side of the input field, and to the right side of the button, creating a cohesive rounded input. You can even include buttons with these styles, just apply the `.button` as well as the pre/postfix class.


##### Disable Spin Buttons in Number Inputs

In most desktop browsers, `<input type="number">` elements will have up/down controls inside them, which increment and decrement the number inside the field. These are called *spin buttons*. You can disable them by setting the `$input-number-spinners` Sass variable to `false`.

##### Checkboxes and Radio Buttons

Wrap a group of checkboxes or radio buttons in a `<fieldset>` element, and give them a common label using the `<legend>` element. Each individual control should also have its own label, created using a typical `<label>`.

##### Accessibility

Custom inputs with labels or help text need the attributes `aria-labelledby` and `aria-describedby` added to them, so screen readers know how to describe the control.
