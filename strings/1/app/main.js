let strin = 'hsefi234uyr983yf9h(*&@#$*^$%$';

    letterStr = 'zaqwsxcderfvbgtyhnmjuiklopяфйцычсвукамипенртьогшлбюдщзжэхъё',
    specChar = `'"~!@#$%^&*()_+=-/?.,<>[]{}|;:`,
    arrLetterStr = letterStr.split(''),
    arrSpecChar = specChar.split('');

function getInfo(a){

    let letter = 0,
        num = 0,
        char = 0,
        arrString = [];
    
    arrString = a.split('');

    for(let i = 0; i < arrString.length; i++){
        if(isFinite(arrString[i]) == true){
            num++;
        }
        for(let j = 0; j < arrLetterStr.length; j++){
            if(arrString[i] == arrLetterStr[j]){
            letter++;
            }
        }
        for(let k = 0; k < arrSpecChar.length; k++){
            if(arrString[i] == arrSpecChar[k]){
                char++;
            }
        }
    }

    return `В переданной строке ${letter} букв; ${num} цифр; ${char} спецсимволов`;
}

console.log(getInfo(strin));