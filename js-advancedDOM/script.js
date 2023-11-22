'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
// console.log(tabs);
const tabContainer = document.querySelector(".operations__tab-container");
// console.log(tabContainer);
const tabsContent = document.querySelectorAll(".operations__content");
// console.log(tabsContent);

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// Button Scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect(); // gives rectangle co ordinates of the element
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("current scroll (x/y)", window.pageXOffset, pageYOffset);
  // console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);

  //scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth"
  }); // for smooth scrolling
  // section1.scrollIntoView({ behavior: "smooth" }); //supported only in modern browsers
});


// _________________________Page Navigation__________________
//// Adding event handler to each and every element
// console.log(document.querySelectorAll(".nav__link"));
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     // console.log("LINK");
//     const id = this.getAttribute("href");
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event listener to common parent
// 2. Determine which element on which event originated

// Adding event handler only at parent element
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);

  //matching strategy
  if (e.target.classList.contains("nav__link")) {
    // console.log("Link");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});


// // _________________ SELECTING ELEMENTS _______________________________
// // console.log(document.documentElement);
// // console.log(document.head);
// // console.log(document.body);

// const header = document.querySelector(".header");
// // console.log(header);
// const allSections = document.querySelectorAll(".section");
// // console.log(allSections);

// const elementById = document.getElementById("section--1");
// // console.log(elementById);

// const allButtons = document.getElementsByTagName("button");
// // console.log(allButtons);

// const classBtn = document.getElementsByClassName("btn");
// // console.log(classBtn);

// // // _______________ Creating and inserting elements ________________________

// // const message = document.createElement("div");
// // message.classList.add("cookie-message");
// // message.textContent = "We use cookies for improved functionality and analytics.";
// // message.innerHTML = "We use cookies for improved functionality and analytics.<button class='btn btn--close-cookie'>Got It!</button>";
// // // header.prepend(message);
// // // header.append(message);
// // // header.append(message.cloneNode(true));
// // header.before(message); // before the header element
// // // header.after(message); // after header element


// // // Delete Element
// // document.querySelector(".btn--close-cookie").addEventListener("click", () => (message.remove()));


// // _______________ STYLES, ATTRIBUTES AND CLASSES ________________________

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics.";
// message.innerHTML = "We use cookies for improved functionality and analytics.<button class='btn btn--close-cookie'>Got It!</button>";
// header.before(message);
// document.querySelector(".btn--close-cookie").addEventListener("click", () => (message.remove()));
// message.style.backgroundColor = "Green";
// message.style.width = "120%";
// // styles hidden inside the class cant be retrieved directly
// // we can only get inline styles
// // console.log(message.style.height);
// // console.log(message.style.backgroundColor);

// // console.log(getComputedStyle(message).color);
// // console.log("height before:", getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";
// // console.log("height after:", getComputedStyle(message).height);

// document.documentElement.style.setProperty("--color-primary", "orangered");


// //Atributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.src);
// console.log(logo.getAttribute("src"));
// console.log("Before change:", logo.alt);
// logo.alt = "Minimalist Bankist Logo";
// console.log("After change:", logo.alt);
// console.log(logo.className);
// // does not works with non-standard attributes
// // for non-standard attributes follow below
// console.log(logo.getAttribute("designer"));

// logo.setAttribute("company", "Bankist");

// // const link = document.querySelector(".twitter-link");
// // console.log(link.href);
// // console.log(link.getAttribute("href"));

// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// //Data attributes
// // for data attributes, atributes must always start with "data-"
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// // logo.classList.toggle();
// logo.classList.contains("");
// // logo.className = "Swamfire";  // not recommended, it will overwrite everything already available


// ____________________ IMPLEMENTING SMOOTH SCROLLING _________________________
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect(); // gives rectangle co ordinates of the element
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("current scroll (x/y)", window.pageXOffset, pageYOffset);
  // console.log("height/width viewport", document.documentElement.clientHeight, document.documentElement.clientWidth);

  //scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth"
  }); // for smooth scrolling
  // section1.scrollIntoView({ behavior: "smooth" }); //supported only in modern browsers
});


// _____________ TYPES OF EVENTS ad EVENT HANDLERS ________________________
// event handlers are functions that handle events
// there are two types of event handlers - inline and external
// inline is when you assign a function to an attribute like onclick="myFunction()"
// external is when you use addEventListener() method to attach a function as a handler

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", function (event) {
//   alert("addEventListener: Great! You are reading the heading!");
// });

// h1.onmouseenter = function (event) {
//   alert("addEventListener: Great! You are reading the heading!");
// };

// const alertH1 = function (event) {
//   alert("addEventListener: Great! You are reading the heading!");
//   h1.removeEventListener("mouseenter", alertH1);
// };

const alertH1 = function (event) {
  alert("addEventListener: Great! You are reading the heading!");
  // h1.removeEventListener("mouseenter", alertH1);
};

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => (h1.removeEventListener("mouseenter", alertH1)), 3000); //timeout for 3 secs

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomInt(0, 255));
const randomColor = () => (`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)} )`);
// console.log(randomColor());

// document.querySelector(".nav__link").addEventListener("click", function () {
//   console.log("Link");
// });

// document.querySelector(".nav").addEventListener("click", function () {
//   console.log("LINK");
// });

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   // console.log(randomColor());
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//   e.stopPropagation();
//   // We can stop the propogation of event and eventHandlers to their parent by using e.stopPropogation()
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   // console.log(randomColor());
//   this.style.backgroundColor = randomColor();
//   console.log("Container", e.target, e.currentTarget);
// });
// // wheever the event happens (click, mouseenter, etc) on a area on DOM, then as per bubbling of events theory, event is passed to its parent DOM elements as well.

// document.querySelector(".nav").addEventListener("click", function (e) {
//   // console.log(randomColor());
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });
// // here e.target is the element from which event has been triggered. Its same for all child as well as its parent DOM elements.Events are bubbled into its parent elements.
// // Also here element represented by this keyword is same/equal to e.currentTarget
// // We can stop the propogation of event and eventHandlers to their parent by using e.stopPropogation()

// // __________________ DOM Traversing __________________

// const h1 = document.querySelector("h1");
// // console.log(h1);

// // Selecting child elements
// console.log(h1.querySelectorAll(".highlight")); // children with highlight class
// console.log(h1.childNodes); // any children
// console.log(h1.children); // live HTML collection
// console.log(h1.firstElementChild); // first child element
// h1.firstElementChild.style.color = "red";
// console.log(h1.lastElementChild); //last child element
// h1.lastElementChild.style.color = "red";

// // Selecting parent elements
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // Selecting closest element
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";

// //Selecting siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children); // selecting all siblings
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = "scale(0.5)";
//   }
// });


// __________________ Building Tabbed components ________________


// tabs.forEach(t => t.addEventListener("click", () => console.log("TAB"))); // not recommenended
tabContainer.addEventListener("click", function (e) {
  // console.log("TAB");
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);
  if (!clicked) return;
  // console.log(clicked);
  tabs.forEach(function (tab) {
    tab.classList.remove("operations__tab--active");
  }); //remove all active tabs
  clicked.classList.add("operations__tab--active"); //make clicked tab active
  tabsContent.forEach(function (tab) {
    tab.classList.remove("operations__content--active");
  }); //remove all active content tab
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");// make clicked content active
});


// ____________ Passing arguments to event listener _____________

const handleHover = function (e) {
  // console.log(this, e.target);
  if (e.target.classList.contains("nav__link")) {
    // console.log(this, e.target);
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) {
        // console.log(this);
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

// nav.addEventListener("mouseover", function (e) { handleHover(e, 0.5); });
nav.addEventListener("mouseover", handleHover.bind(0.5));
// nav.addEventListener("mouseout", function (e) { handleHover(e, 1); });
nav.addEventListener("mouseout", handleHover.bind(1));



// // ___________ Implementing sticky navigation bar ___________

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener("scroll", function (e) {
//   // console.log(e);
//   // console.log(window.scrollY);
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });


// // __________ Implemening sticky navigation using intersection observer API __________________
// const obsCallback = function (entries, observer) {
//   entries.forEach(function (entry) {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   // threshold: 0.1,
//   threshold: [0, 0.2]
//   // rootMargin: "0px",
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const header = document.querySelector(".header");
// console.log(header);
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)
const headerObserver = new IntersectionObserver(
  stickyNav,
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
  }
);
headerObserver.observe(header);