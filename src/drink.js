import { homeHeaderBlack } from "./home-page";
import drinkMenuImage from './images/drink-menu.jpeg';
import { addFooter } from "./eat";

export default function drink() {
    homeHeaderBlack();
    const content = document.querySelector('#content');
    const drinkContent = document.createElement('div');
    drinkContent.setAttribute('id', 'drink-content');
    const header = document.createElement('div');
    header.setAttribute('id', 'heading');
    const libations = document.createElement('div');
    libations.textContent = '—  LIBATIONS  —';
    libations.setAttribute('id', 'libations');
    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = 'Please ask our sommelier about wine pairings';
    header.appendChild(libations);
    header.appendChild(description);
    drinkContent.appendChild(header);
    drinkContent.appendChild(header);
    content.appendChild(drinkContent);
    addCocktails();
    addImage();
    addWines();
    addBeer();
    addFooter();
    addReservation();
}

function addCocktails() {
    const drinkContent = document.querySelector('#drink-content');
    const cocktails = document.createElement('div');
    cocktails.setAttribute('id', 'cocktails');
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'Cocktails';
    cocktails.appendChild(title);

    const container1 = document.createElement("div");
    container1.setAttribute('id', 'container1');
    const a = document.createElement('div');
    a.textContent = '—  Manhattan  —';
    container1.appendChild(a);
    const b = document.createElement('div');
    b.textContent = 'rye whisky, sweet vermouth, bitters';
    container1.appendChild(b);
    const c = document.createElement('div');
    c.textContent = '$11';
    container1.appendChild(c);
    cocktails.appendChild(container1);

    const container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    const d = document.createElement('div');
    d.textContent = '—  Dark & Stormy  —';
    container2.appendChild(d);
    const e = document.createElement('div');
    e.textContent = 'black rum, ginger beer, lime';
    container2.appendChild(e);
    const f = document.createElement('div');
    f.textContent = '$9';
    container2.appendChild(f);
    cocktails.appendChild(container2);

    const container3 = document.createElement('div');
    container3.setAttribute('id', 'container3');
    const g = document.createElement('div');
    g.textContent = '—  Martini  —';
    container3.appendChild(g);
    const h = document.createElement('div');
    h.textContent = 'gin, vermouth, olive, lemon twist';
    container3.appendChild(h);
    const i = document.createElement('div');
    i.textContent = '$12';
    container3.appendChild(i);
    cocktails.appendChild(container3);

    const container4 = document.createElement('div');
    container4.setAttribute('id', 'container4');
    const j = document.createElement('div');
    j.textContent = '—  Caipirinha  —'
    container4.appendChild(j);
    const k = document.createElement('div');
    k.textContent = 'cachaça, sugar, lime';
    container4.appendChild(k);
    const l = document.createElement('div');
    l.textContent = '$9';
    container4.appendChild(l);
    cocktails.appendChild(container4);

    const container5 = document.createElement('div');
    container5.setAttribute('id', 'container5');
    const m = document.createElement('div');
    m.textContent = '—  White Russian  —';
    container5.appendChild(m);
    const n = document.createElement('div');
    n.textContent = 'vodka, coffee liqueur, cream';
    container5.appendChild(n);
    const o = document.createElement('div');
    o.textContent = '$10';
    container5.appendChild(o);
    cocktails.appendChild(container5);
    

    drinkContent.appendChild(cocktails);
}

function addImage() {
    const content = document.querySelector('#content');
    const drinkImage = new Image();
    drinkImage.setAttribute('id', 'drink-image');
    drinkImage.src = drinkMenuImage;
    content.appendChild(drinkImage);
}

function addWines() {
    const drinkContent = document.querySelector('#drink-content');
    const wine = document.createElement('div');
    wine.setAttribute('id', 'wine');
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'Wine';
    wine.appendChild(title);
    const container1 = document.createElement('div');
    container1.setAttribute('id', 'container1');
    const a = document.createElement('div');
    a.textContent = '—  Sauvignon Blanc  —';
    container1.appendChild(a);
    const b = document.createElement('div');
    b.textContent = 'Waikato, New Zealand, 2012';
    container1.appendChild(b);
    const c = document.createElement('div');
    c.textContent = '$10 / $35';
    wine.appendChild(container1);

    const container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    const d = document.createElement('div');
    d.textContent = '—  Pinot Grigio  —';
    container2.appendChild(d);
    const e = document.createElement('div');
    e.textContent = 'Veneto, Italy 2012';
    container2.appendChild(e);
    const f = document.createElement('div');
    f.textContent = '$11 / $40';
    container2.appendChild(f);
    wine.appendChild(container2);

    const container3 = document.createElement('div');
    container3.setAttribute('id', 'container3');
    const g = document.createElement('div');
    g.textContent = '—  Chardonnay  —';
    container3.appendChild(g);
    const h = document.createElement('div');
    h.textContent = 'Monterey, California 2012';
    container3.appendChild(h);
    const i = document.createElement('div');
    i.textContent = '$10';
    container3.appendChild(i);
    wine.appendChild(container3);

    const container4 = document.createElement('div');
    container4.setAttribute('id', 'container4');
    const j = document.createElement('div');
    j.textContent = '—  Cabernet Sauvignon  —';
    container4.appendChild(j);
    const k = document.createElement('div');
    k.textContent = 'Napa Valley, California 2010';
    container4.appendChild(k);
    const l = document.createElement('div');
    l.textContent = '$11 / $38';
    container4.appendChild(l);
    wine.appendChild(container4);

    const container5 = document.createElement('div');
    container5.setAttribute('id', 'container5');
    const m = document.createElement('div');
    m.textContent = '—  Pinot Noir  —';
    container5.appendChild(m);
    const n = document.createElement('div');
    n.textContent = 'Colchagua Valley, Chile 2012';
    container5.appendChild(n);
    const o = document.createElement('div');
    o.textContent = '$9';
    container5.appendChild(o);
    wine.appendChild(container5);


    drinkContent.appendChild(wine);
}

function addBeer() {
    const drinkContent = document.querySelector('#drink-content');
    const beer = document.createElement('div');
    beer.setAttribute('id', 'beer');
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'Beer';
    beer.appendChild(title);
    const container1 = document.createElement('div');
    container1.setAttribute('id', 'container1');
    const a = document.createElement('div');
    a.textContent = '—  Nameless  —';
    container1.appendChild(a);
    const b = document.createElement('div');
    b.textContent = 'ipa, california';
    container1.appendChild(b);
    const c = document.createElement('div');
    c.textContent = '$8';
    beer.appendChild(container1);

    const container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    const d = document.createElement('div');
    d.textContent = '—  Demo Ale  —';
    container2.appendChild(d);
    const e = document.createElement('div');
    e.textContent = 'amber, oregon';
    container2.appendChild(e);
    const f = document.createElement('div');
    f.textContent = '$11';
    container2.appendChild(f);
    beer.appendChild(container2);

    const container3 = document.createElement('div');
    container3.setAttribute('id', 'container3');
    const g = document.createElement('div');
    g.textContent = '—  Fake Beer  —';
    container3.appendChild(g);
    const h = document.createElement('div');
    h.textContent = 'pilsner, vermont';
    container3.appendChild(h);
    const i = document.createElement('div');
    i.textContent = '$8';
    container3.appendChild(i);
    beer.appendChild(container3);

    const container4 = document.createElement('div');
    container4.setAttribute('id', 'container4');
    const j = document.createElement('div');
    j.textContent = '—  Schwarzbier  —';
    container4.appendChild(j);
    const k = document.createElement('div');
    k.textContent = 'dark lager, munich';
    container4.appendChild(k);
    const l = document.createElement('div');
    l.textContent = '$12';
    container4.appendChild(l);
    beer.appendChild(container4);

    drinkContent.appendChild(beer);
}

function addReservation() {
    const drinkContent = document.querySelector('#drink-content');
    const makeReservation = document.createElement('button');
    makeReservation.setAttribute('id', 'make-reservation');
    makeReservation.textContent = 'MAKE A RESERVATION';
    drinkContent.appendChild(makeReservation);
}