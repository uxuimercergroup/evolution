<!--
## [Unreleased]
-->

## [4.0.0] - 2016-05-26

##### Added
- Lead paragraph atom added to type
- Added alert box to form abide validation demo
- Added 5 levels of global theme color variables to global sass: 
	- `$evo-primary-color`
	- `$evo-secondary-color`
	- `$evo-tertiary-color`
	- `$evo-quaternary-color`
	- `$evo-quinary-color`
- Close button from Foundation 6.2.1 added to button options
- CSS Autoprefixer added to Evolution Tool Box as a NPM dev dependency, removed duplicate browser prefixes from Sass
- Babel added to Evolution Tool Box as a NPM dev dependency to translate ES2015 JS in Foundation 6.2.1 into ES5
- Foundation's Motion UI animation library added and is a NPM dev dependency in Evoluton Tool Box

##### Changed
- **Zurb Foundation updated from 5.5.2 to 6.2.1 ([Oberon](https://github.com/zurb/foundation-sites/releases/tag/v6.2.1))**, Foundation is now a NPM dependency in Evoluton Tool Box
- jQuery updated to version 2.2.2
- jQuery UI updated to version 1.11.4
- Toggle element helper atom now uses Foundation's toggler instead of custom solution
- Boxes replaced with Foundation's callout
- Alert boxes now use Foundation's callout
- All organisms updated to use new HTML/CSS/JS from Foundation 6.2.1 where dependent on it
- DataTables is now a NPM dev dependency in Evoluton Tool Box
- jQuery UI Touch Punch is now a NPM dev dependency in Evoluton Tool Box
- AniJS is now a Bower dependency in Evoluton Tool Box
- jQuery UI is now a Bower dependency in Evoluton Tool Box
- jQuery Masked Input is now a Bower dependency in Evoluton Tool Box

##### Removed
- Removed icon shields from icon options
- Layout helpers classes removed (`.evo-full-width`) in favor of solution in Foundation 6.2.1 (`.expanded`)
- OwlCarousel removed in favor of usng Foundation orbit for carousel molecule
- Post and prefix removed from form elements and replaced by input group solution in Foundation 6.2.1
- Input numeric mask JS removed in favor of using HTML5 solutions and Foundation abide validation
- Removed right-aligned inline form as it was redundant, just add text align helper classes to form
- Removed `radius` and `round` helper classes after upgrading to Foundation 6.2.1, no longer available
- Removed dropdown buttons molecule after upgrading to Foundation 6.2.1, no longer available, use combination of buttons and dropdowns to duplicate functionality
- Removed Sub Nav molecule after upgrading to Foundation 6.2.1, no longer available
- Removed Scroll Pane molecule in favor of just using CSS, `overflow: scroll`
- Removed jquery.cookie.js since no longer used in Foundation 6.2.1
- Removed placeholder.js polyfill for IE9 since no longer used in Foundation 6.2.1 and was buggy
- Removed fastclick.js since no longer used in Foundation 6.2.1

## [3.0.5] - 2016-04-08

##### Changed
- Update version number to publish package to NPM.

## [3.0.4] - 2016-04-06

##### Changed
- Updated installation instructions for the Evolution Tool Box to explain how to get generator package from NPM.
- Updated installation instructions for the Evolution Tool Box to clarify steps for the Windows install.

## [3.0.3] - 2016-03-31

##### Changed
- Updated installation instructions for the Evolution Tool Box to clarify the correct version of Node.js to download and how to update to latest version of NPM

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