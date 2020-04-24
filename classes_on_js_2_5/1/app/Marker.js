export class Marker{
    constructor(color){
        this.color = color;
        this.ink = 100;
    }

    print(str){
        let arr = str.split('');
        let res = '';
        while(this.ink > 0 && arr.length > 0){
            let s = arr.shift();
            res += s;
            if(!/\s/.test(s)){
                this.ink -= 0.5;
            }
        }
        return { ink:this.ink, color:this.color, str:res};
    }
}