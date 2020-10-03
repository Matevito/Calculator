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

//variables of the calculator

let first_number = "";

let second_number = "";


    //the content of the cariable will be used to let
    //know if the first or second number is being stored
let operator = "start";

let operator_simb;

const console_screen = document.getElementById("cal_console")

//numb_btns events

const numb_btns = document.querySelectorAll(".btn_num");

numb_btns.forEach((button) =>{
    button.addEventListener("click", function() {
        current_value = button.value;
        if (operator == "start"){
            //save the value in the first variable
            first_number += current_value;
            //show the variable
            console_screen.textContent = first_number;
        } else {
            //save the value in the second variable
            second_number += current_value;
            //show the first variable, the operator simbol and the second variable
            text_to_show = `${first_number} ${operator_simb} ${second_number}`

            console_screen.textContent = text_to_show
        }
    })
})

//operation btns events

const op_btns = document.querySelectorAll(".btn_op");



op_btns.forEach((button) => {
    button.addEventListener("click", function (){

        //todo: bugg when the first click is on an operator(this makes imposible to save a value in the first numb)
        if(first_number == ""){
            console.log("staap");
            return
        }

        operator = button.value;
        operator_simb = get_symb(operator);
        text_to_show = `${first_number} ${operator_simb}`;
        console_screen.textContent =text_to_show
    })
})

function get_symb (operator_){
    switch(operator_){
        case "add":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "x";
        case "divide":
            return "/"
    }
}

//equal event