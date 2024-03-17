console.log('Uloha 02 - c');



function hero() {

  let name = prompt("Jak se jmenuješ?"),
      nick = prompt("Jakou máš výjmečnou schopnost?");

      if(name && nick){
        console.log("Ahoj " + name + " jsi " + nick + "!");
      }else{
         console.log("Nezadal jsi jméno nebo vyjmečnou schopnost!");
      }

}

hero();
