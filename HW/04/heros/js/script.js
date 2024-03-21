let heros = document.querySelectorAll(".hero img");
    heros = Array.from(heros);

//console.log(Array.from(heros));


heros.forEach((hero) => {

    hero.addEventListener('click', function() {

    let scoreElement = this.nextElementSibling,
    score = Number( scoreElement.textContent );

    score = score + 1;

    scoreElement.textContent = score;
    });

});