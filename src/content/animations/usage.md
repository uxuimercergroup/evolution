##### Getting Started with AniJS CSS Animations

To trigger an animation with an event, an anjijs sentence must be added to the element using the `data-anijs` data-option. The basic anijs sentence structure looks like this:

If *some event(click, scroll, etc)* , On *any element (css selector)* , Do *some behavior(animation, $addClass, $remove, etc)* , To *(any element)*.

Example:
`<div data-anijs="if: click, do: $toggleClass red, to: .box">If you click me, </div>`

Every time the user clicks on the element with this sentence written, the red color will be switched in the elements with the "box" class established.

##### Using jQuery with AniJS Animations
* Dynamically add animations using jQuery, ex. `$('#yourElement').addClass('animated bounceOutLeft');` 
* Detect when an animation ends, ex. `$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);`
* Execute the event handler at most once, ex. `jQuery.one()`

##### Change Duration and Number of Iterations
* Include the class `.infinite` for an infinite loop
* Include `after: removeAnim` to prevent the animation from occuring more than once
* You can also use style sheets to change the duration of your animations, add a delay or change the number of times that it plays:

<div class="evo-site-annotations">
<p>yourElement {-vendor-animation-duration: 3s; -vendor-animation-delay: 2s; `-vendor-animation-iteration-count: infinite;` `after: removeAnim`}</p>
</div>