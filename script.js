// Javascript Code

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-list');
    const scrollDown = document.getElementById('scroll-down');
    const nextSection = document.getElementById('next-section');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    scrollDown.addEventListener('click', () => {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
});
