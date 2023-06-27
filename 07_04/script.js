/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// Create and Array with 8 items
let popStars = [
  "Taylor",
  "Rihanna",
  "Gaga",
  "Beyonce",
  "Katy",
  "Arianna",
  "Nicki",
];

console.log("Original array:", popStars);

// Remove the last item
popStars.pop();
console.log("New array:", popStars);

// Move the last item to the last position
let last = popStars[popStars.length - 1];
popStars.pop();
popStars.unshift(last);
console.log("Last item is now first:", popStars);

// OR SIMPLY
popStars.unshift(popStars.pop());
console.log("Last item is now first:", popStars);

// Sort alphabetically
popStars.sort();
console.log("Sorted array:", popStars);

// Find specific item in array
// find will return the first occurence
let fourLetters = popStars.find(function (popStar) {
  if (popStar.length == 4) {
    return popStar;
  }
});
console.log("Found item:", fourLetters);

// OR A BETTER SOLUTION to find Gaga
const foundGaga = popStars.find((popStar) => popStar === "Gaga");
console.log("Found item:", foundGaga);

// Remove specific element in array
let wOutKaty = popStars.filter(function (popstar) {
  return popstar != "Katy";
});

console.log("Array with Katy filtered out: ", wOutKaty);
console.log(popStars);

// OR

// Using combination of Splice and IndexOf
let remove = "Katy";
popStars.splice(popStars.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, popStars);

// specific element with slice
// slice(inclusive, exclusive) IF only 1 number then begin from this number(inclusive)
console.log(popStars.slice(0, 3));
let first_half = popStars.slice(0, 3);
console.log(popStars.slice(-2));
let second_half = popStars.slice(-2);

let noKaty = first_half.concat(second_half);
console.log(noKaty);
