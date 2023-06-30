/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

/**
 * Create a basic function declaration
 * Make a change to an element in the DOM
 * Call this function declaration
 * Create a basic function expression - define a variable and place an anonymous function inside
 * Find an Element
 * Call the Function
 * Confirm that it works
 * Repeat with arrow function
 */

const h1 = document.querySelector("h1");
const divs = document.querySelectorAll("div");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

// Regular Function Declaration
function darkMode() {
  console.log("button1 is clicked");
  if (h1.innerHTML != "Dark Mode") {
    h1.innerHTML = "Dark Mode";
    btn1.innerHTML = "LIGHT Mode";
  } else {
    h1.innerHTML = "Light Mode";
    btn1.innerHTML = "DARK Mode";
  }
}

// Calling the darkMode()
btn1.addEventListener("click", darkMode);

//Using an arrow function
btn1.addEventListener("click", () =>
  document.querySelector("body").classList.toggle("darkmode")
);

// A Function Expression
const dissapearFunction = function () {
  console.log("button3 is clicked");
  for (i in divs) {
    if (i < 3) {
      divs[i].setAttribute("class", "dissapear");
    }
    h1.innerHTML = "Oh no!";
    btn4.innerHTML = "Bring my brothers back!";
  }
};

// Calling the dissapearFunction. This is a function expression
btn3.addEventListener("click", dissapearFunction);

// With Arrow function
btn4.addEventListener("click", () => {
  console.log("button4 is clicked");
  for (i in divs) {
    if (divs[i].getAttribute("class") == "dissapear") {
      h1.innerHTML = "The Boys Are Back!";
      btn4.innerHTML = "Good";
      for (i in divs) {
        divs[i].classList.remove("dissapear");
      }
    } else {
      h1.innerHTML = "Click other buttons!";
    }
  }
});

// Another Arrow function
btn2.addEventListener("click", () => {
  console.log("button2 is clicked");
  if (btn2.innerHTML != "B L U E") {
    btn2.innerHTML = "B L U E";
  } else {
    btn2.innerHTML = "Color";
  }
  btn2.classList.toggle("blue");
});
