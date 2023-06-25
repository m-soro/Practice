// CREATE AT LEAST 5 BOOK OBJECT
// ADD PROPERTIES AND METHODS

class Book {
  constructor(
    // Add Parameters
    title,
    author,
    price,
    onSale
  ) {
    // Add Properties
    (this.title = title),
      (this.author = author),
      (this.price = price),
      (this.onSale = onSale);
  }
  // Add Methods
  priceOnSale(discount) {
    if (this.onSale)
      return (
        "Discounted price is USD " +
        (this.price - this.price * (discount / 100)).toString()
      );
    else return "Book NOT on sale";
  }
}

export default Book;
