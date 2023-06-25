/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

// MY EXAMPLES
const macbeth = new Book("Macbeth", "William Shakespeare", 30, true);
const grapesOfWrath = new Book("Grapes of Wrath", "John Steinbeck", 25, false);
const toKillAMockingbird = new Book(
  "To Kill A Mocking Bird",
  "Harper Lee",
  20,
  true
);
const ofMiceAndMen = new Book("Of Mice and Men", "John Steinbeck", 10, true);
const braveNewWorld = new Book("Brave New World", "Aldous Huxley", 15, false);

// CREATE AN ARRAY OF BOOKS
const bookCase = [
  macbeth,
  grapesOfWrath,
  toKillAMockingbird,
  ofMiceAndMen,
  braveNewWorld,
];
console.log(bookCase);

// OUTPUT SOME INFO and APPLY METHOD TO ALL BOOKS
for (let b in bookCase) {
  console.log("The title is :", bookCase[b].title);
  console.log(bookCase[b].title, "is on sale? : ", bookCase[b].onSale);
  console.log(bookCase[b].priceOnSale(20));
}
