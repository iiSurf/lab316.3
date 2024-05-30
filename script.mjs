// Menu link data
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

//Part 1
//1.    Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main');
// console.log(mainEl[0]);

// 2.   Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl[0].style.backgroundColor = 'var(--main-bg)';

// 3.    Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;

// 4.    Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl[0].classList.add(`flex-ctr`);

//Part 2:
// 1.   Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById(`top-menu`);
// console.log(topMenuEl);

// 2.   Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// 3.   Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// 4.    Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//Part 3:
// 1.   Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // 2.   Create an <a> element.
  let newLink = document.createElement('a');

  // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
  newLink.setAttribute('href', link.href);

  // 4.   Set the new element's content to the value of the text property of the "link" object.
  newLink.textContent = link.text;

  // 5.   Append the new element to the topMenuEl element.
  topMenuEl.appendChild(newLink);
});

// Dom Manipulation Part 2

//  1.  Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById(`sub-menu`);
// console.log(subMenuEl)

//  2.   Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

//  3.  Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// 4.  Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// 5. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// 6. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;

//SUbMenu Pt1 -----------------------------------------------------------------------

// 1.   Select and cache the ALL of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = document.getElementsByTagName(`a`);
console.log(topMenuLinks);

// 2.   Attach a delegated 'click' event listener to topMenuEl.
//Keep even Listeners together
topMenuEl.addEventListener(`click`, handleNavClick);
subMenuEl.addEventListener('click', handleSubNavClick)

// Variable to store link obj
let currentSubLink;

//Helper Functions
function handleNavClick(e) {
  //  A.   The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault();

  //  B.  The second line of code of the function should immediately return if the element clicked was not an <a> element.
  // console.log(e.target.localName);

  if (e.target.localName !== 'a') return;

  //  C.  Log the content of the <a> to verify the handler is working.
  // console.log(e.target);

  //  1.   The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

  if (e.target.getAttribute(`class`)) {
    e.target.classList.remove('active');
  } else {
    //  2.  The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
    for (let link of topMenuLinks) {
      link.classList.remove('active');
    }

    e.target.classList.add('active');
  }
  //     Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  // Otherwise, set the CSS top property of subMenuEl to 0.
  // Hint: Caching the "link" object will come in handy for passing its subLinks array later.

  for (let link of menuLinks) {
    if (
      e.target.textContent === link.text &&
      e.target.getAttribute(`class`) &&
      link.subLinks
    ) {
      currentSubLink = link.subLinks;
      buildSubMenu(currentSubLink);
      subMenuEl.style.top = `100%`;
      break;
    } else {
      mainEl[0].innerHTML = `<h1>${(e.target.textContent).toUpperCase()}</h1>`
      subMenuEl.style.top = `0`;
    }
  }
}

function buildSubMenu(subLink) {
  // 1. Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = ``;

  // 2.  Iterate over the subLinks array, passed as an argument, and for each "link" object:
  for (let link of subLink) {
    // 3. Create an <a> element.
    let newSubLink = document.createElement('a');
    // 4. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    newSubLink.setAttribute('href', link.href);
    // 5. Set the element's content to the value of the text property of the "link" object.
    newSubLink.textContent = link.text;

    // 6. Append the new element to the subMenuEl.
    subMenuEl.appendChild(newSubLink);
  }
}


function handleSubNavClick(e){
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault()

  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if (e.target.localName !== 'a') return;
  // Log the content of the <a> to verify the handler is working.
  // console.log(e.target);

  // Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = `0`

  // Remove the active class from each <a> element in topMenuLinks.
  for (let link of topMenuLinks) {
    link.classList.remove('active');
  }

  // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  mainEl[0].innerHTML = `<h1>${(e.target.textContent).toUpperCase()}</h1>`
  // If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
}