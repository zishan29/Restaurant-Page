import './style.css';
import { createMenu, homeHeader } from "./home-page";
import homeImage from './images/home.jpg';
import eatImage from './images/eat.jpg';
import drinkImage from './images/drink.jpg';
import restaurantImage from './images/visit.jpg';
import eat from './eat.js';

const body = document.querySelector('body');
body.style.backgroundImage = `url(${homeImage})`;
body.style.backgroundSize = "cover";
homeHeader();
createMenu();

const $eat = document.querySelector('#eat');
$eat.addEventListener('mouseover', () => {
    body.style.backgroundImage = `url(${eatImage})`;
    body.style.backgroundSize = 'cover';
});

$eat.addEventListener('mouseout', () => {
    body.style.backgroundImage = `url(${homeImage})`;
    body.style.backgroundSize = "cover";
});


const $drink = document.querySelector('#drink');
$drink.addEventListener('mouseover', () => {
    body.style.backgroundImage = `url(${drinkImage})`;
    body.style.backgroundSize = 'cover';
});

$drink.addEventListener('mouseout', () => {
    body.style.backgroundImage = `url(${homeImage})`;
    body.style.backgroundSize = "cover";
});


const $visit = document.querySelector('#visit');
$visit.addEventListener('mouseover', () => {
    body.style.backgroundImage = `url(${restaurantImage})`;
    body.style.backgroundSize = 'cover';
})

$visit.addEventListener('mouseout', () => {
    body.style.backgroundImage = `url(${homeImage})`;
    body.style.backgroundSize = "cover";
});

$eat.addEventListener('click', () => {
    eat();
});