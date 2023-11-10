'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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


// _________________ SELECTING ELEMENTS _______________________________
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
console.log(header);
const allSections = document.querySelectorAll(".section");
console.log(allSections);

const elementById = document.getElementById("section--1");
console.log(elementById);

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

const classBtn = document.getElementsByClassName("btn");
console.log(classBtn);

// _______________ Creating and inserting elements ________________________

const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookies for improved functionality and analytics.";
message.innerHTML = "We use cookies for improved functionality and analytics.<button class='btn btn--close-cookie'>Got It!</button>";
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
header.before(message); // before the header element
// header.after(message); // after header element


// Delete Element
document.querySelector(".btn--close-cookie").addEventListener("click", () => (message.remove()));