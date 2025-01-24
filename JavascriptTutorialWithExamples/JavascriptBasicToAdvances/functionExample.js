console.log("This is is the Example of the function in JS")

function add(){
    return 10 + 20
}

console.log("The Sum of the Two Number is :",add())

function getName(name){
    console.log(`The name is: ${name}`);
}

getName("Sunil")


function getLastName(lastName){
    console.log(`the Last name is : ${lastName}`)
}

getLastName("Gupta")


function addTwoString(str1, str2){
    console.log(`After addition of the two String is :${str1+" "+ str2}`)
}

addTwoString("Sunil" ,"Kumar")

function multipleParameter(str1 , str2, str3){
    console.log(`After adding these three String is ${str1 + " "+ str2 + " " + str3}`)
}

multipleParameter("Sunil","Kumar","Gupta")

//  The Use of the Function Object In JS 

var add = new Function("num1","num2", "return num1+num2")
console.log("The Sum of the Two Numbers using Function Object is :",add(12,23))


// Adding the two String Using Function Object 

var addingThetwoStringIs = new Function("str1","str2","return str1 + '  '+str2")

console.log("After adding two String using new Function is :",addingThetwoStringIs("Hi","Bye"))
