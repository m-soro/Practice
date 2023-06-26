// Prepend this Nav bar
const navContent = `
<ul class="nav-items">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Order</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Contact</a></li>
</ul>
`;
// get the target element - the element to where to attach
const siteHeader = document.querySelector(".siteheader");

// create the new element
const navElement = document.createElement("nav");

// append a class in this new element
navElement.classList.add("nav-class");

// add an id - not really used in css - just practice
navElement.setAttribute("id", "nav-id");

// place the ^^^template literal navContent^^^ inside the navElement - the <nav></nav>
navElement.innerHTML = navContent;

// attach the nav element before the .siteheader
siteHeader.prepend(navElement);
