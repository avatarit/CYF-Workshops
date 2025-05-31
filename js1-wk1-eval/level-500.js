

const avgDaysInMonth = Math.floor(365 / 12);

// Without running any code,
// Predict and explain what the value of avgDaysInMonth will evaluate to
// You can use documentation to look up what Math.floor does

// avgDaysInMonth will evaluate to 30. Math.floor(365 / 12) calculates the average number of days in a month by dividing 365 (the total number of days in a year) by 12 (the number of months in a year), which gives approximately 30.4167. The Math.floor function then rounds this down to the nearest whole number, resulting in 30.
// Use the Node REPL to check your answer
console.log(avgDaysInMonth); // Output: 30