import {Element} from './Element.js';
export class DomBuilder{
    constructor(){

        return this;
    }
    create(tagName){ //принимает название html-элемента и генерирует его
       
        this.element = new Element(document.createElement(tagName));
        return this;
    }
    withClass(className){ //принимает название класса и добавляет его к текущему элементу
        this.element.addClass(className);
        return this;
    }
    withId(idName){ // принимает название id и устанавливает его для текущего элемента
        this.element.setId(idName);
        return this;
    }
    withChild(childElem){ //принимает html-элемент и добавляет его внутрь текущего элемента
        this.element.addChild(childElem);
        return this;        
    }
    withContent(text){ // принимает текст и устанавливает как содержимое элемента
        this.element.setContent(text);
        return this;
    }
    get result(){ // генерирует и возвращает объект типа Element (класс, который описали ранее).
        
        return this.element;
    }
}

