import { Home } from "./home";
import { Menu } from "./menu";
import { About } from "./about";

function createNav() {
  const nav = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.addEventListener("click", (e) => {
    Home();
  });
  homeButton.classList.add = "nav-btn";
  homeButton.textContent = "Home";

  const menuButton = document.createElement("menu");
  menuButton.addEventListener("click", (e) => {
    Menu();
  });
  menuButton.classList.add = "nav-btn";
  menuButton.textContent = "Menu";

  const aboutButton = document.createElement("about");
  aboutButton.addEventListener("click", (e) => {
    About();
  });
  aboutButton.classList.add = "nav-btn";
  aboutButton.textContent = "About";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(aboutButton);

  return nav;
}

function createMain() {
  const main = document.createElement("main");
}

function createFooter() {
  const footer = document.getElementById("footer");
}

return function initialize() {
  const content = document.getElementById("content");

  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());
};
