

menu = document.querySelector('.menu')
menuTop = document.querySelector('.menu_top')
menuMiddle = document.querySelector('.menu_middle')
menuBottom = document.querySelector('.menu_bottom')
ul = document.querySelector('.menu_burger ul')

menu.addEventListener('click', e =>{

    menuTop.classList.toggle('menu_top_click')
    menuMiddle.classList.toggle('menu_middle_click')
    menuBottom.classList.toggle('menu_bottom_click')

    ul.classList.toggle('menu_ul')
})