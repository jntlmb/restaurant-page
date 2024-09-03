// assets
import avatar from "../../assets/avatar.jpeg";

function createHome() {
    const content = document.createElement("div");
    content.classList.add("content", "home");

    const heading = document.createElement("h1");
    heading.textContent = "Oishī";

    const image = document.createElement("img");
    image.classList.add("avatar");
    image.src = avatar;

    content.appendChild(heading);
    content.appendChild(paragraphCreator("Crafting Authentic Ramen."));
    content.appendChild(paragraphCreator("One Bowl at a Time."));
    content.appendChild(paragraphCreator("Since 1996."));
    content.appendChild(image);
    content.appendChild(paragraphCreator("Book a Table"));
    content.appendChild(paragraphCreator("Or"));
    content.appendChild(paragraphCreator("Contact Us Now"));

    return content;
}

export function paragraphCreator(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

export function appendHome() {
    const main = document.getElementById("main");

    main.innerHTML = "";
    main.appendChild(createHome());
}
