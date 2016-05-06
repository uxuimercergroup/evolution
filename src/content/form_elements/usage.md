##### Sizing Forms
- You can size inputs using column sizes, like `.large-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. 

##### Inline Forms
- Put the label inside a different column to the left of the input.
- Add a class of `.float-right` to the label to have it align to the right.
- Add the `.middle` class to vertically align the label with its input.
- You can use one or both of these classes to accomplish the look you want.

##### Error Text and Abide Validation
- Put the `required` attribute on the form element that needs validation and add a `<span>` tag with a class of `.form-error` along with error help text under that form element.
- If your form elements are not contained in a `label` then you need to make sure the label's for attribute matches up with the id of the associated form element. 

##### Help Text
- Attach a class of `.help-text` to a paragraph tag and place help text under the label containing the input that needs help text
- Whenever you use help text, give the text a unique ID, and add the attribute `aria-describedby` to the input.

##### Defining a Fieldset

The `<fieldset>` is used as a wrapper for form input sections. Right after you define a fieldset, you can include a legend title by using `<legend>`. The `<fieldset>` element is not styled by default. Those styles are contained in the `.fieldset` class.

##### Inline Labels and Buttons

To attach extra text or controls to the left or right of an input field, wrap the elements in an .input-group container, then add these classes to the elements inside:

- `.input-group-field` on the text field.
- `.input-group-label` on a text label.
- `.input-group-button on a button.` **Place the button inside this wrapper.**

##### File Upload Button

Use `<input type="file">` to create a file upload button. For security reasons, most browsers don't let you style file inputs. To work around that, we can style a form label as a button, and point it to the `<input>`. To properly mask the input, the .show-for-sr class is added.

##### Checkboxes and Radio Buttons

Wrap a group of checkboxes or radio buttons in a `<fieldset>` element, and give them a common label using the `<legend>` element. Each individual control should also have its own label, created using a typical `<label>`.

##### Accessibility

Custom inputs with labels or help text need the attributes `aria-labelledby` and `aria-describedby` added to them, so screen readers know how to describe the control.
