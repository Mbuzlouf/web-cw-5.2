let food = prompt("Choose a number between 1 and 4");

switch (food) {
  case "1":
    console.log("Rice");
    break;
  case "2":
    console.log("Pasta");
    break;
  case "3":
    console.log("Pizza");
    break;
  case "4":
    console.log("Pest Pasta");
}

let number1 = parseInt(prompt("Choose the first number"));
let number2 = parseInt(prompt("Choose the second number "));
let calculation = prompt("choose the calculation (+.-./.*)");

if (number1 && number2) {
  switch (calculation) {
    case "+":
      console.log(number1 + number2);
      break;
    case "*":
      console.log(number1 * number2);
      break;
    case "-":
      console.log(number1 - number2);
      break;
    case "/":
      console.log(number1 / number2);
      break;
    default:
      console.log("something went wrong!");
  }
} else {
  console.log("Only numbers allowed");
}

let age = parseInt(prompt("Choose an age"));

if (age < 6 && age > 3) {
  console.log("You are a KG student");
}

if (age > 5 && age < 18) {
  console.log("You are a School student");
}

if (age > 17) {
  console.log("You are a University Student and you may work");
}
