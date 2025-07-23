async function loadHTML(selector, url) {
  const element = document.querySelector(selector);
  const response = await fetch(url);
  const data = await response.text();
  element.innerHTML = data;
}

function initHeaderScripts() {
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");
  const exitMenu = document.querySelector("#mobile-close-btn");
  const headerScroll = document.getElementById("header");
  console.log(headerScroll);

  if (menu && menuLinks && exitMenu && headerScroll) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
      console.log("menu toggled");
    });
    exitMenu.addEventListener("click", function () {
      menuLinks.classList.toggle("active");
    });
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        headerScroll.classList.add("shadow");
      } else {
        headerScroll.classList.remove("shadow");
      }
    });
  }
}

function initFooterScripts() {}

window.addEventListener("DOMContentLoaded", async () => {
  await loadHTML("#header", "components/header.html");
  await loadHTML("#footer", "components/footer.html");

  // run scripts after header is injected
  initHeaderScripts();
});

//------------------ test only :) for class and inheritance

// function based
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const choy = new Person("Choy", 20);

console.log(choy);

//class based approach
class Person2 {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  greet() {
    console.log(`Hi my name is ${this.name}, and my age is ${this.age}`);
  }
}

class Employee extends Person2 {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  greet() {
    console.log(
      `Hi my name is ${this.name} and Im an/a ${this.job}.  My age is ${this.age}`
    );
  }
}

const almira = new Employee("Almira", 24, "Marlou's Wife");
console.log(almira);

// Create a async function for  doing chores.

function cook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cooking = true;
      if (cooking) {
        resolve("Hey Im cooking now.");
      } else {
        reject("Hey, Im not cooking now.");
      }
    }, 1500);
  });
}

function cleanTheHouse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleaning = true;
      if (cleaning) {
        resolve("Hey Im cleaning the house now.");
      } else {
        reject("Hey Im not cleaning the house now.");
      }
    }, 1500);
  });
}

function doTheDishes(isDoing) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dishes = isDoing;
      if (dishes) {
        resolve("Hey Im doing the dishes now.");
      } else {
        reject("Hey Im not doing the dishes now.");
      }
    }, 1500);
  });
}

async function doChores() {
  try {
    almira.greet();
    const cookResult = await cook();
    console.log(cookResult);
    const doTheDishesResult = await doTheDishes(false);
    console.log(doTheDishesResult);
    const cleanTheHouseResult = await cleanTheHouse();
    console.log(cleanTheHouseResult);
  } catch (error) {
    console.error(`This is unwanted: ${error}`);
  }
}

doChores();
