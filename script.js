// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀

// const johnMass = 92,
//   johnHeight = 1.95;
// const markMass = 78,
//   markHeight = 1.69;

// const johnBMI = johnMass / johnHeight ** 2;
// const markBMI = markMass / markHeight ** 2;

// console.log(johnBMI, markBMI);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// ======================================================
// String literals
// ======================================================

// const firstName = "Nigel";
// const birthYear =  1994;
// const currentYear = 2022;
// const job = "Software Developer"

// const about = `I'm ${firstName} a ${currentYear - birthYear} year old ${job}`;

// console.log(about)

// console.log(`This is a multiline
// comment
// lol`)

// ================================================================================
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// const johnMass = 78,
//   johnHeight = 1.69;
// const markMass = 92,
//   markHeight = 1.69;

// const johnBMI = johnMass / johnHeight ** 2;
// const markBMI = markMass / markHeight ** 2;

// console.log(johnBMI, markBMI);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI is higher than John's by ${
//       markBMI - johnBMI
//     }. Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}`
//   );
// }else{
//     console.log(`John's BMI is higher than Mark's`)
// }

// ===================================================================

// console.log("10" + 3 + "2")
// console.log("10" + 3 - "2")
