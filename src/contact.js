function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 123-456-7890";

  const address = document.createElement("p");
  address.textContent = "10 Downing Street, London, United Kingdom";

  const email = document.createElement("p");
  email.textContent = "📧 BURGERJUNCTION@GMAIL.COM";

  contact.appendChild(phoneNumber);
  contact.appendChild(email);
  contact.appendChild(address);

  return contact;
}

function loadContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
