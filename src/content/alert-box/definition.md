##### General
Tables are an element meant to organize data on a page. Evolution Core tables depend on Foundation's [Tables](http://foundation.zurb.com/sites/docs/tables.html) as a starting point and extend them out to cover Evolution Design Principles.

Some general considerations when use tables:
- Use the Static Data Table when you want to organize data that the user doesn’t need to interact with.
- If the user needs to interact with the data (search, filter, take clickable actions, etc) use the [Data Table](/pattern-library/data-tables.html).

##### Basic Changes
**Column Widths** -
You can define the width of table columns using the width attribute on a table **th** and this will define the width of the cells below it in the same column.

**Cell Text Alignment**
- You can change the text alignment of a table cell td by adding `.text-left`, `.text-right`, `.text-center` or `.text-justify` to the table cell. Prevent text from wrapping within a cell by adding the class `.evo-nowrap`.
- Adding a size to the front of a text alignment class will cause it to only be applied on that size screen or larger (ex. `.medium-text-center` will center text for everything except small screens). Adding a size and only will apply the text alignment just for that media query (ex. `.medium-only-text-center` will center text just for medium screens).