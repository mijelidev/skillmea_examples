function cloneElement() {

    let list = document.getElementById("list"),
      firstItem = list.firstElementChild,
      cloneItem = firstItem.cloneNode(true);

      list.appendChild(cloneItem);
}


function addItemToList() {

  let itemHeader = document.getElementById("itemHeader").value,
      itemContent = document.getElementById("itemContent").value,
      list = document.getElementById("list"),

      newItem = document.createElement("li"),
      heading = document.createElement("h3"),
      contenelEment = document.createElement("p");

      heading.textContent = itemHeader;
      contenelEment.textContent = itemContent;

      newItem.appendChild(heading);
      newItem.appendChild(contenelEment);

      list.appendChild(newItem);

    document.getElementById("itemHeader").value = "";
    document.getElementById("itemContent").value = "";

}