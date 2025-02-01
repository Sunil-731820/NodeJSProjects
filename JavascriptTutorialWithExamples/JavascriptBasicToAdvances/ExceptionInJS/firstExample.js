console.log("This is the Example of the Try Catch Block")
var numbers = ["34","32","5","31","24","44","67"]
console.log("The length of the Array is :",numbers.length)


try{
    var a = 2;
    if(a==2){
        console.log("Ok it is True")
    }
}
catch(e){
    console.log("Exception is Found In Try Block")
}finally{
    console.log("The value of a is :",a)
}