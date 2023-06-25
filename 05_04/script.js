/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// IDENTIFY ELEMENTS I WANT TO TARGET
// USE SCRIPT.JS TO FIND THOSE ELEMENTS
// TARGET SPECIFIC ELEMENTS NESTED INSIDE OTHER ELEMENTS
// TRY ADVANCED CSS QUERIES TO GET SPECIFIC TARGETS
// EXPERIMENT WITH QUERYSELECTOR AND QUERYSELECTORALL

// GET H1 ELEMENT
let h1 = document.querySelector("h1");
console.log(h1);

// REPLACE H1 ELEMENT
let replacement = "GUCCI RUGGED PACK";

// insert new replacement text
h1.innerHTML = replacement;

// declare variables, get the button and get where the message will appear
// get an array of all the button(2) and lid status entry(2)
const buttons = document.querySelectorAll(".lid-toggle");
const bagLidStatus = document.querySelectorAll("li:last-child span");

// create a function that will update the lid status
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    console.log("Button is clicked, updating message");
    bagLidStatus[i].innerHTML = "OPEN";
  });
}

// UPDATE THE STRAP LENGTHS
// get strap update buttons and strap lengths
const strapButtons = document.querySelectorAll("button.strap-button");
const strapLengths = document.querySelectorAll(
  "li.feature.backpack__strap span"
);

// get input from form
let inputValues = document.querySelectorAll("input");

// create a function that will update the lengths of the straps
for (let i = 0; i < strapButtons.length; i++) {
  strapButtons[i].addEventListener("click", function () {
    strapLengths[i].innerHTML = `${inputValues[i].value} inches`;
  });
}
