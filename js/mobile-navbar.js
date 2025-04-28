const mobileMenu = document.querySelector ('.mobile-menu');

const NavList = document.querySelector ('.nav-list');

const header = document.querySelector ('header');

const main = document.querySelector ('main');

const footer = document.querySelector ('footer');

mobileMenu.addEventListener('click', () => {
    NavList.classList.toggle('active');
    header.classList.toggle('active');
    main.classList.toggle('none');
    footer.classList.toggle('none');
});