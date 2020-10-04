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

function round (value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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
let operator = "";

let operator_simb;

const console_screen = document.getElementById("cal_console")

//numb_btns events

const numb_btns = document.querySelectorAll(".btn_num");

numb_btns.forEach((button) =>{
    button.addEventListener("click", function() {
        current_value = button.value;
        if (operator == ""){
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
        if(first_number == ""){
            //todo:check if this can be a break statement
            return;
        }
        // op_btn as an equal statement
        else if (second_number !== ""){
            solve_operation();
            operator = button.value;
            operator_simb = get_symb(operator);
            text_to_show = `${first_number} ${operator_simb}`;
            console_screen.textContent =text_to_show;
            return;
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
            return "/";
    }
}

//equal btn event

const solve_btn = document.getElementById("solve");

solve_btn.addEventListener("click", function(){
    solve_operation ()
})

function solve_operation (){
    //if the varaibles dont have values dont run the code
    if (first_number == "" || second_number == ""){
        return;
    };
    let number_1 =  parseFloat(first_number);
    let number_2 = parseFloat(second_number);

    //divide by 0 bugg solve
    if(number_2 == 0){
        second_number = "";
        text_to_show = `${first_number} ${operator_simb}`;
        console_screen.textContent = text_to_show;
        return;
    }
    let result = operate(operator,number_1,number_2);
    //round upp function
    result = round(result,5);
    result = result.toString();
    first_number = result;
    second_number = "";

    //todo: round up answers with long decimals
    console_screen.textContent = result;
}

//clear btn event

const clear_btn = document.getElementById("clear");

clear_btn.addEventListener("click", function(){
    first_number = "";
    second_number = "";
    operator = "";
    operator_simb = "";
    console_screen.textContent = ""
});

// decimal btn event
const decimal_btn = document.getElementById("decimal_btn");

decimal_btn.addEventListener("click", function(){

    //identify wich variable is being modified
    let num_position;
    if(second_number == ""){
        num_position = "first";
    } else {
        num_position = "second";
    }
    
    let first_array = first_number.split("");
    let second_array = second_number.split("");

    
    //put the decimal point in the variable if is possible
    if (num_position == "first"){
        let found = find_element(first_array, ".");
        if (found == "."){
            return
        }
        first_array.push(".");
        first_number = first_array.join("");
        console_screen.textContent = first_number;

    }else{
        let found = find_element(second_array,".");
        if (found == "."){
            return
        }
        second_array.push(".");
        second_number = second_array.join("");
        text_to_show = `${first_number} ${operator_simb} ${second_number}`;
        console_screen.textContent = text_to_show;

    }

})

function find_element (array_, string) {
    for (i=0; i<array_.length; i++){
        current_element = array_[i];
        if(current_element == "."){
            return ".";
        }
    }
    return "no found"
}

/// positive/negative btn event

const pos_neg_btn = document.getElementById("pos_neg_btn");

pos_neg_btn.addEventListener("click", function () {
    //identify wich variable we are modifying
    let num_position;
    if(second_number == ""){
        num_position = "first";
    } else {
        num_position = "second";
    }
    
    let first_array = first_number.split("");
    let second_array = second_number.split("");

    //search the string for - and act accordingly
    if (num_position == "first"){
        let sign = first_array[0];
        if(sign == "-"){
            first_array.splice(0,1);
            first_number = first_array.join("");
            console_screen.textContent = first_number;
            return;
        }
        first_array.unshift("-");
        first_number = first_array.join("");
        console_screen.textContent = first_number;
        
    }else {
        let sign = second_array[0];
        if (sign == "-"){
            second_array.splice(0,1);
            second_number = second_array.join("");
            text_to_show = `${first_number} ${operator_simb} ${second_number}`;
            console_screen.textContent = text_to_show;
            return
        }
        second_array.unshift("-");
        second_number = second_array.join("");
        text_to_show = `${first_number} ${operator_simb} ${second_number}`;
        console_screen.textContent = text_to_show;
    }

})

// backSpace_btn event