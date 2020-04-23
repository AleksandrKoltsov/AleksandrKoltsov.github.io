function onCss() {
    
    const cssClass = new CssClass('selector');

    cssClass.addStyles('background: red;','width: 100px;','height: 100px;', 'border: 1px solid black;');

    document.body.innerHTML = `<p>Create style: ${cssClass.getCss()}</p>`;

    cssClass.deleteStyles('width');

    document.body.innerHTML += `<p>Remove style: ${cssClass.getCss()}</p>`;
}

class CssClass {
    constructor(selector = ''){
        this.selector = selector;
        this.arrStyle = [];
    }
    addStyles(){
        for (let i = 0; i < arguments.length; i++) {
            this.arrStyle.push(arguments[i]);
        }
    }
    deleteStyles(style){
        this.arrStyle = this.arrStyle.filter(elem => !elem.includes(style));
    }

    getCss(){
        let styleCode = (this.arrStyle.length) ? `.${this.selector}{` + this.arrStyle.reduce((sum, elem) => sum + elem) + `}` : false;
        return styleCode;
    }
}
onCss();