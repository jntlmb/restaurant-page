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
      homeButton.classList.add("active");
      menuButton.classList.remove("active");
      aboutButton.classList.remove("active");
      Home();
    } else if (button.id === "menu") {
      homeButton.classList.remove("active");
      menuButton.classList.add("active");
      aboutButton.classList.remove("active");
      Menu();
    } else if (button.id === "about") {
      homeButton.classList.remove("active");
      menuButton.classList.remove("active");
      aboutButton.classList.add("active");
      About();
    }
  });
});

Home();
