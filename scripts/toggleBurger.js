const mainMenu = document.querySelector('.main-menu-container');

export function toggleBurger(target) {
  target.classList.toggle('burger-button_active');
  mainMenu.classList.toggle('main-menu-container_active');
}
