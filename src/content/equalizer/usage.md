##### General
- Apply the `data-equalizer` attribute to a parent container.
- Then apply the `data-equalizer-watch` attribute to each element you'd like to have an equal height.
- The height of `data-equalizer-watch` attribute will be equal to that of the tallest element

##### Responsive Equalizer

You can specify media queries for which equalizer should activate on. 
- Apply the `data-equalize-on` attribute to the parent container. Set the value of the attribute to the media queries available: `small`, `medium`, `large`.
- Enable height equalization when stacked on smaller screens using `data-equalize-on-stack="true"`.

##### Nested Elements

- To use one Equalizer inside another, each container needs a unique ID, assigned with the `data-equalizer` attribute. Each `data-equalizer-watch` element should then have a value that matches its parent.

##### Equalize By Row
- Add `data-equalize-by-row="true"` to the parent container
- Equalizer splits the `data-equalizer-watch` elements into groups by checking their vertical offsets, and grouping ones with the same offset into a "row".
- Be aware on what you set `data-equalizer-watch`, if the top position is different, Equalizer will interpret that as a new "row" and equalize accordingly.