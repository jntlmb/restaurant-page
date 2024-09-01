export function Home() {
  const content = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome!";
  content.appendChild(heading);
}
