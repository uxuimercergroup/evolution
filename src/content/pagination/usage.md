##### General

A pagination list is just a `<ul>` with the class `.pagination`, and a series of `<li>`/`<a>` pairs. Add the class `.current` to an `<li>` to mark the current page, or `.disabled` to add disabled styles to a link.

Note that the container has the attributes `role="navigation"` and `aria-label="Pagination"`. These explain the purpose of the component to assistive technologies.

Extra screen reader-only text should also be added to a pagination element. In the below example, users reading the page will just see "Next" and "Previous", but screen readers will read it as "Next page" and "Previous page". Additionally, the text for the current page will read as "You're on page one".

##### Centered
The items in a pagination list are `display: inline-block`, which makes centering them easy. Use our built-in `.text-center` class, or add `text-align: center` in your CSS.