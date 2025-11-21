Build a Page of Playing Cards
=============================

Build an app that is functionally similar to this example project. Try not to copy the [example project](assets/task.png), give it your own personal style.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should build a webpage that displays at least three playing cards.
2. You should have a `main` element with an ID of `playing-cards`.
3. Within your `#playing-cards` element, you should have at least three `div` elements, each with a class of `card`.
4. Within each `.card` element, you should have three `div` elements, the first with a class of `left`, the second with a class of `middle`, and the third with a class of `right`.
5. Your `#playing-cards` element should use flexbox to horizontally center its children, allow them to wrap, and put a `20px` space between them.
6. Each of your `.card` elements should use flexbox to justify its children using `space-between`.
7. Each of your `.left` elements should use flexbox item properties to align itself at the start of its' parent container.
8. Each of your `.middle` elements should use flexbox item properties to align itself in the center of its' parent container.
9. Each of your `.right` elements should use flexbox item properties to align itself at the end of its parent container.
10. Each of your `.middle` elements should use flexbox to display its children in a column.

Here are some characters you can copy and paste to use in your cards if you want: `♠`, `♣`, `♥`, and `♦`.

Tests
-----

 1. You should have a `main` element with an `id` of `playing-cards`.

 2. You should have at least three `div` elements with a class of `card` within your `#playing-cards` element.

 3. Each of your `.card` elements should have a width and height.

 4. Each of your `.card` elements should have exactly three `div` elements as children.

 5. You should have a `div` with a class of `left` within each `.card` element.

 6. You should have a `div` with a class of `middle` within each `.card` element.

 7. You should have a `div` with a class of `right` within each `.card` element.

 8. You should have a `#playing-cards` selector that sets its elements' `display` to `flex`.

 9. You should have a `#playing-cards` selector that sets its elements' `justify-content` to `center`.

 10. You should have a `#playing-cards` selector that sets its elements' `flex-wrap` to `wrap`.

 11. You should have a `#playing-cards` selector that sets its elements' `gap` to `20px`.

 12. You should have a `.card` selector that sets its elements' `display` to `flex`.

 13. You should have a `.card` selector that sets its elements' `justify-content` to `space-between`.

 14. You should have a `.left` selector that sets its elements' `align-self` to `flex-start`.

 15. You should have a `.middle` selector that sets its elements' `align-self` to `center`.

 16. You should have a `.right` selector that sets its elements' `align-self` to `flex-end`.

 17. You should have a `.middle` selector that sets its elements' `display` to `flex`.

 18. You should have a `flex-direction` set to `column` in your `.middle` class.
