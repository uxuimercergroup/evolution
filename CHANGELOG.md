<!--
## [Unreleased]
-->

## [3.0.2](https://github.com/uxuimercergroup/evolution/tree/3.0.2) - 2016-03-17
[Full Changelog](https://github.com/uxuimercergroup/evolution/compare/d3.0.1...d3.0.2)

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
- Interactive Button option for buttons atom is back (originally in Evolution 2.5)
- Badges molecule which depends on Foundation's Labels atom
- Interval tick marks option for Slider Molecule
- Image icon assets available of both photo realistic images and "vector" design images

##### Changed
- Completely overhauled the UI development environment
	- Replaced Mixture with a Node/Yeoman/Grunt/Handlebars/Sass UI development environment.
- Top Bar styles updated to tighten up design; Icons for icon-only menus are now bigger; Top bar now supports adding a logo image instead of just text for the logo area.
- Off-canvas styles updated to tighten up design; Replaced hamburger icon with better icon.
- Core Items are now consider atoms
- Core UI items are now consider molecules

##### Removed
- Worksheet Form organism removed as new design was basically a stacked form molecule, so it was redundant.