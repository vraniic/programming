function add(num1, num2) {
    var result
    result = num1 + num2

    return result
}


function substract (num1, num2) {
    var result
    result = num1 - num2

    return result
}


function multiply (num1, num2) {
    var result
    result = num1 * num2

    return result
}


function calculate (num1, num2, operation) {
    var result

    var num1
    var num2
    var operation

    num1 = 10
    num2 = 20
    operation = add

    result = operation(num1, num2)
    return result
}


calculate (2, 5, add)