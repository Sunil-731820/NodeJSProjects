console.log("This is the Example of the Numbers in JS ")

var number = new Number(1000)
console.log("The value of the Number is :",number)


var x = 102;
var y = 105.9;
var z = 12e4;
var n = new Number(123)

console.log("The Number x is :",x)
console.log("the Value of y is :",y)
console.log("The Value of z is :",z)
console.log("the Value of the n is :",n)


// use of isFinite 

function checkFiniteNumber(x,y){
    return x/y;
}

function validFiniteNumber(x,y){
    return x/y;
}

console.log("CHecking the Number is finite Or not")
console.log(Number.isFinite(checkFiniteNumber(10,0)))

console.log("Checking Number is Finite Or Not:")
console.log(Number.isFinite(validFiniteNumber(10,2)))

