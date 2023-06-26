/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// Find an element and add two different classes
// I'm adding 5 classes
document.querySelector("h1").classList.add("another-class");
document.querySelector("h1").classList.add("djKhaled-weDaBest");
document.querySelector("h1").classList.add("super-num1-class");
document.querySelector("img").classList.add("everyday-pack-pic");
document
  .querySelector("h1")
  .classList.replace("another-class", "special-class");
document.querySelector("img").classList.toggle("toggle-class");

// Remove only one of the new classes
// Removing the last class
document.querySelector("h1").classList.remove("super-num1-class");

// Add a new attribute to an element
// Setting an attribute to an img: the alt text
document.querySelector("img").setAttribute("alt", "A picture of everyday pack");

// Request the value of the attribute
// I'm getting the attribute value of alt of the 1st img
document.querySelector("img").getAttribute("alt");

// Change the value of the attribute
document.querySelector("img").setAttribute("alt", "THE AMAZING PACK");

// Add some inline CSS to an element by specifying the
//      style property and setting its value
document.querySelector("h1").setAttribute("style", "color:blue");
document
  .querySelector("img.everyday-pack-pic")
  .setAttribute("style", "height:50%");

// Query the the style property of an element in the console to get a list
//      of all the style properties available
console.log(document.querySelector("button").style);
document
  .querySelector("button.lid-toggle")
  .setAttribute("style", "background-color:blue");
