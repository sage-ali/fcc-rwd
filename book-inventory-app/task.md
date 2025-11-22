Build a Book Inventory App
==========================

Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have an `h1` element with the text `Book Inventory`.
2. You should have a `table` element with columns named `Title`, `Author`, `Category`, `Status`, and `Rate`.
3. Your table should have at least four rows, the first for the column headings and the rest filled with book information.
4. Each table row inside the table body should have either the class `read`, `to-read`, or `in-progress`.
5. `td` elements of the `Status` column should contain a `span` element with the `class` of `status` surrounding the text `Read`, `To Read`, or `In Progress`, depending on the class of that row.
6. `td` elements of the `Rate` column should contain a `span` element with the `class` of `rate` wrapping three empty `span` elements.
7. `.rate` elements placed inside `.read` rows should have an additional class with the value of either `one`, `two`, or `three`, depending on the personal rate. This value should come after `rate`.
8. You should create three attribute selectors to target the elements with the class of `read`, `to-read`, and `in-progress`, and set their `background-image` property to use a `linear-gradient` of your choice.
9. You should set the `display` property of each `span` element to `inline-block`.
10. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `to-read` and set their `border` and `background-image` properties.
11. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `read` and set their `border` and `background-image` properties.
12. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `in-progress` and set their `border` and `background-image` properties.
13. You should use an attribute selector to target the `span` elements with the class of `status` and the `span` elements with the class value starting with `rate` and set their `height`, `width`, and `padding` properties.
14. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `border`, `border-radius`, `margin`, `height`, `width`, and `background-color` properties.
15. You should use an attribute selector to target the first descendant of `span` elements that have the word `one` as a part of their `class` value and set its `background-image` property to use a `linear-gradient`.
16. You should use an attribute selector to target the first two descendants of `span` elements that have the word `two` as a part of their `class` value and set their `background-image` property to use a `linear-gradient`.
17. You should use an attribute selector to target the three `span` elements that are descendants of `span` elements that have the word `three` as a part of their `class` value and set their `background-image` property to use a `linear-gradient`.

Run the Tests (Ctrl + Enter)

Reset this lesson

Get Help

Tests
-----

1. You should have an `h1` element with the text `Book Inventory`.

2. You should have only one `h1` element.

3. You should have a `table` element.

4. Your `table` element should have five columns.

5. Your first column should have the text `Title` as the heading.

6. Your second column should have the text `Author` as the heading.

7. Your third column should have the text `Category` as the heading.

8. Your fourth column should have the text `Status` as the heading.

9. Your fifth column should have the text `Rate` as the heading.

10. Your table should have at least four rows.

11. Each table row except the heading row should have either the class `read`, `to-read`, or `in-progress`.

12. `td` elements of the `Status` column should contain a `span` element.

13. Each `span` element of the `Status` column should have the class of `status`.

14. Each `.status` element should have the text `Read`, `To Read`, or `In Progress`, depending on the class of its row.

15. `td` elements of the `Rate` column should contain a `span` element.

16. Each `span` element which is a direct child of a `td` element of the `Rate` column should have the class of `rate` as the first class.

17. Each `.rate` element should contain three empty `span` elements.

18. `.rate` elements placed inside `.read` rows should have an additional class after the `rate` class with the value of either `one`, `two`, or `three`, depending on the personal rate.

19. You should have an attribute selector to target rows that have the class of `read`.

20. You should use an attribute selector to target rows that have the class of `read` and set their `background-image` property to a linear gradient of your choice.

21. You should have an attribute selector to target rows that have the class of `to-read`.

22. You should use an attribute selector to target rows that have the class of `to-read` and set their `background-image` property to a linear gradient of your choice.

23. You should have an attribute selector to target rows that have the class of `in-progress`.

24. You should use an attribute selector to target rows that have the class of `in-progress` and set their `background-image` property to a linear gradient of your choice.

25. You should set the `display` property of each `span` element to `inline-block`.

26. You should have an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `to-read`.

27. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `to-read` and set their `border` property.

28. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `to-read` and set their `background-image` property.

29. You should have an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `read`.

30. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `read` and set their `border` property.

31. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `read` and set their `background-image` property.

32. You should have an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `in-progress`.

33. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `in-progress` and set their `border` property.

34. You should use an attribute selector to target the `span` elements with the class of `status` that are descendants of `tr` elements with the class of `in-progress` and set their `background-image` property.

35. You should have an attribute selector to target the `span` elements with the class of `status` and the `span` elements with the class value starting with `rate`.

36. You should use an attribute selector to target the `span` elements with the class of `status` and the `span` elements with the class value starting with `rate` and set their `height` property.

37. You should use an attribute selector to target the `span` elements with the class of `status` and the `span` elements with the class value starting with `rate` and set their `width` property.

38. You should use an attribute selector to target the `span` elements with the class of `status` and the `span` elements with the class value starting with `rate` and set their `padding` property.

39. You should have an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate`.

40. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `border` property.

41. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `border-radius` property.

42. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `margin` property.

43. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `height` property.

44. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `width` property.

45. You should use an attribute selector to target the `span` elements which are direct children of `span` elements with the `class` value starting with `rate` and set their `background-color` property.

46. You should have an attribute selector to target the first descendant of `span` elements that have the word `one` as a part of their `class` value.

47. You should use an attribute selector to target the first descendant of `span` elements that have the word `one` as a part of their `class` value and set its `background-image` property to use a `linear-gradient`.

48. You should have an attribute selector to target the first two descendants of `span` elements that have the word `two` as a part of their `class` value.

49. You should use an attribute selector to target the first two descendants of `span` elements that have the word `two` as a part of their `class` value and set their `background-image` property to use a `linear-gradient`.

50. You should have an attribute selector to target the `span` elements that are descendants of `span` elements that have the word `three` as a part of their `class` value.

51. You should use an attribute selector to target the `span` elements that are descendants of `span` elements that have the word `three` as a part of their `class` value and set their `background-image` property to use a `linear-gradient`.
