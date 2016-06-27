##### Basic Principles
- **Structure your document properly.** Use the right HTML tags for the job when marking up navigation, lists, links, controls, and so on.
- **Label everything.** If a control or form element has no text label, add one. You can use the visibility classes to hide labels visually while maintaining accessibility. Use the alt attribute on all images to describe what they are.
- **Don't rely on purely visual cues.** The content of a page should make sense even if page is being read to the user, or if the user is colorblind and can't make use of color-based labeling.
- **Make everything usable on a keyboard and mouse.** Lucky for you, all of our components work with keyboards, mice, and touch screens out of the box.

***

##### Types of Disabilities

###### Visual
Visually-impaired users may have low vision or be completely blind. For low vision users, proper typographic contrast is important, both size and color. Foreground colors should stand out from background colors. You can use tools to calculate the contrast ratio of your foreground and background colors. The contrast ratio should at least be 1:4.5 for normal text and 3:1 for large text. Blind users consume the web by reading it using a screen reader. Screen readers read the content of a web page out loud, or write it out as Braille, using certain queues from the HTML to infer meaning.

###### Motor
Users with motor disabilities may have trouble using a mouse, or don't use a mouse at all. For this reason, it's very important that your site is fully keyboard-accessible. Visually-impaired users also typically navigate websites using only their keyboard.

When using only the keyboard, the tab key is the primary way to navigate through a page. However, most screen readers include many shortcut keys to skip around a page. For example, a screen reader can read every heading on a page, or every link, making it easier to find the right content on the page.

More complex components like menus, tabs, or sliders can also typically be used with arrow keys, not just the tab keys. All of our JavaScript plugins provide advanced keyboard support by default.

###### Auditory
If your site has video, provide captions so that users who are deaf or hard-of-hearing can properly view the content.

***

##### Tools & Resources

###### General
- [WCAG 2.0 Guide](http://www.w3.org/TR/UNDERSTANDING-WCAG20/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [w3.org Introduction to Accessibility](http://www.w3.org/WAI/intro/accessibility.php)
- [Section 508 government requirements](http://www.section508.gov/)
- [WebAIM certification and training](http://webaim.org/)
- [Web Accessibility Checklist](http://a11yproject.com/checklist.html)
- [HHS Web Standards and Usability Guidelines](http://guidelines.usability.gov/)

###### Color
- [Check My Colours](http://www.checkmycolours.com/): if you have an existing website, you can just enter a URL and receive feedback of what needs to be improved.
- [WebAim's color contrast checker](http://webaim.org/resources/contrastchecker/): provide two colors to see if they pass accessibility guidelines.
- [I Want To See Like The Color Blind](https://chrome.google.com/webstore/detail/i-want-to-see-like-the-o/jebeedfnielkcjlcokhiobodkjjpbjia?hl=en-GB): apply color blindness filters to your web page right within Chrome.
- [Color Oracle](http://colororacle.org/): a color blindness simulator for Windows, Mac and Linux, showing you what people with common color vision impairments will see.

###### Tools
- [Tenon accessibility checker](https://tenon.io/index.php)
- [WAVE Chrome plugin - free accessibility checker](http://wave.webaim.org)
- [Color Contrast Checker](http://webaim.org/resources/contrastchecker)
- [ChromeVox screen reader plugin for Chrome](http://www.chromevox.com)
- [JAWS screen reader for Windows](http://www.freedomscientific.com/Products/Blindness/Jaws)
- [NVDA screen reader for Windows - Free](http://www.nvaccess.org/download/)
- [Accessibility Developer Tools by Google](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)