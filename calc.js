// переменные
let first_number = '';
let second_number = '';
let sign = '';
let finish = false;
let operate = false;
let result = '';
let memory = '';

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

// экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    first_number = '';
    second_number = '';
    let result = '';
    sign = '';
    finish = false;
    operate = false;
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

    // if (finish && key == '=') {
    //     first_number = result;
    //     finish = false;
    // }
    // else if (finish) {
    //     first_number = ''; // переместить очистку
    //     second_number = '';
    //     sign = '';
    //     finish = false;
    // }
    
    if (digit.includes(key)) {
        if(sign == '' && second_number == '') {
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
        if (sign != '') {operate = true; console.log('повторно знак');}
        sign = key;
        console.log(first_number, sign, second_number);
        out.textContent = sign;
        if (!operate) return;
    }

    if (key == '=' || operate) {
        console.log(first_number, sign, second_number, result);
        if (result != '') second_number = result;
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
        console.log(first_number, sign, second_number, result);
        return;
    }
}