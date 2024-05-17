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

// TODO: Part 2 Graded DOM

// TODO Part 3

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);

// Set the height subMenuEl element to be "100%".

subMenuEl.style.height = `100%`;

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// Add the class of flex-around to the subMenuEl element.

subMenuEl.className(`flex-around`);

// Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style = `position: absolute`;

// Set the CSS top property of subMenuEl to the value of 0.



// TODO: Part 4

