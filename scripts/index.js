import { toggleBurger } from './toggleBurger.js';
import { openMenu, closeMenu } from './toggleMenu.js';

const body = document.body;
let activeMenuItem = null;

body.addEventListener('click', (event) => {
  const target = event.target;
  if (target.closest('.main-menu__item')) {
    if (!activeMenuItem) {
      activeMenuItem = openMenu(target, activeMenuItem);
    } else {
      activeMenuItem = closeMenu(activeMenuItem);
      activeMenuItem = openMenu(target, activeMenuItem);
    }
  } else {
    activeMenuItem = closeMenu(activeMenuItem);
  }
});

const header = document.querySelector('.header');

header.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('burger-button')) {
    toggleBurger(target);
  }
});
