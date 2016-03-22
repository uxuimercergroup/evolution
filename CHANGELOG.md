<!--
## [Unreleased]
-->

## [3.0.2] - 2016-03-17

##### Added
- Animation library using [AniJS](http://anijs.github.io/) javascript library and [Animate.css](https://github.com/daneden/animate.css) styles, these are CSS3 animations and don't work in IE9, which gracefully degrades.
- Collection of custom organism patterns. These we originally in Evolution 2.6 as a collection of what we called "components". They were stripped out of Evolution Core 3.0 and then brought back into Evolution 3.0.2 as organisms (they are made up of atoms and molecules). These organisms have their own CSS (Sass) and JS files, and are more modular than atoms and molecules which are more embedded in the core framework.
	- Conversational Form (CSS+JS)
	- Fat Footer (CSS)
	- Item Selection Panel, icomoon and photo image icon versions (CSS+JS)
	- Pricing Table (CSS)
	- Showcase Panel (CSS)
	- Social Media Badges (CSS)
	- Stepper (CSS)
	- Thin Footer (CSS)
- New helper classes for full-width and contain-to-grid layouts
- Interactive Button option for Buttons atom is back (originally in Evolution 2.5)
- New Badges molecule which depends on Foundation's Labels atom
- Interval tick marks option for Slider molecule
- Image icon assets available of both photo realistic images and "vector" design images
- New base shadow Sass variables
- New shadow Sass variables for Boxes atom, atom uses global Sass variable values
- Core icomoon icon font includes new icons for organisms
- Added pre/postfix form labels from Foundation to forms atom
- Added jquery.autosize.input.js jQuery plugin for Conversational Form organism
- Added Mega menu option for Top Bar molecule
- Added masonry.js and imagesloaded.js. Masonry is a JavaScript grid layout library. It works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. Unloaded images can throw off Masonry layouts and cause item elements to overlap. imagesLoaded resolves this issue.
- Shopping cart icon added to core icomoon icon font

##### Changed
- Completely overhauled the UI development environment
	- Replaced Mixture with a Node/Yeoman/Grunt/Handlebars/Sass UI development environment.
- Top Bar styles updated to tighten up design; Icons for icon-only menus are now bigger; Top bar now supports adding a logo image instead of just text for the logo area.
- Off-canvas styles updated to tighten up design; Replaced hamburger icon with better icon.
- Core Items are now consider atoms
- Core UI items are now consider molecules

<!--
##### Deprecated
-->

##### Removed
- Worksheet Form organism removed as new design was basically a stacked form molecule, so it was redundant.

##### Fixed
- Fixed a bug with forms and Fastclick.js as related to label clicks on mobile (https://github.com/ftlabs/fastclick/issues/60)