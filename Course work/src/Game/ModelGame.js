export class ModelGame{
    constructor(){ //стартовые параметры
        this.columns = 100; //колонки
        this.rows = 50; //столбцы
        this.bgColor = 'white'; //цвет фона
        this.cellSize = 10; //размер ячейки
        this.cellColor = 'lightgray'; //цвет ячейки
        this.genTime = 1000; //время жизни поколения
        
        this.map = [];
        for(let y = 0; y < this.rows; y++){
            const row = [];

            for(let x = 0; x < this.columns; x++){

                row.push(this.createCell(y,x));
            }
            
            this.map.push(row);
        }

        this.data = [];
    }
    createCell(y,x){
        const cell = {
            x          : x,
            y          : y,
            state      : false,
            // nextState  : false,
            color      : 'rgb(255,255,255)',
            // nextColor  : 'rgb(255,255,255)',
            deathColor : this.bgColor
        }
        return cell;
    }
    getVar(){
        return { // посылаю переменные во вьюху
            width: this.columns * this.cellSize,
            height: this.rows* this.cellSize,
            bgColor: this.bgColor,
            cellSize: this.cellSize,
            cellColor: this.cellColor,
            time: this.genTime
        }
    }

    // getField(x, y){ // получаю  координаты 
    //     if(x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
    //         return false;
    //     }
 
    //     if(this.map[y][x].state == true){
    //         return 1;
    //     }else return 0;

    // }

    setField(obj){ // задаю координаты и значение клетки
        // if(x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
        //     return value;
        // }
         this.map[obj.y][obj.x].state = true;
         this.map[obj.y][obj.x].color = obj.color;
    }

    reviveRandomFields(){ //случайная генерация клеток
        const freeFields = [];
        let n = parseInt(this.rows * this.columns / 2);
      
    
        for(let y = 0; y < this.rows; y++){   //создаю коллекцию объектов с координатами всего поля
            for(let x = 0; x < this.columns; x++){
                if(this.map[y][x].state == false){
                    freeFields.push({x, y});
                }

            }
        }
    
        while(n > 0){ // оживляю полученные клетки
                const index = Math.floor(Math.random() * freeFields.length); //рандомно выбираю клетку в freeFields
                const field = freeFields.splice(index, 1)[0]; //координатам  х  у  присваиваю значение массива(объекта) соот ветственно и удаляю эту ячейку из массива - исключаю повторение координат
                this.map[field.y][field.x].state = true;
                this.map[field.y][field.x].color = this.cellColor;
                n--;
            }
            // console.log(this.map);
            
    }
    

    forFreeEach(){ //получение координат для живой клетки и передача их для рендера
        const liveFields = [];
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                  if(this.map[y][x].state == true){
                        liveFields.push({
                        x: x * this.cellSize,
                        y: y * this.cellSize,
                        width: this.cellSize,
                        height: this.cellSize,
                        color: this.map[y][x].color
                    });
                }
            }
        }
        return liveFields;
    }

    clear(){ // очиста матрицы
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                this.map[y][x].state = false;
                this.map[y][x].nextState = false;
                this.map[y][x].color = this.map[y][x].deathColor;
                this.map[y][x].nextColor = this.map[y][x].deathColor;
            }               
        }
    }
  

    changeGeneration(){ //смена поколения
        const map = [];

        for(let y = 0; y < this.rows; y++){
            const row = [];

            for(let x = 0; x < this.columns; x++){
                let north, east, south, west;

                let neighbors = [];
                const cell = this.createCell(y,x);
                north = y - 1;
                south = y + 1;
                east = x + 1;
                west = x - 1;
        
                if (y == 0) {
                    north = this.rows - 1;
                } else if (y == this.rows - 1) {
                    south = 0;
                }
        
                if (x == 0) {
                    west = this.columns - 1;
                } else if (x == this.columns - 1) {
                    east = 0;
                }
                
                neighbors.push(this.map[north][x]);
                neighbors.push(this.map[north][east]);
                neighbors.push(this.map[y][east]);
                neighbors.push(this.map[south][east]);
                neighbors.push(this.map[south][x]);
                neighbors.push(this.map[south][west]);
                neighbors.push(this.map[y][west]);
                neighbors.push(this.map[north][west]);
                
                const aliveNeighbors = this.parseNeighbors(neighbors);

                if(this.map[y][x].state == true){
                    if(aliveNeighbors.length == 2 || aliveNeighbors.length == 3){
                        cell.state = true;
                        cell.color = this.map[y][x].color;
                    }else {
                        cell.state = false;
                        cell.color = this.bgColor;
                    }
                }else if(this.map[y][x].state == false){
                    if(aliveNeighbors.length == 3){
                        cell.state = true;
                        cell.color = this.getColorCell(aliveNeighbors[0].color, aliveNeighbors[1].color, aliveNeighbors[2].color);
                    }else {
                        cell.state = false;
                        cell.color = this.bgColor;
                    }
                }
        
                row.push(cell); 
            }
            map.push(row);
        }
        this.map = map;
        // this.genNum++;
    }

    getColorCell(cellColor1, cellColor2, cellColor3){ //интерполяция цвета для новой клетки
         let interpolate = d3.interpolateRgbBasis([cellColor1, cellColor2, cellColor3])(0.5);
         return interpolate;
    }

	parseNeighbors(arr) { //фильтруем неживых соседей
		return arr.filter(cell => cell.state);
    }
    
    addDot(obj){
        this.setField(obj);
    }

    getTime(time){
        this.genTime = time;
    }
}