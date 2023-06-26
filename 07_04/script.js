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

// Remove the last item
popStars.pop();

// Move the last item to the last position
let last = popStars[popStars.length - 1];
popStars.pop();
popStars.unshift(last);

// Sort alphabetically
popStars.sort();

// Find specific item in array
// find will return the first occurence
let fourLetters = popStars.find(function (popStar) {
  if (popStar.length == 4) {
    return popStar;
  }
});
console.log(fourLetters);

// Remove specif element in array
let wOutKaty = popStars.filter(function (popstar) {
  return popstar != "Katy";
});

console.log(wOutKaty);
console.log(popStars);

// specific element with slice
// slice(inclusive, exclusive) IF only 1 number then begin from this number(inclusive)
console.log(popStars.slice(0, 3));
let first_half = popStars.slice(0, 3);
console.log(popStars.slice(-2));
let second_half = popStars.slice(-2);

let noKaty = first_half.concat(second_half);
console.log(noKaty);
