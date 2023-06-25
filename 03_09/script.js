/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidStatus: "close",

  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (name) {
    console.log("Before: ", this.name);
    this.name = name;
    console.log("After: ", this.name);
  },

  newVolume: function (volume) {
    console.log("Before: ", this.volume);
    this.volume = volume;
    console.log("After: ", this.volume);
  },

  newColor: function (color) {
    console.log("Before: ", this.color);
    this.color = color;
    console.log("After: ", this.color);
  },

  newPocketNum: function (pocketNum) {
    console.log("Before: ", pocketNum);
    this.pocketNum = pocketNum;
    console.log("After: ", this.pocketNum);
  },

  changeLidStatus: function (status) {
    this.lidStatus = status;
    console.log(this.lidStatus);
  },
};
