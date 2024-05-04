const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('isactive');
    menuLinks.classList.toggle('active');
}
)