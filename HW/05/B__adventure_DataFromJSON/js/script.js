/** Load data from JSON */
let url = "./data.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    createNewArticle(data.cards);
    itemsConter(data.cards);
  })
  .catch((error) => console.error("Chyba pri načítaní súboru:", error));

/** Create boxes */
function createNewArticle(data) {
  let items = data,
    newArticles = [];

  items.forEach((item) => {
    let article = document.createElement("article"),
      itemHref = replaceHref(item.who);
    newArticles = [];

    article.innerHTML = `
                    <h4 href="./dude/${itemHref}" id="${item.id}">${item.who}</h4>
                    <p>${item.wat}</p>
                    <footer class="comments">${item.comments}</footer>
                        `;

    newArticles.push(article);
    return appendElementAericleToMain(newArticles);
  });
}

function appendElementAericleToMain(data) {
  let mainBody = document.querySelector("main");

  data.forEach((newAerticle) => {
    mainBody.appendChild(newAerticle);
  });
}

/** Helpers functions */
function replaceHref(data) {
  return data.toLowerCase().replaceAll(" ", "-");
}

function itemsConter(data) {
  let items = data,
    dudeConterElement = document.getElementById("dudeConter"),
    commentsConterElement = document.getElementById(" commentsConter"),
    commentsConter = 0;

  items.forEach((element) => {
    commentsConter += Number(element.comments);
  });

  dudeConterElement.textContent = items.length;
  commentsConterElement.textContent = commentsConter;
}
