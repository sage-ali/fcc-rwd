const drumPadBank = document.querySelector('#pad-bank');
/**
 * Play a sound when a drum pad is clicked or a key is pressed.
 * @param {Event} event - The event object.
 */
const playSound = function playSound(event) {
  const display = document.querySelector('#display');

  // Define the keys that correspond to each drum pad
  const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  let audio;

  // If the event is a click, find the closest drum pad element and select its corresponding audio element
  if (event.type == 'click' && event.target.closest('.drum-pad')) {
    audio = event.target.closest('.drum-pad').querySelector('audio');
  }

  // If the event is a keydown, find the corresponding audio element based on the key pressed
  if (event.type == 'keydown') {
    const keyPressed = event.key.toUpperCase();
    if (keys.includes(keyPressed)) {
      audio = document.querySelector('#' + keyPressed);
    } else {
      return;
    }
  }
  if (audio) {
    // allows for rapid playback
    audio.currentTime = 0;
    audio.play();

    // more descriptive sound name
    const pad = audio.parentElement;
    display.textContent = pad.id;

    // visual key press
    pad.classList.add('active');
    setTimeout(() => {
      pad.classList.remove('active');
    }, 100);
  }
};

// Add event listeners for click and keydown events to the drum pad bank element
drumPadBank.addEventListener('click', playSound);
document.addEventListener('keydown', playSound);
