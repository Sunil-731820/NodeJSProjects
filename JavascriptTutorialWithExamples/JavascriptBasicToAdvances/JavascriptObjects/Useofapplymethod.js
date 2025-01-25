console.log("The Use of the Useofapplymethod.js is ")

var array = [7,5,9,1]
var max = Math.max.apply(null,array)
console.log("The Max Value is ",max)


// The Min value is 
var minValue = Math.min.apply(null,array)
console.log("The Min value from The given Array is ",minValue)


// Adding the New Array into the Existing Array Okay 


var existingArray = [1,2,3,4]
var newArray = [5,6,7,8,9]

array.push.apply(existingArray,newArray)
console.log("the Size of the Array After Pushing :",existingArray.length)

for(i in existingArray){
    console.log("Array Object from the Existing one is :",existingArray[i])
}

// Let jOins the Different Array Data types 

var arrayOfNumber = [1,2,3,4]
var arrayOfString = ["One","Two","three","Four"]
array.push.apply(arrayOfNumber,arrayOfString)
console.log("After Adding the New Size of the Array is :",arrayOfNumber.length)

console.log("Object from The Array One By one is :")
for(i in arrayOfNumber){
    console.log(arrayOfNumber[i])
}


// use of Bind Methods 

var website = {
    name:"Java",
    getName : function(){
        return this.name
    }
}

var unboundGetName = website.getName
var boundGetName = unboundGetName.bind(website)
console.log("the value of te Bound One is :")
console.log(boundGetName())

// Use of call method in JS

function Emp(id,name){
    this.id = id,
    this.name = name;
}

function PermanentEmp(id,name){
    Emp.call(this,id,name)
}

console.log("The Id is :")
console.log(new PermanentEmp(101,"John Martin"))


//  use of the toString Method In JS 

function add(a,b){
    return a+b;
}

console.log("The Sum of the Two Number is :",add.toString())

