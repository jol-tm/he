const nav = document.querySelector('nav');
const collectionIntro = document.querySelector('#collectionIntro');
const slider = document.querySelector('#slider');

window.addEventListener('scroll', navControl);
document.querySelector('#leftBtn').addEventListener('click', slideLeft);
document.querySelector('#rightBtn').addEventListener('click', slideRight);

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

function slideLeft()
{
    slider.scrollBy(-300, 0);
}

function slideRight()
{
    slider.scrollBy(300, 0);
}