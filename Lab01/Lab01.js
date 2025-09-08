
// Name: Gustavo Miranda
// Student ID: 101488574




console.log("Name: Gustavo Miranda");
console.log("Student ID: 101488574");



// Exercise 1

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log("============================================");
console.log("-- Exercise 1 - Capitalize the First Letter of Each Word --\n");

let text = "fifth semester at george brown college";
console.log(text);

console.log("\nResult:\n");
console.log(capitalizeWords(text));




// Exercise 2
// ====================
function max(a, b, c) {
  return Math.max(a, b, c);
}

console.log("============================================");
console.log("-- Exercise 2 - Find the Largest of Three Integers --\n");

console.log("5, 9, 9");
console.log("7, -4, -12");
console.log("250, 1200, 760");

console.log("\nResult:\n");
console.log(max(5, 9, 9));
console.log(max(7, -4, -12));
console.log(max(250, 1200, 760));




// exercise 3
// ====================
function right(str) {
  if (str.length < 3) return str;
  return str.slice(-3) + str.slice(0, -3);
}

console.log("============================================");
console.log("-- Exercise 3 - Move Last Three Characters to the Start --\n");

let s1 = "London";
let s2 = "Programming";
let s3 = "Hi"; 

console.log(s1);
console.log(s2);
console.log(s3);

console.log("\nResult:\n");
console.log(right(s1));
console.log(right(s2));
console.log(right(s3));




// Exercise 4
// ====================
function angle_Type(angle) {
  if (angle > 0 && angle < 90) return "Acute angle";
  if (angle === 90) return "Right angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  return "Invalid angle";
}

console.log("============================================");
console.log("-- Exercise 4 - Find the Type of an Angle --\n");

console.log("23");
console.log("90");
console.log("130");
console.log("180");

console.log("\nResult:\n");
console.log(angle_Type(23));
console.log(angle_Type(90));
console.log(angle_Type(130));
console.log(angle_Type(180));

console.log("\n============================================\n");