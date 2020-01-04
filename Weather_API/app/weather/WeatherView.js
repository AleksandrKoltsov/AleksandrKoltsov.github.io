export class WeatherView{
    constructor(getData){
        this.currCont = document.querySelector('.current-cont');
        this.weekCont = document.querySelector('.week-cont');
        document.addEventListener('DOMContentLoaded', getData);
    }
    getWeekDay(date) {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      
        return days[date.getDay()];
      }
    renderWeather(data){
        console.log(data);
        const t = (data.data.list[0].dt_txt).match(/\d{2}:\d{2}/)[0];
        const d = ((((data.data.list[0].dt_txt).match(/\d{4}-\d{2}-\d{2}/)[0]).split('-')).reverse()).join('.');
        this.currCont.innerHTML = `
            <div class="loca"><span class="city">${data.data.city.name},</span> <span class="country">${data.data.city.country}</span></div>
            <div class="date">${t} ${d}</div>
            <div class="pic">
                <img src="http://openweathermap.org/img/wn/${data.icon}@2x.png" class="main-img"><span class="descrp">${data.data.list[0].weather[0].description}</span>
            </div>
            <div class="curTemp">${Math.round(data.data.list[0].main.temp)} &deg;C</div>
            <div class="other">
                <p class="wind">Wind: ${(((data.data.list[0].wind.speed)*1000)/3600).toFixed(2)} kph</p>
                <p class="precip">Precip: ${(data.data.list[0].rain) || (0).toFixed(1)} mm</p>
                <p class="pressure">Pressure: ${data.data.list[0].main.pressure} mb</p>
            </div>
        `;
        const days = [3,11,19,27,35];
    
        this.weekCont.innerHTML = `
        <div class="day">
            <div class="day_">${this.getWeekDay(new Date(Date.parse(data.data.list[days[0]].dt_txt)))}</div>
            <div class="date_">${((((data.data.list[days[0]].dt_txt).match(/\d{4}-\d{2}-\d{2}/)[0]).split('-')).reverse()).join('.')}</div>
            <div class="pic_"><img src="http://openweathermap.org/img/wn/${data.data.list[days[0]].weather[0].icon}@2x.png" class="day1"></div>
            <div class="temp_">${Math.round(data.data.list[days[0]].main.temp)}&deg;C</div>
        </div>
       
        <div class="day">
            <div class="day_">${this.getWeekDay(new Date(Date.parse(data.data.list[days[1]].dt_txt)))}</div>
            <div class="date_">${((((data.data.list[days[1]].dt_txt).match(/\d{4}-\d{2}-\d{2}/)[0]).split('-')).reverse()).join('.')}</div>
            <div class="pic_"><img src="http://openweathermap.org/img/wn/${data.data.list[days[1]].weather[0].icon}@2x.png" class="day1"></div>
            <div class="temp_">${Math.round(data.data.list[days[1]].main.temp)}&deg;C</div>
        </div>
        <div class="day">
            <div class="day_">${this.getWeekDay(new Date(Date.parse(data.data.list[days[2]].dt_txt)))}</div>
            <div class="date_">${((((data.data.list[days[2]].dt_txt).match(/\d{4}-\d{2}-\d{2}/)[0]).split('-')).reverse()).join('.')}</div>
            <div class="pic_"><img src="http://openweathermap.org/img/wn/${data.data.list[days[2]].weather[0].icon}@2x.png" class="day1"></div>
            <div class="temp_">${Math.round(data.data.list[days[2]].main.temp)}&deg;C</div>
        </div>
        <div class="day">
            <div class="day_">${this.getWeekDay(new Date(Date.parse(data.data.list[days[3]].dt_txt)))}</div>
            <div class="date_">${((((data.data.list[days[3]].dt_txt).match(/\d{4}-\d{2}-\d{2}/)[0]).split('-')).reverse()).join('.')}</div>
            <div class="pic_"><img src="http://openweathermap.org/img/wn/${data.data.list[days[3]].weather[0].icon}@2x.png" class="day1"></div>
            <div class="temp_">${Math.round(data.data.list[days[3]].main.temp)}&deg;C</div>
        </div>
        <div class="day">
            <div class="day_">${this.getWeekDay(new Date(Date.parse(data.data.list[days[4]].dt_txt)))}</div>
            <div class="date_">${((((data.data.list[days[4]].dt_txt).match(/\d{4}-\d{2}-\d{2}/)[0]).split('-')).reverse()).join('.')}</div>
            <div class="pic_"><img src="http://openweathermap.org/img/wn/${data.data.list[days[4]].weather[0].icon}@2x.png" class="day1"></div>
            <div class="temp_">${Math.round(data.data.list[days[4]].main.temp)}&deg;C</div>
        </div>
        `;
    }
}
