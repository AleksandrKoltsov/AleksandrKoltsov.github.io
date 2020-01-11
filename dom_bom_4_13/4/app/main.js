const domLinks = {
    contComm : document.querySelector('.comments'),
    inpName : document.querySelector('.inpName'),
    inpDate : inpDate(),
    comment : document.querySelector('.commentArea'),
    btnAddComm : document.querySelector('.addComm')
}
function inpDate(){
    const time = new Date();
    const year = time.getFullYear();
    let month = (Number(time.getMonth()) + 1);
    const day = time.getDate();

    if(month < 10) month = '0' + month;
    return `${day}.${month}.${year}`
}
domLinks.btnAddComm.addEventListener('click', (ev)=> {

    if(domLinks.inpName.value == '' || domLinks.comment.value == ''){
        ev.preventDefault();
    }else {
        domLinks.contComm.innerHTML += `
        <div class="postComm">
                <div class="name">${domLinks.inpName.value}</div>
                <div class="date">${domLinks.inpDate}</div>
                <div class="comment">${domLinks.comment.value}</div>
            </div>
        `;

        domLinks.inpName.value = '';
        domLinks.comment.value = '';
    }
});