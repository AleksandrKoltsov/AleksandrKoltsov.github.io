function getUrl(){
    const url = prompt('Input URL:','htttp://mySite.com/dom/ua/work');
    const arrUrl = url.split('/');
    const newArr = arrUrl.filter(elem => elem != '');
    const prot = newArr[0];
    const dom = newArr[1];

    newArr.shift();
    newArr.shift();

    const str = newArr.join('/');
    const path = '/'+ str;

    return `
        Протокол: ${prot}\n
        Домен: ${dom}\n
        Путь: ${path}`
}
console.log(getUrl());