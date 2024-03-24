
/**
 * Funkce, která vytvoří "LI" element do seznamu UL s daty z Form
 */
function createElementLiToList(data, elemen = ".cards ul") {
  let list = document.querySelector(elemen),
      newLiElement = document.createElement("li"),
      firstWorldclass = firstWord(data.header);

      newLiElement.classList.add(firstWorldclass);

      newLiElement.innerHTML = `
              <h3> ${data.header} </h3>
              <p> ${data.content} </p>
      `;

      console.log(firstWorldclass);


  list.appendChild(newLiElement);
  newLiElement.classList.add("animate__animated", "animate__jackInTheBox");

  resetInputData();
}

function firstWord(string) {
  let headerData = string.split(" ");
    return headerData[0];
}

/**
 * Odeslání dat z form do funkce pro přidání "LI" elementu
 */
function sendData(event) {
  event.preventDefault();

  let data ={
            header : document.getElementById("header").value,
            content : document.getElementById("content").value
          };

      // header = document.getElementById("header").value,
      // content = document.getElementById("content").value;

      if (data.header && data.content) {
        return createElementLiToList(data);
      } else {
        return viewErrorMessage("Chybí mi data pro vytvoření boxíku, Bro!",".form .errorMessage"
        );
      }
}

/**
 * Zobrazení boxu s chybou
 */
function viewErrorMessage(message, location = ".form .errorMessage") {
  let errorBox = document.querySelector(location);

  errorBox.innerHTML = `<p> <strong>${message}</strong></p>`;
  errorBox.style.display = "block";

  setTimeout(function () {
    errorBox.style.display = "none";
  }, 3000);
}

/**
 * Reset dat v Form
 */
function resetInputData() {
   let inputs = document.querySelectorAll(".form input, .form textarea");

     if (inputs){
       inputs.forEach((input) => {
         input.value = "";
       });
     }
  }

