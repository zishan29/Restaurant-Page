import './style.css';
import homePage, { createMenu } from "./home-page";
import homeImage from './images/home.jpg';
import eat from './images/eat.jpg';
import drink from './images/drink.jpg';
import visit from './images/visit.jpg';

const body = document.querySelector('body');
body.style.backgroundImage = `url(${homeImage})`;
body.style.backgroundSize = "cover";
homePage();
createMenu();

const $eat = document.querySelector('#eat');
$eat.addEventListener('mouseover', () => {
    body.style.backgroundImage = `url(${eat})`;
    body.style.backgroundSize = 'cover';
});

$eat.addEventListener('mouseout', () => {
    body.style.backgroundImage = `url(${homeImage})`;
    body.style.backgroundSize = "cover";
});


const $drink = document.querySelector('#drink');
$drink.addEventListener('mouseover', () => {
    body.style.backgroundImage = `url(${drink})`;
    body.style.backgroundSize = 'cover';
});

$drink.addEventListener('mouseout', () => {
    body.style.backgroundImage = `url(${homeImage})`;
    body.style.backgroundSize = "cover";
});


const $visit = document.querySelector('#visit');
$visit.addEventListener('mouseover', () => {
    body.style.backgroundImage = `url(${visit})`;
    body.style.backgroundSize = 'cover';
})

$visit.addEventListener('mouseout', () => {
    body.style.backgroundImage = `url(${homeImage})`;
    body.style.backgroundSize = "cover";
});