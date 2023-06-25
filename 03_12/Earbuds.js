// CREATING A CLASS AND EXPORTING IT

class Earbuds {
  constructor(
    // Defines parameters:
    brand,
    price,
    color,
    isOn,
    budL,
    budR
  ) {
    // Define properties:
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.isOn = isOn;
    this.batteryLevel = {
      left: budL,
      right: budR,
    };
  }
  // Add methods like normal functions:
  toggleIsOn(budStatus) {
    this.isOn = budStatus;
    console.log(this.brand, "is ", budStatus);
  }

  onSale(discount) {
    this.price = this.price - this.price * (discount / 100);
    console.log("The new price is for " + this.brand + " is " + this.price);
  }

  changeBatteryLevel(budL, budR) {
    this.batteryLevel.left = budL;
    this.batteryLevel.right = budR;
  }
}
export default Earbuds;
