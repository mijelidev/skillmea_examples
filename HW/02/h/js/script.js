console.log('Uloha 02 - g');


function formatSum(cislo, currency) {

   let  formatLocality = "",
        formatCurrent = "";

switch (currency) {
  case "USD":
      formatLocality = "en-US",
       formatCurrent = "USD";
    break;
  case "EUR":
    formatLocality = "de-DE",
    formatCurrent = "EUR";
    break;
  default:
    formatLocality = "cs-CS",
    formatCurrent = "CZK";
}


  cislo = cislo.toLocaleString(formatLocality, {
    style: "currency",
    currency: formatCurrent,
  });

  return cislo;
}


function discount() {
  let sale = parseInt(prompt("Sleva :")),
    price = parseInt(prompt("Cena:")),
    currency = prompt("Měna:", "CZK").toUpperCase();


    sum =  ( price / 100 * sale);

  return main(sum, sale, price, currency);
}

function main(total, sale, price, currency) {
  console.log("Sleva " + sale + "% z celkové částy:" + formatSum(price, currency) +" je " + formatSum(total, currency)
  );
}

discount();
