const data = [
  {
    who: "Finn the Human",
    wat: "Finn is a silly kid who wants to become a great hero one day. He might not look too tough, but if there's evil around, he'll slay it. That's his deal.",
    comments: 4,
  },
  {
    who: "Jake the Dog",
    wat: "Finn's best friend is a wise, old dog with a big heart. Jake has the magical ability to stretch and grow. When evil's not running amok, he plays viola with Lady Rainicorn.",
    comments: 23,
  },
  {
    who: "Ice King",
    wat: "Armed with a magic crown and an icy heart, the Ice King has only one goal: to secure a wife by any means necessary.",
    comments: 10,
  },
  {
    who: "Princess Bubblegum",
    wat: "As a millionaire nerd enthusiast, Princess Bubblegum immerses herself in every branch of geekdom from rocket science to turtle farming.",
    comments: 44,
  },
  {
    who: "Marcy the Vampire",
    wat: "Marceline is a wild rocker girl. Centuries of wandering the Land of Ooo have made her a fearless daredevil.",
    comments: 10,
  },
];


function extractDataFromJSON(data) {

    let newData = JSON.parse( JSON.stringify(data) );

   return(newData);
}

function createNewArticle(data) {
    let items = extractDataFromJSON(data),
        newArticles = [];

    items.forEach((item) => {
        let article = document.createElement("article"),
          itemHref = replaceHref( item.who );
            newArticles = [];

            article.innerHTML = `
                            <h4 href="./dude/${  itemHref }">${ item.who }</h4>
                            <p>${ item.wat }</p>
                            <footer class="comments">${ item.comments }</footer>
                            `;

                            newArticles.push(article);

                            return appendElementAericleToMain(newArticles);
                        });
}

function appendElementAericleToMain(data) {
    let  mainBody = document.querySelector("main");

    data.forEach(newAerticle => {
        mainBody.appendChild(newAerticle);
    });

}


function replaceHref(data) {

   return ( data.toLowerCase().replaceAll(" ", "-") );
}

function itemsConter(data) {
    let items = extractDataFromJSON(data),
        dudeConterElement = document.getElementById("dudeConter"),
        commentsConterElement = document.getElementById(" commentsConter")
        commentsConter = 0;


        items.forEach((element) => {
            commentsConter += element.comments;
        });

        commentsConterElement.textContent = commentsConter;
        dudeConterElement.textContent = items.length;
}

function startApp(data) {
    itemsConter(data);
    createNewArticle(data);
}


startApp(data);





