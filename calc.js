// переменные
let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;
let result = '';
let memory = '';
let func = false;
let power = false;
let dot = false;
let rad = false;
let arc = false;
let constant = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', '*', '/'];
const functions = ['ln', 'lg', '√', 'ex', '10x', 'xy', 'sin', 'cos', 'tg', '1/X', 'π'];
const memoryOper = ['П+X2', 'X↔П', 'П-', 'П+', 'ИП', 'ЗАП'];

// экран
const out = document.querySelector('.calc-screen p');

function radOrDegr() {
    if (document.getElementById('checkRad').checked)
        rad = true;
    else
        rad = false;
    console.log(rad);
}

function max(x) {
    return (f(x) > 7)
}

function checkMinus(x) {
    if (x < 0)
        document.getElementById('screenMinus').style.opacity = 1;
    else
        document.getElementById('screenMinus').style.opacity = 0;
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
        button15.innerText = '↔';
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
        button15.innerText = 'X↔П';
        button16.innerText = '1/X';
        button17.innerText = 'π';
        button18.innerText = 'П-';
        button19.innerText = 'П+';
        button20.innerText = 'ИП';
    }
}

function funcEnable() {
    if (power)
    {
        if (!func) {
            func = true;
            buttonChange();
        } else {
            if(sign !== '') {
                if (secondNumber.toString().length === 0) secondNumber = 0;
                secondNumber = secondNumber.toString().slice(0, -1);
                out.textContent = secondNumber;
            }
            else {
                firstNumber = firstNumber.toString().slice(0, -1);
                if (firstNumber.toString().length === 0) firstNumber = 0;
                out.textContent = firstNumber;
            }
        }
    }
}

const f = x => ((x.toString().includes('.')) ? (x.toString().includes('-') ? (x.toString().length - 2) : 
(x.toString().length - 1)) : (x.toString().includes('-') ? (x.toString().length - 1) : (x.toString().length))); // Количество разрядов в числе

function cut (x) {
    x = parseFloat(x).toFixed(8 - x.toString().split('.')[0].length); 
    x.toN
    while(f(x) > 7 + 1) {
        console.log(f(x));
        x = x.toString().slice(0, -1);
        document.getElementById('screenOverflow').style.opacity = 1;
    }
    if (x.toString()[8] === '.')  x = x.toString().slice(0, -1); // обрезаем точку, если она последняя
    if (x.toString().includes('.')) while(x.toString().endsWith('0'))
        x = x.toString().slice(0, -1);
    return x;
}
// печать точки
function makeDot() {
    if (power) {
        if (!func) {
            if (sign != '' && secondNumber === '') out.textContent = '';
            if (!dot) {
                dot = true;
                if (sign == '' && secondNumber === '' || constant) {
                    if (constant) {
                        firstNumber = '0.'; 
                        out.textContent = '0.'; 
                        finish = false;
                        document.getElementById('screenMinus').style.opacity = 0;
                        return;
                    }
                    if (firstNumber === '') firstNumber = 0;
                    firstNumber += '.';
                    out.textContent += '.';
                } else {
                    if (secondNumber === '') secondNumber = 0;
                    secondNumber += '.';
                    out.textContent += '.';
                }
            }
        }
    }
}
// печать нуля
function addZero() {
    if (power) {
        if (!func) {
            if (sign != '' && secondNumber === '') out.textContent = '';
            if (dot) {
                console.log(sign == '');
                if (sign == '' && secondNumber === '') { // если вводится первое число
                    if (firstNumber === '') out.textContent = firstNumber = 0;
                    else if (!max(firstNumber)) {
                        firstNumber += 0;
                        out.textContent += 0;
                     }
                } else { // если вводится второе число
                    if (secondNumber === '') out.textContent = secondNumber = 0;
                    else if (!max(secondNumber)) {
                        secondNumber += 0;
                        out.textContent += 0;
                    }
                }
            } else if (!out.textContent.toString().startsWith(0)) {
                if (sign == '' && secondNumber === '' || constant) { // если вводится первое число
                    if (constant) {
                        firstNumber = 0; 
                        out.textContent = 0; 
                        finish = false; 
                        document.getElementById('screenMinus').style.opacity = 0;
                        return;
                    }
                    if (firstNumber === '') out.textContent = firstNumber = 0;
                    else if (!max(firstNumber)) {
                         firstNumber += 0;
                        out.textContent += 0;
                    }
                } else { // если вводится второе число
                    if (secondNumber === '') out.textContent = secondNumber = 0;
                    else if (!max(secondNumber)) {
                        secondNumber += 0;
                        out.textContent += 0;
                    }
                }
            }   
        } else {
            arc = true;
        }
    }     
}
// Обмен регистра индикации и рабочего регистра
function swap () {
    if (power) {
        if (!func) {
            temp = result;
            if (temp === '') temp = 0;
            if (document.getElementById('screenMinus').style.opacity == 1)
                result = '-' + out.textContent;
            else
                result = out.textContent;
            checkMinus(temp);
            if (temp.toString().includes('.')) // проеверка является ли число в памяти дробью
                dot = true;
            else
                dot = false;
            console.log(temp, result, "swap");
            out.textContent = Math.abs(temp);
            if (sign == '') firstNumber = temp;
            else secondNumber = temp;
        }
    }
}

function clearAll() {
    if (power) {
        if (!func) {
            firstNumber = '';
            secondNumber = '';
            result = '';
            sign = '';
            finish = false;
            out.textContent = 0;
            dot = false;
            document.getElementById('screenMinus').style.opacity = 0;
            document.getElementById('screenOverflow').style.opacity = 0;
        } else {
            func = false;
            arc = false; // Вынести в головную функцию?
            buttonChange();
        }
    }
}
// инверсия числа
function inv() {
    if (power) {
        if (!func) {
            if (sign === '') {
                firstNumber = - firstNumber;
                checkMinus(firstNumber);
            } else {
                secondNumber = - secondNumber;
                checkMinus(secondNumber);
            }
        }
    }
}

document.querySelector('.buttons').onclick = (event) => {
    if (power) {
        // нажата не кнопка
        if (!event.target.classList.contains('btn')) return;
        // нажата кнопка очистки
        if (event.target.classList.contains('clear')) return;

        // нажатая кнопка
        const key = event.target.textContent;
    
        if (constant && key != '=') {
            constant = false;
            secondNumber = '';
            sign = '';
        }
        console.log(key);

        if (digit.includes(key)) {
            if (sign == '' && secondNumber === '') {
                if (finish) {
                    firstNumber = key; 
                    out.textContent = firstNumber; 
                    finish = false; 
                    document.getElementById('screenMinus').style.opacity = 0;
                    return;
                }
                if (firstNumber.toString()[0] === '0' && !dot) firstNumber = key;
                else if (!max(firstNumber)) firstNumber += key;
                out.textContent = firstNumber;
                console.log(firstNumber);
            } else {
                if (secondNumber.toString()[0] === '0' && !dot) secondNumber = key;
                else if (!max(secondNumber)) secondNumber += key;
                out.textContent = secondNumber;
                finish = false;
            }
            return;
        }

        if (functions.includes(key)) {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            switch (key) {
                case 'ln':
                    result = Math.log(parseFloat(tempSign + out.textContent));
                    break;
                case 'lg':
                    result = Math.log(parseFloat(tempSign + out.textContent)) / Math.log(10);
                    break;
                case '√':
                    result = Math.sqrt(parseFloat(tempSign + out.textContent));
                    break;
                case 'ex':
                    result = Math.exp(parseFloat(tempSign + out.textContent));
                    break;
                case '10x':
                    console.log(tempSign + out.textContent);
                    result = Math.pow(10, parseFloat(tempSign + out.textContent));
                    break;
                case 'xy':
                    sign = 'xy';
                    break;
                case 'sin':
                    if (arc) {
                        if (rad) result = Math.asin(parseFloat(tempSign + out.textContent));
                        else result = Math.asin(parseFloat(tempSign + out.textContent)) * 180 / Math.PI;
                    } else {
                        if (rad) result = Math.sin(parseFloat(tempSign + out.textContent));
                        else result = Math.sin(parseFloat(tempSign + out.textContent) * Math.PI / 180);
                    }
                    break;
                case 'cos':
                    if (arc) {
                        if (rad) result = Math.acos(parseFloat(tempSign + out.textContent));
                        else result = Math.acos(parseFloat(tempSign + out.textContent)) * 180 / Math.PI;
                    } else {
                        if (rad) result = Math.cos(parseFloat(tempSign + out.textContent));
                        else result = Math.cos(parseFloat(tempSign + out.textContent) * Math.PI / 180);
                    }
                    break;
                case 'tg':
                    if (arc) {
                        if (rad) result = Math.atan(parseFloat(tempSign + out.textContent));
                        else result = Math.atan(parseFloat(tempSign + out.textContent)) * 180 / Math.PI;
                    } else {
                        if (rad) result = Math.tan(parseFloat(tempSign + out.textContent));
                        else result = Math.tan(parseFloat(tempSign + out.textContent) * Math.PI / 180);
                    }
                    break;
                case '1/X':
                    if (out.textContent == 0) {
                        result = 0;
                        break;
                    }
                    result = (1/parseFloat(tempSign + out.textContent));
                    console.log(8 - result.toString().split('.')[0].length);
                    break;
                case 'π':
                    result = '3.1415927';
                    break;
                // не записывать значения в result????
            }
            if (result.toString() === 'NaN') result = 0;
            result = cut(result);
            checkMinus(result);
            out.textContent = Math.abs(result);
            arc = false;
            func = false;
            finish = true; // протестировать
            buttonChange();
        }

        if (memoryOper.includes(key)) {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            switch (key) {
                case 'П+X2':
                    memory = parseFloat(memory) + Math.pow(parseFloat(out.textContent), 2);
                    break;
                case 'X↔П':
                    temp = memory;
                    if (temp === '') temp = 0;
                    if (document.getElementById('screenMinus').style.opacity == 1)
                        memory = '-' + out.textContent;
                    else
                        memory = out.textContent;
                    checkMinus(temp);
                    if (temp.toString().includes('.')) // проеверка является ли число в памяти дробью
                        dot = true;
                    else
                        dot = false;
                    console.log(temp, memory, "swap");
                    out.textContent = Math.abs(temp);
                    if (sign == '') firstNumber = temp;
                    else secondNumber = temp;
                    break;
                case 'П-':
                    memory = memory - parseFloat(tempSign + out.textContent);
                    break;
                case 'П+':
                    memory = memory + parseFloat(tempSign + out.textContent);
                    break;
                case 'ИП':
                    if (memory.toString().includes('.')) // проеверка является ли число в памяти дробью
                        dot = true;
                    else
                        dot = false;
                    checkMinus(memory);
                    out.textContent = Math.abs(memory);
                    if (sign == '') firstNumber = memory;
                    else secondNumber = memory;
                    break;
                case 'ЗАП':
                    memory = parseFloat(tempSign + out.textContent);
                    break;

            }
            arc = false;
            func = false;
            buttonChange();
        }

        if (action.includes(key)) {
            dot = false;
            console.log('нажат знак');
            if (result !== '' && finish) firstNumber = result;
            if (firstNumber !== '' && secondNumber !== '' && !finish) {
                console.log(firstNumber);
                switch (sign) {
                    case '+':
                        result = (+firstNumber) + (+secondNumber);
                        break;
                    case '-':
                        result = firstNumber - secondNumber;
                        break;
                    case '*':
                        result = firstNumber * secondNumber;
                        break;
                    case '/':
                        if (secondNumber == 0) {
                            result = 0;
                            break;
                        }
                        result = firstNumber / secondNumber;
                        break;
                    case 'xy':
                        result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
                        break;
                }
                result = cut(result);
                console.log(firstNumber, sign, secondNumber, result);
                finish = true;
                firstNumber = result;
                secondNumber = '';
                sign = '';
            }
            sign = key;
            console.log(firstNumber, sign, secondNumber, result);
            return;
        }

        if (key == '=') {
            dot = false;
            console.log(firstNumber, sign, secondNumber, result, constant);
            if (firstNumber === '') firstNumber = 0;
            else if (secondNumber === '') secondNumber = 0;
            console.log(firstNumber);
            if (result !== '' && constant) firstNumber = result;
            console.log(firstNumber);
            switch (sign) {
                case '+':
                    result = (+firstNumber) + (+secondNumber);
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    if (secondNumber == 0) {
                        result = 0;
                        break;
                    }
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
                case 'xy':
                    result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                default:
                    result = firstNumber;
            }
            console.log(result);
            result = cut(result);
            checkMinus(result);
            out.textContent = Math.abs(result);
            console.log(firstNumber, sign, secondNumber, result);
            finish = true;
            constant = true;
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
//TODO: ограничения для функций