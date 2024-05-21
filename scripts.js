document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-list');
    const scrollDown = document.getElementById('scroll-down');
    const nextSection = document.getElementById('next-section');
    const connectBtn = document.getElementById('connectBtn');

    const linkedinBtn = document.getElementById('linkedIn-btn');
    const githubBtn = document.getElementById('github-btn');
    const discordBtn = document.getElementById('discord-btn');
    const indeedBtn = document.getElementById('indeed-btn');

    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.popup-close-btn');
    const okBtn = document.querySelector('.ok-btn');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('open');
    });

    scrollDown.addEventListener('click', () => {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });

    connectBtn.addEventListener('click', () => {
        openNav();
    });

    linkedinBtn.addEventListener('click', () => {
        popup.style.display = "block";
        window.open("https://www.linkedin.com/in/ankit-modhera", '_blank');
    });

    githubBtn.addEventListener('click', () => {
        popup.style.display = "block";
        window.open("https://github.com/an-m1", '_blank');
    });

    discordBtn.addEventListener('click', () => {
        popup.style.display = "block";
        window.open("https://discordapp.com/users/689113758068637722", '_blank');
    });

    indeedBtn.addEventListener('click', () => {
        popup.style.display = "block";
        window.open("https://profile.indeed.com/p/ankitm-wskg5mz", '_blank');
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = "none";
    });

    okBtn.addEventListener('click', () => {
        popup.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
