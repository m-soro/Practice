// SECOND VERSION OF SCRIPT

// ENDED UP NOT USING THIS CLASS CONSTRUCTOR
// import Fan from "./fanClass.js";

// IMPORTING THIS ONE and ONLY METHOD
import { getFanUrl } from "./fanClass.js";

// THIS IS WHERE THE CONTENTS WILL APPEAR
const main = document.querySelector(".main-container");

// FUNCTION THAT CREATES INDIVIDUAL FAN CONTENT
const addItem = (arr) => {
  let newFigure = document.createElement("figure");
  let newFan = document.createElement("img");
  newFan.setAttribute("src", arr[1]);
  newFan.setAttribute("alt", arr[0] + " signature-fan");
  let newFigcaption = document.createElement("figcaption");
  newFigcaption.innerText = arr[0].toUpperCase();
  newFigure.append(newFan, newFigcaption);
  return newFigure;
};

// FUNCTION THAT CREATES **MANY** INDIVIDUAL FAN
const createManyFans = (num) => {
  for (let i = 0; i < num; i++) {
    main.append(addItem(getFanUrl()));
  }
};

const btn = document.querySelector(".fanButton");
btn.addEventListener("click", () => {
  // THE TERNARY OPERATOR OPERATOR
  // IF THE MAIN CONTENT AREA IS TRUE MEANING IT HAS CONTENT
  // THEN SET THE INNER TEXT TO EMPTY STRINGS TO CLEAR IT
  // OTHERWISE, CALL THE CREATEMANYFANS FUNCTION
  main.innerText
    ? (main.innerText = "")
    : createManyFans(document.querySelector("#fanNumber").value);
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
