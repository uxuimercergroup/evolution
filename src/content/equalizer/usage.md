##### General
* Apply the `data-equalizer` attribute to a parent container.
* Then apply the `data-equalizer-watch` attribute to each element you'd like to have an equal height.
* The height of `data-equalizer-watch` attribute will be equal to that of the tallest element

##### Responsive Equalizer

You can specify media queries for which equalizer should activate on. 
* Apply the `data-equalizer-mq` attribute to the parent container. 
* Set the value of the attribute to the same media queries you are use to using. 
* If you use an unknown media query, Equalizer will ignore the media query request. This is particularly useful if you have set `equalize_on_stack` to `true`.

##### Nested Elements

You can also nest "equalized" elements in other Equalizer elements. 
* Apply the  `data-equalizer` attribute to a parent container and assign a unique name to it. 
* Then apply the `data-equalizer-watch` attribute to each nested element with the corresponding name. 
* The height of `data-equalizer-watch` attribute will be equal to that of the tallest element.

##### Equalize By Row
* Add `data-equalize-by-row="true"` to the parent container
* Equalizer splits the data-equalizer-watch elements into groups by checking their vertical offsets, and grouping ones with the same offset into a "row".
* Be aware on what you set `data-equalizer-watch`, if the top position is different, Equalizer will interpret that as a new "row" and equalize accordingly.
