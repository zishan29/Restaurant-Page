import twitterImage from './images/twitter.svg'
import twitterBlack from './images/twitter-black.svg';
import instagramImage from './images/instagram.svg'
import instagramBlack from './images/instagram-black.svg';

export function homeHeader() {
    const content = document.querySelector("#content");
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const restaurantName = document.createElement('div');
    restaurantName.textContent = "RÉSTAURANT";
    restaurantName.setAttribute('id', 'restaurantName');
    const orderNow = document.createElement('button');
    orderNow.textContent = "Order Now";
    orderNow.setAttribute('id', 'order-now');
    const home = document.createElement('button');
    home.textContent = "Home";
    home.setAttribute('id', 'home');
    const visit = document.createElement('button');
    visit.textContent = "Visit";
    visit.setAttribute('id', 'menu-visit');
    const twit = document.createElement('div');
    twit.setAttribute('id', 'twitter');
    const twitter = new Image();
    twitter.src = twitterImage;
    twit.appendChild(twitter);
    const insta = document.createElement('div');
    insta.setAttribute('id', 'instagram');
    const instagram = new Image();
    instagram.src = instagramImage;
    insta.appendChild(instagram);
    header.appendChild(restaurantName);
    header.appendChild(orderNow);
    header.appendChild(home);
    header.appendChild(visit);
    header.appendChild(twit);
    header.appendChild(insta);
    content.appendChild(header);
}

export function homeHeaderBlack() {
    const content = document.querySelector("#content");
    const header = document.createElement('div');
    header.setAttribute('id', 'header-black');
    const restaurantName = document.createElement('div');
    restaurantName.textContent = "RÉSTAURANT";
    restaurantName.setAttribute('id', 'restaurantName');
    const orderNow = document.createElement('button');
    orderNow.textContent = "Order Now";
    orderNow.setAttribute('id', 'order-now');
    const home = document.createElement('button');
    home.textContent = "Home";
    home.setAttribute('id', 'home');
    const visit = document.createElement('button');
    visit.textContent = "Visit";
    visit.setAttribute('id', 'menu-visit');
    const twit = document.createElement('div');
    twit.setAttribute('id', 'twitter');
    const twitter = new Image();
    twitter.src = twitterBlack;
    twit.appendChild(twitter);
    const insta = document.createElement('div');
    insta.setAttribute('id', 'instagram');
    const instagram = new Image();
    instagram.src = instagramBlack;
    insta.appendChild(instagram);
    header.appendChild(restaurantName);
    header.appendChild(orderNow);
    header.appendChild(home);
    header.appendChild(visit);
    header.appendChild(twit);
    header.appendChild(insta);
    content.appendChild(header);
}

export function createMenu() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    const address = document.createElement('div');
    address.textContent = "123 Fake  Street — Seattle, WA — 206-555-7890";
    address.setAttribute('id', 'address');
    const eat = document.createElement('button');
    eat.textContent = 'EAT';
    eat.setAttribute('id', 'eat');
    const drink = document.createElement('button');
    drink.textContent = "DRINK";
    drink.setAttribute('id', 'drink');
    const $visit = document.createElement('button');
    $visit.textContent = "VISIT";
    $visit.setAttribute('id', 'visit');
    menu.appendChild(address);
    menu.appendChild(eat);
    menu.appendChild(drink);
    menu.appendChild($visit);
    content.appendChild(menu);
}