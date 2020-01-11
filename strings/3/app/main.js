function getLine(line){

console.log(line); // вызов оригинальной строки для наглядности

    let arrLine = line.split(''), //строку в массив
        strLine;
    for(let i = 0; i < arrLine.length; i++){

        if(arrLine[i].toUpperCase() === arrLine[i]){ // определяем верхний регистр
            arrLine[i] = arrLine[i].toLowerCase(); //меняем верхний регистр на нижний
        }else{ 
            arrLine[i] = arrLine[i].toUpperCase(); //иначе делаем наоборот
        }
                
        if(isFinite(arrLine[i]) == true){ // меняем цифры на "_"
            arrLine[i] = '_';
        }
    }

    strLine = arrLine.join(''); //преобразуем в строку
    return strLine; 
}

console.log(getLine("SdSkSkmOKJokjIOOJ6578KJjjk977")); //вызов функции