import { timeout } from './index.js';

const mainMenu = document.querySelector('.main-menu-container');

export function toggleBurger(target) {
  if (target.classList.contains('burger-button_active')) {
    mainMenu.style.top = '48px';
  }

  target.classList.toggle('burger-button_active');
  mainMenu.classList.toggle('main-menu-container_active');

  setTimeout(() => {
    mainMenu.style = '';
  }, timeout);
}

export function toggleBurgerSubMenu(target) {
  if (document.documentElement.clientWidth < 768) {
    const itemTitle = target.querySelector('.item-title');
    itemTitle.classList.toggle('item-title_active');

    const subMenu = target.querySelector('.sub-menu-container');
    if (subMenu.style.maxHeight !== '0px') {
      subMenu.style.maxHeight = 0 + 'px';
    } else {
      subMenu.style.maxHeight = subMenu.dataset.height + 'px';
    }
  }
}
