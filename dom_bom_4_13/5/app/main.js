import {arrCountries} from './countries.js'; //массив стран

function parseCountries(){ //обрабатываю массив и привожу к нижнему регистру
    const find = inpS.value.toLowerCase();
    const answ = arrCountries.filter( country => country.toLowerCase().includes(find));
    renderList(answ);
}

function renderList(arr){  //рендер подсказки и очищение списка после выбора
    answ.innerHTML = arr.map( (country, i) => i < 10 ? `<li><a href="#">${country}</a></li>` : '').join(' ');
    answ.addEventListener('click', (ev)=> {
        inpS.value = ev.toElement.text; 
        answ.innerHTML = '';
    });
}

let inpS = document.querySelector('.search input');
let answ = document.querySelector('.answer');

inpS.addEventListener('input', parseCountries);