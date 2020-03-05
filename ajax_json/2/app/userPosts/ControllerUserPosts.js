import { ModelUserPosts } from "./ModelUserPosts.js";
import { ViewUserPosts } from "./ViewUserPosts.js";

export class ControllerUserPosts{
    constructor({subscribe}){
        this.model = new ModelUserPosts();
        this.view = new ViewUserPosts();
        subscribe('show-posts', this.showPosts.bind(this));

    }

    showPosts(id){
        this.model.getData(id).then(data => this.view.renderUserPosts(data));
    }
}