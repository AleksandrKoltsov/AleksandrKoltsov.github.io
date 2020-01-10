document.querySelector('.in').addEventListener('keyup', function(ev){
    let blocs = document.querySelector('.blocs'), //1
            count = parseInt(ev.target.value); //2

    while(blocs.firstChild){
        blocs.removeChild(blocs.firstChild);
    }													

    while(count--){ //3
        blocs.appendChild(document.createElement('div'));
    }																						 
});