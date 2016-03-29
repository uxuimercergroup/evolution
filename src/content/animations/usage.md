##### Overview

Animations in Evolution depend on a JavaScript library called [AniJS](http://anijs.github.io/). Refer to the [AniJS wiki](https://github.com/anijs/anijs/wiki) for the complete API documentation.

The collection of animation types relies on the [Animate.css](https://github.com/daneden/animate.css) CSS animations library.


##### Formal Language Definition

* data-anijs  -> Sentence 1; ... ; Sentence n
* Sentence    -> Definition, ... , Definition n
* Definition  -> if | on | do | to | before | after | helper


##### Getting Started with AniJS CSS Animations

To trigger an animation with an event, an AniJS sentence must be added to the element using the `data-anijs` data-option. The basic AniJS sentence structure looks like this:

**If** *some event(click, scroll, etc)* , **On** *any element (css selector)* , **Do** *some behavior(animation, $addClass, $remove, etc)* , **To** *(any element)*.

Example:

`<div class="button" data-anijs="if: click, do: $toggleClass red, to: .box">Click me</div>`

Every time the user clicks on the element with this sentence written, the "red" class will be toggled in the elements with the "box" class established.

Example using the "On" part of the sentence:

`<div class="button" data-anijs="if: scroll, on: window, do: $toggleClass red, to: .box">Click me</div>`

Example using animation:

`<div class="button" data-anijs="if: click, do: bounce animated, to: .box">Click me</div>`

In this example, every time the user clicks the element, the `bounce` animation will be applied to any elements with class of "box".

<div class="evo-site-annotations">
	<p>**Important:** Make sure to always use the `animated` class name along with the animation type class name (for example: bounce animated). Animations require that the `animated` class exists to work properly.</p>
</div>


##### Multiple Animations

A `data-anijs` is composed by one or many sentences, each sentence ends with (;) and is formed by one or many definitions. Example:

```
<header data-anijs="if: click, do: wobble animated; if: scroll, on: window, do: swing animated">
<!-- ... -->
</header>
```


##### Detect When Animation Ends

Include the option `animationend` on the `if:` part of the AniJS sentence to detect for the end of animations `on:` another element and then run another animation. Example:

Example:

```
<header data-anijs="if: click, do: hinge animated">
 <!-- ... -->
</header>
<footer data-anijs="if: animationend, on: header, do: bounceIn animated">
<!-- ... -->
</footer>
```

##### Infinite Loop
Include the option `infinite` for an infinite animation loop. Example:

`<div class="button" data-anijs="if: click, do: bounce animated infinite, to: .box">Click me</div>`

##### Animation Only Once
Include `after: removeAnim` to prevent the animation from occuring more than once and to remove the animation classes from the element getting the animation. Example:

`<div class="button" data-anijs="if: click, do: flip animated, after: removeAnim">Click me</div>`

Include `after: $fireOnce` to prevent the animation from occuring more than once and to remove the event that triggers the animation but keep the animation classes on the element getting the animation. Example:

`<div class="button" data-anijs="if: click, do: flip animated, after: $fireOnce">Click me</div>`

##### Animation Helpers
AniJS includes animation helper classes to alter the default animation types. These helpers can change animation duration, delay, iteration, etc. Please refer to the animations settings tab for the list of animation helpers that are available.

You can also use style sheets to further customize your animations. You can change the animation duration, add a delay or change the number of times that it plays:

```
#yourElement {
	-vendor-animation-duration: 3s;
	-vendor-animation-delay: 2s;
	-vendor-animation-iteration-count: infinite;
}
```

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, ms, etc).*

##### Using jQuery with Animation Classes
Dynamically add animations using jQuery, ex. `$('#yourElement').addClass('bounceOutLeft animated');`