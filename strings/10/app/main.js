function template(){
    let template = prompt("Введите шаблон в котором не больше 9-ти параметров!"),
        len = template.length,
        sep = "%",
        numOpt = 0,
        arrOptions = [],
        msg = "",
        ind = 0,
        ind1 = 0;

    for (let i = 0; i < len; i++) {
        (template[i] == sep) ? numOpt++ : false;       
    }
    
    for (let j = 1; j <= numOpt; j++) {
        arrOptions.push(prompt(`Введите ${j}-й параметр`));
    }

    for (let k = 0; k < numOpt; k++) {
        ind = template.indexOf(sep, ind1);
        msg += template.slice(ind1, ind) + arrOptions[Number(template[ind + 1]) - 1];
        ind1 = ind + 2;
    }
    return msg;
}

console.log(template());