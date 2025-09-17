// Name: Gustavo Miranda
// Student ID: 101488574

console.log("Name: Gustavo Miranda");
console.log("Student ID: 101488574");

// Exercise 1
// ====================
console.log("\n============================================\n");

const greeter = (myArray, counter) => {
  const greetText = "Hello";
  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};
greeter(['Zeca Pagodinho', 'Cristiano Ronaldo', 'Lionel Messi'], 3);

console.log("\n============================================\n");

// Exercise 2
// ====================

console.log("Exercise 2 - ");

const capitalizeFirst = (str = "") => {
  if (!str) return "";
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join("");
};
console.log(capitalizeFirst("gustavo"));
console.log(capitalizeFirst("miranda"));
console.log();

console.log("\n============================================\n");

// Exercise 3
// ====================
console.log("Exercise 3 - ");

const colors = ["purple", "black", "grey", "yellow"];
const capColors = arr => arr.map(capitalizeFirst);

console.log(colors.join(", "));
console.log(capColors(colors).join(", "));
console.log();

console.log("\n============================================\n");

// Exercise 4
console.log("Exercise 4 - ");

const values = [5, 12, 20, 19, 33, 50, 7, 100, 21];
const atLeast20 = arr => arr.filter(n => n >= 20);

console.log(values.join(", "));
console.log(atLeast20(values).join(", "));
console.log();

console.log("\n============================================\n");

// Exercise 5
console.log("Exercise 5 - ");

const numbers = [1, 3, 6, 5];
const sum = numbers.reduce((a, n) => a + n, 0);
const product = numbers.reduce((a, n) => a * n, 1);

console.log("Array:", numbers.join(", "));
console.log("Sum:", sum);
console.log("Product:", product);
console.log();

console.log("\n============================================\n");

// Exercise 6
console.log("Exercise 6 - ");

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  info() {
    return `${this.model} (${this.year})`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance = 0) {
    super(model, year);
    this.balance = balance;
  }
  details() {
    return `Sedan: ${this.info()} | Balance: $${this.balance}`;
  }
}

const c1 = new Car("Civic", 2020);
const s1 = new Sedan("Accord", 2024, 15000);

console.log("Car: ", c1.info());
console.log("Sedan: ", s1.details());
console.log();

console.log("\n============================================\n");
