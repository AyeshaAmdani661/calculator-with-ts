let display = (document.getElementById('display') as HTMLInputElement);
let buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.id == 'clear') {
            display.value = '';
        }
        else if (item.id == 'backspace') {
            let str = display.value.toString();
            display.value = str.substr(0, str.length - 1);
        }
        else if (item.id == '%') {
            let mathExp:number = parseInt(display.value) / 100
            display.value = mathExp.toString();
        }
        else if (item.id == '+/-') {
            let mathExp:number = -(parseInt(display.value))
            display.value = mathExp.toString();
        }
        else if (display.value != '' && item.id == 'equal') {
            display.value = eval(display.value);
        }
        else if (display.value == '' && item.id == 'equal') {
            display.value = 'Empty!';
            setTimeout(() => (display.value = ''), 2000);
        }
        else {
            display.value += item.id;
        }
    });
});