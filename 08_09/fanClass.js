// This is the Mandarin Oriental Fan Object

const destinations = [
  // "abu-dhabi",
  "bangkok",
  "barcelona",
  "wangfujing",
  "bodrum",
  "boston",
  "canouan",
  "doha",
  "dubai",
  "geneva",
  "guangzhou",
  "hong-kong",
  "landmark",
  "istanbul",
  "jakarta",
  "kuala-lumpur",
  "lake-como",
  "london",
  "macau",
  "madrid",
  "marrakech",
  "miami",
  "milan",
  "munich",
  "new-york",
  "paris",
  // "prague",
  // "riyadh",
  "santiago",
  "sanya",
  "shanghai",
  "shenzhen",
  "singapore",
  "taipei",
  "tokyo",
];

const getFanUrl = () => {
  let location = destinations[Math.floor(Math.random() * destinations.length)];
  let url =
    "https://photos.mandarinoriental.com/is/image/MandarinOriental/" +
    location +
    "-hotel-signature-fan?";
  return [location, url];
};

// ENDED UP NOT USING THE FAN CLASS
class Fan {
  constructor(location, url) {
    (this.location = location), (this.url = url);
  }
}
export default Fan;
// ENDED UP NOT USING THE FAN CLASS

// ONLY EXPORTING THIS METHOD FROM THIS MODULE
export { getFanUrl };
