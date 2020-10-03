//calculator operation functions

function add (first_n, second_n){
    return first_n + second_n
};

function subtract (first_n, second_n){
    return first_n - second_n
};

function multiply (first_n, second_n){
    return first_n * second_n
};

function divide (first_n, second_n) {
    return first_n / second_n
};

// operate function inp: 2 numbers and an operation; output: the result of the operation between the 2 nums

function operate (operation, first_n, second_n){
    let result;
    switch (operation){
        case "add":
            result = add(first_n,second_n);
            break;

        case "subtract":
            result = subtract(first_n,second_n);
            break;

        case "multiply":
            result = multiply(first_n,second_n);
            break;

        case "divide":
            result = divide(first_n,second_n);
            break;
    }
    return result
}