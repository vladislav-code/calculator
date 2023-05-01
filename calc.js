// переменные
let firstNumber = ''; // для логов
let secondNumber = ''; // для логов

let logStr = ''; /////

let sign = '';
let finish = false;
let result = '';
let memory = 0;
let func = false;
let power = false;
let dot = false;
let rad = false;
let arc = false;
let lastOperaton = ''; /////

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const action = ['-', '+', '*', '/', 'xy'];
const functions = ['ln', 'lg', '√', 'e', '10', 'x', 'sin', 'cos', 'tg', '1/X', 'π'];
const memoryOper = ['П+X', 'X↔П', 'П-', 'П+', 'ИП', 'ЗАП'];

// экран
const out = document.querySelector('.calc-screen p');
// лог
const log = document.querySelector('.log p');

function powering() {
    screen = document.querySelector('.calc-screen');
    if (!power) {
        power = true;
        screen.style.backgroundColor = '#3b1b1b';
        screen.style.boxShadow = "inset 0px 0px 10px 1px #ff0000b0";
        clearAll();
    } else {
        clearAll();
        power = false;
        screen.style.backgroundColor = 'black';
        screen.style.boxShadow = "inset 0px 0px 10px 1px #000000b0";
        out.textContent = '';
        console.log(func);
    }
}

function radOrDegr() {
    if (document.getElementById('checkRad').checked)
        rad = true;
    else
        rad = false;
}

function max(x) {
    return (f(x) > 7)
}

function checkMinus(x) {
    res = 0;
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
        label = document.createElement('span');
        label.innerText = 'sin';
        label.classList = 'label';
        button1.appendChild(label);
        
        button2.innerText = '2';
        label = document.createElement('span');
        label.innerText = 'cos';
        label.classList = 'label';
        button2.appendChild(label);

        button3.innerText = '3';
        label = document.createElement('span');
        label.innerText = 'tg';
        label.classList = 'label';
        button3.appendChild(label);

        button4.innerText = '4';
        label = document.createElement('span');
        label.innerText = 'e^x';
        label.classList = 'label';
        button4.appendChild(label);

        button5.innerText = '5';
        label = document.createElement('span');
        label.innerText = '10^x';
        label.classList = 'label';
        button5.appendChild(label);

        button6.innerText = '6';
        label = document.createElement('span');
        label.innerText = 'X^y';
        label.classList = 'label';
        button6.appendChild(label);

        button7.innerText = '7';
        label = document.createElement('span');
        label.innerText = 'ln';
        label.classList = 'label';
        button7.appendChild(label);

        button8.innerText = '8';
        label = document.createElement('span');
        label.innerText = 'lg';
        label.classList = 'label';
        button8.appendChild(label);

        button9.innerText = '9';
        label = document.createElement('span');
        label.innerText = '√';
        label.classList = 'label';
        button9.appendChild(label);

        button10.innerText = '0';
        label = document.createElement('span');
        label.innerText = 'arc';
        label.classList = 'label';
        button10.appendChild(label);

        button11.innerText = '.';
        label = document.createElement('span');
        label.innerText = 'П+X^2';
        label.classList = 'label';
        button11.appendChild(label);

        button12.innerText = '/-/';
        label = document.createElement('span');
        label.innerText = 'ЗАП';
        label.classList = 'label';
        button12.appendChild(label);

        button13.innerText = 'C';
        label = document.createElement('span');
        label.innerText = 'CF';
        label.classList = 'label';
        button13.appendChild(label);

        button14.innerText = 'F';
        label = document.createElement('span');
        label.innerText = 'ДВ';
        label.classList = 'label';
        button14.appendChild(label);

        button15.innerText = '↔';
        label = document.createElement('span');
        label.innerText = 'X↔П';
        label.classList = 'label';
        button15.appendChild(label);

        button16.innerText = '/';
        label = document.createElement('span');
        label.innerText = '1/X';
        label.classList = 'label';
        button16.appendChild(label);

        button17.innerText = '*';
        label = document.createElement('span');
        label.innerText = 'π';
        label.classList = 'label';
        button17.appendChild(label);

        button18.innerText = '-';
        label = document.createElement('span');
        label.innerText = 'П-';
        label.classList = 'label';
        button18.appendChild(label);

        button19.innerText = '+';
        label = document.createElement('span');
        label.innerText = 'П+';
        label.classList = 'label';
        button19.appendChild(label);

        button20.innerText = '=';
        label = document.createElement('span');
        label.innerText = 'ИП';
        label.classList = 'label';
        button20.appendChild(label);
    } else {
        button1.innerText = 'sin';
        label = document.createElement('span');
        label.innerText = 'sin';
        label.classList = 'label';
        button1.appendChild(label);

        button2.innerText = 'cos';
        label = document.createElement('span');
        label.innerText = 'cos';
        label.classList = 'label';
        button2.appendChild(label);

        button3.innerText = 'tg';
        label = document.createElement('span');
        label.innerText = 'tg';
        label.classList = 'label';
        button3.appendChild(label);

        button4.innerText = '';
        sub = document.createElement('span');
        sub.textContent = 'e';
        sub.classList = 'span';
        sup = document.createElement('sup');
        sup.innerText = 'x';
        sup.classList = 'sup';  
        sub.appendChild(sup);
        button4.appendChild(sub);
        label = document.createElement('span');
        label.innerText = 'e^x';
        label.classList = 'label';
        button4.appendChild(label);

        button5.innerText = '';
        sub = document.createElement('span');
        sub.textContent = '10';
        sub.classList = 'span';
        sup = document.createElement('sup');
        sup.innerText = 'x';
        sup.classList = 'sup';  
        sub.appendChild(sup);
        button5.appendChild(sub);
        label = document.createElement('span');
        label.innerText = '10^x';
        label.classList = 'label';
        button5.appendChild(label);

        button6.innerText = '';
        sub = document.createElement('span');
        sub.textContent = 'x';
        sub.classList = 'span';
        sup = document.createElement('sup');
        sup.innerText = 'y';
        sup.classList = 'sup';  
        sub.appendChild(sup);
        button6.appendChild(sub);
        label = document.createElement('span');
        label.innerText = 'X^y';
        label.classList = 'label';
        button6.appendChild(label);

        button7.innerText = 'ln';
        label = document.createElement('span');
        label.innerText = 'ln';
        label.classList = 'label';
        button7.appendChild(label);

        button8.innerText = 'lg';
        label = document.createElement('span');
        label.innerText = 'lg';
        label.classList = 'label';
        button8.appendChild(label);

        button9.innerText = '√';
        label = document.createElement('span');
        label.innerText = '√';
        label.classList = 'label';
        button9.appendChild(label);

        button10.innerText = 'arc';
        label = document.createElement('span');
        label.innerText = 'arc';
        label.classList = 'label';
        button10.appendChild(label);
        
        button11.innerText = '';
        sub = document.createElement('span');
        sub.textContent = 'П+X';
        sub.classList = 'span';
        sup = document.createElement('sup');
        sup.innerText = '2';
        sup.classList = 'sup';  
        sub.appendChild(sup);
        button11.appendChild(sub);
        label = document.createElement('span');
        label.innerText = 'П+X^2';
        label.classList = 'label';
        button11.appendChild(label);

        button12.innerText = 'ЗАП';
        label = document.createElement('span');
        label.innerText = 'ЗАП';
        label.classList = 'label';
        button12.appendChild(label);

        button13.innerText = 'CF';
        label = document.createElement('span');
        label.innerText = 'CF';
        label.classList = 'label';
        button13.appendChild(label);
        
        button14.innerText = 'ДВ';
        label = document.createElement('span');
        label.innerText = 'ДВ';
        label.classList = 'label';
        button14.appendChild(label);

        button15.innerText = 'X↔П';
        label = document.createElement('span');
        label.innerText = 'X↔П';
        label.classList = 'label';
        button15.appendChild(label);

        button16.innerText = '1/X';
        label = document.createElement('span');
        label.innerText = '1/X';
        label.classList = 'label';
        button16.appendChild(label);

        button17.innerText = 'π';
        label = document.createElement('span');
        label.innerText = 'π';
        label.classList = 'label';
        button17.appendChild(label);

        button18.innerText = 'П-';
        label = document.createElement('span');
        label.innerText = 'П-';
        label.classList = 'label';
        button18.appendChild(label);

        button19.innerText = 'П+';
        label = document.createElement('span');
        label.innerText = 'П+';
        label.classList = 'label';
        button19.appendChild(label);

        button20.innerText = 'ИП';
        label = document.createElement('span');
        label.innerText = 'ИП';
        label.classList = 'label';
        button20.appendChild(label);
    }
}

function funcEnable() {
    if (power)
    {
        if (document.getElementById('screenOverflow').style.opacity == 1) return;
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
                out.textContent = out.textContent.toString().slice(0, -1);
                if (out.textContent.toString().length === 0) out.textContent = 0;
            }
        }
    }
}

const f = x => ((x.toString().includes('.')) ? (x.toString().includes('-') ? (x.toString().length - 2) : 
(x.toString().length - 1)) : (x.toString().includes('-') ? (x.toString().length - 1) : (x.toString().length))); // Количество разрядов в числе

function cut (x) {
    // if (x.toString().includes('.')) x = parseFloat(x).toFixed(8 - x.toString().split('.')[0].length); 
    if (x.toString().includes('.'))
    while (f(x) > 7 + 1) {
        x = x.toString().slice(0, -1);
        if (!x.toString().includes('.'))
            break;
    }
    while (f(x) > 7 + 1) {
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
        if (document.getElementById('screenOverflow').style.opacity == 1) return;
        if (!func) {
            // if (sign != '' && secondNumber === '') out.textContent = '';
            if (finish) {
                out.textContent = '';
                checkMinus(out.textContent);
                finish = false;
            }
            if (!dot) {
                dot = true;
                if (out.textContent ==='') out.textContent = 0;
                out.textContent += '.'
            }
        }
    }
}
// печать нуля
function addZero() {
    if (power) {
        if (document.getElementById('screenOverflow').style.opacity == 1) return;
        if (!func) {
            if (finish) {
                out.textContent = '';
                checkMinus(out.textContent);
            }
            if (dot) {
                if (!max(out.textContent)) out.textContent += 0;
            } else if (!out.textContent.toString().startsWith(0)) {
                if (!max(out.textContent)) out.textContent += 0;
            }   
        } else {
            arc = true;
        }
    }     
}
// Обмен регистра индикации и рабочего регистра
function swap () {
    if (power) {
        if (document.getElementById('screenOverflow').style.opacity == 1) return;
        if (!func) {
            temp = result;
            if (temp === '') temp = 0;
            if (document.getElementById('screenMinus').style.opacity == 1)
                result = '-' + out.textContent;
            else
                result = out.textContent;
            checkMinus(temp);
            // if (temp.toString().includes('.')) // проеверка является ли число в памяти дробью
            //     dot = true;
            // else
            //     dot = false;
            out.textContent = Math.abs(temp);
            finish = true;
        }
    }
}

function clearAll() {
    if (power) {
        if (!func) {
            firstNumber = '';
            secondNumber = '';
            if (out.textContent == 0) { 
                result = '';
                sign = '';
                lastOperaton = '';
            }
            finish = false;
            out.textContent = 0;
            dot = false;
            document.getElementById('screenMinus').style.opacity = 0;
            document.getElementById('screenOverflow').style.opacity = 0;
        } else {
            func = false;
            arc = false;
            buttonChange();
        }
    }
}
// инверсия числа
function inv() {
    if (power) {
        if (document.getElementById('screenOverflow').style.opacity == 1) return;
        if (!func) {
            // if (sign === '') {
            //     firstNumber = - firstNumber;
            //     checkMinus(firstNumber);
            // } else {
            //     secondNumber = - secondNumber;
            //     checkMinus(secondNumber);
            // }
            checkMinus(-parseFloat(out.textContent));
        }
    }
}

document.querySelector('.buttons').onclick = (event) => {
    if (power) {
        // нажата не кнопка
        if (!event.target.classList.contains('btn') && !event.target.classList.contains('sup') && !event.target.classList.contains('span')) return;
        if (document.getElementById('screenOverflow').style.opacity == 1) return;
        // нажата кнопка очистки
        // if (event.target.classList.contains('clear')) return;

        // нажатая кнопка
        key = '';
        console.log(event.target.classList);
        if (event.target.classList.contains('sup'))
            key = event.target.parentNode.textContent.slice(0, -1);  
        else 
            key = event.target.firstChild.textContent;
        // if (event.target.classList.contains('sup') && event.target.classList.contains('span')) {
        //     key = event.target.parentNode.textContent;
        //     console.log(key, result, SVGPoint); // SVG??????
        //     console.log(event.target.classList);
        // } else {
        //     key = event.target.firstChild.textContent;
        //     // console.log(key, result, sign);
        // }
        // const key = event.target.textContent;
        console.log(key);

        if (digit.includes(key)) {
            // if (finish) {
            //     secondNumber = '';
            //     dot = false;
            // }
            // if (sign == '' && secondNumber === '') {
            //     if (finish) {
            //         firstNumber = key; 
            //         out.textContent = firstNumber; 
            //         finish = false; 
            //         document.getElementById('screenMinus').style.opacity = 0;
            //         return;
            //     }
            //     if (firstNumber.toString()[0] === '0' && !dot) firstNumber = key;
            //     else if (!max(firstNumber)) firstNumber += key;
            //     out.textContent = firstNumber;
            // } else {
            //     if (secondNumber === '') document.getElementById('screenMinus').style.opacity = 0;
            //     if (secondNumber.toString()[0] === '0' && !dot) secondNumber = key;
            //     else if (!max(secondNumber)) secondNumber += key;
            //     out.textContent = secondNumber;
            //     finish = false;
            // }
            // console.log(finish);
            if (finish && !dot) {
                if (lastOperaton != '=') result = parseFloat(out.textContent); // добавить tempSign
                out.textContent = key;
                console.log(parseFloat(result) + '\n', parseFloat(tempSign + out.textContent) + '\n');
                // dot = false;
                finish = false;
                document.getElementById('screenMinus').style.opacity = 0;
                return;
            }
            if (out.textContent.toString()[0] === '0' && !dot) out.textContent = key;
            else if (!max(out.textContent)) out.textContent += key;
            return;
        }

        if (functions.includes(key)) {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            switch (key) {
                case 'ln':
                    logStr = key + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.log(parseFloat(tempSign + out.textContent));
                    break;
                case 'lg':
                    logStr = key + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.log(parseFloat(tempSign + out.textContent)) / Math.log(10);
                    break;
                case '√':
                    logStr = key + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.sqrt(parseFloat(tempSign + out.textContent));
                    // result = Math.sqrt(parseFloat(tempSign + out.textContent));
                    break;
                case 'e':
                    logStr = 'e^x' + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.exp(parseFloat(tempSign + out.textContent));
                    break;
                case '10':
                    logStr = '10^x' + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.pow(10, parseFloat(tempSign + out.textContent));
                    break;
                case 'x':
                    logStr = 'x^y' + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.log(parseFloat(tempSign + out.textContent));
                    result = parseFloat(tempSign + out.textContent);
                    sign = 'x';
                    break;
                case 'sin':
                    if (arc) {
                        logStr = 'arc' + key + '(' + parseFloat(tempSign + out.textContent) + ')';
                        if (rad) out.textContent = Math.asin(parseFloat(tempSign + out.textContent));
                        else out.textContent = Math.asin(parseFloat(tempSign + out.textContent)) * 180 / Math.PI;
                    } else {
                        logStr = key + '(' + parseFloat(tempSign + out.textContent) + ')';
                        if (rad) out.textContent = Math.sin(parseFloat(tempSign + out.textContent));
                        else out.textContent = Math.sin(parseFloat(tempSign + out.textContent) * Math.PI / 180);
                    }
                    break;
                case 'cos':
                    if (arc) {
                        logStr = 'arc' + key + '(' + parseFloat(tempSign + out.textContent) + ')';
                        if (rad) out.textContent = Math.acos(parseFloat(tempSign + out.textContent));
                        else out.textContent = Math.acos(parseFloat(tempSign + out.textContent)) * 180 / Math.PI;
                    } else {
                        logStr = key + '(' + parseFloat(tempSign + out.textContent) + ')';
                        if (rad) out.textContent = Math.cos(parseFloat(tempSign + out.textContent));
                        else out.textContent = Math.cos(parseFloat(tempSign + out.textContent) * Math.PI / 180);
                    }
                    break;
                case 'tg':
                    if (arc) {
                        logStr = 'arc' + key + '(' + parseFloat(tempSign + out.textContent) + ')';
                        if (rad) out.textContent = Math.atan(parseFloat(tempSign + out.textContent));
                        else out.textContent = Math.atan(parseFloat(tempSign + out.textContent)) * 180 / Math.PI;
                    } else {
                        logStr = key + '(' + parseFloat(tempSign + out.textContent) + ')';
                        if (rad) out.textContent = Math.tan(parseFloat(tempSign + out.textContent));
                        else out.textContent = Math.tan(parseFloat(tempSign + out.textContent) * Math.PI / 180);
                    }
                    break;
                case '1/X':
                    logStr = key + '(' + parseFloat(tempSign + out.textContent) + ')';
                    if (out.textContent == 0) {
                        result = 0;
                        break;
                    }
                    out.textContent = (1/parseFloat(tempSign + out.textContent));
                    break;
                case 'π':
                    logStr = key;
                    out.textContent = '3.1415927';
                    break;
            }
            out.textContent = cut(out.textContent);
            checkMinus(out.textContent);
            out.textContent = Math.abs(parseFloat(out.textContent));
            // result = cut(result);
            if (out.textContent.toString() === 'Infinity' || out.textContent.toString() === '-Infinity') {
                out.textContent = 0;
                document.getElementById('screenMinus').style.opacity = 0;
            }
            // if (document.getElementById('screenOverflow').style.opacity == 1) result = 0;
            // if (result.toString() === 'NaN') result = 0;
            // if (secondNumber === '' && sign != 'xy')
            //     firstNumber = result;
            // else
            //     secondNumber = result;
            // out.textContent = Math.abs(result);
            arc = false;
            func = false;
            buttonChange();
            finish = true;
            console.log(result);
            logStr = logStr + '=' + parseFloat(tempSign + out.textContent);

            if (logStr.includes('=')) 
                log.textContent = log.textContent + logStr + '\n';
            return;
        }

        if (memoryOper.includes(key)) {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            switch (key) {
                case 'П+X':
                    memory = parseFloat(memory) + Math.pow(parseFloat(out.textContent), 2);
                    memory = cut(memory);
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
                    out.textContent = Math.abs(temp);
                    if (sign == '') firstNumber = temp;
                    else secondNumber = temp;
                    break;
                case 'П-':
                    memory = memory - parseFloat(tempSign + out.textContent);
                    memory = cut(memory);
                    break;
                case 'П+':
                    memory = memory + parseFloat(tempSign + out.textContent);
                    memory = cut(memory);
                    break;
                case 'ИП':
                    if (memory.toString().includes('.')) // проеверка является ли число в памяти дробью
                        dot = true;
                    else
                        dot = false;
                    checkMinus(memory);
                    out.textContent = Math.abs(memory);
                    break;
                case 'ЗАП':
                    memory = parseFloat(tempSign + out.textContent);
                    break;
            }
            if (key == 'П+X') 
                logStr = key + '^2';
            else 
                logStr = key;
            finish = true;
            arc = false;
            func = false;
            buttonChange();
            console.log(result);
            
            log.textContent = log.textContent + logStr + '\n';
            return;
        }

        if (action.includes(key)) {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            dot = false;
            if (result !== '' && finish) firstNumber = result;
            finish = true;
            // if (result === '') {
            //     result = parseFloat(tempSign + out.textContent);
            //     sign = key;
            //     return;
            // }
            // if (firstNumber !== '' && secondNumber !== '' && !finish) {
            //     switch (sign) {
            //         case '+':
            //             result = (+firstNumber) + (+secondNumber);
            //             break;
            //         case '-':
            //             result = firstNumber - secondNumber;
            //             break;
            //         case '*':
            //             result = firstNumber * secondNumber;
            //             break;
            //         case '/':
            //             if (secondNumber == 0) {
            //                 result = 0;
            //                 break;
            //             }
            //             result = firstNumber / secondNumber;
            //             break;
            //         case 'xy':
            //             result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
            //             break;
            //     }
            if (result === '') { 
                result = parseFloat(tempSign + out.textContent);
                lastOperaton = sign;
                sign = key;
                return;
            }
            temp = parseFloat(tempSign + out.textContent);
            // console.log('temp', temp)
            if ((lastOperaton == '' || lastOperaton != sign) && lastOperaton != '='){
                [out.textContent,result] = [result,out.textContent];
                // out.textContent = result;
                // result = temp;
            } else if (lastOperaton == '=') result = parseFloat(tempSign + out.textContent);
            if (lastOperaton != '=') {
                if (sign != 'x') logStr = parseFloat(tempSign + out.textContent) + sign + parseFloat(result);
                switch (sign) {
                    case '+':
                        out.textContent = parseFloat(tempSign + out.textContent) + parseFloat(result);
                        console.log(parseFloat(result) + '\n', parseFloat(tempSign + out.textContent) + '\n');
                        // result += parseFloat(tempSign + out.textContent);
                        break;
                    case '-':
                        out.textContent = parseFloat(tempSign + out.textContent) - parseFloat(result);
                        console.log(parseFloat(result) + '\n',parseFloat(tempSign + out.textContent) + '\n');
                        // console.log(tempSign + out.textContent);
                        // result -= parseFloat(tempSign + out.textContent);
                        break;
                    case '*':
                        out.textContent = parseFloat(result) * parseFloat(tempSign + out.textContent);
                        console.log(parseFloat(result) + '\n', parseFloat(tempSign + out.textContent) + '\n');
                        // result *= parseFloat(tempSign + out.textContent);
                        break;
                    case '/':
                        if (result == 0) {
                            // result = 0;
                            out.textContent = 0;
                            break;
                        }
                        console.log(parseFloat(tempSign + out.textContent));
                        out.textContent = parseFloat(tempSign + out.textContent) / parseFloat(result);
                        console.log(parseFloat(result) + '\n', parseFloat(tempSign + out.textContent) + '\n');
                        // result /= parseFloat(tempSign + out.textContent);
                        break;
                    case 'x':
                        console.log (out.textContent, result);
                        logStr = 'x^y' + '(' + parseFloat(tempSign + out.textContent) + ')';
                        out.textContent = Math.exp(parseFloat(tempSign + out.textContent) * parseFloat(result));
                        break;
                }
            }
            // if (sign != lastOperaton) {
            //     temp = result;
            //     result = out.textContent; // присваиваем значение индикартора до результата - второе число - работает
            //     log.textContent += sign.toString() + result.toString();
            // } else log.textContent += sign + temp;
            // if (log.textContent.toString().includes(sign) && sign != '') log.textContent += '=' + out.textContent + '\n' + out.textContent; // добавить знак
            lastOperaton = sign;
            sign = key;
            // console.log(temp, result, sign, lastOperaton);
            out.textContent = cut(out.textContent);
            checkMinus(tempSign + out.textContent);
            out.textContent = Math.abs(parseFloat(out.textContent)); //!!!!! Работает ----- +++++++
            if (out.textContent.toString() === 'Infinity' || out.textContent.toString() === '-Infinity') {
                out.textContent = 0;
                document.getElementById('screenMinus').style.opacity = 0;
            }
            if (logStr.includes('=')) 
                logStr = '';
            else 
                logStr = logStr + '=' + parseFloat(tempSign + out.textContent);
            // result = cut(result);
            // checkMinus(result);
            // out.textContent = Math.abs(result);
            // result = parseFloat(tempSign + out.textContent);
            // finish = true;
            // log.textContent += sign + out.textContent;
            // console.log(firstNumber, sign, secondNumber, result, finish);
            firstNumber = result;
            secondNumber = '';
            // sign = '';
            //}
            // sign = key;
            if (logStr.includes('=')) 
                log.textContent = log.textContent + logStr + '\n';
            return;
        }

        if (key == '=') {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            dot = false;
            if (result !== '' && finish) firstNumber = result;
            if (firstNumber === '') firstNumber = 0;
            else if (secondNumber === '') secondNumber = 0;
            console.log(result);
            // switch (sign) {
            //     case '+':
            //         result = (+firstNumber) + (+secondNumber);
            //         break;
            //     case '-':
            //         result = firstNumber - secondNumber;
            //         break;
            //     case '*':
            //         result = firstNumber * secondNumber;
            //         break;
            //     case '/':
            //         if (secondNumber == 0) {
            //             result = 0;
            //             break;
            //         }
            //         result = parseFloat(firstNumber) / parseFloat(secondNumber);
            //         break;
            //     case 'xy':
            //         result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
            //         break;
            //     default:
            //         result = firstNumber;
            // }
            // if (result === '') result = parseFloat(tempSign + out.textContent);
            // temp = parseFloat(tempSign + out.textContent);
            if (result === '') { 
                result = parseFloat(tempSign + out.textContent);
                lastOperaton = sign;
                // sign = key;
                return;
            }
            temp = parseFloat(tempSign + out.textContent);
            console.log('before', parseFloat(tempSign + out.textContent), parseFloat(result));
            console.log('oper', sign, lastOperaton);
            if (lastOperaton == '' || (lastOperaton != '=')) { // sign != lastOperation ?
                [out.textContent,result] = [result,out.textContent];
            }
            if (sign != 'x') logStr = parseFloat(tempSign + out.textContent) + sign + parseFloat(result);
            switch (sign) {
                case '+':
                    out.textContent = parseFloat(tempSign + out.textContent) + parseFloat(result);
                    //result += parseFloat(tempSign + out.textContent);
                    break;
                case '-':
                    console.log(parseFloat(tempSign + out.textContent), parseFloat(result));
                    out.textContent = parseFloat(tempSign + out.textContent) - parseFloat(result);
                    // result -= parseFloat(tempSign + out.textContent);
                    break;
                case '*':
                    console.log(parseFloat(tempSign + out.textContent), parseFloat(result));
                    out.textContent = parseFloat(tempSign + out.textContent) * parseFloat(result);
                    // result *= parseFloat(tempSign + out.textContent);
                    break;
                case '/':
                    if (result == 0) {
                        // result = 0;
                        out.textContent = 0;
                        break;
                    }
                    out.textContent = parseFloat(tempSign + out.textContent) / parseFloat(result);
                    // result /= parseFloat(tempSign + out.textContent);
                    break;
                case 'x':
                    logStr = 'x^y' + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.exp(parseFloat(tempSign + out.textContent) * parseFloat(result));
                    // result = Math.exp(parseFloat(tempSign + out.textContent) * parseFloat(result));
                    // result = Math.pow(parseFloat(result), parseFloat(tempSign + out.textContent));
                    break;
                default:
                    result = parseFloat(tempSign + out.textContent);
            }
            // if (sign != lastOperaton && lastOperaton != '=') {
            //     result = temp; // присваиваем значение индикартора до результата - второе число - работает
            //     log.textContent += sign.toString() + result.toString();
            // } else log.textContent += sign + temp;
            lastOperaton = '=';
            // if (key != sign) {
            //     result = temp; // присваиваем значение индикартора до результата - второе число - работает
            //     log.textContent += sign.toString() + result.toString();
            // } else log.textContent += sign + temp;
            //if (log.textContent.toString().includes(sign) && sign != '') log.textContent += '=' + out.textContent + '\n' + out.textContent; // добавить знак
            // sign = key;
            out.textContent = cut(out.textContent);
            checkMinus(out.textContent);
            out.textContent = Math.abs(parseFloat(out.textContent)); //!!!!! Работает ----- +++++++
            if (out.textContent.toString() === 'Infinity' || out.textContent.toString() === '-Infinity') {
                out.textContent = 0;
                document.getElementById('screenMinus').style.opacity = 0;
            }
            logStr = logStr + '=' + parseFloat(tempSign + out.textContent);

            // result = cut(result);
            // checkMinus(result);
            // out.textContent = Math.abs(result);
            finish = true;
            console.log(result);

            if (logStr.includes('=')) 
                log.textContent = log.textContent + logStr + '\n';
            return;
        }
    }
}
// убрал лишний letGetStyle
// пофиксил проблему супа
// попробовал добавить подписи
// фикс выключения в режиме функций
// фикс X^Y
// finish true в swap
// предварительная работа с двумя регистрами
// исправил для корня
// доделать функции
// сделал двойную очистку
// изменил высоту
// добавил элемент для вывода логов
// объединил в один контейнер калькулятор и логи
// добавил возможность логирования
// добавил перенос при логировании
// стиль окна логов
// подписи на кнопках
// сделал подпись в режиме функций для X^Y
// сделал title
// сделал черную шапку
// выровнил
// сделал окантовку вокруг блока кнопок
// исправил dot и zero

//TODO интерфейс
//TODO точность оригинала
//TODO изменение логики:
// когда жмем операцию предыдущее число записывается в результат
// переполнение в случае невозможности выполнения операции
// убрать first и second number
// add borders to calc and log
// change log color + other interface fixes
// переделать контейнер на body?
// проверить работу cut в actions
// исправить обмен между операторами
// фикс логирования при вводах чисел (логирование всего примера сразу а не по частям или замена при логировании числа)
// убрать сдвиг элемента <p></p> в логировании
// fix flex for sup
// сделать подписи для кнопок и подписей
// Поднять X^Y
// логирование функций, доработка
// fix при нажатии на низ X^Y срабатывает нижняя кнопка (все кнопки - из-за label) сделать label через span?
// фикс после смены кнопок они не работают
// fix ДВ
// 2 + 3 +++++ ---- 20 -43   26 - 29 проверка знака!!!
// после переключения операции сначала делает -5 потом - 55
// 25 + 3 = 28 .2 = 3.2
// fix нажатие элемента sub не вызывает функцию
// fix 5^2= 24.999999 вместо 24.999954

// согласно техническому описанию данный калькулятор допускает погрешность 1 в младшем разряде результата
// при проведении тестирования данная погрешность привела к немного отличаещемуся результату
// для доказательства погрешности отдельно взятой операции не более 1 в младшем разряде в соотвествии с проверкой
// проведем тестирование отдельно взятых операций
// слева табличка с описанием функций справа табчка с примерами и последовательностью операций
// логирование число функция число результат
// нельзя вводить при переполнении, сброс по C
// регистр индикации хранит результат, а регистр результата второй операнд?
// проверка на infinity значения 2 xy 3 =====; фикс переполнения
// 2 xy 3 должны получить 7.9999956
// исправить makeDot и addZero для нового стиля расчета
// корень из 8 до 11 ++++ 2 + = 4., вместо 13.
// 22+33+22+ <-> 22+33=55+22=44
// не перезаписывать вычитаемое при отличных операциях
// запушить в другую ветку