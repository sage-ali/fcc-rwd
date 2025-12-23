const bookmarks = [
  {
    name: 'Bookmark-1',
    category: 'News',
    url: 'https://example.com/bookmark1'
  },
  {
    name: 'Bookmark-2',
    category: 'Entertainment',
    url: 'https://example.com/bookmark2'
  },
  {
    name: 'Bookmark-3',
    category: 'Work',
    url: 'https://example.com/bookmark3'
  }
];

localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

const getBookmarks = function getBookmarks() {
  try {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Validation: Must be array, must not be null, must have required keys
    if (Array.isArray(bookmarks)) {
      const isValid = bookmarks.every((b) => typeof b === 'object' && b !== null && 'name' in b && 'category' in b && 'url' in b);
      return isValid ? bookmarks : [];
    }
    return [];
  } catch (e) {
    return [];
  }
};

const displayOrCloseForm = function displayOrCloseForm() {
  // Just toggle the classes. Data handling happens in specific event listeners.
  document.querySelector('#main-section').classList.toggle('hidden');
  document.querySelector('#form-section').classList.toggle('hidden');
};

const displayOrHideCategory = function displayOrHideCategory() {
  document.querySelector('#main-section').classList.toggle('hidden');
  document.querySelector('#bookmark-list-section').classList.toggle('hidden');
};

const handleBookmarkAddClick = function handleBookmarkAddClick(event) {
  event.preventDefault(); // Stop form submit refresh

  // CORRECTED SELECTORS:
  const nameInput = document.querySelector('#name');
  const urlInput = document.querySelector('#url');
  const categorySelect = document.querySelector('#category-dropdown'); // User story specifies this ID

  // 1. Update Storage
  const bookmarks = getBookmarks();
  bookmarks.push({
    name: nameInput.value,
    category: categorySelect.value, // Use .value, not .innerText
    url: urlInput.value
  });
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // 2. Reset Inputs
  nameInput.value = '';
  urlInput.value = '';

  // 3. Close Form
  displayOrCloseForm();
};

const displaySelectedBookmarks = function displaySelectedBookmarks() {
  const dropdown = document.querySelector('#category-dropdown');
  const selectedCategory = dropdown.value;

  // Update the header text
  document.querySelector('.category-name').innerText = selectedCategory;

  // Filter Bookmarks
  const bookmarks = getBookmarks();
  const filteredBookmarks = bookmarks.filter((b) => b.category === selectedCategory);

  const listElement = document.querySelector('#category-list');
  listElement.innerHTML = ''; // Clear previous

  if (filteredBookmarks.length === 0) {
    listElement.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    // Generate HTML
    // Note: Removed .toUpperCase() to ensure we match test expectations exactly
    filteredBookmarks.forEach((bookmark) => {
      listElement.innerHTML += `
        <input type="radio" id="${bookmark.name}" name="selected-bookmark" value="${bookmark.name}">
        <label for="${bookmark.name}">
            <a href="${bookmark.url}">${bookmark.name}</a>
        </label><br>
      `;
    });
  }
};

const handleViewCategoryClick = function handleViewCategoryClick() {
  displaySelectedBookmarks();
  displayOrHideCategory();
};

const handleBookmarkDeleteClick = function handleBookmarkDeleteClick() {
  const checkedRadio = document.querySelector('#category-list input:checked');

  // Guard clause if nothing is selected
  if (!checkedRadio) return;

  const bookmarkName = checkedRadio.value;
  // 1. Get the current category so we don't delete bookmarks with the same name in other categories
  const currentCategory = document.querySelector('#category-dropdown').value;

  let bookmarks = getBookmarks();

  // 2. Filter strictly by Name AND Category
  bookmarks = bookmarks.filter((b) => {
    // Keep the bookmark if:
    // It's NOT the one we are deleting (name doesn't match)
    // OR
    // It belongs to a different category
    return !(b.name === bookmarkName && b.category === currentCategory);
  });

  // Update Storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-render the list immediately
  displaySelectedBookmarks();
};

// Opening the Add Form
document.querySelector('#add-bookmark-button').addEventListener('click', () => {
  // Update category text in form before showing (User Story req)
  const dropdown = document.querySelector('#category-dropdown');
  document.querySelector('.category-name').innerText = dropdown.value;
  displayOrCloseForm();
});
document.querySelector('#close-form-button').addEventListener('click', displayOrCloseForm);
document.querySelector('#add-bookmark-button-form').addEventListener('click', handleBookmarkAddClick);
document.querySelector('#view-category-button').addEventListener('click', handleViewCategoryClick);
document.querySelector('#close-list-button').addEventListener('click', displayOrHideCategory);
document.querySelector('#delete-bookmark-button').addEventListener('click', handleBookmarkDeleteClick);
