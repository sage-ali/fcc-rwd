# Build a Customer Complaint Form

Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

For this lab, you have been provided with all the HTML and CSS. You will use JavaScript to validate the complaint form.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. When the form is submitted, you should ensure that:
    * `#full-name` is not empty.
    * `#email` is a valid email address format.
    * `#order-no` is a sequence of ten numbers starting with `2024`.
    * `#product-code` follows the pattern `XX##-X###-XX#`, where `X` represents either a lowercase letter or an uppercase letter and `#` represents a number.
    * `#quantity` is a positive integer.
    * at least one checkbox from `#complaints-group` is checked.
    * `#complaint-description` contains at least twenty characters if the `Other` checkbox is checked.
    * a radio button from `#solutions-group` is selected.
    * `#solution-description` contains at least twenty characters if the `Other` radio button is selected.
2. You should have a function named `validateForm` that returns an object containing the following keys: `full-name`, `email`, `order-no`, `product-code`, `quantity`, `complaints-group`, `complaint-description`, `solutions-group`, and `solution-description`. The value of each key should be `true` if the corresponding form field is correctly filled and `false` otherwise.
3. You should have a function named `isValid` that takes the object returned by `validateForm` as argument and returns `true` if every form field is correctly filled and `false` otherwise.
4. If a change event is triggered on a form field and it has a valid value, you should set its border color to `green`. In case of checkbox and radio button groups, you should set the border color of the parent `fieldset`.
5. If a change event is triggered on a form field and it has an invalid value, you should set its border color to `red`. In case of checkbox and radio button groups, you should set the border color of the parent `fieldset`.
6. When you try to submit the form you should call `isValid` to validate the form.
7. When you try to submit the form, if the form has any invalid field, each invalid field should be highlighted by setting the border color of each invalid input, textarea or fieldset (in case of checkbox and radio button groups) to `red`.

## Tests

1. You should have a function named `validateForm`.

2. `validateForm` should return an object.

3. `validateForm()["full-name"]` should be `false` when `#full-name` is empty, and `true` otherwise.

4. When a `change` event is triggered on `#full-name`, you should set its border color to `green` if it contains a valid value, and `red` otherwise.

5. `validateForm()["email"]` should be `true` when `#email` contains a valid email address, and `false` otherwise.

6. When a `change` event is triggered on `#email`, you should set its border color to `green` if it contains a valid email address, and `red` otherwise.

7. `validateForm()["order-no"]` should be `true` when `#order-no` contains a valid value, and `false` otherwise.

8. When a `change` event is triggered on `#order-no`, you should set its border color to `green` if it contains a valid value, and `red` otherwise.

9. `validateForm()["product-code"]` should be `true` when `#product-code` contains a valid value, and `false` otherwise.

10. When a `change` event is triggered on `#product-code`, you should set its border color to `green` if it contains a valid value, and `red` otherwise.

11. `validateForm()["quantity"]` should be `true` when `#quantity` contains a valid value, and `false` otherwise.

12. When a `change` event is triggered on `#quantity`, you should set its border color to `green` if it contains a valid value, and `red` otherwise.

13. When at least one checkbox from `#complaints-group` is checked, `validateForm()["complaints-group"]` should be `true`.

14. When none of the checkboxes from `#complaints-group` is checked, `validateForm()["complaints-group"]` should be `false`.

15. Once one checkbox from `#complaints-group` is checked, you should set `#complaints-group`'s border color to `green`.

16. When all of the checkboxes from `#complaints-group` are changed to the unchecked state, you should set `#complaints-group`'s border color to `red`.

17. When `#other-complaint` is checked and `#complaint-description` contains at least twenty characters, `validateForm()["complaint-description"]` should be `true`.

18. When `#other-complaint` is checked and `#complaint-description` contains less than twenty characters, `validateForm()["complaint-description"]` should be `false`.

19. When `#other-complaint` is checked and the value of `#complaint-description` is changed to a valid value, you should set its border color to `green`.

20. When `#other-complaint` is checked and the value of `#complaint-description` is changed to an invalid value, you should set its border color to `red`.

21. When a radio button from `#solutions-group` is checked, `validateForm()["solutions-group"]` should be `true`.

22. When none of the radio buttons from `#solutions-group` is checked, `validateForm()["solutions-group"]` should be `false`.

23. Once a radio button from `#solutions-group` is checked, you should set `#solutions-group`'s border color to `green`.

24. When all of the radio buttons from `#solutions-group` are in the unchecked state after a change event, you should set `#solutions-group`'s border color to `red`.

25. When `#other-solution` is checked and `#solution-description` contains at least twenty characters, `validateForm()["solution-description"]` should be `true`.

26. When `#other-solution` is checked and `#solution-description` contains less than twenty characters, `validateForm()["solution-description"]` should be `false`.

27. When `#other-solution` is checked and the value of `#solution-description` is changed to a valid value, you should set its border color to `green`.

28. When `#other-solution` is checked and the value of `#solution-description` is changed to an invalid value, you should set its border color to `red`.

29. You should have a function named `isValid`.

30. Your `isValid` function should take the `validateForm()` as its argument and return `true` when all the form fields have been filled correctly.

31. Your `isValid` function should take the `validateForm()` as its argument and return `false` when not all the form fields have been filled correctly.

32. You should call `isValid` when you try to submit the form.
