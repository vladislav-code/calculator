// переменные
let first_number = '';
let second_number = '';
let sign = '';
let finish = false;
let result = 0;
let memory = '';
let lastOperation = '';
let func = false;
let maxFirst = false;
let maxSecond = false;
let power = false;
let dot = false;
let rad = false;
let arc = false;
// TODO стили кнопок: наследование sup
// кнопки
// сделать функции через селектор вместо по нажатию????
document.querySelector('.func').onclick = funcEnable;

//TODO: доделать реализацию переключения радиан на условие checked
function radOrDegr() {
    if (document.getElementById('checkRad').checked)
        rad = true;
    else
        rad = false;
    console.log(rad);
}
// Использовать
function max(x) {
    return (f(x) > 7)
}

function buttonChange() {
    button1 = document.querySelector('.one');
    button2 = document.querySelector('.two');
    button3 = document.querySelector('.three');
    button4 = document.querySelector('.four');
    button5 = document.querySelector('.five');
    button6 = document.querySelector('.six');
    button7 = document.querySelector('.seven');
    button8 = document.querySelector('.eight');
    button9 = document.querySelector('.nine');
    button10 = document.querySelector('.zero');
    button11 = document.querySelector('.dot');
    button12 = document.querySelector('.inv');
    button13 = document.querySelector('.clear');
    button14 = document.querySelector('.func');
    button15 = document.querySelector('.swap');
    button16 = document.querySelector('.div');
    button17 = document.querySelector('.mul');
    button18 = document.querySelector('.minus');
    button19 = document.querySelector('.plus');
    button20 = document.querySelector('.res');
    if (!func) {
        button1.innerText = '1';
        button2.innerText = '2';
        button3.innerText = '3';
        button4.innerText = '4';
        button5.innerText = '5';
        button6.innerText = '6';
        button7.innerText = '7';
        button8.innerText = '8';
        button9.innerText = '9';
        button10.innerText = '0';
        button11.innerText = '.';
        button12.innerText = '/-/';
        button13.innerText = 'C';
        button14.innerText = 'F';
        button15.innerText = '\u2194';
        button16.innerText = '/';
        button17.innerText = '*';
        button18.innerText = '-';
        button19.innerText = '+';
        button20.innerText = '=';
    } else {
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
        button10.innerText = 'arc';
        
        sup = document.createElement('sup');
        sup.style.lineHeight = '0px';
        sup.innerText = '2';
        button11.innerText = 'П+X';
        button11.appendChild(sup);

        button12.innerText = 'ЗАП';
        button13.innerText = 'CF';
        button14.innerText = 'ДВ';
        button15.innerText = 'X\u2194П';
        button16.innerText = '1/X';
        button17.innerText = 'π';
        button18.innerText = 'П-';
        button19.innerText = 'П+';
        button20.innerText = 'ИП';
    }
}
// написать функцию для обработки функций
function funcEnable() {
    if (power)
    {
        if (!func) {
            func = true;
            buttonChange();
        } else {
            if(sign !== '') {
                if (second_number.toString().length === 0) second_number = 0;
                second_number = second_number.toString().slice(0, -1);
                out.textContent = second_number;
            }
            else {
                first_number = first_number.toString().slice(0, -1);
                if (first_number.toString().length === 0) first_number = 0;
                out.textContent = first_number;
            }
        }
    }
}
//TODO: Разобраться когда необходимы константы, в том числе для функций 
const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', '*', '/'];
const functions = ['ln', 'lg', '√', 'ex', '10x', 'xy', 'sin', 'cos', 'tg'];
const f = x => ((x.toString().includes('.')) ? (x.toString().length - 1) : (x.toString().length)); // Количество разрядов в числе
// const cut = x => (x.toString().includes('.') ? x.toFixed())
// переделать с =>
function cut (x) {
    while(f(x) > 7 + 1)
    x = x.toString().slice(0, -1);
    if (x.toString()[8] === '.')  x = x.toString().slice(0, -1); // обрезаем точку, если она последняя
    if (x.toString().includes('.')) while(x.toString().endsWith('0'))
        x = x.toString().slice(0, -1);
    return x;
}
//печать точки
function makeDot() {
    if (power) {
        if (!func) {
            if (!dot) {
                dot = true;
                //TODO выделить в отдельную функцию для всех случаев
                //TODO переделать '' на 0
                if (sign == '' && second_number == '') {
                    if (first_number === '') first_number = 0;
                    if (!maxFirst) first_number += '.';
                    out.textContent += '.';
                } else if (finish && first_number != '' && second_number != '') {
                    if (second_number === '') second_number = 0;
                    second_number += '.';
                    out.textContent += second_number;
                } else {
                    if (second_number === '') second_number = 0;
                    if (!maxSecond) second_number += '.';
                    out.textContent = second_number; // посмотреть реализацию переполнения точкой
                }
            }
        } else {
            memory = parseFloat(memory) + Math.pow(parseFloat(out.textContent), 2);
            console.log(memory);
        }
    }
}

function addZero() {
    if (power) {
        if (!func) {
            console.log(first_number !== '');
            if (sign === '') { // если вводится первое число
                if (first_number == '') out.textContent = first_number = 0;
                else {
                    if (!max(first_number)) {
                        first_number += 0;
                        out.textContent += 0;
                    }
                }
            } else if (sign !== '') { // если вводится второе число
                if (second_number == '') out.textContent = second_number = 0;
                else {
                    if (!max(second_number)) {
                        second_number += 0;
                        out.textContent += 0;
                    }
                }
            }
        } else {
            arc = true;
        }
    }     
}
// экран
const out = document.querySelector('.calc-screen p');

function clearAll() {
    if (power) {
        if (!func) {
            first_number = '';
            second_number = '';
            maxFirst = false;
            maxSecond = false;
            result = 0;
            sign = '';
            finish = false;
            out.textContent = result;
            dot = false;
        } else {
            func = false;
            arc = false; // Вынести в головную функцию?
            buttonChange();
        }
    }
}

function inv() {
    if (power) {
        if (!func) {
            if (sign === '')
                first_number = - first_number;
            else
                second_number = - second_number
        }
    }
}

// document.querySelector('.clear').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (power) {
        // нажата не кнопка
        if (!event.target.classList.contains('btn')) return;
        // нажата кнопка очистки
        if (event.target.classList.contains('clear')) return;

        // out.textContent = '';  Исправить; очищает экран при нажатии не кнопки
        // нажатая кнопка
        const key = event.target.textContent;
        console.log(key);

        if (digit.includes(key)) {
            if (sign == '' && second_number == '') {
                result = ''; /////
                if (first_number.toString()[0] === '0' && !dot) first_number = key;
                else if (!maxFirst) first_number += key;
                out.textContent = first_number;
            } else if (finish && first_number != '' && second_number != '') {
                second_number = key;
                finish = false;
                out.textContent = second_number;
            } else {
                if (second_number.toString()[0] === '0' && !dot) second_number = key;
                else if (!maxSecond) second_number += key;
                out.textContent = second_number;
            }
            //TODO: оформить в отдельную функцию
            if (f(first_number) > 7) maxFirst = true;
            if (f(second_number) > 7) maxSecond = true;

            console.log(first_number, sign, second_number);
            return;
        }

        //TODO: подумать над оптимальной организацией функций
        if (functions.includes(key)) {
            switch (key) {
                case 'ln':
                    result = Math.log(parseFloat(out.textContent));
                    break;
                case 'lg':
                    result = Math.log(parseFloat(out.textContent)) / Math.log(10);
                case '√':
                    result = Math.sqrt(parseFloat(out.textContent));
                case 'ex':
                    result = Math.exp(parseFloat(out.textContent));
                    break;
                case '10x':
                    result = Math.pow(10, parseFloat(out.textContent));
                case 'xy':
                    sign = 'xy';
                    break;
                case 'sin':
                    if (arc) {
                        if (rad) result = Math.asin(parseFloat(out.textContent));
                        else result = Math.asin(parseFloat(out.textContent)) * 180 / Math.PI;
                    } else {
                        if (rad) result = Math.sin(parseFloat(out.textContent));
                        else result = Math.sin(parseFloat(out.textContent) * Math.PI / 180);
                    }
                    break;
                case 'cos':
                    if (arc) {
                        if (rad) result = Math.acos(parseFloat(out.textContent));
                        else result = Math.acos(parseFloat(out.textContent)) * 180 / Math.PI;
                    } else {
                        if (rad) result = Math.cos(parseFloat(out.textContent));
                        else result = Math.cos(parseFloat(out.textContent) * Math.PI / 180);
                    }
                    break;
                case 'tg':
                    if (arc) {
                        if (rad) result = Math.atan(parseFloat(out.textContent));
                        else result = Math.atan(parseFloat(out.textContent)) * 180 / Math.PI;
                    } else {
                        if (rad) result = Math.tan(parseFloat(out.textContent));
                        else result = Math.tan(parseFloat(out.textContent) * Math.PI / 180);
                    }
                    break;
            }
            if (result.toString() === 'NaN') result = 0;
            result = cut(result);
            out.textContent = result;
            arc = false;
            func = false;
            buttonChange();
        }

        //TODO: fix calculate issue
        if (action.includes(key)) {
            dot = false;
            console.log('нажат знак');
            if (first_number != '' && second_number != '') {
                switch (sign) {
                    case '+':
                        first_number = (+first_number) + (+second_number);
                        break;
                    case '-':
                        first_number = first_number - second_number;
                        break;
                    case '*':
                        first_number = first_number * second_number;
                        break;
                    case '/':
                        if (second_number == 0) {
                            result = 0;
                            break
                        }
                        first_number = first_number / second_number;
                        break;
                    case 'xy':
                        result = Math.pow(parseFloat(first_number), parseFloat(second_number));
                }
                result = first_number
                result = cut(result);
                console.log(result)
                out.textContent = result;
                finish = true;
            }
            sign = key;
            console.log(first_number, sign, second_number, result);
            // out.textContent = sign;
            return;
        }

        if (key == '=') {
            dot = false;
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
                    if (second_number == 0) { // result = 0????
                        result = 0;
                        break
                    }
                    result = parseFloat(first_number) / parseFloat(second_number);
                    break;
                case 'xy':
                    result = Math.pow(parseFloat(first_number), parseFloat(second_number));
            }
            result = cut(result);
            out.textContent = result;
            lastOperation = sign; // сохраняем последнюю операцию
            finish = true;
            console.log(first_number, sign, second_number, result);
            operate = false;
            return;
        }
    }
}

function powering() {
    screen = document.querySelector('.calc-screen');
    let getStyle = getComputedStyle(screen);
    console.log(getStyle.backgroundColor);
    if (!power) {
        power = true;
        screen.style.backgroundColor = '#3b1b1b';
        screen.style.boxShadow = "inset 0px 0px 10px 1px #ff0000b0";
        clearAll();
    }
    else{
        power = false;
        screen.style.backgroundColor = 'black';
        screen.style.boxShadow = "inset 0px 0px 10px 1px #000000b0";
        out.textContent = '';
    }
}
//TODO: исправить деление, проверка деления на ноль, при вводе второго числа как ноль ничего не происходит
//TODO: выход из функции кроме arc и ДВ
//TODO: исправить вывод нуля
//TODO: кнопки должны соотвествовать исходнику(исправить переключение на подписи?)
//TODO: фикс цвета
//TODO: добавить служебный разряд индикации переполнения и отрицательного числа
//TODO: data-value for buttons
//TODO: сделать функции
//TODO: рефакторинг
//TODO: после равно результат должен записываться во второе число, чтобы при использовании функции работать с последним числом
//TODO: добавить подписи над кнопками
//TODO |C| |F| |ЗАП|