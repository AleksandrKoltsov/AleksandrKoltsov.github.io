export class ModelCell {
	constructor() {
        // // this.args ={};
        // // console.log(this.args);
		// this.alive = false;
		// this.aliveNext = false;
		// this.color = 'white';
		// this.colorNext = 'white';
		// this.x = 0;
		// this.y = 0;
		// this.neighborhood = [];
		// // this.setNeighborhood = this.setNeighborhood.bind(this);
		// this.deadColor = 'white';
	}
    // getCoord(data){ // получаю координаты с поля при рисовании
    //     this.x = data.x;
    //     this.y = data.y;
    //     // console.log(this.x, this.y);
    // }
	// born() {
	// 	this.alive = true;
	// }

	// die() {
	// 	this.alive = false;
	// 	this.color = this.deadColor;
	// }

	// setNeighborhood(board, boardHeight, boardWidth) {
	// 	let north, northeast, east, southeast, south, southwest, west, northwest;

	// 	north = this.y - 1;
	// 	south = this.y + 1;
	// 	east = this.x + 1;
	// 	west = this.x - 1;

	// 	if (this.y == 0) {
	// 		north = boardHeight - 1;
	// 	} else if (this.y == boardHeight - 1) {
	// 		south = 0;
	// 	}

	// 	if (this.x == 0) {
	// 		west = boardWidth - 1;
	// 	} else if (this.x == boardWidth - 1) {
	// 		east = 0;
	// 	}

	// 	this.neighborhood = [
	// 		this,
	// 		board[north][this.x],
	// 		board[north][east],
	// 		board[this.y][east],
	// 		board[south][east],
	// 		board[south][this.x],
	// 		board[south][west],
	// 		board[this.y][west],
	// 		board[north][west]
	// 	];
	// }

	// parseNeighborhood() {
	// 	return this.neighborhood.filter(cell => cell.alive);
	// }

	// neighborhoodColors() {
	// 	return this.parseNeighborhood().map(cell => cell.color);
	// }

	// avgNeighborColors() {
	// 	return this.neighborhoodColors().reduce((acc, curr, i) => {
	// 		return d3.interpolate(acc, curr)(1 / (i + 1));
	// 	});
	// }

	// interpolateColorNext() {
	// 	if (this.alive) {
	// 		this.colorNext = d3.interpolate(this.avgNeighborColors(), this.color)(0.5);
	// 	} else if (this.aliveNext) {
	// 		this.colorNext = this.avgNeighborColors();
	// 	}
	// }

	// propagate() {
	// 	if (this.parseNeighborhood().length === 3) {
	// 		this.aliveNext = true;
	// 	} else if (this.parseNeighborhood().length === 4) {
	// 		this.aliveNext = this.alive;
	// 	} else {
	// 		this.aliveNext = false;
	// 	}
	// 	this.interpolateColorNext();
	// }

	// advance() {
	// 	this.color = this.colorNext;
	// 	this.alive = this.aliveNext;
	// }
}