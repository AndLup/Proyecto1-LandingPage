const logocasa = document.querySelector('.logocasa');
const menu = document.querySelector('.menu-navegacion');

logocasa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != logocasa){
        menu.classList.toggle("spread")
    }
})
