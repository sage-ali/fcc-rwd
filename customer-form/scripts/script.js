// Select the form (the parent container)
const form = document.getElementById('form');
const validColor = 'green';
const invalidColor = 'red';
const selects = ['radio', 'checkbox'];

// Getting form elements state
const formState = {
  'full-name': '',
  email: '',
  'order-no': '',
  'product-code': '',
  quantity: '',
  'complaints-group': '',
  'complaint-description': '',
  'solutions-group': '',
  'solution-description': ''
};
// Initialize validation object
const validationObject = {
  'full-name': null,
  email: null,
  'order-no': null,
  'product-code': null,
  quantity: null,
  'complaints-group': null,
  'complaint-description': null,
  'solutions-group': null,
  'solution-description': null
};
// Initialize validated input tracker
const validatedInputs = [];

/**
 * This function goes through all the elements in the formState object and updates their values.
 * It also updates the validationObject with the current values of the form elements.
 * @return {void}
 */
const updateState = function updateState() {
  Object.keys(formState).forEach((id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    // If the element is a fieldset, get the checked checkboxes and radios
    if (element.tagName == 'FIELDSET') {
      const checkedCheckboxes = element.querySelectorAll('input[type="checkbox"]:checked');
      const checkedRadio = element.querySelector('input[type="radio"]:checked');
      if (checkedCheckboxes) formState[id] = [...checkedCheckboxes].map((checkbox) => checkbox.value).join(' ');
      if (checkedRadio) formState[id] = checkedRadio.value;
    } else {
      formState[id] = element.value;
    }
  });
};

/**
 * This function validates the form and returns an object with the same keys as the formState object.
 * The values of the returned object are boolean and represent whether the form element is valid or not.
 * @returns {Object} An object with the same keys as the formState object and boolean values representing the validity of each form element.
 */
const validateForm = function validateForm() {
  const noEmpty = ['full-name', 'email', 'product-code', 'quantity', 'order-no'];
  const regExps = {
    email: /^[\w-\.]{3,}@([\w-]+\.)+[\w-]{2,4}$/,
    'order-no': /^2024[\d]{6}$/,
    'product-code': /^[a-zA-Z]{2}[0-9]{2}-[a-zA-Z][0-9]{3}-[a-zA-Z]{2}[0-9]$/,
    quantity: /^[1-9]\d*$/
  };

  const validationObjectKeys = Object.keys(validationObject);
  const formStateKeys = Object.keys(formState);

  // Update the form state tracker to ensure all changes are captured
  updateState();
  validationObjectKeys.forEach((id, index) => {
    // id of current form element
    const formStateId = formStateKeys[index];

    if (noEmpty.includes(formStateId)) {
      validationObject[id] = formState[formStateId].length > 0;
    }

    if (regExps[formStateId]) {
      validationObject[id] = regExps[formStateId].test(formState[formStateId].toString());
    }

    // If the form element ID ends with '-group', set the validationObject value to whether the form element has a value or not.
    if (formStateId.endsWith('-group')) {
      validationObject[id] = formState[formStateId] ? true : false;
    }
    // If the form element ID ends with '-description', set the validationObject value to whether the form element value is longer than 19 characters or not.
    if (formStateId.endsWith('-description')) {
      const groupState = formState[formStateId.replace('-description', 's-group')];
      validationObject[id] = groupState.includes('other') ? formState[formStateId].length > 19 : groupState.trim().length > 0;
    }
  });
  return validationObject;
};

/**
 * This function validates the entire form and returns a boolean.
 * The values of the returned represent whether the all the form elements are valid or not.
 * @returns {Boolean} All form items valid or not.
 */
const isValid = (validationObject) => Object.values(validationObject).every((valid) => valid == true);

/**
 * Updates the color of the validation error for the given element.
 * If the element is an input or select element within a fieldset, the fieldset's border color is updated.
 * Otherwise, the element's border color is updated.
 * @param {HTMLElement} element - The element to update the validation error color for.
 * @param {string} color - The color to update the validation error to.
 */
const updateValidationErrorStyle = function updateValidationErrorStyle(element, color) {
  const isInputElement = element.tagName === 'INPUT';
  const isSelectElement = selects.includes(element.type);

  if (isInputElement && isSelectElement) {
    element.closest('fieldset').style.borderColor = color;
  } else {
    element.style.borderColor = color;
  }
};

/**
 * Handles the form submission event.
 * Prevents the default form submission behavior and checks the form's validity.
 * If the form is invalid, it will update the validation error styles of the invalid form elements.
 * @param {Event} e - The form submission event.
 * @returns {void}
 */
const handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  const validationObject = validateForm();

  if (!isValid(validationObject)) {
    // Get the valid and invalid form elements
    const invalidElements = Object.entries(validationObject)
      .filter(([_, valid]) => !valid)
      .map(([id]) => document.getElementById(id));

    const validElements = Object.entries(validationObject)
      .filter(([_, valid]) => valid)
      .map(([id]) => document.getElementById(id));

    // Update the validation styles
    invalidElements.forEach((element) => updateValidationErrorStyle(element, invalidColor));
    validElements.forEach((element) => updateValidationErrorStyle(element, validColor));
  }
};

/**
 * Handles the change event of the form.
 * Updates the formState object with the new values of the form elements.
 * Validates the form elements and updates the validation error styles.
 * @param {Event} e - The change event.
 * @returns {void}
 */
const handleChange = function handleChange(e) {
  const id = !selects.includes(e.target.type) ? e.target.id : e.target.closest('fieldset').id;

  // Add the form element id to the validatedInputs array if it doesn't already exist.
  if (!validatedInputs.includes(id)) {
    validatedInputs.push(id);
  }

  updateState();

  // Iterate through the validatedInputs array and update the validation error styles of the form elements.
  validatedInputs.forEach((id) => {
    const element = document.getElementById(id);
    const isValid = validateForm()[id];
    updateValidationErrorStyle(element, isValid ? validColor : invalidColor);
  });

  // If the form element id ends with '-group', update the validation error style of the corresponding description element on next change if "other" selected.
  if (id.endsWith('-group')) {
    const descriptionId = id.replace('s-group', '-description');
    const groupState = formState[formStateId.replace('-description', 's-group')];
    const otherIncluded = groupState.includes('other');
    // Add the description element id to the validatedInputs array if it doesn't already exist.
    if (!validatedInputs.includes(descriptionId) && otherIncluded) {
      validatedInputs.push(descriptionId);
    }
  }
};

form.addEventListener('submit', handleSubmit);

form.addEventListener('change', handleChange);
