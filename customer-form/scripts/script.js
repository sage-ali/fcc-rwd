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

const validatedInputs = [];

const updateState = function updateState() {
  Object.keys(formState).forEach((id) => {
    const element = document.getElementById(id);
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

const validateForm = function validateForm() {
  updateState();
  const noEmpty = ['full-name', 'email', 'product-code', 'quantity'];
  validationObject['complaint-description'] = false;
  validationObject['solution-description'] = false;

  Object.keys(validationObject).forEach((id) => {
    const element = document.getElementById(id);

    if (noEmpty.includes(id)) {
      validationObject[id] = formState[id].length > 0;
    }
    if (id == 'email' && element.type == 'email') {
      validationObject[id] = /^[\w-\.]{3,}@([\w-]+\.)+[\w-]{2,4}$/.test(formState[id]);
    }
    if (id == 'order-no') {
      validationObject[id] = /^2024[\d]{6}$/.test(formState[id]);
    }
    if (id == 'quantity') {
      validationObject[id] = formState[id] > 0;
    }

    if (id == 'product-code') {
      validationObject[id] = /^[a-zA-Z]{2}[0-9]{2}-[a-zA-Z][0-9]{3}-[a-zA-Z]{2}[0-9]$/.test(formState[id]);
    }

    if (id.endsWith('-group')) {
      validationObject[id] = formState[id] ? true : false;
    }
    if (id.endsWith('-description')) {
      validationObject[id] = formState[id.replace('-description', 's-group')].includes('other')
        ? formState[id].length > 19
        : formState[id.replace('-description', 's-group')].trim().length > 0;
    }
  });
  return validationObject;
};

const isValid = (validationObject) => Object.values(validationObject).every((valid) => valid == true);

const handleValidationStyle = function handleValidationStyle(element, color) {
  if (element.tagName == 'input' && element.type in selects) {
    element.closest('fieldset').style.borderColor = color;
  } else {
    element.style.borderColor = color;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  updateState();
  const validationObject = validateForm();
  if (!isValid(validationObject)) {
    for (const [id, valid] of Object.entries(validationObject)) {
      const element = document.getElementById(id);
      if (!valid) {
        handleValidationStyle(element, invalidColor);
      } else {
        handleValidationStyle(element, validColor);
      }
    }
  }
});

form.addEventListener('change', (e) => {
  let id = e.target.id;
  if (!Object.keys(formState).includes(id)) {
    id = e.target.closest('fieldset').id;
  }

  updateState();
  if (!validatedInputs.includes(id)) validatedInputs.push(id);

  validatedInputs.forEach((id) => {
    if (validateForm()[id]) {
      handleValidationStyle(document.getElementById(id), validColor);
    } else {
      handleValidationStyle(document.getElementById(id), invalidColor);
    }
  });

  if (id.endsWith('-group') && !validatedInputs.includes(id.replace('s-group', '-description'))) {
    validatedInputs.push(id.replace('s-group', '-description'));
  }
  console.log(validateForm()['complaint-description']);
});
