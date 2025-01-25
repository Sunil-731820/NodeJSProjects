console.log("This is the Example of the Date :")
var today = new Date()
console.log("The todays date is :",today)

// Use of the getDate()

var date = new Date();
var day = date.getDate()
var month = date.getMonth()+1
var year = date.getFullYear()

console.log(day + "/" +month+ "/"+ year)

// get the CUrrent time 

var currentDate = new Date()
var h = currentDate.getHours()
var m = currentDate.getMinutes()
var s = currentDate.getSeconds()

console.log(h+":"+m+":"+s)


