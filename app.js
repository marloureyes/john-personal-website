import { postsData, workMaps } from "./constants/index.js";
import { formatDate } from "./utils/index.js";

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
  const navLinks = document.querySelectorAll(".navbar__links");
  const currentPath = window.location.pathname;

  if (menu && menuLinks && exitMenu && headerScroll) {
    menu.addEventListener("click", () => {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
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
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
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

//----------------- Generate Post for Home-------------------------------------//

function createPost({ id, title, date, type, content }) {
  const li = document.createElement("li");

  const article = document.createElement("article");
  article.className = "post";
  article.id = id;

  const heading = document.createElement("h3");
  heading.textContent = title;

  const postDetailsDiv = document.createElement("div");
  postDetailsDiv.className = "post__details";

  const postDateP = document.createElement("p");
  postDateP.className = "post__date";
  postDateP.textContent = formatDate(date, false);

  const separatorDiv = document.createElement("div");
  separatorDiv.className = "separator";

  const postTagsP = document.createElement("p");
  postTagsP.className = "post__tags";
  postTagsP.textContent = type;

  const contentP = document.createElement("p");
  contentP.className = "post__content";
  contentP.textContent = content;

  postDetailsDiv.appendChild(postDateP);
  postDetailsDiv.appendChild(separatorDiv);
  postDetailsDiv.appendChild(postTagsP);

  article.appendChild(heading);
  article.appendChild(postDetailsDiv);
  article.appendChild(contentP);

  li.appendChild(article);
  return li;
}

const blogPost = document.getElementById("blog-post");
if (postsData && blogPost) {
  postsData
    .slice(0, 2)
    .forEach(({ postId, heading, postDate, type, content }) => {
      blogPost.appendChild(
        createPost({
          id: postId,
          title: heading,
          date: postDate,
          type,
          content,
        })
      );
    });
}

//----------------- End Generate Post-------------------------------------//

//----------------- Generate Post for Blog Page-------------------------------------//
function createPostForBlogPage({ id, title, date, type, content }) {
  const li = document.createElement("li");
  const article = document.createElement("article");
  article.className = "blog-page__post-card";
  article.id = id;
  const heading = document.createElement("h2");
  heading.textContent = title;
  const postCardDiv = document.createElement("div");
  postCardDiv.className = "post-card__details";
  const postCardDate = document.createElement("p");
  postCardDate.className = "post-card__date";
  postCardDate.textContent = formatDate(date);
  const separatorDiv = document.createElement("div");
  separatorDiv.className = "separator";
  const postCardType = document.createElement("p");
  postCardType.className = "post-card__type";
  postCardType.textContent = type;
  const postCardContent = document.createElement("p");
  postCardContent.textContent = content;
  const articleSeparator = document.createElement("div");
  articleSeparator.className = "article__separator";

  postCardDiv.appendChild(postCardDate);
  postCardDiv.appendChild(separatorDiv);
  postCardDiv.appendChild(postCardType);
  article.appendChild(heading);
  article.appendChild(postCardDiv);
  article.appendChild(postCardContent);
  li.appendChild(article);
  li.appendChild(articleSeparator);
  return li;
}

const blogPostForBlogPage = document.getElementById("blog-page-list");
if (postsData && blogPostForBlogPage) {
  postsData.forEach(({ postId, heading, postDate, type, content }) => {
    blogPostForBlogPage.appendChild(
      createPostForBlogPage({
        id: postId,
        title: heading,
        date: postDate,
        type,
        content,
      })
    );
  });
}

//----------------- End of Generate Post for Blog Page-------------------------------------//

//----------------- Generate Post for Blog Page-------------------------------------//

function createFeaturedWorks({ id, title, imageSrc, date, type, content }) {
  const li = document.createElement("li");
  li.className = "featured__item";
  li.id = id;

  const article = document.createElement("article");
  article.className = "featured__item-wrapper";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = title;

  const featuredItemContent = document.createElement("div");
  featuredItemContent.className = "featured__item-content";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const featuredDetailsDiv = document.createElement("div");
  featuredDetailsDiv.className = "featured__details";

  const featuredDate = document.createElement("p");
  featuredDate.className = "featured__date";
  featuredDate.textContent = formatDate(date, true);

  const featuredType = document.createElement("p");
  featuredType.className = "featured__type";
  featuredType.textContent = type;

  const featuredText = document.createElement("p");
  featuredText.className = "featured__text";
  featuredText.textContent = content;

  const articleSeparator = document.createElement("div");
  articleSeparator.className = "article__separator";

  featuredDetailsDiv.appendChild(featuredDate);
  featuredDetailsDiv.appendChild(featuredType);
  featuredItemContent.appendChild(heading);
  featuredItemContent.appendChild(featuredDetailsDiv);
  featuredItemContent.appendChild(featuredText);
  article.appendChild(image);
  article.appendChild(featuredItemContent);
  li.appendChild(article);
  li.appendChild(articleSeparator);

  return li;
}

const featuredPost = document.getElementById("featured-list");

if (featuredPost && postsData) {
  workMaps.forEach((item) => {
    featuredPost.appendChild(createFeaturedWorks(item));
  });
}

//----------------- End of Generate Post for Blog Page-------------------------------------//

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
