const header = document.querySelector('.header');

let isResize = false;

export function resizeWindow() {
  const subMenus = header.querySelectorAll('.sub-menu-container');

  if (document.documentElement.clientWidth < 768) {
    if (isResize) return;
    isResize = true;
    subMenus.forEach((subMenu) => {
      subMenu.dataset.height = subMenu.clientHeight;
      subMenu.style.maxHeight = '0px';
    });
  } else {
    isResize = false;
    subMenus.forEach((subMenu) => {
      subMenu.style.maxHeight = null;
    });
  }
}
