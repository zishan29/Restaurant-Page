import { homeHeaderBlack } from "./home-page";
import menuImage from './images/menu.jpeg';
import instagramBlack from './images/instagram-black.svg';
import twitterBlack from './images/twitter-black.svg';

export default function eat() {
    const content = document.querySelector('#content');
    homeHeaderBlack();
    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');
    const header = document.createElement('div');
    header.setAttribute('id', 'heading');
    const entrees = document.createElement('div');
    entrees.textContent = '—  ENTRÉES  —';
    entrees.setAttribute('id', 'entrees');
    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = 'Modern dishes that capture the flavors of the season';
    header.appendChild(entrees);
    header.appendChild(description);
    menuContent.appendChild(header);
    content.appendChild(menuContent);
    createLeft();
    createCenter();
    createRight();
    addTastingMenu();
    addImage();
    addDessert();
    addFooter();
}

function createLeft() {
    const menuContent = document.querySelector('#menu-content');
    const left = document.createElement('div');
    left.setAttribute('id', 'left');
    const container1 = document.createElement('div');
    container1.setAttribute('id', 'container1');
    const a = document.createElement('div');
    a.textContent = 'Garden';
    a.setAttribute('id', 'garden');
    left.appendChild(a);
    const b = document.createElement('div');
    b.textContent = '—  Sautéed Swiss Chard  —';
    container1.appendChild(b);
    const c = document.createElement('div');
    c.textContent = 'garlic, balsamic reduction';
    container1.appendChild(c);
    const d = document.createElement('div');
    d.textContent = '$7';
    container1.appendChild(d);
    left.appendChild(container1);
    
    const container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    const e = document.createElement('div');
    e.textContent = '—  Hen of the Woods  —';
    container2.appendChild(e);
    const f = document.createElement('div');
    f.textContent = 'shallots, thyme, black pepper';
    container2.appendChild(f);
    const g = document.createElement('div');
    g.textContent = '$8';
    container2.appendChild(g);
    left.appendChild(container2);

    const container3 = document.createElement('div');
    container3.setAttribute('id', 'container3');
    const h = document.createElement('div');
    h.textContent = '—  Roasted Romanesco  —';
    container3.appendChild(h);
    const i = document.createElement('div');
    i.textContent = 'onion, sage, pecorino romano';
    container3.appendChild(i);
    const j = document.createElement('div');
    j.textContent = '$9';
    container3.appendChild(j);
    left.appendChild(container3);

    menuContent.appendChild(left);
}


function createCenter() {
    const menuContent = document.querySelector('#menu-content');
    const center = document.createElement('div');
    center.setAttribute('id', 'center');
    const container4 = document.createElement('div');
    container4.setAttribute('id', 'container4');
    const a = document.createElement('div');
    a.textContent = 'Sea';
    a.setAttribute('id', 'sea');
    center.appendChild(a);
    const b = document.createElement('div');
    b.textContent = '—  Grilled Octopus  —';
    container4.appendChild(b);
    const c = document.createElement('div');
    c.textContent = 'bay leaf, whole peppercorns, lemon';
    container4.appendChild(c);
    const d = document.createElement('div');
    d.textContent = '$20';
    container4.appendChild(d);
    center.appendChild(container4);

    const container5 = document.createElement('div');
    container5.setAttribute('id', 'container5');
    const e = document.createElement('div');
    e.textContent = '—  Crab Ravioli  —';
    container5.appendChild(e);
    const f = document.createElement('div');
    f.textContent = 'garlic, white wine, basil, parsley, ricotta';
    container5.appendChild(f);
    const g = document.createElement('div');
    g.textContent = '$22';
    container5.appendChild(g);
    center.appendChild(container5);

    const container6 = document.createElement('div');
    container6.setAttribute('id', 'container6');
    const h = document.createElement('div');
    h.textContent = '—  Wood-Fired Sea Bream  —';
    container6.appendChild(h);
    const i = document.createElement('div');
    i.textContent = 'artichoke, capers, rosemary, thyme';
    container6.appendChild(i);
    const j = document.createElement('div');
    j.textContent = '$25';
    container6.appendChild(j);
    center.appendChild(container6);


    menuContent.appendChild(center);
}

function createRight() {
    const menuContent = document.querySelector('#menu-content');
    const right = document.createElement('div');
    right.setAttribute('id', 'right');
    const container7 = document.createElement('div');
    container7.setAttribute('id', 'container7');
    const a = document.createElement('div');
    a.textContent = 'Land';
    a.setAttribute('id', 'land');
    right.appendChild(a);
    const b = document.createElement('div');
    b.textContent = '—  Fried Quail  —'
    container7.appendChild(b);
    const c = document.createElement('div');
    c.textContent = 'paprika, turmeric, black pepper, ginger';
    container7.appendChild(c);
    const d = document.createElement('div');
    d.textContent = '$18';
    container7.appendChild(d);
    right.appendChild(container7);

    const container8 = document.createElement('div');
    container8.setAttribute('id', 'container8');
    const e = document.createElement('div');
    e.textContent = '—  Escargot  —';
    container8.appendChild(e)
    const f = document.createElement('div');
    f.textContent = 'garlic, shallots, parsley, black pepper';
    container8.appendChild(f);
    const g = document.createElement('div');
    g.textContent = '$19';
    container8.appendChild(g);
    right.appendChild(container8);


    const container9 = document.createElement('div');
    container9.setAttribute('id', 'container9');
    const h = document.createElement('div');
    h.textContent = '—  Lamb Stew  —'
    container9.appendChild(h);
    const i = document.createElement('div');
    i.textContent = 'roma tomatoes, cannellini beans, onion';
    container9.appendChild(i);
    const j = document.createElement('div');
    j.textContent = '$21';
    container9.appendChild(j);
    right.appendChild(container9);

    menuContent.appendChild(right);

}

function addTastingMenu() {
    const menuContent = document.querySelector('#menu-content');
    const tastingMenu = document.createElement('div');
    tastingMenu.setAttribute('id', 'tasting-menu');
    const a = document.createElement('div');
    a.textContent = 'Tasting Menu $60'
    tastingMenu.appendChild(a);
    const b = document.createElement('div');
    b.textContent = '(wine pairing an additional $10)';
    tastingMenu.appendChild(b);
    const c = document.createElement('div');
    c.textContent = 'Executive Chef Naomi Rhee';
    tastingMenu.appendChild(c);

    menuContent.append(tastingMenu);

}

function addImage() {
    const content = document.querySelector('#content');
    const image = new Image();
    image.src = menuImage;
    image.setAttribute('id', 'menu-image');
    content.append(image);
}

function addDessert() {
    const menuContent = document.querySelector('#menu-content');
    const dessert = document.createElement('div');
    dessert.setAttribute('id', 'dessert');
    const a = document.createElement('div');
    a.textContent = '—  DESSERT  —';
    a.setAttribute('id', 'title');
    dessert.appendChild(a);
    const b = document.createElement('div');
    b.textContent = 'Handmade daily, exclusively in-house';
    b.setAttribute('id', 'description');
    dessert.appendChild(b);

    const container1 = document.createElement('div');
    container1.setAttribute('id', 'container1');
    const c = document.createElement('div');
    c.textContent = '—  Meyer Lemon Tart  —';
    container1.appendChild(c);
    const d = document.createElement('div');
    d.textContent = 'yogurt, kishu mandarin drizzle';
    container1.appendChild(d);
    const e = document.createElement('div');
    e.textContent = '$10';
    container1.appendChild(e);
    dessert.appendChild(container1);

    const container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    const f = document.createElement('div');
    f.textContent = '—  Spiced Apple Crumble  —';
    container2.appendChild(f);
    const h = document.createElement('div');
    h.textContent = 'smoked vanilla bean, cinnamon';
    container2.appendChild(h);
    const i = document.createElement('div');
    i.textContent = '$10';
    container2.appendChild(i);
    dessert.appendChild(container2);

    const container3 = document.createElement('div');
    container3.setAttribute('id', 'container3');
    const j = document.createElement('div');
    j.textContent = '—  Chocolate Malt Cake  —';
    container3.appendChild(j);
    const k = document.createElement('div');
    k.textContent = 'pretzel, peanut brittle, caramel';
    container3.appendChild(k);
    const l = document.createElement('div');
    l.textContent = '$11';
    container3.appendChild(l);
    dessert.appendChild(container3);

    const container4 = document.createElement('div');
    container4.setAttribute('id', 'container4');
    const m = document.createElement('div');
    m.textContent = '—  Bananarama  —';
    container4.appendChild(m);
    const n = document.createElement('div');
    n.textContent = 'aged rum, chocolate liqueur, waffle';
    container4.appendChild(n);
    const o = document.createElement('div');
    o.textContent = '$8';
    container4.appendChild(o);
    dessert.appendChild(container4);

    const container5 = document.createElement('div');
    container5.setAttribute('id', 'container5');
    const p = document.createElement('div');
    p.textContent = '—  Moscato Puff  —';
    container5.appendChild(p);
    const q = document.createElement('div');
    q.textContent = 'raspberry cream, hibiscus drizzle';
    container5.appendChild(q);
    const r = document.createElement('div');
    r.textContent = '$11';
    container5.appendChild(r);
    dessert.appendChild(container5);

    const chef = document.createElement('div');
    chef.setAttribute('id', 'dessert-chef');
    chef.textContent = 'Pastry Chef Rian Booker';
    dessert.appendChild(chef);

    const makeReservation = document.createElement('button');
    makeReservation.setAttribute('id', 'make-reservation');
    makeReservation.textContent = 'MAKE A RESERVATION';
    dessert.appendChild(makeReservation);

    menuContent.appendChild(dessert);
}

export function addFooter() {
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    const a = document.createElement('div');
    a.textContent = 'Contact';
    a.setAttribute('id', 'title');
    contact.appendChild(a)
    const b = document.createElement('div')
    b.textContent = '206-555-7890';
    contact.appendChild(b);
    const c = document.createElement('div');
    c.textContent = '123 Fake Street';
    contact.appendChild(c);
    const d = document.createElement('div');
    d.textContent = 'Seattle, WA 00000';
    contact.appendChild(d);
    const e = document.createElement('div');
    e.textContent = 'example@example.com';
    e.setAttribute('id', 'mail');
    contact.appendChild(e);

    footer.appendChild(contact);

    const center = document.createElement('div');
    center.setAttribute('id', 'footer-center');
    const restaurant = document.createElement('div');
    restaurant.textContent = '—  R É S T A U R A N T  —';
    center.appendChild(restaurant);
    const image = document.createElement('div');
    image.setAttribute('id', 'image');
    const twitter = new Image();
    twitter.src = twitterBlack;
    twitter.setAttribute('id', 'footer-twitter');
    image.appendChild(twitter);
    const instagram = new Image();
    instagram.src = instagramBlack;
    instagram.setAttribute('id', 'footer-instagram');
    image.appendChild(instagram);
    center.appendChild(image);

    footer.appendChild(center);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    const f = document.createElement('div');
    f.textContent = 'Hours';
    hours.appendChild(f);
    const g = document.createElement('div');
    g.textContent = 'Mon–Wed  6–11';
    hours.appendChild(g);
    const h = document.createElement('div');
    h.textContent = 'Thu–Sat  4–12';
    hours.appendChild(h);
    const i = document.createElement('div');
    i.textContent = 'Sun  3–10';
    hours.appendChild(i);
    const j = document.createElement('div');
    j.textContent = 'Make a Reservation';
    j.setAttribute('id', 'footer-make-reservation');
    hours.appendChild(j);

    footer.appendChild(hours);

    content.appendChild(footer);

}