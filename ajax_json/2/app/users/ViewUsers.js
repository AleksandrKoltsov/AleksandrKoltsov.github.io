import { TemplaterUsers } from "./TemplaterUsers.js";
import { TemplaterUserDetails } from "./TemplaterUserDetail.js";

export class ViewUsers{
    constructor(clickFunc, btnClickFunc){
        this.template = new TemplaterUsers();
        this.templateUsDet = new TemplaterUserDetails();
        this.domUsers = document.querySelector('.users');
        this.domUsersDetails = document.querySelector('.usersDet');
        this.listener = clickFunc;
        this.btnListeners = btnClickFunc;
    }

    renderUsers(users){
        // console.log(users);
        this.domUsers.innerHTML = users.map(u => this.template.getHtml(u)).join('');
        [...this.domUsers.querySelectorAll('.btn-posts')]
            .forEach(btn => btn.addEventListener('click', this.listener));
    }

    getId(ev){
        // console.log(ev);
        return ev.target.dataset.id;
    }
    renderUserDetail(data){
        // console.log(data);
        this.domUsersDetails.innerHTML = '';
        this.domUsersDetails.innerHTML += data.map(u => this.templateUsDet.getHtml(u)).join('');
        this.domUsersBtnDetails = document.querySelector('.btnShowPosts').addEventListener('click', this.btnListeners);
    }
}