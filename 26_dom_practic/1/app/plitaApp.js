const domElements = createDomElements();

const dom = {
  cont : document.querySelector('.container'),
  head : document.querySelector('.head'),
  table : document.querySelector('table'),
  td : [...document.querySelectorAll('td')]
}

function createDomElements(){
  const cont = document.createElement('div');
  cont.classList.add('container');
  document.body.append(cont);
  
  const head = document.createElement('p');
  head.classList.add('head');
  cont.appendChild(head);

  const table = document.createElement('table');
  cont.appendChild(table);

  for(let i = 0; i < 10; i++){
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for(let j = 0; j < 10; j++){
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }
  return cont;
}

const gen = setInterval(drowRect, 1000);

setTimeout(()=> {
  clearInterval(gen);
  dom.head.innerHTML = `<h2>Заполнение завершено</h2>`;
}, 100000);

function drowRect(){
    const td = dom.td[Math.floor(Math.random() * dom.td.length)];
    if(!td.style.backgroundColor){
       td.style.backgroundColor = randomColor();
    }else drowRect();  
}
function randomColor(){
      let r = Math.floor(Math.random() * 258),
          g = Math.floor(Math.random() * 258),
          b = Math.floor(Math.random() * 258);
      return `rgb(${r},${g},${b})`;
}
