export class ViewGame{
    constructor(args, start, pause, stop, randomGen, drow, time){ //получаю аргументы(переменные) из ModelGame
        this.start = document.querySelector('.start').addEventListener('click', start);
        this.pause = document.querySelector('.pause').addEventListener('click', pause);
        this.stop = document.querySelector('.stop').addEventListener('click', stop);
        this.drow = document.querySelector('.drow').addEventListener('click', drow);  
        this.generator = document.querySelector('.random').addEventListener('click', randomGen);
        this.slider = document.querySelector('.slider').addEventListener('change', time);
        this.palette = document.querySelector('.palette-container');
   
        document.querySelector('.slider').addEventListener('input', this.moveSlider);
        
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.track = [...document.querySelectorAll('audio')];

        this.width = args.width;
        this.height = args.height;
        this.bgColor = args.bgColor;
        this.cellSize = args.cellSize;
        this.cellColor = args.cellColor;
        
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.isStart = false; 
        this.selectColor();
        this.playSound();
    }

    playSound(){ //воспроизведение музыки
        const track = this.track[Math.floor(Math.random() * this.track.length)];
        track.classList.add('sound-active');
    }

    moveSlider(ev){ //значение ползунка
        let output = document.querySelector('.num');
        output.value = `Time:${(ev.target.value / 1000).toFixed(2) + 's'}`;
    }
    
    stopGame(){
        this.isStart = false;
        this.clearCanvas();
    }

    clearCanvas(){ // рисую задний фон
        this.context.beginPath();
        this.context.fillStyle = this.bgColor;
        this.context.rect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fill();
    }
    drawField(x = 0, y = 0, width = this.cellSize, height = this.cellSize, color = this.cellColor){ // рисую заданную клетку
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.linecap = "square";
        this.context.rect(x, y, width, height);
        this.context.strokeStyle="black";
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.shadowColor = "darkgray";
        this.context.shadowBlur = 2;
        this.context.shadowOffsetX = 2;
        this.context.shadowOffsetY = 2;
        this.context.fill();
    }

    handDrow(callbackBoardClick){ // listener на рукописный ввод
        this.canvas.addEventListener('mousemove', callbackBoardClick);
    }

    drowSquare(ev){ // ручная отрисовка
        const rect = this.canvas.getBoundingClientRect();
        const cell = {
            x : 0,
            y : 0,
            color : 'white'
        };
        let x = ev.clientX - rect.left;
        let y = ev.clientY - rect.top;
        x = parseInt(x / this.cellSize) * this.cellSize;
        y = parseInt(y / this.cellSize) * this.cellSize; 
        if(ev.buttons > 0){
            this.drawField(x, y, this.cellSize, this.cellSize, this.cellColor);
            x /= this.cellSize;
            y /= this.cellSize;
            cell.x = x;
            cell.y = y;
            cell.color = this.cellColor;
        }
            return cell;
    }
    
    generatePalette(){// генерируем палитру 
        for (let r = 0, max = 4; r <= max; r++) {
            for (let g = 0; g <= max; g++) {
                for (let b = 0; b <= max; b++) {

                    let paletteBlock = document.createElement('div');
                    paletteBlock.classList.add('button-color');
                    paletteBlock.addEventListener('click', (e)=> {
                        this.context.strokeStyle = e.target.style.backgroundColor;
                    });
        
                    paletteBlock.style.backgroundColor = (`
                    rgb(${Math.round(r * 255 / max)},
                        ${Math.round(g * 255 / max)},
                        ${Math.round(b * 255 / max)})
                        `);
        
                    this.palette.appendChild(paletteBlock);
                }
            }
        }
    }

    selectColor(){
        this.palette.addEventListener('click', (ev)=>{
            this.cellColor = ev.target.style.backgroundColor;
    });
  
    }

    removePalette(){ //удаляем палитру
        while(this.palette.hasChildNodes()){
            this.palette.removeChild(this.palette.firstChild);
        }
    }
}

