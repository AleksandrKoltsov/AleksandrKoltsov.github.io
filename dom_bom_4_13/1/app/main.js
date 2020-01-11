document.querySelector('.num').addEventListener('keydown', (ev) => {
    console.log(ev.code)
    if( ev.code == 'ArrowUp' || ev.code == 'ArrowDown'){
        return;
    }else{
        event.preventDefault();
    }
});
