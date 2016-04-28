##### Positioning
The top bar is built with a single `nav` element with a class of `top-bar`. It will take on full-browser width by default. To make the top bar stay fixed as you scroll, wrap it in `div class="fixed"`. If you want your navigation to be set to your grid width, wrap it in `div class="contain-to-grid"`.

<div class="evo-site-annotations">
<p>**Note:** You may use fixed and contain-to-grid together in the same wrapping div: `div class="contain-to-grid fixed"`.</p>
</div>

##### Sticky Bar
You may also wrap your top bar in `div class="sticky"` and put it anywhere within your markup. When the navigation hits the top of the browser, it will act like the fixed top bar and stick to the top as users continue to scroll.

You can also add `sticky_on` to your `data-options` attribute to allow your sticky bar to work on `small`, `medium`, or `large` when the page loads. This works in conjunction with the sticky class wrapper to target sticky for small, medium, or large. It will be sticky on all screen sizes by default.

Additionally, you can pass in an array to specify sticky on multiple sizes. For example, `data-options="sticky_on: [small,large]"` will be sticky on small and large, but NOT medium.

##### Clickable Top Bar
You can now make the top bar clickable by adding the data-attribute `data-options="is_hover: false"` to the `nav` element.

##### Built-in Components
###### Dividers
Separate your top bar items and dropdown menu items with dividers.

###### Labels
Separate sections of your dropdown menus with labels.

##### Remove The Title
If you want a bar that doesn't include a title, just take out the content within the list item `class="name"`.

##### Mega Menu
###### Hover
When using the hover version of the Top Bar Mega Menu make sure to set the `data-options="is_hover: true"` on the Top Bar `nav` element itself.

###### Click
When using the click version of the Top Bar Mega Menu make sure to set the `data-options="is_hover: false"` on the Top Bar `nav` element itself.

##### Content Layout Options
###### Contain To Grid
Use `.row` to contain the content inside the Mega Menu to the grid max-width and center it inside the Mega Menu.

###### Full Width
Use `.row .expanded` to expand the content inside the Mega Menu to 100% of the width of Mega Menu.


##### Accessibility
The top bar is fully keyboard and screen reader accessible. However, if your page uses top bar and off-canvas navigation, add the attribute `aria-hidden="true"` to one of them to ensure the user's device will not tab through (and possibly read) both of them before reaching any content.