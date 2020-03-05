export class TemplaterUserPosts{
    getHtml(data){
      // console.log(data);
        return `
          <div class="container-post">
            <div class="title"><p>${data.title}</p></div>
            <div class="post"><p>${data.body}</p></div>
          </div>
        `;
    }
}