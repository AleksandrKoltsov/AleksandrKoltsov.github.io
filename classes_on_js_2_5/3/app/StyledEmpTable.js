import {
    EmpTable
} from "./EmpTable.js";

export class StyledEmpTable extends EmpTable {
    constructor(emp) {
        super(emp);
        this.styles = [{
            key: 'background-color',
            value: 'red'
        }, {
            key: 'color',
            value: 'blue'
        }];
    }
    setStyle(key, value) {
        this.styles = this.styles.filter((el) => {
            return el.key !== key;
        });
        this.styles.push({ key,value});
        return this;
    }

    getStyles() {
        return this.styles.map(({key,value}) => {
            return `${key}:${value};`
        }).join('');
    }

    getHtml(style) {
        let parentHtml = super.getHtml();
        parentHtml = parentHtml.replace(`>`, ` style="${style}">`);
        return parentHtml;
    }
}