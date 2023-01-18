let btn = document.querySelectorAll('button');
let screen = document.getElementsByClassName('current')[0];
let calc = []



function ifs(value) {
    if (value != "=" && value != 'del' && value != 'ac'){
        if (calc.includes(0)){
            calc.pop()
        }
        calc.push(value)
        display();
    }
    else if(value === '='){
        if(calc[0] === '/' || calc[0] === '+' || calc[0] === '-'|| calc[0] === '*'){
            error()
        } else if (calc[0] == '.' && calc[1] == '.'){
            error()
        }
        screen.textContent = eval(mainCalc);
        calc = [];
        calc.push(0)
    }
    else if (value === 'ac') {
        calc = [];
        calc.push(0)
        display();
    }
    else if (value === 'del'){
        calc.pop();
        display();
    }
}




















function display() {
    mainCalc = calc.join('');
    screen.textContent = mainCalc;
}
function error() {
    calc = [];
    screen.textContent = 'error';
}
function brain(sap) {
    let value = sap.textContent;
    ifs(value);
}

document.addEventListener('keypress', function(e){
    let code = e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '0' || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/';
    if(code) {
        if (calc.includes(0)){
            calc.pop()
        }
        calc.push(e.key)
        display();
    }
    if(e.key == 'Enter'){
        if(calc[0] === '/' || calc[0] === '+' || calc[0] === '-'|| calc[0] === '*'){
            error()
        } else if (calc[0] == '.' && calc[1] == '.'){
            error()
        }
        screen.textContent = eval(mainCalc);
        calc = [];
        calc.push(0)
    }
    else if (e.key == 'Backspace') {
        calc = [];
        calc.push(0)
        display();
    }
    else if (e.keyCode == 8 || e.which == 8){
        if(screen.textContent != '0'){
            calc.pop();
            display(); 
        }
    }
})
btn.forEach(element => {
    element.addEventListener('click', e => {
        brain(element)
    });
});

