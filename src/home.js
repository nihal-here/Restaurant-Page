import loadMenu from "./menu";
function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(
    createParagraph(
      "Your Culinary Adventure Begins Here: Dive into our Irresistible Burgers!"
    )
  );
  const orderNowButton = createButton("Order Now");
  orderNowButton.classList.add("btn", "btn-order-now");
  orderNowButton.addEventListener("click", () => {
    loadMenu();
  });
  home.appendChild(orderNowButton);

  home.appendChild(createParagraph("Watch our story"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function createButton(text) {
  const button = document.createElement("button");
  button.textContent = text;

  return button;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
