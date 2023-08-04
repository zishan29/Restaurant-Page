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

document.addEventListener('mouseover', (e) => {
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

    if(e.target.id === 'menu-visit') {
        e.target.addEventListener('click', () => {
            createBlank();
            visit();
            document.addEventListener('mouseover', () => {
                const home = document.querySelector('#home');
                home.addEventListener('click', () => {
                    if(!body.classList.length) {
                        console.log(body.classList.length);
                        createBlank();
                        body.classList.add('homeImage');
                        homeHeader();
                        createMenu();
                    }
                });
                const viewMenu = document.querySelector('#view-menu');
                viewMenu.addEventListener('click', () => {
                    createBlank();
                    eat();
                    const makeReservation = document.querySelector('#make-reservation');
                    makeReservation.addEventListener('click', () => {
                        createBlank();
                        visit();
                        const home = document.querySelector('#home');
                        home.addEventListener('click', () => {
                            if(!body.classList.length) {
                                console.log(body.classList.length);
                                createBlank();
                                body.classList.add('homeImage');
                                homeHeader();
                                createMenu();
                            }
                        });
                    });
                });
            });
        });
    }

    if(e.target.id === 'eat') {
        e.target.addEventListener('click', () => {
            body.classList.remove('eatImage');
            createBlank();
            eat();
            document.addEventListener('mouseover', (e) => {
                const home = document.querySelector('#home');
                home.addEventListener('click', () => {
                    if(!body.classList.length) {
                        console.log(body.classList.length);
                        createBlank();
                        body.classList.add('homeImage');
                        homeHeader();
                        createMenu();
                    }
                });
                const makeReservation = document.querySelector('#make-reservation');
                makeReservation.addEventListener('click', () => {
                    createBlank();
                    visit();
                    const home = document.querySelector('#home');
                    home.addEventListener('click', () => {
                        if(!body.classList.length) {
                            console.log(body.classList.length);
                            createBlank();
                            body.classList.add('homeImage');
                            homeHeader();
                            createMenu();
                        }
                    });
                    const viewMenu = document.querySelector('#view-menu');
                    viewMenu.addEventListener('click', () => {
                        createBlank();
                        eat();
                    });
                });
                if(e.target.id === 'menu-visit') {
                    e.target.addEventListener('click', () => {
                        createBlank();
                        visit();
                        document.addEventListener('mouseover', () => {
                            const home = document.querySelector('#home');
                            home.addEventListener('click', () => {
                                if(!body.classList.length) {
                                    console.log(body.classList.length);
                                    createBlank();
                                    body.classList.add('homeImage');
                                    homeHeader();
                                    createMenu();
                                }
                            });
                            const viewMenu = document.querySelector('#view-menu');
                            viewMenu.addEventListener('click', () => {
                                createBlank();
                                eat();
                                const makeReservation = document.querySelector('#make-reservation');
                                makeReservation.addEventListener('click', () => {
                                    createBlank();
                                    visit();
                                    const home = document.querySelector('#home');
                                    home.addEventListener('click', () => {
                                        if(!body.classList.length) {
                                            console.log(body.classList.length);
                                            createBlank();
                                            body.classList.add('homeImage');
                                            homeHeader();
                                            createMenu();
                                        }
                                    });
                                });
                            });
                        });
                    });
                }
            });
        });
    }
    if(e.target.id === 'drink') {
        e.target.addEventListener('click', () => {
            body.classList.remove('drinkImage');
            createBlank();
            drink();
            document.addEventListener('mouseover', (e) => {
                const home = document.querySelector('#home');
                home.addEventListener('click', () => {
                    if(!body.classList.length) {
                        console.log(body.classList.length);
                        createBlank();
                        body.classList.add('homeImage');
                        homeHeader();
                        createMenu();
                    }
                });
                const makeReservation = document.querySelector('#make-reservation');
                makeReservation.addEventListener('click', () => {
                    createBlank();
                    visit();
                    const home = document.querySelector('#home');
                    home.addEventListener('click', () => {
                        if(!body.classList.length) {
                            console.log(body.classList.length);
                            createBlank();
                            body.classList.add('homeImage');
                            homeHeader();
                            createMenu();
                        }
                    });
                    const viewMenu = document.querySelector('#view-menu');
                    viewMenu.addEventListener('click', () => {
                        createBlank();
                        eat();
                    });
                });
            });
            if(e.target.id === 'menu-visit') {
                e.target.addEventListener('click', () => {
                    createBlank();
                    visit();
                    document.addEventListener('mouseover', () => {
                        const home = document.querySelector('#home');
                        home.addEventListener('click', () => {
                            if(!body.classList.length) {
                                console.log(body.classList.length);
                                createBlank();
                                body.classList.add('homeImage');
                                homeHeader();
                                createMenu();
                            }
                        });
                        const viewMenu = document.querySelector('#view-menu');
                        viewMenu.addEventListener('click', () => {
                            createBlank();
                            eat();
                            const makeReservation = document.querySelector('#make-reservation');
                            makeReservation.addEventListener('click', () => {
                                createBlank();
                                visit();
                                const home = document.querySelector('#home');
                                home.addEventListener('click', () => {
                                    if(!body.classList.length) {
                                        console.log(body.classList.length);
                                        createBlank();
                                        body.classList.add('homeImage');
                                        homeHeader();
                                        createMenu();
                                    }
                                });
                            });
                        });
                    });
                });
            }
        });
    }
    if(e.target.id === 'visit') {
        e.target.addEventListener('click', () => {
            body.classList.remove('visitImage');
            createBlank();
            visit();
            document.addEventListener('mouseover', (e) => {
                const home = document.querySelector('#home');
                home.addEventListener('click', () => {
                    if(!body.classList.length) {
                        console.log(body.classList.length);
                        createBlank();
                        body.classList.add('homeImage');
                        homeHeader();
                        createMenu();
                    }
                });
                const viewMenu = document.querySelector('#view-menu');
                viewMenu.addEventListener('click', () => {
                    createBlank();
                    eat();
                    const makeReservation = document.querySelector('#make-reservation');
                    makeReservation.addEventListener('click', () => {
                        createBlank();
                        visit();
                        const home = document.querySelector('#home');
                        home.addEventListener('click', () => {
                            if(!body.classList.length) {
                                console.log(body.classList.length);
                                createBlank();
                                body.classList.add('homeImage');
                                homeHeader();
                                createMenu();
                            }
                        });
                    });
                });
            });
            if(e.target.id === 'menu-visit') {
                e.target.addEventListener('click', () => {
                    createBlank();
                    visit();
                    document.addEventListener('mouseover', () => {
                        const home = document.querySelector('#home');
                        home.addEventListener('click', () => {
                            if(!body.classList.length) {
                                console.log(body.classList.length);
                                createBlank();
                                body.classList.add('homeImage');
                                homeHeader();
                                createMenu();
                            }
                        });
                        const viewMenu = document.querySelector('#view-menu');
                        viewMenu.addEventListener('click', () => {
                            createBlank();
                            eat();
                            const makeReservation = document.querySelector('#make-reservation');
                            makeReservation.addEventListener('click', () => {
                                createBlank();
                                visit();
                                const home = document.querySelector('#home');
                                home.addEventListener('click', () => {
                                    if(!body.classList.length) {
                                        console.log(body.classList.length);
                                        createBlank();
                                        body.classList.add('homeImage');
                                        homeHeader();
                                        createMenu();
                                    }
                                });
                            });
                        });
                    });
                });
            }
        });
    }
});

