##### General

Forms are built with a combination of standard form elements, as well as the Grid (rows and columns).

Form elements are styled based on their type attribute rather than a class, and can be sized in a couple of ways:
* You can size inputs using column sizes, like `.large-6`, `.small-6`.
* You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

##### Stacked Forms

Stacked Forms are best used when a high level of end-user configurability is necessary. In cases like this, we have less control over the specific placement of all fields, so the flexibility of spacing is important.

The Stacked Form is flexible because it allows you to configure optional elements:
* Hiding/displaying Fields
* Changing the values of Field Labels
* Localization/translation of Field Labels

The Stacked Form works well when you want the user to read a Label and take an action directly underneath. However, for aesthetic purposes, it might be a good idea to use one of the other types of Forms if its contents are on the long side.

##### Inline Forms

The Inline Form displays the Field Labels and the associated Form Fields on the same line with one another. An Inline Form is best used when the system has more control over the specific layout of the page (when end-user configurability is less important).

It is also a good solution in cases when there are numerous fields, and a *smaller amount of screen real estate* is available.

You can put the label inside a different column to the left of the input. Then add a class of `.right` to the label to have it align to the right. Adding a class of `.inline` will have it vertically center against an input. You can use one or both of these classes to accomplish the look you want.

When using an Inline Form, the preference is to use the Right Aligned version, as this creates a tighter association between the Field Label and the Form Field. The Left Aligned form is availble to be used, but the excess white space between the Form Label and the Form Field creates issues with readability

##### Error Text and Abide Validation
Abide Validation appears whenever the user makes a mistake on a form element, like failing to fill out a required input field. Abide Validation pinpoints where exactly on the form the error or errors occurred. Put the required attribute on the form element that needs validation and add a `<small>` tag with a class of `.error` along with error help text under that form element. If your form elements are not contained in a label then you need to make sure the label's for attribute matches up with the id of the associated form element. 

##### Help Text

Error text for labels, inputs and messaging enable your app to generate programatically. You can attach a class of `.evo-form-help-text` either to the individual elements (label, input, small) or to a column/div.

##### Defining a Fieldset

`<fieldset>` is used as a wrapper right inside the form element. Right after you define a fieldset, you can include a legend title by using `<legend>`. 

##### Pre/Postfix Labels & Actions

Forms support actions tied to buttons, and prefix/postfix labels, through a versatile approach using special grid properties. Essentially you can use `<div class="row collapse">` to create label/action/input combinations. You use the Foundation columns to define the size of the pre/postfix `<span class="postfix">` or `<span class="prefix">`.

You can also give a button/input pair a radius or a rounded edge by adding the classes `prefix-radius`, `postfix-radius`, `prefix-round` or `postfix-round` to the row that contains the elements. For example, `<div class="row collapse postfix-round">` will add a rounded edge to the left side of the input field, and to the right side of the button, creating a cohesive rounded input. You can even include buttons with these styles, just apply the `.button` as well as the pre/postfix class.
