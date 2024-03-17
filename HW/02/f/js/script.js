console.log('Uloha 02 - f');


function formatSum(cislo) {
  cislo = cislo.toLocaleString("cs-CZ", {
    style: "currency",
    currency: "CZK",
  });

  return cislo;
}


function plus() {
  let quantity = prompt("Zadej počet kusů :"),
      price = prompt("Zadej cena za kus:");

    sum =  parseInt(quantity) * parseInt(price);

  return main(sum, quantity);
}

function main(total, quantity) {
  console.log( "Koupil jsi " + quantity + " kusů, celkem za: " + formatSum(total) );
}

plus();
