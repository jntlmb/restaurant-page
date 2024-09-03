import { paragraphCreator } from "./home.js";

function createMenu() {
    const content = document.createElement("div");
    content.classList.add("content", "menu");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const menuItems = [
        { name: "Shoyu Ramen", price: "$12.99" },
        { name: "Miso Ramen", price: "$12.99" },
        { name: "Shio Ramen", price: "$12.99" },
        { name: "Tonkotsu Ramen", price: "$12.99" },
        { name: "Spicy Ramen", price: "$12.99" }
    ];

    menuItems.forEach((item) => {
        const menuItem = menuItemCreator(item.name, item.price);
        itemContainer.appendChild(menuItem);
    });

    content.appendChild(heading);
    content.appendChild(itemContainer);

    return content;
}

function menuItemCreator(itemName, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.appendChild(paragraphCreator(itemName));
    menuItem.appendChild(paragraphCreator(price));

    return menuItem;
}

export function appendMenu() {
    const main = document.getElementById("main");

    main.innerHTML = "";
    main.appendChild(createMenu());
}
