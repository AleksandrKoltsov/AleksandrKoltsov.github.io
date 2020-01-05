export class Element{
    constructor(htmlElement){
        this.element = htmlElement;
    }
    setId(id){ //установка атрибута id
        this.element.setAttribute('id', id);
    }
    addClass(cssClass){ // добавление css-класса
        this.element.classList.add(cssClass);
    }
    setContent(text){ //установка текстового содержимого внутрь тега
       this.element.innerText = text;
    }
    addChild(child){ //добавление дочернего элемента внутрь тега
        this.element.innerHTML += child;
    }
    print(){ //генерация текстовой строки с html-содержимым.
        return this.element.outerHTML;
    }
}