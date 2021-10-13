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
});


const imagen1 = document.querySelector('.casa');
const contenedorLight = document.querySelector('.img-light-1');

imagen1.addEventListener('click', ()=>{
    aparecerImagen();
})


contenedorLight.addEventListener('click',(e)=>{
        if(e.target !== contenedorLight || e.target == contenedorLight){    
        contenedorLight.classList.toggle('show');
    }})

    const aparecerImagen = ()=>{
        contenedorLight.classList.toggle('show')
        }


