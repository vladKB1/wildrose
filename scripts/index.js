import { openMenu, closeMenu } from "./toggleMenu.js";

const body = document.body;
let activeMenuItem = null;

body.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("item-title")) {
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
