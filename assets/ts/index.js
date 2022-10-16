var display = document.getElementById('display');
var buttons = document.querySelectorAll('button');
buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.id == 'clear') {
            display.value = '';
        }
        else if (item.id == 'backspace') {
            var str = display.value.toString();
            display.value = str.substr(0, str.length - 1);
        }
        else if (item.id == '%') {
            var mathExp = parseInt(display.value) / 100;
            display.value = mathExp.toString();
        }
        else if (item.id == '+/-') {
            var mathExp = -(parseInt(display.value));
            display.value = mathExp.toString();
        }
        else if (display.value != '' && item.id == 'equal') {
            display.value = eval(display.value);
        }
        else if (display.value == '' && item.id == 'equal') {
            display.value = 'Empty!';
            setTimeout(function () { return (display.value = ''); }, 2000);
        }
        else {
            display.value += item.id;
        }
    });
});
