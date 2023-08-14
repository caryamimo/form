let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('navbar');


menubar.oneclick = () =>{
    menubar.classList.taggle('fa-times')
    mynav.classList.taggle('active')
}