function createElementLiToList(header, content, elemen = ".cards ul") {
  let list = document.querySelector(elemen),
    newLiElement = document.createElement("li");
  newLiElement.innerHTML = `
                <h3> ${header} </h3>
                <p> ${content} </p>
        `;

  list.appendChild(newLiElement);
}

createElementLiToList("header","Content");
