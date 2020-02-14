import { ModelGame } from './ModelGame.js';
import { ViewGame } from './ViewGame.js';

export class ControllerGame{
    constructor(){
        this.model = new ModelGame();
        this.view = new ViewGame(
            this.model.getVar(),
            this.startGame.bind(this),
            this.pauseGame.bind(this),
            this.stop.bind(this),
            this.randomGen.bind(this),
            this.handDrow.bind(this),
            this.getViewTime.bind(this),
        );

        this.game = null;
        this.isRandom = true;
        this.isStart = true;
        this.isPause = true;
        this.isPalette = true;
        this.start();       
    }

    getViewTime(ev){//передаю в модель значение ползунка
        this.model.getTime(ev.target.value);
    }

    start(){
        this.view.clearCanvas();
    }

    startGame(){ //запускает игру(смену поколения)
        if(this.isStart == true){
            this.isPause = true;
            this.isStart = false;

            this.game = setInterval(()=>{
                this.view.clearCanvas();
                // this.model.handDrowField();
                this.model.changeGeneration();
                let arg = this.model.forFreeEach();
                arg.forEach(el => this.view.drawField(el.x, el.y, el.width, el.height, el.color));
            }, this.model.genTime);

        }else return;
    }
    pauseGame(){
        if(this.isPause == true){ //пауза в игре
            this.isPause = false;
            this.isStart = true;
            clearInterval(this.game);
            // console.log(this.isPause, this.isStart);
        }else return;
    }

    stop(){ // останавливает и обнуляет игру
        this.model.clear();
        this.view.stopGame();
        clearInterval(this.game);
        this.view.removePalette();
        this.isRandom = true;
        this.isStart = true;
        this.isPause = true;
        this.isPalette = true;
        this.isDrowStart = true;
    }

    randomGen(){ // генерирует случайное поле
        if(this.isRandom == true){

            this.isRandom = false;
            this.model.reviveRandomFields();
            this.view.clearCanvas();
            let arg = this.model.forFreeEach();
            arg.forEach(el => this.view.drawField(el.x, el.y, el.width, el.height, el.color));

        } else return;
      
    }

    handDrow(){ //вешает слушателей на обработку мыши в канвас
        this.view.handDrow(this.handlClickBoard.bind(this)); //1
        if(this.isPalette){
            this.isPalette = false;
            this.view.generatePalette();
        }
    }

    handlClickBoard(ev){ //рисую клетку и передаю координаты в модель
        let obj = this.view.drowSquare(ev);
        this.model.addDot(obj);

    }

}