let numberOfGuests = 6;
let pizzaSize;

if (numberOfGuests <= 2) {
  console.log("Bhaii ap small Pizza mangwa lo.");
} else if (numberOfGuests <= 5) {
  console.log("Bhai apke liye Medium hi sahhi rehna");
} else {
  console.log("Apka Pizza Pura nahi hone wala koi or size mangwa lo.");
}

console.log("------------------------------------------");

let totalGuests = 13;
let sizeOfPizza;

if (totalGuests <= 2) {
  sizeOfPizza = "small";
} else if (totalGuests <= 6) {
  sizeOfPizza = "medium";
} else {
  console.log("Bhaii tum log bandy bhtt ho Family size hi mangwa lo");
}
