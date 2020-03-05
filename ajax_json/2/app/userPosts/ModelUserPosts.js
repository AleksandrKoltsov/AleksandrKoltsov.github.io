export class ModelUserPosts{
    constructor(){
        this.link = 'https://jsonplaceholder.typicode.com/posts?userId=';
        this.data = [];
    }

    getData(id){
        return fetch(`${this.link}${id}`).then(d => d.json()).then(dd => dd.map(post=> {
           return this.data = post;
            // console.log(this.data);
        }));
    }

}