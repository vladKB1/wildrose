export function openMenu(target, activeMenuItem) {
  activeMenuItem = target.closest(".main-menu__item");
  activeMenuItem.classList.add("main-menu__item_active");
  const subMenu = activeMenuItem.querySelector(".sub-menu-container");
  subMenu.classList.remove("sub-menu-container_disabled");

  return activeMenuItem;
}

export function closeMenu(activeMenuItem) {
  if (activeMenuItem) {
    activeMenuItem.classList.remove("main-menu__item_active");
    const subMenu = activeMenuItem.querySelector(".sub-menu-container");
    subMenu.classList.add("sub-menu-container_disabled");
  }

  return null;
}
