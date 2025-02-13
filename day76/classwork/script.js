function rentalCarCost(d) {
    if (d >= 7) {
        return (d * 40) - 50;
    } else if (d < 7 && d >= 3) {
        return (d * 40) - 20;
    } else {
        return d * 40;
    }
}


console.log(rentalCarCost(1)); // Returns 40
console.log(rentalCarCost(2)); // Returns 80

console.log(rentalCarCost(3)); // Returns 100
console.log(rentalCarCost(4)); // Returns 140
console.log(rentalCarCost(5)); // Returns 180
console.log(rentalCarCost(6)); // Returns 220

console.log(rentalCarCost(7)); // Returns 230
console.log(rentalCarCost(8)); // Returns 270
console.log(rentalCarCost(9)); // Returns 310
console.log(rentalCarCost(10)); // Returns 350