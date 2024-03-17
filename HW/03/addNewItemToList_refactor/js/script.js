function cloneElement() {

    let list = document.getElementById("list"),
      firstItem = list.firstElementChild,
      cloneItem = firstItem.cloneNode(true);

      list.appendChild(cloneItem);
}

function sendForm() {

  let header = document.getElementById("itemHeader").value,
      content = document.getElementById("itemContent").value;

  return createHtmlElement(header, content);

}

function createHtmlElement(header, content) {

  let liHtml = document.createElement("li"),
      headerHtml = document.createElement("h3"),
      contentHtml = document.createElement("p");
      headerHtml.textContent = header;
      contentHtml.textContent = content;

  liHtml.appendChild(headerHtml);
  liHtml.appendChild(contentHtml);

   return addItemToList(liHtml);

}

function addItemToList(item) {
  let list = document.getElementById("list");

  list.appendChild(item);
};


