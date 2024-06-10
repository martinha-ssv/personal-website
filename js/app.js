
function buttonStyle(button, bgColor) {
    button.style.backgroundColor = bgColor;
}

document.addEventListener('DOMContentLoaded', function () {
    // Nav bar toggle
    let lastScrollTop = 0; 
    const main_navbar = document.getElementById('main_navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
        
        if (scrollTop < lastScrollTop || scrollTop < 100) {
            main_navbar.style.top = "0";
        } else {
            main_navbar.style.top = "-100px";
        }
        lastScrollTop = scrollTop;
});

    // Hero buttons hover
    const hero_buttons = document.getElementsByClassName('button');
    

    for (let i = 0; i < hero_buttons.length; i++) {
        hero_buttons[i].addEventListener('mouseover', function() {
            if (hero_buttons[i].dataset.type =='full') {
                buttonStyle(hero_buttons[i], 'var(--button-hover-color)');
                Object.assign(hero_buttons[i].firstElementChild.style, {color: 'var(--accent-color)'});
                //buttonStyle(hero_buttons[i], 'var(--button-hover-color)');
            } else {
                buttonStyle(hero_buttons[i], 'var(--sec-button-hover-color)');
            }
        });

        hero_buttons[i].addEventListener('mouseout', function() {
            if (hero_buttons[i].dataset.type =='full') {
                buttonStyle(hero_buttons[i], 'var(--accent-color)');
                Object.assign(hero_buttons[i].firstElementChild.style, {color: 'var(--bg-color)'});
            } else {
                buttonStyle(hero_buttons[i], 'transparent');
            }
        });
    }



})