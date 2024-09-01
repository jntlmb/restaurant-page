export function About() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "About";
  content.appendChild(heading);
}
