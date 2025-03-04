const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});