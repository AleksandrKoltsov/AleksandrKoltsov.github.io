export class ViewGame{
    constructor(args, start, pause, stop, randomGen, drow, time){ //получаю аргументы(переменные) из ModelGame
        this.start = document.querySelector('.start').addEventListener('click', start);
        this.pause = document.querySelector('.pause').addEventListener('click', pause);
        this.stop = document.querySelector('.stop').addEventListener('click', stop);
        this.drow = document.querySelector('.drow').addEventListener('click', drow);  
        this.generator = document.querySelector('.random').addEventListener('click', randomGen);
        this.slider = document.querySelector('.slider').addEventListener('change', time);

        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.width = args.width;
        this.height = args.height;
        this.bgColor = args.bgColor;
        this.cellSize = args.cellSize;
        this.cellColor = args.cellColor;
        
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.isStart = false; 
        document.querySelector('.slider').addEventListener('input', this.moveSlider);

        let interpolate = d3.interpolateRgbBasis(["red", "red", "red"])(0.5)
        console.log(interpolate);
    }
    moveSlider(ev){
        let output = document.querySelector('.num');
        output.value = (ev.target.value / 1000).toFixed(2) + 's';
    }

    stopGame(){
        this.isStart = false;
        this.clearCanvas();
    }

    clearCanvas(){ // рисию задний фон
        this.context.beginPath();
        this.context.fillStyle = this.bgColor;
        this.context.rect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fill();
    }
    drawField(x = 0, y = 0, width = this.cellSize, height = this.cellSize, color = this.cellColor){ // рисую заданную клетку
        // console.log(x,y);
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.rect(x, y, width, height);
        this.context.strokeStyle="black";
        this.context.lineWidth = 2;
        this.context.stroke();
        this.context.shadowColor = "darkgray";
        this.context.shadowBlur = 3;
        this.context.shadowOffsetX = 2;
        this.context.shadowOffsetY = 2;
        this.context.fill();
    }

    handDrow(callbackBoardClick){ // рукописный ввод
        this.canvas.addEventListener('click', callbackBoardClick);
    }
    
    drowSquare(ev){
        const rect = this.canvas.getBoundingClientRect();
        let x = ev.clientX - rect.left;
        let y = ev.clientY - rect.top;
        x = parseInt(x / this.cellSize) * this.cellSize;
        y = parseInt(y / this.cellSize) * this.cellSize; 
        this.drawField(x, y, this.cellSize, this.cellSize, this.cellColor);
        x /= this.cellSize;
        y /= this.cellSize;
        return {y, x};
    }
        
}