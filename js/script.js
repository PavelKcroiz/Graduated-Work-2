const catalogProduct = [
    {
        id: 'id1',
        name: 'Asus PRIME',
        img: './img/Asus_PRIME.jpg',
        price: 7000  
    },
    {
        id: 'id2',
        name: 'Asus ROG',
        img: './img/Asus_ROG.jpg',
        price: 21000
    },
    {
        id: 'id3',
        name: 'Asus TUF Gaming',
        img: './img/Asus_TUF.jpg',
        price: 17000  
    },
    {
        id: 'id4',
        name: 'Asus Viva Book',
        img: './img/Asus_VB.jpg',
        price: 11000
    },
    {
        id: 'id5',
        name: 'Asus X302UA',
        img: './img/Asus_X302UA.jpg',
        price: 12500  
    },
    {
        id: 'id6',
        name: 'Asus X507ZD',
        img: './img/Asus_X507ZD.jpg',
        price: 13000
    },
    {
        id: 'id7',
        name: 'Zenbook',
        img: './img/Asus_Zenbook.jpg',
        price: 12000
    },
    {
        id: 'id8',
        name: 'Asus Zephyrus',
        img: './img/Asus_Zephyrus.jpg',
        price: 16000
    },
    {
        id: 'id9',
        name: 'Asus Z8PE',
        img: './img/Asus_Z8PE.jpg',
        price: 8000
    },
]




let containerProduct =document.querySelector('.container_products');
let sliders = document.querySelector('#sliders');
let text = document.querySelector('#text');
let advantages = document.querySelector('#advantages');
let catalog = document.querySelector('#catalog');
let main = document.querySelector('#main');

catalog.addEventListener('click', function() {
    containerProduct.style.display = 'flex';

    sliders.style.display = "none";
    text.style.display = "none";
    advantages.style.display = "none";
});

main.addEventListener('click', function() {
    containerProduct.style.display = 'none';

    sliders.style.display = "block";
    text.style.display = "block";
    advantages.style.display = "block";
});