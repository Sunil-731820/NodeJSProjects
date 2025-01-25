console.log("This is the Example of the ArrayInJS ")

var numbers = [1,2,3,4,5,6,7,8,9]
console.log("the Size of the Array is :",numbers.length)

var emp = ["Sunil","Harish","Subham"]
console.log("The Size of the EMp Array is :",emp.length)
for(i in emp){
    console.log(emp[i])
}

console.log("using for Loop ")
for(i=0;i<emp.length;i++){
    console.log(emp[i])
}

// Array Directly using new keyword 

var arrayName = new Array()
arrayName[0] = "Java";
arrayName[1] = "Python";
arrayName[2] = "C++";

for(i in arrayName){
    console.log(arrayName[i])
}

// Using for Loop normally 

for(i=0;i<arrayName.length;i++){
    console.log(arrayName[i])
}


// using JS Array Constructor

var emp = new Array("Jai","Vijay","Smith")
console.log("the Size of the Array is :",emp.length)

for(i in emp){
    console.log(emp[i])
}

console.log("Using for Loop ")
for(i =0 ;i<emp.length;i++){
    console.log(emp[i])
}


//  Use of the concatenate 

var array1 = ["C","C++","Java","Python"]
var array2 = ["JS","Android","IOS"]

var result = array1.concat(array2)
console.log("The Size of The Array is :",result.length)
for(i in result){
    console.log(result[i])
}

// Adding the multiple Array in Single Array 

var firstArray = ["C","C++","Java","Python","Ruby"]
var secondArray = ["Android","Kotlin"]
var thirdArray = ["IOS","C#"]

console.log("Now Adding the two Array in Single Array okay")

var resultedArray = firstArray.concat(secondArray,thirdArray)
console.log("the first Array Size is :",resultedArray.length)

for(i in resultedArray){
    console.log(resultedArray[i])
}

// Use of copyWithIn() 

var arr = ["AngularJS","Node.js","JQuery","BootStrap"]

var resultAftercopyingIsDone = arr.copyWithin(0,1,3)
console.log(resultAftercopyingIsDone)


//  use of the entries 