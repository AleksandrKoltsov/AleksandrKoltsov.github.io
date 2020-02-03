import { ModelCell } from "./ModelCell.js";
import { ViewCell } from "./ViewCell.js";

export class ControllerCell {
    constructor({subscribe}){

        this.model = new ModelCell(
            // this.setCoord.bind(this)
        );

        this.view = new ViewCell();
        subscribe('get-coord', this.getCoord.bind(this));
    }

    getCoord(data){
        // console.log(data)
        this.model.getCoord(data);
        // this.model.getData(data).then(data => this.view.renderPostModal(data));
    }
    // setCoord(){
    //     return this.getCoord();
    // }
}