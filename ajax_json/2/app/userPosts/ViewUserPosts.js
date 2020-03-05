import { TemplaterUserPosts } from "./TemplaterUserPosts.js";

export class ViewUserPosts{
    constructor(){
        this.template = new TemplaterUserPosts();
        this.domPosts = document.querySelector('.userPosts');        
    }

    renderUserPosts(posts){
        // console.log(posts);
        this.domPosts.innerHTML = '';
        this.domPosts.innerHTML = posts.map(u => this.template.getHtml(u)).join('');
    }
}