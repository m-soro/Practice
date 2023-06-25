/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Gucci",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

// This `` means its a template literal
// you can mix strings, javascript expression and html inside these ``
// Inside a template literal, anytime you want to call in Javascript ...
// you add a place holder like this ${} inside the curly brackets you can place any...
// Javascript expression

// Template is a new technology. So much better though =)

const content = `
<main>
<article>
  <h1>${everydayPack.name}</h1>
  <ul>
    <li>Volume: ${everydayPack.volume}</li>
    <li>Color: ${everydayPack.color}</li>
    <li>Age: ${everydayPack.backpackAge()}</li>
    <li>Number of pockets: ${everydayPack.pocketNum}</li>
    <li>Left strap length: ${everydayPack.strapLength.left}</li>
    <li>Right strap length: ${everydayPack.strapLength.right}</li>
    <li>Lid status: ${everydayPack.lidOpen}</li>
  </ul>
</article>
</main>
`;

// Just using a regular String to output - Not Preferred
// using ${} won't work!
// You use string concatenation
// const content2 =
//   "<h2>" + everydayPack.name + "</h2><br><p>Using string concatenation</p>";
// document.body.innerHTML = content2;

document.body.innerHTML = content;

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
