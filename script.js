let btnMenu = document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')
let overlay = document.getElementById('overlay_menu_mob')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir_menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})

overlay_menu_mob.addEventListener('click', ()=>{
    menu.classList.remove('abrir_menu')
})