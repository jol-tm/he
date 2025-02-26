window.addEventListener('scroll', navControl);

function navControl() 
{
    const nav = document.querySelector('nav');

    if (window.scrollY > 135)
    {
        nav.style.top = '-4.5rem';
    }
    else
    {
        nav.style.top = '-7.5rem';
    }
}