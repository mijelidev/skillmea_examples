console.log('Uloha 02 - e');

function plus() {
  let one = prompt("Zadej první číslo:"),
    two = prompt("Zadej druhé číslo:");

    result = Number(one) + Number(two);

  return main(result);
}

function main(total) {
  console.log(total);
}

plus();
