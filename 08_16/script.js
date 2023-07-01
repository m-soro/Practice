/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

// import Backpack from "./components/Backpack.js";

// IMPORT THE BACKPACK ARRAY OBJECT
import backpackObjectArray from "./components/data.js";

// MAP THROUGH THE BACKPACK ARRAY OBJECT - CREATE AN ARRAY OF BACKPACK ARTICLES
const backpackArticles = backpackObjectArray.map((backpack) => {
  // CREATE AN HTML ARTICLE THAT WILL STORE THE BACKPACK ARTICLE
  // ADD CLASSLIST AND ID
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  // SET THE CONTENT OF THE INNER HTML
  backpackArticle.innerHTML = `
      <figure class="backpack__image">
        <img src=${backpack.image} alt="" />
      </figure>
      <h1 class="backpack__name">${backpack.name}</h1>
      <ul class="backpack__features">
        <li class="packprop backpack__volume">Volume:<span> ${
          backpack.volume
        }l</span></li>
        <li class="packprop backpack__color">Color:<span> ${
          backpack.color
        }</span></li>
        <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
        <li class="packprop backpack__pockets">Number of pockets:<span> ${
          backpack.pocketNum
        }</span></li>
        <li class="packprop backpack__strap">Left strap length:<span> ${
          backpack.strapLength.left
        } inches</span></li>
        <li class="packprop backpack__strap">Right strap length:<span> ${
          backpack.strapLength.right
        } inches</span></li>
        <li class="feature backpack__lid">Lid status:<span> ${
          backpack.lidOpen ? "open" : "closed"
        }</span></li>
      </ul>
  `;
  // RETURN THE BACKPACK ARTICLE - TO THE MAPPED ARRAY
  return backpackArticle;
});

const main = document.querySelector(".maincontent");

// USE FOR EACH LOOP TO APPEND THE BACKPACK ARTICLE
backpackArticles.forEach((backpack) => {
  main.append(backpack);
});
