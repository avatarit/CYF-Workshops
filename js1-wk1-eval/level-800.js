const post = 
`Meta
How AI Influences What You See on Facebook and Instagram
We’re making it easier to control what you see on Facebook and Instagram, 
and sharing more info on how our AI systems rank content.`

const updatedPost = post.replaceAll('Facebook','Meta');

// Use documentation to work out what updatedPost will evaluate to.
// Don't run any code for this task     
// updatedPost will evaluate to:
// "Meta\nHow AI Influences What You See on Meta and Instagram\nWe’re making it easier to control what you see on Meta and Instagram, and sharing more info on how our AI systems rank content."
console.log(updatedPost); // Output: Meta\nHow AI Influences What You See on Meta and Instagram\nWe’re making it easier to control what you see on Meta and Instagram, and sharing more info on how our AI systems rank content.
// The replaceAll method replaces all occurrences of 'Facebook' with 'Meta' in the original string, resulting in the updated post text.
// The updatedPost string now reflects the change, replacing 'Facebook' with 'Meta' in all instances.
