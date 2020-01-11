function getMerger(){

    let text = '';

    while(confirm('хотите ввести еще что-нибудь?') == true){
        text += prompt('введите строку: ') + ' ';
    }
    return text;
}

console.log(getMerger());
