
/**
 * Funkce, která vytvoří "LI" element do seznamu UL s daty z Form
 */
function createElementLiToList(header, content, elemen = ".cards ul") {
  let list = document.querySelector(elemen),
    newLiElement = document.createElement("li");
  newLiElement.innerHTML = `
                <h3> ${header} </h3>
                <p> ${content} </p>
        `;

  list.appendChild(newLiElement);

  resetInputData();
}

/**
 * Odeslání dat z form do funkce pro přidání "LI" elementu
 */
function sendData(event) {
  event.preventDefault();

  let inputHeader = document.getElementById("header").value,
      inputContent = document.getElementById("content").value;

      if (inputHeader && inputContent){
        return createElementLiToList(inputHeader, inputContent);
      }else{
        return viewErrorMessage("Chybí mi data pro vytvoření boxíku, Bro!", ".form .errorMessage");
      }
}

/**
 * Zobrazení boxu s chybou
 */
function viewErrorMessage(message, location = ".form .errorMessage") {
  let errorBox = document.querySelector(location);

  errorBox.innerHTML = `<p> <strong>${message}</strong></p>`;
  errorBox.style.display = "block";
}

/**
 * Reset dat v Form
 */
function resetInputData() {
   let  inputs = document.querySelectorAll(".form input"),
        textareas = document.querySelectorAll(".form textarea");

     if (inputs){
       inputs.forEach((input) => {
         input.value = "";
       });
     }

     if (textareas) {
       textareas.forEach((textarea) => {
         textarea.value = "";
       });
     }
  }