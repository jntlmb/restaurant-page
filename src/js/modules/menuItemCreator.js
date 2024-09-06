import { paragraphCreator } from "./paragraphCreator";

export function menuItemCreator(itemName, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.appendChild(paragraphCreator(itemName));
    menuItem.appendChild(paragraphCreator(price));

    return menuItem;
}
