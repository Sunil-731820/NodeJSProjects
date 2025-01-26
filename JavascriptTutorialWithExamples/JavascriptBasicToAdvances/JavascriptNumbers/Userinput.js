console.log("This is the Example of the user Input given by Users ")

const readLine = require("readline")

// Create An interface for reading input input from the command Line Okay 

const r1 = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});


// let Ask to the User for the Name 

r1.question('What is Your Name Please Enter Here ',(name) =>{
    console.log(`My Name is ${name}`)
   

    r1.question('What is favourites Color',(color) =>{
        console.log(`The fav Color is ${color}`)
        r1.close()    
    });

   
})



