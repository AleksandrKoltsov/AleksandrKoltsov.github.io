import { ModelCell } from "./ModelCell.js";
import { ViewCell } from "./ViewCell.js";

export class ControllerCell {
    constructor(){
        this.model = new ModelCell();
        this.view = new ViewCell();
    }
}