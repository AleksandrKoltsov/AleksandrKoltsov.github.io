export class TemplaterUserDetails{
    getHtml(data){
        return `
        <div class="user-info">
        <div class="head">User info:</div>
        <table class="userInfo">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>${data.name}</td>
            </tr>
            <tr>
              <th>Username:</th>
              <td>${data.username}</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>${data.address.city}, ${data.address.street}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>${data.email}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>${data.phone}</td>
            </tr>
            <tr>
              <th>Website:</th>
              <td>${data.website}</td>
            </tr>
          </tbody>
        </table>
        <button class="btnShowPosts">Show posts</button>
      </div>
        `;
    }
}