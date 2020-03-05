export class JsonFormatView{
    constructor(getData){
        this.left = document.querySelector('.textarea');
        this.right = document.querySelector('.rightText');
        this.btn = document.querySelector('.btn');
        this.error = document.querySelector('.error');

        this.btn.addEventListener('click', getData);
    }
    retData(){
        return this.left.value;
    }
    render(data){
        this.error.style.visibility = 'hidden';
        this.right.innerText = '';
        this.left.value = '';

        if(data == 'error'){
            this.error.style.visibility = 'visible';
        }else{
            console.log(data);
            this.right.innerText = data;
        }
        
    }
   
}