
const container = document.querySelector('.container');
const button = document.querySelector('.button');
let arrBlock = [];

button.addEventListener('click', (ev)=>{
    if (arrBlock.length) {
        arrBlock.forEach((el)=>el.htmlElements.mainDiv.remove());
        arrBlock = [];   
    }
    
    for(let i = 0; i < 20; i++){

        let block = new Block();
        container.append(block.htmlElements.mainDiv);
        arrBlock.push(block);
    }
});

addEventListener('click', (e)=>{
    if(e.target.className == 'block'){
        e.target.remove();
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


