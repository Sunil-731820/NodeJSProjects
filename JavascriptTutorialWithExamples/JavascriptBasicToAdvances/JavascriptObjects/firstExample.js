console.log("This is the Example of the Js Objects with Examples ")
var emp ={
    id : 100,
    name : "Sunil",
    Course: "Graduation in CSE"
}

console.log("the Emp number is : ",emp.id)
console.log(`the name of the Emp is ${emp.name}`)
console.log(`The Course of Emp is ${emp.Course}`)


//  Creating the Instance oof the Objects okay
var emp = new Object()
emp.id = 1000;
emp.name = "Sunil Kumar Gupta"
emp.gender = "M"

console.log("The value of the Emp name from the new Objet is :",emp.name)
console.log("the Gender is from the new Object is :",emp.gender)


// using Object Constructor 

function employee(id,name,salary){
    this.id = id,
    this.name = name,
    this.salary = salary
}

e1 = new employee(1000,"Harish",2000000)
console.log("the Emp Number from the first constructor is :",e1.id)
console.log("The name from new COnstructor is :",e1.name)
console.log("The Salary from the new Constructor is :",e1.salary)
