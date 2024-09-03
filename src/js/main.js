import { appendHome } from "./modules/home.js";
import { appendMenu } from "./modules/menu.js";
import { appendAbout } from "./modules/about.js";

// Nav Section

function createNav() {
    const nav = document.createElement("nav");

    const homeButton = buttonCreator("Home", appendHome);
    const menuButton = buttonCreator("Menu", appendMenu);
    const aboutButton = buttonCreator("About", appendAbout);

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

function buttonCreator(buttonText, appendFunction) {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        setActive(btn);
        appendFunction();
    });
    btn.classList.add("nav-btn");
    btn.textContent = buttonText;

    return btn;
}

function setActive(button) {
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach((btn) => {
        if (btn !== this) {
            btn.classList.remove("active");
        }
    });

    button.classList.add("active");
}

// Main Section

function createMain() {
    const main = document.createElement("main");

    main.id = "main";

    return main;
}

// Footer Section

function createFooter() {
    const footer = document.createElement("footer");

    const currentYear = new Date().getFullYear();
    footer.textContent = `Copyright ©${currentYear} jntlmb`;

    return footer;
}

// Website Creation

export function Initialize() {
    document.body.appendChild(createNav());
    document.body.appendChild(createMain());
    document.body.appendChild(createFooter());

    appendHome();
}
