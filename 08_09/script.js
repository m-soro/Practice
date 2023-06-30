/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

// ENDED UP NOT USING THIS CLASS CONSTRUCTOR
// import Fan from "./fanClass.js";

// IMPORTING THIS ONE and ONLY METHOD
import { getFanUrl } from "./fanClass.js";

// ARRAY OF ARRAY POPULATOR - IT GETS THE FAN PICTURE AND NAME
const populateFanArray = (fanCount = 1) => {
  const fanArray = [];
  for (let i = 0; i < fanCount; i++) {
    fanArray.push(getFanUrl());
  }
  return fanArray;
};

// CREATES A DICTIONARY LIKE OF OBJECTS
// const entries = new Map(populateFanArray(10));
// const FanObj = Object.fromEntries(entries);
// console.log(FanObj);

// THIS IS WHERE THE CONTENTS WILL APPEAR
const main = document.querySelector(".main-container");

// FUNCTION THAT CREATES INDIVIDUAL FAN CONTENT
const addItem = (arr) => {
  let newFigure = document.createElement("figure");
  let newFan = document.createElement("img");
  newFan.setAttribute("src", arr[0][1]);
  newFan.setAttribute("alt", arr[0][0] + " signature-fan");
  let newFigcaption = document.createElement("figcaption");
  newFigcaption.innerText = arr[0][0].toUpperCase();
  newFigure.append(newFan, newFigcaption);
  return newFigure;
};

// FUNCTION THAT CREATES **MANY** INDIVIDUAL FAN
const createManyFans = (num) => {
  for (let i = 0; i < num; i++) {
    main.append(addItem(populateFanArray()));
  }
};

const btn = document.querySelector(".fanButton");

btn.addEventListener("click", () => {
  if (main.innerText) {
    console.log("Has content, removing previous content");
    main.innerText = "";
  } else {
    console.log("No content, adding content");
    createManyFans(document.querySelector("#fanNumber").value);
  }
});

// THE ABOUT TEXT-STYLE BUTTON
const abtBtn = document.querySelector(".about-btn");
// THE COLLAPSIBLE HIDDEN DIV
const collapsible = document.querySelector(".collapsible");
abtBtn.addEventListener("click", () => {
  console.log("abt button is clicked");
  collapsible.classList.toggle("not-active");
  collapsible.classList.toggle("fade-in");
});
