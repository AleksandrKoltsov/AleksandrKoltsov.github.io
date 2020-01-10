const domElem = {
    cont : document.querySelector('.container'),
    out : document.querySelector('.out'),
    input : document.querySelector('.inp'),
    enter : document.querySelector('.ent')
}

const min = 10; //минимальные значения для всех знаков кроме умножения
const max = 100; // максимальные значения для всех знаков кроме умножения
const minMultip = 2; //минимальные значения для умножения
const maxMultip = 30; // максимальные значения для умножения
const arrSign = ['/', '*', '-', '+'];
let x,y,z; 
let signV; // текущий знак

document.addEventListener('DOMContentLoaded', ()=>{ //первый вывод примера
    render();
});
domElem.input.addEventListener('keydown', inputValue); 

function inputValue(event){//фильтр по цифрам + numpad + backspace + tab + space + enter + "-" + "."
// console.log(event.which);
    if(event.which >= 48 && event.which <= 57 || event.which >= 96 && event.which <= 105 || event.which == 32 || event.which == 8 || event.which == 107 || event.which == 187 || event.which == 9 || event.which == 13 || event.which == 190 || event.which == 110 || event.which == 109 || event.which == 189){
        return;
    }else{
        event.preventDefault();
    }
}

domElem.enter.addEventListener('click', (event)=>{
    let result;
        result = domElem.input.value;
        domElem.input.value = '';
        
        if(result == z){

            domElem.out.style.color = 'green';
            domElem.out.innerHTML = `${x} ${signV} ${y} = ${result}<br>
                все верно!
            `;
            setTimeout(()=>{
                domElem.out.style.color = 'black';
                render();
            }, 2000); 
        }else {
            domElem.out.style.color = 'red';
            domElem.out.innerHTML = `${x} ${signV} ${y} = ?<br>
               Поробуйте еще раз!
        `;
        }
});

function getSign(){ // получаю знак
    const sign = arrSign[Math.floor(Math.random() * arrSign.length)];
    return sign;
}
function render(){ //отрисовываю уравнение
    domElem.out.innerHTML = '';
    
    signV = getSign();
    switch(signV){
        case '*':
            x = getRandom(minMultip, maxMultip);
            y = getRandom(minMultip, maxMultip);
            z = x * y;
            domElem.out.innerHTML = `${x} * ${y} = ?`;
            break;

        case '/':
            x = getRandom(min, max);
            y = getRandom(min, max);
            z = Math.round(x / y);
            domElem.out.innerHTML = `${x} / ${y} = ?`;
            break;
        case '-':
            x = getRandom(min, max);
            y = getRandom(min, max);
            z = x - y;
            domElem.out.innerHTML = `${x} - ${y} = ?`;
            break;
        case '+':
            x = getRandom(min, max);
            y = getRandom(min, max);
            z = x + y;
            domElem.out.innerHTML = `${x} + ${y} = ?`;
            break;
    }
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}