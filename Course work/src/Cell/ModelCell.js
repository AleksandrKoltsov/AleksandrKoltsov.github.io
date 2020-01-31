export class ModelCell {
    constructor(x ,y){
        this.x = x;
        this.y = y;
        this.state = false;
        this.nextState = false;
        this.color = '#ffffff';
        this.nextColor = '#ffffff';
        this.deadColor = '#ffffff';
    }
}