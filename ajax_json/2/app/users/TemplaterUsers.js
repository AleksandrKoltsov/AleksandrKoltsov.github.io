export class TemplaterUsers{
    getHtml(user){
      // console.log(user);
        return `
          <div class="content">
            <p>
              <button class="button btn-posts" data-id="${user.id}">${user.name}</button>
            </p>
          </div>`;
    }
}