// Nav bar toggle
document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0; 
    const main_navbar = document.getElementById('main_navbar');
    console.log('Main navbar is',main_navbar);

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY;
        console.log(scrollTop);
        
        if (scrollTop < lastScrollTop || scrollTop < 100) {
            main_navbar.style.top = "0";
        } else {
            main_navbar.style.top = "-100px";
        }
        lastScrollTop = scrollTop;
});})