/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const skiBag = {
  name: "Mark's Ski Bag",
  content: "Ski",
  length_inches: 70,
  Ski: {
    brand: "Blizzard",
    length_cm: 159,
  },
};

console.log("The ski bag is: ", skiBag);
console.log("The ski bag's name is: ", skiBag.name);
console.log("Ski Bag's Length is: ", skiBag.length_inches);
console.log(
  "Inside the Ski Bag inside is: ",
  skiBag["Ski"]["brand"],
  "Ski with a length of ",
  skiBag["Ski"]["length_cm"],
  "cm"
);
