##### General

A progress bar has two elements: the container `.progress .evo-progress`, and the meter `.progress-meter`. The `role` and `aria-` attributes in the code example clarify the status of the bar:

- `aria-valuemin`: Minimum value.
- `aria-valuemax`: Maximum value.
- `aria-valuenow`: Current value.

If the value of the progress bar is not numeric, also add the attribute `aria-valuetext`, which should include a human-readable version of the bar's value.


Add a `width` CSS property to the inner meter to fill the progress bar.

##### With Text

You can add text inside the meter of a progress bar. Make sure the text you use in the meter is also used in the `aria-valuetext` attribute.