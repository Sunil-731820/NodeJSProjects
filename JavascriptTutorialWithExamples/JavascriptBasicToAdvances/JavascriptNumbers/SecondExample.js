const readline = require('readline');

// Create the readline interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the first question
r1.question('What is Your Name? Please Enter Here: ', (name) => {
    console.log(`My Name is ${name}`);

    // Ask the second question inside the first question's callback
    r1.question('What is your favourite color? ', (color) => {
        console.log(`The favourite color is ${color}`);

        // Close the readline interface after both questions are answered
        r1.close();
    });
});
