console.log("I am using Loops Okay")

// for loop Examples

for(i =1 ;i<=5;i++){
    console.log("The Value of the i is :",i)
}


// while Loop okay 
i  = 10
while(i>0){
    console.log("The value of the i in while loop is :",i)
    i--;
}

//  do while loops Examples 

i = 21;

do{
    console.log("The value of i from do while loop is :",i)
    i++

}while(i<25)

// for in loop Examples 

const numbers = [100,200,3000]

for(i in numbers){
    console.log("The object from The Array is :",i)
    console.log(numbers[i])
    
}