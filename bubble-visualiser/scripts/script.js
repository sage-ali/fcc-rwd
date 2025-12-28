/* Utility functions */
const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () => Array.from({ length: 5 }, generateElement);

const generateContainer = () => document.createElement('div');

/**
 * Fills a given element with the contents of an array of integers.
 * For each integer in the array, a <span> element is created with the
 * integer as its textContent and appended to the given element.
 *
 * @param {HTMLDivElement} element - The element to fill with the array contents.
 * @param {number[]} intArr - The array of integers to fill the element with.
 */

const fillArrContainer = function fillArrContainer(element, intArr) {
  const fragment = document.createDocumentFragment();

  intArr.forEach((num) => {
    const span = document.createElement('span');
    span.textContent = num;
    fragment.appendChild(span);
  });
  element.appendChild(fragment);
};

const isOrdered = (int1, int2) => int1 <= int2;

/**
 * Swaps the elements at the given index and index + 1 in the given
 * array of integers if the element at the given index is greater
 * than the element at index + 1.
 *
 * @param {number[]} intArr - The array of integers to swap elements in.
 * @param {number} index - The index to start swapping from.
 */
const swapElements = function swapElements(intArr, index) {
  if (!isOrdered(intArr[index], intArr[index + 1])) {
    const temp = intArr[index];
    intArr[index] = intArr[index + 1];
    intArr[index + 1] = temp;
  }
};

/**
 * Highlights the elements at the given index and index + 1 in the given
 * element by setting their border to a dashed red line.
 *
 * @param {HTMLDivElement} element - The element containing the elements to highlight.
 * @param {number} index - The index of the first element to highlight.
 */
const highlightCurrentEls = function highlightCurrentEls(element, index) {
  element.children[index].style.border = '0.25rem dashed red';
  element.children[index + 1].style.border = '0.25rem dashed red';
};

/**
 * Checks if all elements in an array are in ascending order.
 * @param {number[]} arr - The array to check for sorted order.
 * @returns {boolean} - True if all elements were in order, false otherwise.
 */
const isSorted = function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false; // Found an element out of order
    }
  }
  return true; // All elements were in order
};

/* DOM ELEMENTS AND PROPERTIES */
const arrayDiv = document.querySelector('#starting-array');
const arrayContainer = document.querySelector('#array-container');
const sortButton = document.querySelector('#sort-btn');
const sortButtonDisplay = sortButton.style.display;

/* EVENT HANDLERS */
/**
 * Handles the generation of a new array when the Generate Array button is clicked.
 * When this function is called, all previously generated arrays are removed from the
 * array container and the starting array is reset. A new array is then generated and
 * filled into the starting array element. The Sort Array button is then displayed if
 * it was previously hidden.
 */
const handleGenerateArray = function handleGenerateArray(event) {
  if (arrayContainer.children.length > 1) {
    const children = arrayContainer.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const element = children[i];

      if (element.id !== 'starting-array') {
        element.remove();
      }
    }
  }
  if (arrayDiv.children) {
    arrayDiv.innerHTML = '';
  }
  fillArrContainer(arrayDiv, generateArray());
  if (sortButton.style.display == 'none') {
    sortButton.style.display = sortButtonDisplay;
  }
};

/**
 * Handles the Bubble Sort button click event.
 * When this function is called, it begins sorting the array displayed in the
 * starting array element. The sorting algorithm is Bubble Sort, and the algorithm
 * is visualized by creating a new <div> element for each pass of the sorting
 * algorithm. The elements currently being compared are highlighted in the newly
 * created <div> element. The sorting algorithm is repeated until the array is
 * sorted. Finally, the Sort Array button is hidden to prevent further sorting.
 */
const handleBubbleSort = function handleBubbleSort(event) {
  // Initial State: Highlight the first pair (0 and 1) on the starting array
  highlightCurrentEls(arrayDiv, 0);

  // Prepare for Sorting
  const currentArray = Array.from(arrayDiv.children, (span) => parseInt(span.textContent));
  let step = 1;
  let swapped;

  do {
    swapped = false;

    // Loop through the entire array for this pass
    for (let i = 0; i < currentArray.length - 1; i++) {
      if (!isOrdered(currentArray[i], currentArray[i + 1])) {
        swapElements(currentArray, i);
        swapped = true;
      }

      const div = generateContainer();
      div.id = `array-sort-step-${step}`;
      fillArrContainer(div, currentArray);

      if (i < currentArray.length - 2) {
        highlightCurrentEls(div, i + 1);
      } else {
        // Prepare for the next cycle starting at the beginning
        highlightCurrentEls(div, 0);
      }

      arrayContainer.append(div);
      step++;
    }
  } while (swapped);

  const finalDiv = arrayContainer.lastElementChild;
  if (finalDiv) {
    finalDiv.style.border = '0.25rem solid green';
    Array.from(finalDiv.children).forEach((span) => (span.style.border = 'none'));
  }
  sortButton.style.display = 'none';
};

/* ADDING EVENT LISTENERS */
document.querySelector('#generate-btn').addEventListener('click', handleGenerateArray);
sortButton.addEventListener('click', handleBubbleSort);
