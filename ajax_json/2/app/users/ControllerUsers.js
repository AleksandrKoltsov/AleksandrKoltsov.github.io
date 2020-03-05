import { ModelrUsers } from "./ModelUsers.js";
import { ViewUsers } from "./ViewUsers.js";

export class ControllerUsers{
    constructor({publish}){
        this.model = new ModelrUsers();
        this.view = new ViewUsers(
            this.handleBtnClick.bind(this),
            this.handleBtnClickUserPosts.bind(this)
        );
        this.publish = publish;
        this.getData();
        this.userId;
    }

    getData(){
        this.model.getData().then(d => this.view.renderUsers(d));
    }

    handleBtnClick(ev){
        let id = this.view.getId(ev);
        this.userId = id;
        this.model.getUserDetail(id).then(d => this.view.renderUserDetail(d));
        // console.log(id);
    }
    handleBtnClickUserPosts(ev){
        this.publish('show-posts', this.userId);
    }

}