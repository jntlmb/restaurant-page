export function paragraphCreator(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}
