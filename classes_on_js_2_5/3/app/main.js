import {Employee} from "./Employee.js";
import {EmpTable} from "./EmpTable.js";
import {StyledEmpTable} from "./StyledEmpTable.js";


fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(({
        results
    }) => {
        results = results.map(el => {
            return new Employee(el);
        });
        showTable(results);
    });

function showTable(results) {
    let table = new EmpTable(results);
    let styledTable = new StyledEmpTable(results);
    styledTable.setStyle('color', 'green')
        .setStyle('border', '1px solid green')
        .setStyle('border-collapse', 'collapse')
        .setStyle('background-color', 'rgba(10, 10, 10)')
        .setStyle('font-family', 'Arial, Helvetica, sans-serif')
        .setStyle('text-shadow', '0 0 1px darkgreen');
    document.querySelector('.container').innerHTML = `<h2>TABLE</h2>${table.getHtml()}`;
    document.querySelector('.container-styled').innerHTML = `<h2>STYLED TABLE</h2>${styledTable.getHtml(styledTable.getStyles())}`;
}