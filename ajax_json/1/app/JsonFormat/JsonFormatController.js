import {JsonFormatModel} from './JsonFormatModel.js';
import {JsonFormatView} from './JsonFormatView.js';

export class JsonFormatController{
    constructor(){
        this.model = new JsonFormatModel();
        this.view = new JsonFormatView(()=> this.clickBtn());
    }
    clickBtn(){
        const data = this.view.retData();
        this.view.render(this.model.sendData(data));
    }
}