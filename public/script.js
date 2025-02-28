window.addEventListener('scroll', navControl);

const nav = document.querySelector('nav');
const collectionIntro = document.querySelector('#collectionIntro');

function navControl() 
{
    if (window.scrollY > 135)
    {
        nav.style.top = '-4.5rem';
        collectionIntro.style.animation = 'zoom 1s forwards';
    }
    else
    {
        nav.style.top = '-7.5rem';
    }
}