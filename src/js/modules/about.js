import { paragraphCreator } from "./home.js";

function createAbout() {
    const content = document.createElement("div");
    content.classList.add("content", "about");

    const heading = document.createElement("h1");
    heading.textContent = "About Us";

    content.append(heading);
    content.append(paragraphCreator("Welcome to Oishī,"));
    content.append(
        paragraphCreator("where every bowl of ramen tells a story.")
    );
    content.append(paragraphCreator("Nestled in the heart of the city,"));
    content.append(
        paragraphCreator("our restaurant is more than just a place to eat:")
    );
    content.append(
        paragraphCreator(
            "it's a journey through the rich and diverse world of japanese cuisine."
        )
    );

    return content;
}

export function appendAbout() {
    const main = document.getElementById("main");

    main.innerHTML = "";
    main.appendChild(createAbout());
}
