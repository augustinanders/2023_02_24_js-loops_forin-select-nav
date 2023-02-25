console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};
console.log(languages["DE"]);
console.log(languages.DE);

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (const language in languages) {
  const option = document.createElement("option");
  const currentLanguage = languages[language];
  option.textContent = currentLanguage;
  option.value = currentLanguage;
  select.append(option);
  console.log(language, currentLanguage);
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (const page in nav) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  listItem.textContent = nav[page].text;
  link.setAttribute("href", nav[page].href);
  ul.append(listItem);
  listItem.append(link);
}

// --^-- write/change code here --^--
