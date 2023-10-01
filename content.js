let apikey = "818b31df85f741a7ab4d22d17ba39b2c";
const container = document.querySelector(".container");
const oc = document.querySelector(".option-container");

// let user = localStorage.getItem(username);

// let data = JSON.parse(user);
// console.log(data.username);
// document.getElementById("account").innerHTML = user;

let country = "us";
const options = [
  "general",
  "entertainment",
  "science",
  "sports",
  "health",
  "technology",
];

let requestURL;

const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
    

    <div class="news-image-container">
        <img src="${item.urlToImage}">
    </div>
    <div class="news-content">
        <div class="news-title">
        ${item.title}
        </div>
        <div class="news-description">${
          item.description || item.content || ""
        }</div>
        <a href="${item.url}" class = "read">read more</a>
    </div>
  
    `;
    container.appendChild(card);
  }
};

const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("data unavailable");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};

const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=818b31df85f741a7ab4d22d17ba39b2c`;
  e.target.classList.add("active");
  getNews();
};
const createOptions = () => {
  for (let i of options) {
    oc.innerHTML += `<button class="option ${
      i == "general" ? "active" : ""
    }" onclick = "selectCategory(event, '${i}')">${i}</button>`;
  }
};

const logOut = () => {
  localStorage.clear();
  location.href = "./main.html";
};

const init = () => {
  oc.innerHTML = "";
  getNews();
  createOptions();
};

window.onload = () => {
  requestURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=818b31df85f741a7ab4d22d17ba39b2c`;
  init();
};

const a = JSON.parse(localStorage.getItem("toan"));
console.log(a["username"]);
document.getElementById("account").innerHTML = "Welcome" + " " + a["username"];
