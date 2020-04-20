let arrDate = [];
function populate(ev) {
    // console.log(ev);
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100){
        return;
    }else{
        onRender();
    }
}

function onNews () {
    let url = `https://api.covid19api.com/summary`;
    let req = new Request(url);
    fetch(req).then((response)=> response.json()).then(data => {
        arrDate = [...data.Countries];

        onRender();
        onRender();
    });
}

function onRender () {
    if(arrDate.length<=0){
        return;
    }
    const rend = `
            <hr/>
            <h2>${arrDate[0].Country}</h2>
            <p>New confirmed:${arrDate[0].NewConfirmed}</p>
            <p>Total confirmed:${arrDate[0].TotalConfirmed}</p>
            <p>New deaths:${arrDate[0].NewDeaths}</p>
            <p>Total deaths:${arrDate[0].TotalDeaths}</p>
            <p>New recovered:${arrDate[0].NewRecovered}</p>
            <p>Total recovered:${arrDate[0].TotalRecovered}</p>
            <p>Date:${arrDate[0].Date}</p>
        `;
    arrDate.shift();
    document.body.insertAdjacentHTML("beforeend", rend);
    return;
}

window.addEventListener('scroll', populate);
onNews();