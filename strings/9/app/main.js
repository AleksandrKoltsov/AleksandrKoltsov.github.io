function split(){
    const str = prompt('Введите строку: ', '20/10/2020');
    const separ = prompt('Введите разделитель: ', '/');
    const len = str.length;
    const arr = [];
    let ind = 0;

    for (let i = 0; i < len; i++) {
        if (str[i] == separ) {
            let l = str.slice(ind, i);
            arr.push(l);
            ind = i + 1;
        }else if(i == (len - 1)){
            let k = str.slice(ind)
            arr.push(k);
        }        
    }
    return arr;
}
console.log(split());