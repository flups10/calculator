// Get buttons
const results = document.querySelector('#results');
const allBtns = document.querySelectorAll('.buttons');

// Assign events to buttons
for (let i = 0; i < allBtns.length; i++){
    let btn = allBtns[i];
    btn.addEventListener('click', ()=> {  
        thisBtn = btn.innerHTML,
        calculate(thisBtn)
    });
};

var lastKey = '';
var currentNumber = 0;
var lastOperator = '';
var previousNumber = 0;

// Calc

function calculate(x){
    operators = ['+', '-', '/', 'X', '%']
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if (x == '='){
        results.innerHTML = ''
        braindamage()
        results.innerHTML = currentNumber
        lastOperator = ''
    } else if (operators.includes(x)){
        if (lastOperator === ''){
            lastOperator = x;
            showResults(x)  
        } else {
            braindamage()
            showResults(x)
            lastOperator = x;
        }
    } else if (numbers.includes(x)){
        if (operators.includes(lastKey)) {
            previousNumber = currentNumber;
            currentNumber = x;
            showResults(x)
        } else {
            if (results.innerHTML == '0' && x == '0'){
                results.innerHTML = '0';
            } else if (results.innerHTML == '0'){
                results.innerHTML = x
                currentNumber += x
            } 
            else {
                currentNumber += x
                showResults(x)
            }
        }
    } else {
        // it has to be AC
        lastKey = '';
        currentNumber = 0;
        lastOperator = '';
        previousNumber = 0;
        results.innerHTML = '0'
    }

    lastKey = x;
};

function braindamage(){
    if  (lastOperator == '+'){
        currentNumber = Number(previousNumber) + Number(currentNumber)
    } else if (lastOperator == '-'){
        currentNumber = Number(previousNumber) - Number(currentNumber)
    } else if (lastOperator == '/'){        
        currentNumber = Number(previousNumber) / Number(currentNumber)
    } else if (lastOperator == 'X'){
        currentNumber = Number(previousNumber) * Number(currentNumber)
    } else if (lastOperator == '%'){
        currentNumber = Number(previousNumber) % Number(currentNumber)
    }
}

function showResults(char){
    results.innerHTML += char
}