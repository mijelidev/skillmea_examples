let heros = document.querySelectorAll(".hero img");
    heros = Array.from(heros);

//console.log(Array.from(heros));


heros.forEach((hero) => {

    updateHero(hero);

    hero.addEventListener('click', function() {

        increaseScore(hero);

    });

});

function getKeyFrom(hero) {
  return "score" + _.capitalize(hero.alt);
}


function getScore( hero ) {
return +localStorage.getItem( getKeyFrom(hero) ) || 0;
}

function setScore(hero, score) {
    localStorage.setItem(getKeyFrom(hero), score);
}


function updateHero(hero) {
  let score = getScore(hero);
  hero.nextElementSibling.textContent = score;
}

function increaseScore(hero) {

      let score = getScore(hero);
      score++;

      setScore(hero, score);

      updateHero(hero);
}