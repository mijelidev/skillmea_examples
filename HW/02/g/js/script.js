console.log('Uloha 02 - g');


function formatSum(cislo) {
  cislo = cislo.toLocaleString("cs-CZ", {
    style: "currency",
    currency: "CZK",
  });

  return cislo;
}


function discount() {
  let sale = Number( prompt("Sleva :") ),
    price = Number( prompt("Cena:") );

    sum =  ( price / 100 * sale);

  return main(sum, sale, price);
}

function main(total, sale, price) {
  console.log( "Sleva " + sale + "% z celkové částy:" + formatSum(price) + " je " + formatSum(total)  );
}

discount();
