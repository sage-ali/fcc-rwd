const buttons = document.querySelectorAll('.favorite-icon');
const icons = ['&#9825;', '&#10084;'];

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('filled');
    button.innerHTML = button.classList.contains('filled') ? icons[1] : icons[0];
  });
});
