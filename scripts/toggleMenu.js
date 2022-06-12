export function openMenu(target, activeMenuItem) {
  if (document.documentElement.clientWidth < 768) return null;

  activeMenuItem = target.closest('.main-menu__item');
  activeMenuItem.classList.add('main-menu__item_active');
  const subMenu = activeMenuItem.querySelector('.sub-menu-container');
  subMenu.classList.add('sub-menu-container_active');

  return activeMenuItem;
}

export function closeMenu(activeMenuItem) {
  if (document.documentElement.clientWidth < 768) return null;

  if (activeMenuItem) {
    activeMenuItem.classList.remove('main-menu__item_active');
    const subMenu = activeMenuItem.querySelector('.sub-menu-container');
    subMenu.classList.remove('sub-menu-container_active');
  }

  return null;
}
