function intToWords(int) {
    
    let numStr = '';
    let from0To19 = [null, 'один', 'два', 'три', 'четыре','пять', 'шесть', 'семь', 'восемь', 'девять','десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать','пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    
   
    let tens = ['','','двадцать', 'тридцать', 'сорок','пятьдесят','шестьдесят', 'семьдесят', 'восемьдесят','девяносто'];
    let num = int;

    if(num < 20){ //если число до 19 
        for(let i = 0; i <= from0To19.length; i++){
            if(i == num){
                return from0To19[i];
            }
        }
    }

    num = int % 10; // выделяю второе число
    int = Math.floor(int/10); // выделяю первое число

    for(let j = 0; j <= tens.length; j++){ // присваиваю название десятков
        if(int == j){
            numStr = tens[j] + ' '; // добавляю пробел в конце десятка
        }
    }
    if(num == null){ //если число круглое то второе число отбрасываю
        return numStr;
    }
    for(let k = 1; k <= from0To19.length; k++){ //присваиваю название второго числа
        if(k == num){
            numStr += from0To19[k];
        }
    }

    return numStr;
}
console.log(intToWords(10)); //вызов функции
console.log(intToWords(12));
console.log(intToWords(23));
console.log(intToWords(99));
console.log(intToWords(48));
console.log(intToWords(51));
console.log(intToWords(90));