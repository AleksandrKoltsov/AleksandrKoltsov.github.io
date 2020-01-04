import {WeatherModel} from './WeatherModel.js';
import {WeatherView} from './WeatherView.js';

export class WeatherController{
    constructor(){
        this.model = new WeatherModel();
        this.view = new WeatherView(
            this.getData.bind(this)
        );
    }

    getData(){
        this.model.getData().then(_=> {
            this.view.renderWeather(this.model.data);
        });
    }
}