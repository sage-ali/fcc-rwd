# Build a Favorite Icon Toggler

Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

In this lab you will use JavaScript click events to toggle the appearance of a favorite icon. When the heart icon is clicked, the appearance of the heart changes from empty to filled, and vice versa.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have an unordered list with three items.
2. The unordered list should have the class `item-list`.
3. The three list items should contain the item name followed by a `button` element with the class `favorite-icon`.
4. The `button` element should contain the code `&#9825;` initially to represent an empty heart.
5. When a `button` element containing a heart is clicked, you should add a class named `filled` to the clicked `button` if it's not already present, and remove it, if it is.
6. You should have a class selector that targets the `filled` class and sets some CSS properties.
7. When a `button` element containing a heart is clicked, the heart symbol should toggle between `&#9825;` (empty heart) and `&#10084;` (filled heart), depending on its current state.

**Note:** Be sure to link your JavaScript file in your HTML. (Ex. `<script src="script.js"></script>`)

## Tests

1. You should have an unordered list.

2. Your unordered list should have 3 items.

3. Your unordered list should have the class `item-list`.

4. Your individual list items should contain the item name.

5. Your individual list item should contain a `button` element with the class `favorite-icon`.

6. Initially, the `button` elements should contain the code `&#9825;` to represent an empty heart.

7. You should have a `.filled` selector that sets some CSS properties.

8. When the `button` element is clicked, and it contains the class `filled`, you should remove the class `filled` from the `button` element and change the innerHTML of the `button` element to `&#9825;`.

9. When the `button` element is clicked, and it doesn't contain the class `filled`, you should add the class `filled` to the `button` element and change the `innerHTML` of the `button` element to `&#10084;`.
