function getCamelCase(str){

    let arrStr = str.split('-'), //создаем первый массив, разделителем используем "-"
    
        str2 = arrStr[1], //передаем вторую ячейку массива в отдельную переменную

        arrStr2 = str2.split(''); //создаем второй массив из полученной строки  
        
    arrStr2[0] = arrStr2[0].toUpperCase(); //делаем заглавной первую букву в 0-й ячейке массива

    str2 = arrStr2.join(''); // собираем второй массив в строку
   
    arrStr[1] = str2; //присваиваем второй ячейке массива новое полученное значение

    let str3 = arrStr.join(''); //преобразуем первый  массив в строку

    return str3;
}

console.log(getCamelCase('text-align'));
console.log(getCamelCase('background-color'));
console.log(getCamelCase('font-size'));