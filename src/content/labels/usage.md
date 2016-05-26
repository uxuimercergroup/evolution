##### General

Add the `.label .evo-label` classes to an element to create a label.

##### Accessibility

A label will typically be describing another element on the page. To bind the two elements together, give the label a unique ID, and reference that ID in an `aria-describedby` attribute on the main element.

If an element is described by multiple labels, place multiple IDs inside of `aria-describedby`.