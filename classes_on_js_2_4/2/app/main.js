function onGenerateHtml() {
    // Создаем главный Div c id = wrapper
    const wrapperDiv = new HtmlElement('div', false);
    wrapperDiv.addAttributes(`id='wrapper'`);
    wrapperDiv.addStyles('display: flex;');
    
    // Создаем вложенный childDiv, со своими вложенными тегами
    const childDiv = new HtmlElement('div', false);
    childDiv.addStyles('width: 30vw;', 'margin: 2rem;');

        // Создаем вложенные теги
    const tag_h3 = new HtmlElement('h3', false, 'What is lorem?');
    const tag_img = new HtmlElement('img', true);
    const tag_p = new HtmlElement('p', false, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odit quod, inventore possimus autem at eos ipsum porro fuga earum rem quo consectetur molestiae quis nulla aliquam nisi, veritatis laborum illum ut rerum. Eligendi molestiae repellat numquam, fugit, sapiente cumque eum porro, nisi consequuntur quia officia? Sed fugit molestias ipsum quam beatae iste adipisci! Minima blanditiis maxime ratione nihil asperiores aliquid, amet exercitationem. Quibusdam ullam optio modi repellendus, illo maxime reprehenderit temporibus nemo asperiores impedit consequatur officia quas. Magnam obcaecati tempore quisquam quam doloribus iste similique doloremque assumenda natus, dignissimos, exercitationem ipsum dolores perferendis, cum ab earum libero quod ullam!');
    const tag_a = new HtmlElement('a', false, 'Quibusdam ullam...');
        // Устанавливаем им атрибуты и стили
    tag_img.addAttributes(`src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives.png"`,`alt="CSS3"`);
    tag_img.addStyles('width: 100%;');
    tag_p.addStyles('text-align: justify;');
    tag_a.addAttributes(`href="https://www.lipsum.com"`,`target="_blank"`);
        // Вставляем тег <a> в тег <p>
        tag_p.addToStartElements(tag_a.getHtml());
    // Вставляем все теги в childDiv
    childDiv.addToEndElements(tag_img.getHtml(), tag_p.getHtml());
    childDiv.addToStartElements(tag_h3.getHtml());
    // Вставляем два childDiv в главный Div
    wrapperDiv.addToEndElements(childDiv.getHtml(), childDiv.getHtml());
    document.write(wrapperDiv.getHtml());
}

class HtmlElement {
    constructor(tag = '', endTag = false, text = ''){
        this.tag = tag;
        this.endTag = endTag;
        this.text = text;
        this.arrAttributes = [];
        this.arrStyle = [];
        this.arrChilds = [];
    }
    addAttributes(){
        for (let i = 0; i < arguments.length; i++) {
            this.arrAttributes.push(arguments[i]);
        }
    }
    addStyles(){
        for (let i = 0; i < arguments.length; i++) {
            this.arrStyle.push(arguments[i]);
        }
    }
    addToEndElements(){
        for (let i = 0; i < arguments.length; i++) {
            this.arrChilds.push(arguments[i]);
        }
    }
    addToStartElements(elem){
        this.arrChilds.unshift(elem);
    }
    getHtml(){
        let htmlCode = '',
            tempCode = '',
            ind = 0;
            
        // Определяем самозакрывающийся тег или нет и записываем в переменную htmlCode
        htmlCode = (this.endTag) ? `<${this.tag}>` : `<${this.tag}></${this.tag}>`;

        // Добавляем атрибуты тегу
        if (this.arrAttributes.length) {
            tempCode = this.arrAttributes.reduce((sum, elem) => sum + ` ${elem}`);
            ind = htmlCode.indexOf('>');
            htmlCode = htmlCode.slice(0, ind) + ` ${tempCode}` + htmlCode.slice(ind);
        }

        // Добавляем стили тегу
        if (this.arrStyle.length) {
            tempCode = this.arrStyle.reduce((sum, elem) => sum + ` ${elem}`);
            ind = htmlCode.indexOf('>');
            htmlCode = htmlCode.slice(0, ind) + ` style="${tempCode}"` + htmlCode.slice(ind);
        }

        // Добавляем в main тег, вложенные теги
        if (this.arrChilds.length) {
            tempCode = this.arrChilds.reduce((sum, elem) => sum + elem);
            ind = htmlCode.indexOf('>');
            htmlCode = htmlCode.slice(0, ind + 1) + tempCode + htmlCode.slice(ind + 1);
        }

        // Добавляем текстовое содержимое в тег
        if (this.text != '') {
            ind = htmlCode.indexOf('>');
            htmlCode = htmlCode.slice(0, ind + 1) + this.text + htmlCode.slice(ind + 1); 
        }

        return htmlCode;
    }   
}
onGenerateHtml();