export class EmpTable {
    constructor(emp) {
        this.emp = emp;
    }
    getHtml() {
        let employees = this.emp.map((el, i) => {
            return `<tr class="emp-row">
            <td>${i+1}</td>
            <td>${el.name}</td>
            <td>${el.age}</td>
            <td>${el.cell}</td>
            <td>${el.email}</td>
            </tr>`;
        }).join('');
        return `<table>
        <tr>
        <th>№</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>CELL</th>
        <th>EMAIL</th>
        </tr>
        ${employees}
        </table>`;
    }
}