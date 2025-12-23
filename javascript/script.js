/* Build a Book Organizer
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

Your books array should have a minimum of three objects.

 */

/* const books = [
  {
    title: 'book 1',
    authorName: 'Name 1',
    releaseYear: 1
  },
  {
    title: 'book 3',
    authorName: 'Name 3',
    releaseYear: 3
  },
  {
    title: 'book 2',
    authorName: 'Name 2',
    releaseYear: 2
  }
]; */
/*
You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

The sortByYear function should return 0 if both releaseYear values are equal.

You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.

You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated. */

/* const sortByYear = (firstBook, secondBook) => firstBook.releaseYear - secondBook.releaseYear;
const filteredBooks = books.filter((book) => {
  return book.releaseYear > 1;
});

console.log(filteredBooks.sort(sortByYear)); */

/* const regex = /freeCodeCamp/;
console.log(regex.test('freeCodeCamp'));
console.log(regex.test('freeCodeCamp is great'));
console.log(regex.test('I love freeCodeCamp'));
console.log(regex.test('freecodecamp'));
console.log(regex.test('FREECODECAMP'));
console.log(regex.test('free'));
console.log(regex.test('code'));
console.log(regex.test('camp')); */

/* const regex = /freeCodeCamp/;
const match = 'freeCodeCamp'.match(regex);
console.log(match); */

// const regex = /freeCodeCamp/gi;

// console.log(regex.test('freeCodeCamp')); // true
// console.log(regex.test('freeCodeCamp is great')); // false
// console.log(regex.test('I love freeCodeCamp')); // true
// console.log(regex.test('freecodecamp')); // false
// console.log(regex.test('FREECODECAMP')); // true
// console.log(regex.test('free')); // false
// console.log(regex.test('code')); // false
// console.log(regex.test('camp')); // false

/* Why? Well, the global modifier makes your regular expression stateful. This means it keeps track of where it has previously matched a pattern. So when it matches the first freeCodeCamp string, it remembers that it found a match starting at index 0.

We then test it against freeCodeCamp is great, but it doesn't start at index 0. The regular expression "knows" it found a match at index 0 already, so even though this is a different string, it starts from the end index of the match. */

// const regex = /freeCodeCamp/gi;

// console.log(regex.lastIndex); // 0
// console.log(regex.test('freeCodeCamp')); // true
// console.log(regex.lastIndex); // 12
// console.log(regex.test('freeCodeCamp is great')); // false
// console.log(regex.lastIndex); // 0
// console.log(regex.test('I love freeCodeCamp')); // true
// console.log(regex.lastIndex); // 19
// console.log(regex.test('freecodecamp')); // false
// console.log(regex.lastIndex); // 0
// console.log(regex.test('FREECODECAMP')); // true
// console.log(regex.lastIndex); // 12
// console.log(regex.test('free')); // false
// console.log(regex.lastIndex); // 0
// console.log(regex.test('code')); // false
// console.log(regex.lastIndex); // 0
// console.log(regex.test('camp')); // false
/*
The global flag is great when you need to get multiple matches from a single string. But if you're testing multiple strings with the same regular expression it's best to leave the g flag off. */

/* const start = /^freecodecamp/i;
const end = /freecodecamp$/i;
console.log(start.test('freecodecamp')); // true
console.log(end.test('freecodecamp')); // true
console.log(start.test('freecodecamp is great')); // true
console.log(end.test('freecodecamp is great')); // false
console.log(start.test('i love freecodecamp')); // false
console.log(end.test('i love freecodecamp')); // true
console.log(start.test("have met freecodecamp's founder")); // false
console.log(end.test("have met freecodecamp's founder")); // false */

/* But you can make a regex handle multiple lines with the m flag, or the multi-line modifier. Let's add that to our regular expressions to see what we get: */

/* const start = /^freecodecamp/im;
const end = /freecodecamp$/im;
const string = `I really love
freecodecamp
it's my favorite`;
console.log(start.test(string)); // true
console.log(end.test(string)); // true */

// The d flag expands the information you get in a match object. Let's add it to our regular expression:

/* const regex = /freecodecamp/di;
const string = "we love freecodecamp isn't freecodecamp great?";
console.log(string.match(regex)); */

/* The first is the unicode modifier, or u flag. This expands the functionality of a regular expression to allow it to match special unicode characters.

You'll learn more about character classes in a future lesson, but the u flag gives you access to special classes like Extended_Pictographic to match most emoji: */

// const regex = /🍎/u;

// const str = 'I have an apple 🍎';
// console.log(regex.test(str)); // true

/* There is also a v flag, which further expands the functionality of the unicode matching.

The second is the sticky modifier, or the y flag. The sticky modifier behaves very similarly to the global modifier, but with a few exceptions.

The biggest one is that a global regular expression will start from lastIndex and search the entire remainder of the string for another match, but a sticky regular expression will return null and reset the lastIndex to 0 if there is not immediately a match at the previous lastIndex.

And the last is the single-line modifier, or the s flag. Remember that the multiline modifier allows start and end anchors to match the start and end of a line, instead of the entire string.

The single-line modifier allows a wildcard character, represented by a period (.) in regex, to match linebreaks – effectively treating the string as a single line of text.

There are quite a few of these modifiers, but the i and g flags are the ones you'll use most frequently, and are the most important to remember. */

/* When you use the global modifier with match(), you lose the extra information about capture groups and string indices that would come in the match array. */

/* const pattern = 'freecodecamp';
const str = 'freecodecamp is the best we love freecodecamp';
const matched = str.matchAll(pattern);
const replaced = str.replaceAll(pattern, 'freeCodeCamp');
console.log(matched);
console.log(replaced);
console.log(matched.next());
console.log(matched.next());
console.log(matched.next()); */

// const regex = /freecodecamp/g;
// const str = 'freecodecamp is the best we love freecodecamp';
// const matched = str.matchAll(regex);
// console.log(Array.from(matched));
// And we finally get our array of matches:

// const regex = /free(code)camp/i;
// console.log('freecodecamp'.replace(regex, 'paidcodeworld'));

// const regex = /freecodecamp/di;
// const string = "we love freecodecamp isn't freecodecamp great?";
// console.log(string.match(regex));

const now = new Date();
console.log(now);

const specificDate = new Date('July 4, 1776 12:00:00');

console.log(Date.now());

const date = new Date();
console.log(date);

console.log(date.toISOString());
console.log(date.toLocaleDateString());
