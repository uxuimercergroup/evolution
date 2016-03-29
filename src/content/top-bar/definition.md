##### General
The top bar is a pretty complex piece of magical UI goodness. We rely on many presentational classes to define its look and feel, and there's a lot happening in the JS. The top bar is hoverable by default, but you can change it to use click events instead by adding `data-options="is_hover: false"` to the `nav` element. If you have a hoverable topbar, it will close itself on click by default, but this behavior can be prevented by setting `data-options="dropdown_autoclose: false"`.

##### Content Zones
The top bar has two "content" zones after the main title area. These are the **top bar right nav section** and the **top bar left nav section**. The top bar list items can live in both zones.

##### Active Navigation
To show active navigation in both the top bar and dropdown menus of the top bar use the class of `.active` on the active list item.

##### Dropdown Menus
Add the class of `.has-dropdown` to top bar list items that need dropdown menus. Then add a `ul` list (and list item options) with class of `.dropdown` after the top bar item link that has the dropdown menu.

If the list item with a menu is only an icon, it will not get a menu down icon next to it. If the list item with a menu is text, it will get a menu down icon next to it.

You can create multi-tiered dropdown menu navigation by putting dropdown menu lists inside other dropdown menu lists. See code below for an example.

<div class="evo-site-annotations">
<p>**Important Note:** Make sure to remove the href attribute from links that open dropdown menus. For example: `<a>Library</a>` in the code below. The href attribute messes up the Foundation dropdown menu functionality.</p>
</div>