// navbar fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const totop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        totop.classList.remove('hidden');
        totop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        totop.classList.remove('flex');
        totop.classList.add('hidden');
    }
};


// hamberger


const hamberger = document.querySelector('#hamberger');
const navMenu = document.querySelector('#nav-menu');

hamberger.addEventListener('click', function( ) {
    hamberger.classList.toggle('hamberger-active');
    navMenu.classList.toggle('hidden');
});

// klik diluar hamberger
window.addEventListener('click', function (e) {
    if(e.target !=hamberger && e.target != navMenu) {
        hamberger.classList.remove('hamberger-active');
        navMenu.classList.add('hidden');
    }
});

// dark mode toggle
const darktoggel = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darktoggel.addEventListener('click', function() {
    if (darktoggel.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//perpindahan posisi toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darktoggel.checked = true;
} else {
    darktoggel.checked = false;
}