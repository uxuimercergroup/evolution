##### General
- Forms are built with a combination of standard form elements, as well as the Grid (rows and columns).

##### Stacked Forms

Stacked Forms are best used when a high level of end-user configurability is necessary. In cases like this, we have less control over the specific placement of all fields, so the flexibility of spacing is important.

The Stacked Form is flexible because it allows you to configure optional elements:
- Hiding/displaying Fields
- Changing the values of Field Labels
- Localization/translation of Field Labels

The Stacked Form works well when you want the user to read a Label and take an action directly underneath. However, for aesthetic purposes, it might be a good idea to use one of the other types of Forms if its contents are on the long side.

##### Inline Forms

The Inline Form displays the Field Labels and the associated Form Fields on the same line with one another. An Inline Form is best used when the system has more control over the specific layout of the page (when end-user configurability is less important).

It is also a good solution in cases when there are numerous fields, and a smaller amount of screen real estate is available.

##### Error Text and Abide Validation
Abide Validation appears whenever the user makes a mistake on a form element, like failing to fill out a required input field. Abide Validation pinpoints where exactly on the form the error or errors occurred. 

##### Help Text
- Place help text below a field to clarify it's purpose. Whenever you use help text, give the text a unique ID, and add the attribute aria-describedby to the input.

##### Text Inputs

These input types create a text field: text, date, datetime, datetime-local, email, month, number, password, search, tel, time, url, and week.

##### Number Inputs

In most desktop browsers, `<input type="number">` elements will have up/down controls inside them, which increment and decrement the number inside the field. These are called spin buttons. 

##### Text Areas

The `<textarea>` element creates a multi-line text input.

##### Select Menus

Use select menus to combine many choices into one menu.

##### Checkboxes and Radio Buttons

Use groups of checkboxes when the user may select multiple choices from a list, and use radio buttons when the user must select just one choice.







