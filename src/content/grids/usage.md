##### Basic
Start by adding an element with a class of row. This will create a horizontal block to contain vertical columns. Then add divs with a columns class within that row. Specify the widths of each column with the `small-#`, `medium-#`, and `large-#` classes. Code for small screens first, and larger devices will inherit those styles. Customize for larger screens as necessary.

The collapse class lets you remove column gutters (padding). There are times that your needs to collapse may not be the same across devices so you can use the `small-collapse`, `medium-collapse` and `large-collapse` classes.

##### Offsets
Move blocks up to 11 columns to the right by using classes like `.large-offset-1` and `.small-offset-3`.

##### Centering
Center your columns by adding a class of `small-centered` to your column. Large will inherit small centering by default, but you can also center solely on large by applying a `large-centered` class. To uncenter on large screens use `large-uncentered`.

##### Source Ordering
Source ordering allows you to shift columns of content around between breakpoints (devices). Prefix `push/pull` with the class name that matches to the breakpoint you are dealing with. Here are some examples: `medium-push-#`, `large-push-#` is the syntax you'll use.

##### Block Grid
Add a class of the format `[size]-up-[n]` to change the size of all columns within the row. By default, the max number of columns you can use with block grid are 12. For example: `medium-up-2`.