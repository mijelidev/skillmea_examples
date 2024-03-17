console.log('Uloha 02 - c');



function hero() {

  let name = prompt("Jak se jmenuješ?"),
      nick = prompt("Jakou máš výjmečnou schopnost");

  console.log("Ahoj " + name + " jsi " + nick + "!");
}

hero();

/**
 * Chtěl jsem přidat ověření pokud proměnné nejsou undefined, bohužel bez úspechu :(
 */

// function hero() {
//   let name = prompt("Jak se jmenuješ?"),
//     nick = prompt("Jakou máš výjmečnou schopnost");

//   if (name !== 'undefined' && nick !== 'undefined') {
//     console.log("Nezadal jsi jméno neno vyjmečnou schopnost!");
//   } else {
//     console.log("Ahoj " + name + " jsi " + nick + "!");
//   }
//}