import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Burger Junction";

  header.appendChild(restaurantName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (homeButton.classList.contains("active")) return;
    setActiveButton(homeButton);
    loadHome();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (menuButton.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (contactButton.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.classList.add("copyright");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} nihal-here `;

  const gitHubLink = document.createElement("a");
  gitHubLink.href = "https://github.com/nihal-here";

  const gitHubIcon = document.createElement("i");
  gitHubIcon.classList.add("fab", "fa-github");

  footer.appendChild(gitHubLink);
  gitHubLink.appendChild(gitHubIcon);
  footer.appendChild(copyright);

  return footer;
}

function initializeWebsite() {
  const content = document.querySelector("#content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default initializeWebsite;
