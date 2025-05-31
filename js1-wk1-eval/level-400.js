let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file?
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// e) What kind of statement is on line 7?

//a) There are 2 function calls in this file: `replaceAll` and `repeat`.
//b) The expression `confession.replaceAll(secret,'x'.repeat(secret.length));` 
// is replacing all occurrences of the word "cake" in the `confession` string with a string of 'x' 
// characters that has the same length as "cake". This effectively censors the word "cake" in the confession.

//c) We pass 2 inputs to `replaceAll`: the first is the string to be replaced (`secret`), 
// and the second is the replacement string (`'x'.repeat(secret.length)`). 
// We can tell because `replaceAll` takes two arguments.

//d) We pass 1 input to `repeat`: the number of times to repeat the character 'x',
//  which is determined by `secret.length`. 
// We can tell because `repeat` takes a single argument that specifies how many times to repeat the string.

//e) The statement on line 7 is an assignment statement. 
// It assigns the result of the `replaceAll` method to the variable `confession`, 
// effectively updating its value.


