function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "The Classic Delight",
      " A juicy beef patty topped with melted cheese, fresh lettuce, tomatoes, onions, and a special sauce, all served on a soft sesame seed bun"
    )
  );

  menu.appendChild(
    createMenuItem(
      "The Spicy Mediterranean",
      "A flavorful chicken patty coated in a blend of Mediterranean spices, topped with tangy tzatziki sauce, feta cheese, and crispy lettuce, all nestled in a warm pita bread."
    )
  );
  menu.appendChild(
    createMenuItem(
      "The Veggie Paradise",
      "A delicious vegetarian burger made with a hearty chickpea and vegetable patty, topped with avocado, grilled mushrooms, caramelized onions, and a zesty garlic aioli, served on a multigrain bun."
    )
  );
  menu.appendChild(
    createMenuItem(
      "The BBQ Bacon Bliss",
      "A mouthwatering beef patty smothered in smoky barbecue sauce, crispy halal beef bacon, melted cheddar cheese, and crispy onion rings, all stacked on a toasted brioche bun."
    )
  );
  menu.appendChild(
    createMenuItem(
      "The Fusion",
      " A unique fusion of flavors, featuring a grilled lamb patty infused with Middle Eastern spices, topped with tangy mango chutney, creamy hummus, fresh arugula, and pickled red onions, all served on a warm naan bread."
    )
  );
  menu.appendChild(
    createMenuItem(
      "The Cheesy Jalapeno Fiesta",
      "A tantalizing beef patty stuffed with gooey melted cheese and diced jalapenos, topped with a zesty chipotle mayo, crispy lettuce, and sliced pickles, all served on a toasted brioche bun. This burger delivers a perfect balance of heat and cheesiness for a flavorful fiesta in every bite!"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  const filename = name.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with hyphens
  foodImage.setAttribute("src", `./images/${filename}.jpg`);
  foodImage.setAttribute("alt", name);

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.querySelector("main");
  console.log("loading menu");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
