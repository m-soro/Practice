// CREATE Credit Card Class
// Constructor parameters, Properties, Method

class CreditCard {
  constructor(
    // Parameters
    name,
    bank,
    currentBalance,
    dueDate
  ) {
    // Define Properties
    this.name = name;
    this.bank = bank;
    this.currentBalance = currentBalance;
    this.dueDate = dueDate;
  }
  // Add Methods
  payCurrentBalance(payment) {
    this.currentBalance = this.currentBalance - payment;
    if (this.currentBalance <= 0) {
      console.log("You don't owe anything");
    } else {
      console.log("You have a balance of " + this.currentBalance);
    }
  }

  isItDue() {
    const currentDate = new Date();
    // Convert curret date in milliseconds
    const currentDateMillisecs = currentDate.getTime();

    const dueBy = new Date(this.dueDate);
    // Convert due date in milliseconds
    const dueByMillisecs = dueBy.getTime();

    const differenceInTime = currentDateMillisecs - dueByMillisecs;
    // Calculate the no. of days between two dates, divide the time difference of both dates by no. of milliseconds in a day (1000*60*60*24)
    const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    if (differenceInDays > 1) {
      console.log("You are past due by " + differenceInDays + " days");
    }
    if (differenceInTime < 1) {
      console.log(
        "You have",
        Math.abs(differenceInTime / (1000 * 60 * 60 * 24)).toFixed(4),
        "day(s) left to pay"
      );
    } else {
      console.log("You have less than 24 hrs left to pay");
    }
  }
}
export default CreditCard;
