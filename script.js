
//click di luar sidebar


const navbarMenu=document.querySelector('.navbar-menu');
document.querySelector('#menu').onclick=()=>{
    navbarMenu.classList.toggle('aktif')
}
const menu=document.querySelector('#menu');
document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarMenu.contains(e.target)){
        navbarMenu.classList.remove('aktif');
    }
});