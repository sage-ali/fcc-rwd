Build a Product Landing Page
============================

Passed

Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Your product landing page should have a `header` element with a corresponding `id="header"`.
2. You should have an image within the `header` element with a corresponding `id="header-img"` (A logo would make a good image here).
3. Within the `#header` element, you should have a `nav` element with a corresponding `id="nav-bar"`.
4. You should have at least three clickable elements inside the `nav` element, each with the class `nav-link`.
5. When you click a `.nav-link` button in the `nav` element, you should be taken to the corresponding section of the landing page.
6. You should have an embedded product video with `id="video"`.
7. Your landing page should have a `form` element with a corresponding `id="form"`.
8. Within the form, there should be an `input` field with `id="email"` where you can enter an email address.
9. The `#email` input field should have placeholder text to let users know what the field is for.
10. The `#email` input field should use HTML5 validation to confirm that the entered text is an email address.
11. Within the form, there should be a submit `input` with a corresponding `id="submit"`.
12. When you click the `#submit` element, the email should be submitted to a static page (use this mock URL: `https://www.freecodecamp.org/email-submit`).
13. The navbar should always be at the top of the viewport.
14. Your product landing page should have at least one media query.
15. Your product landing page should utilize CSS flexbox at least once.

**Note:** Be sure to link your stylesheet in your HTML and apply your CSS.

Tests
-----

1. You should have a `header` element with an `id` of `header`.
2. You should have an `img` element with an `id` of `header-img`.
3. Your `#header-img` should be a descendant of the `#header`.
4. Your `#header-img` should have a `src` attribute.
5. Your `#header-img`'s `src` value should be a valid URL (starts with `http`).
6. You should have a `nav` element with an `id` of `nav-bar`.
7. Your `#nav-bar` should be a descendant of the `#header`.
8. You should have at least 3 `.nav-link` elements within the `#nav-bar`.
9. Each `.nav-link` element should have an `href` attribute.
10. Each `.nav-link` element should link to a corresponding element on the landing page (has an `href` with a value of another element's id. e.g. `#footer`).
11. You should have a `video` or `iframe` element with an `id` of `video`.
12. Your `#video` should have a `src` attribute.
13. You should have a `form` element with an `id` of `form`.
14. You should have an `input` element with an `id` of `email`.
15. Your `#email` should be a descendant of the `#form`.
16. Your `#email` should have the `placeholder` attribute with placeholder text.
17. Your `#email` should use HTML5 validation by setting its `type` to `email`.
18. You should have an `input` element with an `id` of `submit`.
19. Your `#submit` should be a descendant of the `#form`.
20. Your `#submit` should have a `type` of `submit`.
21. Your `#form` should have an `action` attribute of `https://www.freecodecamp.org/email-submit`.
22. Your `#email` should have a `name` attribute of `email`.
23. Your `#nav-bar` should always be at the top of the viewport.
24. Your Product Landing Page should use at least one media query.
25. Your Product Landing Page should use CSS Flexbox at least once.
