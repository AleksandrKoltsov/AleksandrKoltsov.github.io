function getAbbr(str){
   
    let arrStr = str.split('');
    for(let i = 0; i < arrStr.length; i++){
        if(arrStr[i] == '-'){
            arrStr[i] = ' ';
        }
    }
    let text = arrStr.join(''),
        abbr = '';

    abbr = (text[0] != " ") ? text[0].toUpperCase() : "";
    for(let i = 0; i < text.length - 1; i++){
        abbr += (text[i] == " " && text[i + 1] != " ") ? text[i + 1].toUpperCase() : "";
    }
   return abbr;
  
}

console.log(getAbbr('объектно-ориентированное программирование'));
console.log(getAbbr('cascading style sheets'));


