// переменные
let first_number = '';
let second_number = '';
let sign = '';
let finish = false;
let result = '';
let memory = '';
let lastOperation = '';
let func = false;
// TODO стили кнопок: наследование sup
// кнопки
document.querySelector('.func').onclick = funcChange;

function funcChange() {
    button1 = document.querySelector('.one');
    button2 = document.querySelector('.two');
    button3 = document.querySelector('.three');
    button4 = document.querySelector('.four');
    button5 = document.querySelector('.five');
    button6 = document.querySelector('.six');
    button7 = document.querySelector('.seven');
    button8 = document.querySelector('.eight');
    button9 = document.querySelector('.nine');
    if (!func) {
        button1.innerText = 'sin';
        button2.innerText = 'cos';
        button3.innerText = 'tg';

        sup = document.createElement('sup');
        sup.style.lineHeight = '0px';
        sup.innerText = 'x';
        button4.innerText = 'e';
        button4.appendChild(sup);

        sup = document.createElement('sup');
        sup.style.lineHeight = '0px';
        sup.innerText = 'x';
        button5.innerText = '10';
        button5.appendChild(sup);

        sup = document.createElement('sup');
        sup.style.lineHeight = '0px';
        sup.innerText = 'y';
        button6.innerText = 'x';
        button6.appendChild(sup);

        button7.innerText = 'ln';
        button8.innerText = 'lg';
        button9.innerText = '√';
        func = true;
    }
    else {
        button1.innerText = '1';
        button2.innerText = '2';
        button3.innerText = '3';
        button4.innerText = '4';
        button5.innerText = '5';
        button6.innerText = '6';
        button7.innerText = '7';
        button8.innerText = '8';
        button9.innerText = '9';
        func = false;
    }
}

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

// экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    first_number = '';
    second_number = '';
    result = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.clear').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка 
    if(!event.target.classList.contains('btn')) return;
    // нажата кнопка очистки
    if(event.target.classList.contains('clear')) return;

    out.textContent = '';
    // нажатая кнопка
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if(sign == '' && second_number == '') {
            result = ''; /////
            first_number += key;
            out.textContent = first_number;
        }
        else if (finish && first_number != '' && second_number != '') {
            second_number = key;
            finish = false;
            out.textContent = second_number;
        }
        else {
            second_number += key;
            out.textContent = second_number;
        }
        console.log(first_number, sign, second_number);
        return;
    }

    if (action.includes(key)) {
        console.log('нажат знак');
        if (first_number != '' && second_number != '') {
            switch (sign) {
                case '+': 
                    result = (+first_number) + (+second_number);
                    break;
                case '-':
                    result = first_number - second_number;
                    break;
                case '*':
                    result = first_number * second_number;
                    break;
                case '/':
                    result = first_number / second_number;
                    break;
            }
            out.textContent = result;
            finish = true;  
        }
        sign = key;
        console.log(first_number, sign, second_number, result);
        out.textContent = sign;
        return;
    }

    if (key == '=') {
        console.log(first_number, sign, second_number, result);
        if (result != '') first_number = result;
        switch (sign) {
            case '+': 
                result = parseFloat(first_number) + parseFloat(second_number);
                break;
            case '-':
                result = parseFloat(first_number) - parseFloat(second_number);
                break;
            case '*':
                result = parseFloat(first_number) * parseFloat(second_number);
                break;
            case '/':
                if (second_number == 0) {
                    result = NaN;
                    break
                }
                result = parseFloat(first_number) / parseFloat(second_number);
                break;
        }
        out.textContent = result;
        lastOperation = sign; // сохраняем последнюю операцию
        finish = true;
        console.log(first_number, sign, second_number, result);
        operate = false;
        return;
    }
}

function power() {
    power = true;
    screen = document.querySelector('.calc-screen');
    let getStyle = getComputedStyle(screen);
    console.log(getStyle.backgroundColor);
    if (getStyle.backgroundColor == 'rgb(0, 0, 0)') {
        screen.style.backgroundColor = 'aquamarine';
        clearAll();
    }
    else{
        screen.style.backgroundColor = 'black';
        out.textContent = '';
    }
}
