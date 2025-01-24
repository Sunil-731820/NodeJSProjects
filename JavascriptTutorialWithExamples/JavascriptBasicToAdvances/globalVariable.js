var number = 1000

function globalVariableExample(){
    var number = 200
    console.log("The Value of the number is :",number)
}

console.log("The Number from the outSide the Function is :",number)
globalVariableExample()
