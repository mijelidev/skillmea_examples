console.log('Uloha 02 - e');

function plus() {
  let one = prompt("Zadej první číslo:"),
    two = prompt("Zadej druhé číslo:");

    result = parseInt(one) + parseInt(two);

  return main(result);
}

function main(total) {
  console.log(total);
}

plus();
