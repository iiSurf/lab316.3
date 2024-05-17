// Part 1

let mainEl = document.getElementsByTagName(`main`);
//console.log(mainEl[0]);
mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl[0].classList.add(`flex-ctr`);

// Part 2

let topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.height = `100%`;
// console.log(topMenuEl);
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

// Part 3

let aTag = document.querySelector('a');
let aParent = document.getElementById('header');

var menuLinks = [
    { text: 'about', href: './about' },
    { text: 'catalog', href: './catalog' },
    { text: 'orders', href: './orders' },
    { text: 'account', href: './account' },
];

menuLinks.forEach((link)=> {
    let newLink = document.createElement(`a`);
    newLink.setAttribute(`href`, link.href);
    newLink.textContent = link.text;
    // console.log(newLink);
    topMenuEl.appendChild(newLink);
})