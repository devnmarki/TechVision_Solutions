import './src/style.scss';

const body = document.querySelector('body');

const scrollBtn = document.getElementById('scroll');

const links = document.querySelectorAll('.header a');

const menu = document.getElementById('menu');
const openMenuBtn = document.getElementById('open');
const closeMenuBtn = document.getElementById('close');

const btn1 = document.getElementById('explore-solutions-btn');
const btn2 = document.getElementById('our-projects-btn');

window.onscroll = () => {

    if(window.scrollY >= 900)
        scrollBtn.style.display = 'block';
    else 
        scrollBtn.style.display = 'none';

};

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        if(section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }

        menu.style.display = 'none';
        body.style.overflowY = 'auto';
    })
})

openMenuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    body.style.overflowY = 'hidden';

})

closeMenuBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    body.style.overflowY = 'auto';
})