const regexPattern = document.getElementById('pattern');
const stringToTest = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const testResult = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

/**
 * Returns a string containing the flags from checked flag checkboxes, or an empty string if none of them have been checked.
 * @returns {string} - A string containing the flags from checked flag checkboxes, or an empty string if none of them have been checked.
 */
const getFlags = function getFlags() {
  if (caseInsensitiveFlag.checked && globalFlag.checked) {
    return 'ig';
  }
  if (caseInsensitiveFlag.checked) {
    return 'i';
  }
  if (globalFlag.checked) {
    return 'g';
  }
  return '';
};

/**
 * Tests a regular expression against a string and highlights the results.
 * @param {Event} e - The event that triggered this function.
 * @returns {void}
 */
const testRegex = function testRegex(e) {
  // creating the regex pattern using capture groups to make replacement easier
  const flags = getFlags();
  const re = new RegExp('(' + regexPattern.value + ')', flags);
  const testString = stringToTest.innerText;
  const matches = testString.match(re);

  // Check for matches
  if (matches) {
    // Replace Globally if global or replace first found
    if (matches.length > 1 && flags.includes('g')) {
      stringToTest.innerHTML = testString.replaceAll(re, '<span class="highlight">$1</span>');
      testResult.textContent = matches.join(', ');
    } else {
      stringToTest.innerHTML = testString.replace(re, '<span class="highlight">$1</span>');
      testResult.textContent = matches[0];
    }
  } else {
    console.log(flags);
    testResult.textContent = 'no match';
  }
};

testButton.addEventListener('click', testRegex);
