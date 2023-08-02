import './style.css';
import { createMenu, homeHeader } from "./home-page";
import eat from './eat.js';
import drink from './drink.js'
import visit from './visit.js'

const body = document.querySelector('body');
body.classList.add('homeImage');
homeHeader();
createMenu();

function createBlank() {
    const content = document.querySelector('#content');
    content.textContent = "";
    body.classList.remove('homeImage');
}

const $eat = document.querySelector('#eat');
$eat.addEventListener('mouseover', () => {
    body.classList.remove('homeImage');
    body.classList.add('eatImage');
});

$eat.addEventListener('mouseout', () => {
    setTimeout(()=> {
        body.classList.remove('eatImage');
        body.classList.add('homeImage');
    }
    ,100);
});


const $drink = document.querySelector('#drink');
$drink.addEventListener('mouseover', () => {
    body.classList.remove('homeImage');
    body.classList.add('drinkImage');
});

$drink.addEventListener('mouseout', () => {
    setTimeout(()=> {
        body.classList.remove('drinkImage');
        body.classList.add('homeImage');
    }
    ,100);
});


const $visit = document.querySelector('#visit');
$visit.addEventListener('mouseover', () => {
    body.classList.remove('homeImage');
    body.classList.add('visitImage');
})

$visit.addEventListener('mouseout', () => {
    setTimeout(()=> {
        body.classList.remove('visitImage');
        body.classList.add('homeImage');
    }
    ,100);
});

$eat.addEventListener('click', () => {
    body.classList.remove('eatImage');
    createBlank();
    eat();
});

$drink.addEventListener('click', () => {
    body.classList.remove('drinkImage');
    createBlank();
    drink();
});

$visit.addEventListener('click', () => {
    body.classList.remove('visitImage');
    createBlank();
    visit();
})