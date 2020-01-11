const arrBlock = [];
let palette = document.querySelector('.palette');
let text = document.querySelector('.text');

document.addEventListener('DOMContentLoaded', (ev)=>{
    if (arrBlock.length) {
        arrBlock.forEach((el)=>el.htmlElements.mainDiv.remove());
        arrBlock = [];   
    }
    
    for(let i = 0; i < 18; i++){

        let block = new Block();
        palette.append(block.htmlElements.mainDiv);
        arrBlock.push(block);
    }
});

addEventListener('click', (e)=>{
    if(e.target.className == 'block'){
       text.style.color = e.target.style.backgroundColor;
    }
});
class Block {
    constructor(){
        this.htmlElements = this.createBlock();
    }
    createBlock(){
        const htmlElements = {
            mainDiv : document.createElement('div')
        }

        htmlElements.mainDiv.classList.add('block');
        htmlElements.mainDiv.style.backgroundColor = this.colorRandom();

        htmlElements.mainDiv.append();

        return htmlElements;
    }
    colorRandom(){
        let r = Math.floor(Math.random() * 258);
        let g = Math.floor(Math.random() * 258);
        let b = Math.floor(Math.random() * 258);
        return `rgb(${r},${g},${b})`;
    }
}


