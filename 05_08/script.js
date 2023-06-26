/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// Find an element and add two different classes
// I'm adding 5 classes
const h1 = document.querySelector("h1");
h1.classList.add("another-class");
h1.classList.add("djKhaled-weDaBest");
h1.classList.add("super-num1-class");
h1.classList.replace("another-class", "special-class");

const img = document.querySelector("img");
img.classList.add("everyday-pack-pic");
img.classList.toggle("toggle-class");

// Remove only one of the new classes
// Removing the last class
h1.classList.remove("super-num1-class");

// Add a new attribute to an element
// Setting an attribute to an img: the alt text
let ele = document.querySelector("img");
ele.setAttribute("alt", "A picture of everyday pack");

// Request the value of the attribute
// I'm getting the attribute value of alt of the 1st img
console.log(document.querySelector("img").getAttribute("alt"));

// Change the value of the attribute
let ele2 = document.querySelector("img");
ele2.setAttribute("alt", "SUPER AMAZING PACK");
console.log("After the changing the value of alt attribute");
console.log(document.querySelector("img").getAttribute("alt"));

// Add some inline CSS to an element by specifying the
//      style property and setting its value
h1.setAttribute("style", "color:blue");
img.setAttribute("style", "height:50%");

// Query the the style property of an element in the console to get a list
//      of all the style properties available
console.log(document.querySelector("button").style);

const button1 = document.querySelector("button.lid-toggle");
button1.setAttribute("style", "background-color:blue");
