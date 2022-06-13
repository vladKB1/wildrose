import { resizeWindow } from './resize.js';
import { toggleBurger, toggleBurgerSubMenu } from './toggleBurger.js';
import { openMenu, closeMenu } from './toggleMenu.js';

const body = document.body;
let activeMenuItem = null;
export const timeout = 400;

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

resizeWindow();
window.addEventListener('resize', () => {
  console.log(document.documentElement.clientWidth);
  resizeWindow();
});

header.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('burger-button')) {
    toggleBurger(target);
  } else if (target.closest('.main-menu__item')) {
    toggleBurgerSubMenu(target.closest('.main-menu__item'));
  }
});
