function cloneElement() {

    let list = document.getElementById("list"),
      firstItem = list.firstElementChild,
      cloneItem = firstItem.cloneNode(true);

      list.appendChild(cloneItem);
}