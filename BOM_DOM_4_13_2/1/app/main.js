class Slider {
    constructor () {
        this.dom = {
            cont: document.querySelector('body'),
            track: document.querySelector('.track'),
            dot: document.querySelector('.js-dot')
        };
        
        this.track = {
            min : '80',
            max : '380'
        };

        this.dom.cont.addEventListener('mousedown', (e)=>this.onDown(e))
        this.dom.cont.addEventListener('mousemove', (e)=>this.onMove(e));
        this.dom.cont.addEventListener('mouseup', ()=>this.onUp());
        this.dom.track.addEventListener('click', (e)=>this.onClick(e));
        this.mouseDown = false;
    }

    calcDot (e) {
        if(e.clientX > this.track.min && e.clientX < this.track.max){
            this.dom.dot.style.left = e.clientX + 'px';
       }else if(e.clientX <= this.track.min) {
            this.dom.dot.style.left = this.track.min + 'px';
       }else if(e.clientX >= this.track.max){
            this.dom.dot.style.left = this.track.max + 'px';
       }
    }

    onUp () {
        this.mouseDown = false;        
    }

    onDown (e) {
        if(e.target === this.dom.dot){
            this.calcDot(e);
            this.mouseDown = true;
        }
    }

    onMove (e) {
        if(this.mouseDown){
            this.calcDot(e);
            this.mouseDown = true;
        }
    }

    onClick (e) {
        this.calcDot(e);
    }
}


const slider = new Slider ();

