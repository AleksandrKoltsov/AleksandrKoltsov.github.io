import {DomBuilder} from './DomBuilder.js';

const body = document.querySelector('body');

let p1 = new DomBuilder().create('p').withId('p1').withClass('text').withContent('Hello,').result.print();
let p2 = new DomBuilder().create('p').withId('p2').withClass('text').withContent('world!').result.print();
let div = new DomBuilder().create('div').withId('main').withClass('container').withChild(p1).withChild(p2).result.print();

body.innerHTML = div;

