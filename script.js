let displayTyped = document.querySelector('.calc-typed');
let buttons = document.querySelectorAll('.button-num');
let buttonOperator = document.querySelectorAll('.l');
let clearBtn = document.querySelector('.c');
let equals = document.querySelector('.e');
let calcOperation = document.querySelector('.calc-operation');

var number1;
var number2;
var operator;
var answer;
var initialized = true; 

clearBtn.onclick = function(){
    displayTyped.innerHTML = "";
    calcOperation.innerHTML = ''
    answer = undefined;
    number2 = undefined;
    number1 = undefined;
}

function add(a,b) {
    return a + b
}
function divide(a,b){
    if (b === 0){
        answer = 0;
        number1 = 0;
        number2 = 0;
        return "No Way!"
    }
    return a/b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function percent(a,b){
    return (a/100)*b;
}
function operate(operator, num1, num2){
    switch(operator){
        case"%":
        return percent(num1, num2)
        case"x":
            return multiply(num1, num2);
        case"/":
            return divide(num1, num2);
        case"+":
            return add(num1, num2);
        case"-":
            return subtract(num1, num2);
    }
}

buttons.forEach(btn => {
    btn.onclick = function(){
        let text = btn.innerHTML;
        if(initialized){
        if (displayTyped.innerHTML === ''){
            displayTyped.innerHTML = text;
        } else {
            displayTyped.innerHTML += text;
        }
    } else {
        calcOperation.innerHTML = answer;
        displayTyped.innerHTML = text;
        initialized = true;
    }
        
    }
})
buttonOperator.forEach(btn => {
    btn.onclick = function(){
        operator = btn.innerHTML;
        if(displayTyped.innerHTML.length != 0 || displayTyped.innerHTML === '&nbsp;'){
            number1 = parseInt(displayTyped.innerHTML);
            
            calcOperation.innerHTML = number1 + " " + operator
        }
        if(answer != undefined && displayTyped.innerHTML ===''){
            calcOperation.innerHTML = answer + " " + operator;
        }
        displayTyped.innerHTML = '';
    }
})

equals.onclick = function(){
    if (number1 === undefined && number2 === undefined && answer=== undefined){
        calcOperation.innerHTML = displayTyped.innerHTML;
        displayTyped.innerHTML = "";
        return;
    }
    if (displayTyped.innerHTML === ''){
        number2 = answer;
    } else {
        number2 = parseInt(displayTyped.innerHTML);
    }
    answer = operate(operator, number1, number2);
    calcOperation.innerHTML = number1 + " " + operator + " " + number2;
    displayTyped.innerHTML = answer;
    initialized = false;
}

document.addEventListener('keyup', function(event){
    if(event.keyCode === 55 || event.keyCode === 103){
        event.preventDefault();
        buttons[0].click();
    }
    if(event.keyCode === 56 || event.keyCode === 104){
        event.preventDefault();
        buttons[1].click();
      }
    if(event.keyCode === 57 || event.keyCode === 105){
        event.preventDefault();
        buttons[2].click();
      }
    if(event.keyCode === 52 || event.keyCode === 100){
        event.preventDefault();
        buttons[3].click();
      }
    if(!event.shiftKey && event.keyCode === 53 || event.keyCode === 101 ){
        event.preventDefault();
        buttons[4].click();
        }
    if(event.keyCode === 54 || event.keyCode === 102){
            event.preventDefault();
            buttons[5].click();
        }
    if(event.keyCode === 49 || event.keyCode === 97){
            event.preventDefault();
            buttons[6].click();
          }
    if(event.keyCode === 50 || event.keyCode === 98){
            event.preventDefault();
            buttons[7].click();
            }
    if(event.keyCode === 51 || event.keyCode === 99){
            event.preventDefault();
            buttons[8].click();
            }
    if(event.keyCode === 48 || event.keyCode === 96){
        event.preventDefault();
        buttons[9].click();
            }
    if(!event.shiftKey && event.keyCode === 61 || event.keyCode === 13){
        event.preventDefault();
        equals.click();
            } 
    if(event.shiftKey && event.keyCode === 53){
        event.preventDefault();
        buttonOperator[0].click();
    }
    if(event.keyCode === 111 || event.keyCode === 191){
        event.preventDefault();
        buttonOperator[1].click();
    }
    if(event.keyCode === 106 || event.keyCode === 88){
        event.preventDefault();
        buttonOperator[2].click();
    }
    if(event.keyCode === 109 || event.keyCode === 173){
        event.preventDefault();
        buttonOperator[3].click();
    }
    if(event.keyCode === 107){
        event.preventDefault();
        buttonOperator[4].click();
    }
    if(event.shiftKey && event.keyCode === 61){
        event.preventDefault();
        buttonOperator[4].click();
    }
    if(event.keyCode === 8){
        event.preventDefault();
        clearBtn.click();
    }
  })

