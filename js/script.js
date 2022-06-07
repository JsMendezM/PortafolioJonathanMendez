
window.onload =  function(){
    const mobile_menu = document.querySelector('.mobile-menu');
    const menu_btn = document.querySelector('.drop-down');
    

    menu_btn.addEventListener('click', function(){
    
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('mobile-active');


    });
}

const menus = document.querySelectorAll('.mobile-menu a');
const mobile_menu = document.querySelector('.mobile-menu');
const menu_btn = document.querySelector('.drop-down');

menus.forEach(menu => {
    menu.addEventListener('click', () => {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('mobile-active');
    });
});