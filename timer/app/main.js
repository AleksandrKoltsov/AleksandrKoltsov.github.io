const domElements = {
    mScreen : document.querySelector('.main_screen'),
    sCircle : document.querySelector('.screen_circle'),
    btnStart : document.querySelector('.start'),
    btnStop : document.querySelector('.stop'),
    btnCircle : document.querySelector('.circle'),
    btnPause : document.querySelector('.pause'),
}
let isTimer = false;
let isPause = false;
let min = 0;
let sec = 0;
let msec = 0;
let setIntervalID;

domElements.btnStart.addEventListener('click', ()=> {
    isTimer == false ? timer() : '';
});

function timer(min = 0, sec = 0, msec = 0){
    isTimer = true;
    setIntervalID = setInterval(() => {
        msec++;
        if(msec > 9){
            sec++;
            msec = 0;
        }
        if(sec > 60){
            min++;
            sec = 0;
        }
        if(min > 60){
            min = 0;
        }
        domElements.mScreen.innerHTML = render(min, sec, msec);
    }, 100);
    
    domElements.btnCircle.addEventListener('click', ()=> {
        domElements.sCircle.innerHTML = render(min, sec, msec);
    });
}
function render(min, sec, msec){
    if(sec < 10 && min < 10){
       return  `0${min}:0${sec}:${msec}`;
    }else if(min < 10 && sec >= 10){
       return `0${min}:${sec}:${msec}`;
    }else if(sec < 10 && min >= 10){
       return `${min}:0${sec}:${msec}`;
    }
}
domElements.btnStop.addEventListener('click', ()=> {
    clearInterval(setIntervalID);
    domElements.mScreen.innerHTML = `0${min=0}:0${sec=0}:${msec=0}`;
    domElements.sCircle.innerHTML = `0${min=0}:0${sec=0}:${msec=0}`;
    isTimer = false;
    isPause = false;

});
domElements.btnPause.addEventListener('click', ()=> {
    isPause == false ?  pause() : '';
});
function pause(){
    isPause = true;
    clearInterval(setIntervalID);
}