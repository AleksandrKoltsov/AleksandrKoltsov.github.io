export class ModelGame{
    constructor(){ //стартовые параметры
        this.columns = 100; //колонки
        this.rows = 50; //столбцы
        this.bgColor = 'white'; //цвет фона
        this.cellSize = 10; //размер ячейки
        this.cellColor = 'lightgray'; //цвет ячейки
        this.genTime = 1000; //время жизни поколения
        this.cell = {
            x          : 0,
            y          : 0,
            state      : false,
            nextState  : false,
            color      : 'rgb(255,255,255)',
            nextColor  : 'rgb(255,255,255)',
            deathColor : 'rgb(255,255,255)'
        }
        // this.genNum = 0;
        
        // console.log(time);

        this.map = [];
        for(let y = 0; y < this.rows; y++){
            const row = [];

            for(let x = 0; x < this.columns; x++){
                row.push(false);
            }
            
            this.map.push(row);
        }

        this.data = [];
        // console.log(this.map);
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

    getField(x, y){ // получаю  координаты 
        if(x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
            return false;
        }

        return this.map[y][x];
        // let north, northeast, east, southeast, south, southwest, west, northwest;

		// if (y == 0) {
		// 	north = boardHeight - 1;
		// } else if (this.y == boardHeight - 1) {
		// 	south = 0;
		// }

		// if (this.x == 0) {
		// 	west = boardWidth - 1;
		// } else if (this.x == boardWidth - 1) {
		// 	east = 0;
		// }

		// this.neighborhood = [
		// 	this,
		// 	board[north][this.x],
		// 	board[north][east],
		// 	board[this.y][east],
		// 	board[south][east],
		// 	board[south][this.x],
		// 	board[south][west],
		// 	board[this.y][west],
		// 	board[north][west]
		// ];
    }

    setField(x, y, value){ // задаю координаты и значение клетки
        if(x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
            // console.log(x ,y);
            return value;
            
        }
        // console.log(this.map[y][x]);
        return this.map[y][x] = value;
    }

    reviveRandomFields(){ //случайная генерация клеток
        const freeFields = [];
        let n = parseInt(this.rows * this.columns / 2);
    
        for(let y = 0; y < this.rows; y++){   //создаю коллекцию объектов с координатами всего поля
            for(let x = 0; x < this.columns; x++){
                if(this.map[y][x] == false){
                    freeFields.push({ x, y });
                }
            }
        }

        while(n > 0){ // оживляю полученные клетки
            const index = Math.floor(Math.random() * freeFields.length); //рандомно выбираю клетку в freeFields
            const { x, y } = freeFields.splice(index, 1)[0]; //координатам  х  у  присваиваю значение массива(объекта) соот ветственно и удаляю эту ячейку из массива - исключаю повторение координат

            this.map[y][x] = true;
            n--;
        }
        // console.log(this.map);
    }

    forFreeEach(){ //получение координат для живой клетки и передача их для рендера
        const liveFields = [];
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                if(this.map[y][x] == true){
                   liveFields.push({
                       x: x * this.cellSize,
                       y: y * this.cellSize,
                       width: this.cellSize,
                       height: this.cellSize,
                       color: this.cellColor
                    }); 
                }
            }
        }
        return liveFields;
    }

    clear(){ // очиста матрицы
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                this.map[y][x] = false;
            }
        }
    }

    changeGeneration(){ //смена поколения
        const map = [];

        for(let y = 0; y < this.rows; y++){
            const row = [];

            for(let x = 0; x < this.columns; x++){
                let neighbors = 0;
                let state = false;

                neighbors += this.getField(x - 1, y - 1); //расчет соседей клетки
                neighbors += this.getField(x - 1, y);
                neighbors += this.getField(x - 1, y + 1);
                neighbors += this.getField(x, y - 1);
                neighbors += this.getField(x, y + 1);
                neighbors += this.getField(x + 1, y - 1);
                neighbors += this.getField(x + 1, y);
                neighbors += this.getField(x + 1, y + 1);

                if(this.getField(x, y)){ //проверка на границы
                    if (neighbors == 2 || neighbors == 3){ //проверка на жизнь
                        state = true; 
                    }
                }

                else{
                    if(neighbors == 3){ //рождение клетки
                        state = true;
                    }
                }
                row.push(state); 
            }
            map.push(row);
        }
        this.map = map;
        // this.genNum++;
    }

    addDot(coord){

        this.setField(coord.x, coord.y, true)
     
    }

    getTime(time){
        this.genTime = time;
    }

    // getColor(color){
    //     this.cellColor = color;
    // }
}