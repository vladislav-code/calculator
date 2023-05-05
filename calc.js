// переменные
let logStr = '';
let sign = '';
let finish = false;
let result = '';
let memory = 0;
let func = false;
let power = false;
let dot = false;
let rad = false;
let arc = false;
let lastOperaton = '';

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
            out.textContent = out.textContent.toString().slice(0, -1);
            if (out.textContent.toString().length === 0 || finish) out.textContent = 0;
        }
    }
}

const f = x => ((x.toString().includes('.')) ? (x.toString().includes('-') ? (x.toString().length - 2) : 
(x.toString().length - 1)) : (x.toString().includes('-') ? (x.toString().length - 1) : (x.toString().length))); // Количество разрядов в числе

function cut (x) {
    if (x.toString().includes('.')) x = parseFloat(x).toFixed(8 - x.toString().split('.')[0].length); 
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
            out.textContent = Math.abs(temp);
            finish = true;
            dot = false;
        }
    }
}

function clearAll() {
    if (power) {
        if (!func) {
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
        if (document.getElementById('screenMinus').style.opacity == 1)
            tempSign = '-';
        else
            tempSign = '+';
        if (!func) {
            checkMinus(-parseFloat(tempSign + out.textContent));
        }
    }
}

document.querySelector('.buttons').onclick = (event) => {
    if (power) {
        // нажата не кнопка
        if (!event.target.classList.contains('btn') && !event.target.classList.contains('sup') && !event.target.classList.contains('span')) return;
        if (document.getElementById('screenOverflow').style.opacity == 1) return;

        // нажатая кнопка
        key = '';
        if (event.target.classList.contains('sup'))
            key = event.target.parentNode.textContent.slice(0, -1);  
        else 
            key = event.target.firstChild.textContent;

        if (digit.includes(key)) {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            if (finish && !dot) {
                if (lastOperaton != '=' && sign != '') result = parseFloat(tempSign + out.textContent);
                out.textContent = key;
                finish = false;
                document.getElementById('screenMinus').style.opacity = 0;
                return;
            }
            if (out.textContent.toString()[0] === '0' && !dot) out.textContent = key;
            else if (!max(out.textContent)) out.textContent += key;
            return;
        }

        if (functions.includes(key)) {
            dot = false;
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
                    result = cut(parseFloat(tempSign + out.textContent));
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
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            out.textContent = Math.abs(parseFloat(out.textContent));
            if (out.textContent.toString() === 'Infinity' || out.textContent.toString() === '-Infinity' || out.textContent.toString() === 'NaN') {
                out.textContent = 0;
                document.getElementById('screenMinus').style.opacity = 0;
                document.getElementById('screenOverflow').style.opacity = 1;
            }
            if (document.getElementById('screenOverflow').style.opacity == 1 && out.textContent != 0)
                out.textContent = 0;
            arc = false;
            func = false;
            buttonChange();
            finish = true;
            logStr = logStr + '=' + parseFloat(tempSign + out.textContent);

            if (key != 'x' && key != 'π' && key != '√' && key != '1/X') {
                sign = '';
                result = '';
            }
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
                        memory = parseFloat(out.textContent);
                    checkMinus(temp);
                    out.textContent = parseFloat(Math.abs(temp));
                    dot = false;
                    break;
                case 'П-':
                    memory = parseFloat(memory) - parseFloat(tempSign + out.textContent);
                    memory = cut(memory);
                    break;
                case 'П+':
                    memory = parseFloat(memory) + parseFloat(tempSign + out.textContent);
                    memory = cut(memory);
                    break;
                case 'ИП':
                    checkMinus(memory);
                    out.textContent = parseFloat(Math.abs(memory));
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
            
            log.textContent = log.textContent + logStr + '\n';
            return;
        }

        if (action.includes(key)) {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            dot = false;
            if (result === '') { 
                result = parseFloat(tempSign + out.textContent);
                lastOperaton = sign;
                sign = key;
                finish = true;
                return;
            }
            temp = parseFloat(tempSign + out.textContent);
            if (lastOperaton != '=' && !finish) {
                out.textContent = tempSign + out.textContent;
                [out.textContent,result] = [result,out.textContent];
                checkMinus(out.textContent);
                out.textContent = Math.abs(out.textContent);
            } else if (lastOperaton == '=') result = parseFloat(tempSign + out.textContent);
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            if (lastOperaton != '=') {
                if (sign != 'x') logStr = parseFloat(tempSign + out.textContent) + sign + parseFloat(result);
                switch (sign) {
                    case '+':
                        out.textContent = parseFloat(tempSign + out.textContent) + parseFloat(result);
                        break;
                    case '-':
                        out.textContent = parseFloat(tempSign + out.textContent) - parseFloat(result);
                        break;
                    case '*':
                        out.textContent = parseFloat(tempSign + out.textContent) * parseFloat(result);
                        break;
                    case '/':
                        if (result == 0) {
                            out.textContent = 0;
                            break;
                        }
                        out.textContent = parseFloat(tempSign + out.textContent) / parseFloat(result);
                        break;
                    case 'x':
                        logStr = 'x^y' + '(' + parseFloat(tempSign + out.textContent) + ')';
                        out.textContent = Math.exp(parseFloat(tempSign + out.textContent) * parseFloat(result));
                        break;
                }
            }
            finish = true;
            lastOperaton = sign;
            sign = key;
            out.textContent = cut(out.textContent);
            checkMinus(out.textContent);
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            out.textContent = Math.abs(parseFloat(out.textContent));
            if (out.textContent.toString() === 'Infinity' || out.textContent.toString() === '-Infinity') {
                out.textContent = 0;
                document.getElementById('screenMinus').style.opacity = 0;
                document.getElementById('screenOverflow').style.opacity = 1;
            }
            if (logStr.includes('=')) 
                logStr = '';
            else if (logStr.includes(lastOperaton))
                logStr = logStr + '=' + parseFloat(tempSign + out.textContent);
            if (logStr.includes('=')) 
                log.textContent = log.textContent + logStr + '\n';
            if (out.textContent.includes('e')) out.textContent = (out.textContent.toString()[0] / Math.pow(10, out.textContent.toString().split('-')[1])).toFixed(out.textContent.toString().split('-')[1]);
            return;
        }

        if (key == '=') {
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            dot = false;
            if (result === '') { 
                result = parseFloat(tempSign + out.textContent);
                lastOperaton = sign;
                finish = true;
                return;
            }
            if (lastOperaton == '' || (lastOperaton != '=')) {
                out.textContent = tempSign + out.textContent;
                [out.textContent,result] = [result,out.textContent];
                checkMinus(out.textContent);
                if (document.getElementById('screenMinus').style.opacity == 1)
                    tempSign = '-';
                else
                    tempSign = '+';
                out.textContent = Math.abs(out.textContent);
            }
            if (sign != 'x') logStr = parseFloat(tempSign + out.textContent) + sign + parseFloat(result);
            switch (sign) {
                case '+':
                    out.textContent = parseFloat(tempSign + out.textContent) + parseFloat(result);
                    break;
                case '-':
                    out.textContent = parseFloat(tempSign + out.textContent) - parseFloat(result);
                    break;
                case '*':
                    out.textContent = parseFloat(tempSign + out.textContent) * parseFloat(result);
                    break;
                case '/':
                    if (result == 0) {
                        out.textContent = 0;
                        break;
                    }
                    out.textContent = parseFloat(tempSign + out.textContent) / parseFloat(result);
                    break;
                case 'x':
                    logStr = 'x^y' + '(' + parseFloat(tempSign + out.textContent) + ')';
                    out.textContent = Math.exp(parseFloat(tempSign + out.textContent) * parseFloat(result));
                    result = '';
                    break;
                default:
                    result = parseFloat(tempSign + out.textContent);
            }
            lastOperaton = '=';
            out.textContent = cut(out.textContent);
            checkMinus(out.textContent);
            if (document.getElementById('screenMinus').style.opacity == 1)
                tempSign = '-';
            else
                tempSign = '+';
            out.textContent = Math.abs(parseFloat(out.textContent));
            if (out.textContent.toString() === 'Infinity' || out.textContent.toString() === '-Infinity') {
                out.textContent = 0;
                document.getElementById('screenMinus').style.opacity = 0;
                document.getElementById('screenOverflow').style.opacity = 1;
            }
            logStr = logStr + '=' + parseFloat(tempSign + out.textContent);

            finish = true;

            if (logStr.includes('=')) 
                log.textContent = log.textContent + logStr + '\n';
            if (out.textContent.includes('e')) out.textContent = (out.textContent.toString()[0] / Math.pow(10, out.textContent.toString().split('-')[1])).toFixed(out.textContent.toString().split('-')[1]);
            return;
        }
    }
}