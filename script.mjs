// Part 1

let mainEl = document.getElementsByTagName(`main`);
//console.log(mainEl[0]);
mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl[0].classList.add(`flex-ctr`);

// Part 2

let topMenuEl = document.getElementById(`top-menu`);

subMenuEl.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    if (event.target.textContent === 'ABOUT') {
      mainEl.innerHTML = '<h1>About</h1>';
    } else {
      mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
    }
  }
});

topMenuLinks.forEach((link) => {
  link.classList.remove('active');
});

topMenuEl.style.height = `100%`;
// console.log(topMenuEl);
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

// Part 3

let aTag = document.querySelector('a');
let aParent = document.getElementById('header');

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

menuLinks.forEach((link)=> {
    let newLink = document.createElement(`a`);
    newLink.setAttribute(`href`, link.href);
    newLink.textContent = link.text;
    // console.log(newLink);
    topMenuEl.appendChild(newLink);
})

// TODO Part 3

// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);

// TODO: Part of part 5 up here
subMenuEl.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    console.log('Clicked link content:', event.target.textContent);
    subMenuEl.style.top = '0';
  }
});

// Set the height subMenuEl element to be "100%".

subMenuEl.style.height = `100%`;

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// Add the class of flex-around to the subMenuEl element.

subMenuEl.classList.add(`flex-around`);

// Set the CSS position property of subMenuEl to the value of absolute.

subMenuEl.style.position = `absolute`;

// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.top = `0px`;

// TODO: Part 4

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

let topMenuLinks = topMenuEl.querySelectorAll(`a`);

// Attach a delegated 'click' event listener to topMenuEl.

topMenuEl.addEventListener(`click`, function(event) {
// The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();

  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (event.target.tagName !== `A`) return;

// Log the content of the <a> to verify the handler is working.
  //console.log(event.target.textContent);

  // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  topMenuLinks.forEach(link => {
    link.classList.remove(`active`);
  });

// 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// Hint: Removing a non-existent class from an element does not cause an error!
  event.target.classList.toggle(`active`);

  // TODO: Part 5


// 1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// a. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// b. Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.
  let clickedOn = event.target;
  let linkObj = menuLinks.find(link => link.text === clickedOn.textContent);

  if (clickedOn.classList.contains('active') && linkObj.subLinks) {
    subMenuEl.style.top = `100%`; // This will show the menu hidiing behind navBar
  } else {
    subMenuEl.style.top = `0px`; // this will hide the menu behind navBar.
  }
  buildSubmenu(linkObj.subLinks);
});

//   The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper
// function called buildSubmenu that does the following:
// Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.

function buildSubmenu(subLinks) {
  // 1. Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = '';
  // 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
  subLinks.forEach(linkObj => {
    // a. Create an <a> element.
    const submenuLink = document.createElement('a');
    // b. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
     submenuLink.href = linkObj.href;
     // c. Set the element's content to the value of the text property of the "link" object.
     submenuLink.textContent = linkObj.text;
     // d. Append the new element to the subMenuEl.
     subMenuEl.appendChild(submenuLink);
   });
}

const subLinks = [
  { href: '', text: 'New' },
  { href: '', text: 'Pending' },
  { href: '', text: 'History' },
];