# Build a RegEx Sandbox

Build an app that is functionally similar to this [example project](./assets/task.png). Try not to copy the example project, give it your own personal style.

For this lab, you start with the CSS and HTML already written for you. You will use JavaScript to enable the regex sandbox to test a regular expression against a string and highlight the results.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should access the `#pattern`, `#test-string`, `#test-btn`, and `#result` elements and save them in the variables `regexPattern`, `stringToTest`, `testButton`, and `testResult`, respectively.
2. You should access the `#i` and `#g` flag checkboxes and save them in the variables `caseInsensitiveFlag` and `globalFlag`, respectively.
3. You should have a function named `getFlags` that returns a string containing the flags from checked flag checkboxes, or an empty string if none of them have been checked.
4. When you click the `testButton` button, if the regex pattern matches the test string, the matched text should be highlighted. To highlight the matches, replace each match with the same text surrounded by a `span` element with the class of `highlight`. Note that the CSS for that has been already added for you.
5. When there's a match, the matched text should be displayed inside `#result`. In case of multiple matches, each matched text should be separated from the next one by a comma and a space.
6. When there's no match, the text `no match` should be displayed inside `#result`.

## Tests

1. You should access the `#pattern` element and save it in the `regexPattern` variable.
2. You should access the `#test-string` element and save it in the `stringToTest` variable.
3. You should access the `#test-btn` element and save it in the `testButton` variable.
4. You should access the `#result` element and save it in the `testResult` variable.
5. You should access the `#i` flag checkbox and save it in the `caseInsensitiveFlag`.
6. You should access the `#g` flag checkbox and save it in the `globalFlag` variable.
7. You should have a `getFlags` function.
8. The `getFlags` function should return `"i"` if the `#i` checkbox is checked.
9. The `getFlags` function should return `"g"` if the `#g` checkbox is checked.
10. The `getFlags` function should return either `"ig"` or `"gi"` if both checkboxes are checked.
11. The `getFlags` function should return an empty string if both checkboxes are not checked.
12. When the inner HTML of `stringToTest` is `Gu1n34 P1g5`, the value of `regexPattern` is `\d+`, and no flag is checked, `stringToTest.innerHTML` should become `Gu<span class="highlight">1</span>n34 P1g5` by clicking the `testButton` button.
13. When the inner HTML of `stringToTest` is `Gu1n34 P1g5`, the value of `regexPattern` is `\d+`, and the global flag is checked, `stringToTest.innerHTML` should become `Gu<span class="highlight">1</span>n<span class="highlight">34</span> P<span class="highlight">1</span>g<span class="highlight">5</span>` by clicking the `testButton` button.
14. When the inner HTML of `stringToTest` is `Gu1n34 P1g5`, the value of `regexPattern` is `G`, and both the global and case insensitive flags are checked`stringToTest.innerHTML` should become `<span class="highlight">G</span>u1n34 P1<span class="highlight">g</span>5` by clicking the `testButton` button.
15. When you click the `testButton` button, if the regex pattern matches the test string, the matched text should be surrounded by a `span` element with the class of `highlight`.
16. When there's no match, the test string shouldn't be modified.
17. When the inner HTML of `stringToTest` is `Gu1n34 P1g5`, the value of `regexPattern` is `\d+`, and no flag is checked, the inner text of `#result` should become `1` by clicking the `testButton` button.
18. When the inner HTML of `stringToTest` is `Gu1n34 P1g5`, the value of `regexPattern` is `\d+`, and the global flag is checked, the inner text of `#result` should become 1, 34, 1, 5 by clicking the `testButton` button.
19. When there's a match, the matched text should be displayed inside `#result`.
20. When there's no match, the text `no match` should be displayed inside `#result`.
