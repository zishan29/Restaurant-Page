import { homeHeaderBlack } from "./home-page";


export default function visit() {
    homeHeaderBlack();
    const content = document.querySelector('#content');
    const visitContent = document.createElement('div');
    visitContent.setAttribute('id', 'visit-content');
    const header = document.createElement('div');
    header.setAttribute('id', 'heading');
    const libations = document.createElement('div');
    libations.textContent = '—  MAKE A RESERVATION  —';
    libations.setAttribute('id', 'libations');
    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.textContent = 'Use this Text Block to talk about your booking policies. Learn more about the below OpenTable Block here.';
    header.appendChild(libations);
    header.appendChild(description);
    visitContent.appendChild(header);
    visitContent.appendChild(header);
    content.appendChild(visitContent);
    addInfo();
}

function addInfo() {
    const visitContent = document.querySelector('#visit-content');
    const container1 = document.createElement('div');
    container1.setAttribute('id', 'container');
    const a = document.createElement('button');
    a.textContent = 'FIND A TABLE';
    a.setAttribute('id', 'find-table');
    container1.appendChild(a);
    visitContent.appendChild(container1);
    
    const container2 = document.createElement('div');
    container2.setAttribute('id', 'container2');
    const d = document.createElement('div');
    d.textContent = 'Contact';
    d.setAttribute('id', 'title');
    container2.appendChild(d);
    const e = document.createElement('div');
    e.textContent = '206-555-7890';
    container2.appendChild(e);
    const f = document.createElement('div');
    f.textContent = 'example@example.com';
    f.setAttribute('id', 'mail');
    container2.appendChild(f);
    visitContent.appendChild(container2);

    const container3 = document.createElement('div');
    container3.setAttribute('id', 'container3');
    const g = document.createElement('div');
    g.textContent = 'Location';
    g.setAttribute('id', 'title');
    container3.appendChild(g);
    const h = document.createElement('div');
    h.textContent = '123 Fake Street';
    container3.appendChild(h);
    const i = document.createElement('div');
    i.textContent = 'Seattle, WA 00000';
    container3.appendChild(i);
    visitContent.appendChild(container3);

    const container4 = document.createElement('div');
    container4.setAttribute('id', 'container4');
    const j = document.createElement('div');
    j.textContent = 'Hours';
    j.setAttribute('id', 'title');
    container4.appendChild(j);
    const k = document.createElement('div');
    k.textContent = 'Mon–Wed  6–11';
    container4.appendChild(k);
    const l = document.createElement('div');
    l.textContent = 'Thu–Sat  4–12';
    container4.appendChild(l);
    const m = document.createElement('div');
    m.textContent = 'Sun  3–10';
    container4.appendChild(m);
    visitContent.appendChild(container4);


}