/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Earbuds from "./Earbuds.js";
import Apps from "./Apps.js";
import CreditCard from "./CreditCard.js";

const beats = new Earbuds("Beats", 300, "black", "off", 100, 100);
const airpods = new Earbuds("Apple", 200, "white", "off", 100, 100);

console.log(beats);
console.log(airpods);

airpods.toggleIsOn("on");
beats.toggleIsOn("On");
airpods.changeBatteryLevel(89, 95);
beats.onSale(20);

const linkedIn = new Apps("LinkedIn", "Networking", "no");
console.log(linkedIn);
linkedIn.appNeedUpdate("yes");
const grindr = new Apps("Grindr", "dating", "yes");
console.log(grindr);
console.log("What type of app is Grindr?", grindr.type);

const ventureOne = new CreditCard(
  "Venture One",
  "Capital One",
  2500,
  "6/26/2023"
);
console.log(ventureOne);
ventureOne.payCurrentBalance(1800);
console.log(ventureOne.dueDate);
ventureOne.isItDue();
