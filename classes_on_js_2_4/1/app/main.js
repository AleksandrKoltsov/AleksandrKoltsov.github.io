const dom = {
    rad: document.querySelector('input'),
    btn: document.querySelector('button'),
};

dom.btn.addEventListener('click', (e)=>handleClick(e));

function handleClick () {
    console.log();
    const circle = new Circle();
    const val = dom.rad.value;
    circle.setRadius = val;
    dom.rad.value = '';
}

class Circle {
    constructor () {
        this.radius = null;
        this.dom = {
            circle:  document.querySelector('.circle'),
            square: document.querySelector('.square'),
            long: document.querySelector('.long'),
            diam: document.querySelector('.diameter')
        }
    }

    render (r) {
        this.radius = r;
        this.dom.circle.style.width = this.diameter + 'px';
        this.dom.circle.style.height = this.diameter + 'px';
        this.dom.diam.innerHTML = `Диаметр окружности: ${this.diameter}px`;
        this.onMathSquareCircle();
        this.onMathLongCircle();
    }

    get getRadius () {
        return this.radius;
    }

    set setRadius (rad) {
        this.render(rad);
        
    }

    get diameter () {
        return this.radius * 2;
    }

    onMathSquareCircle () {
        return this.dom.square.innerHTML = `Площадь круга: ${Math.round(Math.PI * Math.pow(this.getRadius, 2))}px`;
    } 

    onMathLongCircle () {
        return this.dom.long.innerHTML = `Длинна окружности: ${Math.round(Math.PI * this.diameter)}px`;
    }

}