const nav = document.querySelector('nav');
const slogam = document.querySelector('#slogan');
const collectionIntro = document.querySelector('#collectionIntro');
const slider = document.querySelector('#slider');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');
const buyBtns = document.querySelectorAll('.buyBtn');
const quantityBags = document.querySelectorAll('.quantityBag');
const itemsDisplay = document.querySelector('#items');

if (leftBtn != null)
{
    leftBtn.addEventListener('click', slideLeft);
    rightBtn.addEventListener('click', slideRight);
}

if (buyBtns != null)
{
    buyBtns.forEach(buyBtn => {
        buyBtn.addEventListener('click', addItemToCart);
    });
}

if (itemsDisplay != null)
{
    //displayItems();
}

window.addEventListener('scroll', navControl);

function navControl() 
{
    if (window.scrollY > 135)
    {
        nav.style.top = '-4.5rem';
        if (collectionIntro != null)
        {
            collectionIntro.style.animation = 'zoom 1s forwards';
        }
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

function getShoppingCart()
{
    return JSON.parse(localStorage.getItem('shoppingCart')) || [];
}

function addItemToCart(e)
{
    let shoppingCart = getShoppingCart();
    const itemValue = e.target.value;
    const itemIndex = shoppingCart.findIndex(item => item.name == itemValue);

    if (itemIndex == -1)
    {
        shoppingCart.push({name: itemValue, quantity: 1});
    }
    else
    {
        shoppingCart[itemIndex].quantity++;
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    updateQuantityBag();
}

function updateQuantityBag()
{
    const shoppingCart = getShoppingCart();

    quantityBags.forEach(quantityBag => {
        quantityBag.innerText = '(' + shoppingCart.length + ')';
    });
}

function displayItems()
{
    let shoppingCart = getShoppingCart();

    shoppingCart.forEach(item => {
        itemsDisplay.innerHTML += `
            <div class="item">
                <svg width="176" height="254" viewBox="0 0 176 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="176" height="254" fill="#e2e2e2"/>
                </svg>
                <div class="description">
                    <h5>${item.name} | M | Verde</h5>
                    <h5>${item.quantity} ${item.quantity > 1 ? 'unidades' : 'unidade'}</h5>
                    <h5>R$70,00</h5>
                </div>
            </div>
        `;
    });
}

//localStorage.removeItem('shoppingCart');
updateQuantityBag();