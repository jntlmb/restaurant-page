export function buttonCreator(buttonText, appendFunction) {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        setActiveButton(btn);
        appendFunction();
    });
    btn.classList.add("nav-btn");
    btn.textContent = buttonText;

    return btn;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach((btn) => {
        if (btn !== this) {
            btn.classList.remove("active");
        }
    });

    button.classList.add("active");
}
