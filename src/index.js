import { Home } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";

import "./styles.css";

const content = document.getElementById("content");

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");
const buttons = [homeButton, menuButton, aboutButton];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    content.innerHTML = "";

    if (button.id === "home") {
      Home();
    } else if (button.id === "menu") {
      Menu();
    } else if (button.id === "about") {
      About();
    }
  });
});

Home();
