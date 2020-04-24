import { Marker } from "./Marker.js";
import { RefuelingMarker } from "./RefuelingMarker.js";

const cont = document.querySelector('.marker');
const contRef = document.querySelector('.ref-marker');
const perc = document.querySelector('.perc-marker');
const percRef = document.querySelector('.perc-marker-ref');
let color = document.querySelector('.color-marker').value;
let colorRef = document.querySelector('.color-refuel-marker').value;
const btnRef = document.querySelector('.btn-refuel');
const n = new Marker(color);
const m = new RefuelingMarker(colorRef);

document.querySelector('.color-marker').addEventListener('input', (ev)=>{
    color = ev.target.value;
    n.color = color;
});

document.querySelector('.color-refuel-marker').addEventListener('input', (ev)=>{
    colorRef = ev.target.value;
    m.color = colorRef;
});

document.querySelector('.area').addEventListener('input',(ev)=>{
    ev.target.value == '' ? m.ref = 1 : 0;
    n.ink = 100;
    m.ink = m.ref * 100;
    let str = ev.target.value;
    let info = n.print(str);
    let infoRef = m.print(str);

    cont.style.color = info.color;
    contRef.style.color = infoRef.color;
    cont.innerHTML = info.str;
    contRef.innerHTML = infoRef.str;
    percRef.style.backgroundImage = `linear-gradient(to right,${infoRef.color}, ${infoRef.color} ${infoRef.ink % 100}%,transparent ${infoRef.ink % 100}%)`;
    perc.style.backgroundImage = `linear-gradient(to right,${info.color}, ${info.color} ${info.ink % 100}%,transparent ${info.ink % 100}%)`;
});

btnRef.addEventListener('click', ()=>{
    m.addInk();
});