export class WeatherModel{
    constructor(){
        this.dataWeath = {
            data : null,
            icon : null,
            img : null
        };
    }
    getData(){
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9c830ba8dc36a254dff9ca25d8d792c9&units=metric&q=Dnipro,ua`)
        .then(answ => answ.json())
        .then(data => this.dataWeath = {
            data : data,
            icon : data.list[0].weather[0].icon
        });
    }
    get data(){
        return this.dataWeath;
       
    }

}