##### General

Orbit doesn't automatically generate any HTML for you, giving you the flexibility to move around the various pieces of the plugin.

##### Wrapper

The wrapper houses the entire carousel. We use the `aria-label` attribute to label what the carousel is, for assistive technology.

##### Slide Container

The slide container houses each individual slide. In our above markup example, we also placed the buttons in here, so we can anchor them to the center edge of the slide container. However, they can be moved anywhere within the `data-orbit` wrapper.

Each slide is an `<li>` with the class `.orbit-slide`. The first slide is marked with the `.is-active` class to indicate it's the default. You can place any HTML you want inside of the slide, but we have some premade styles for image-based slides with a caption.

##### Next/Previous Arrows

Orbit controls use the class `.orbit-previous` and `.orbit-next`. We add screen reader-only text (wrapped in the class `.show-for-sr`) that explain what the controls do.

##### Bullets

The bullets serve two purposes: they mark the current slide, and can be clicked on to navigate to another slide. Like with the controls, the bullets also have screen reader-friendly labels.

##### Slide Contents

A carousel slide can contain images or HTML—you can even mix between slides in one carousel!