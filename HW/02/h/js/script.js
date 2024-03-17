console.log('Uloha 02 - h');


function formatSum(numberFormat, currency) {

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


  numberFormat = numberFormat.toLocaleString(formatLocality, {
    style: "currency",
    currency: formatCurrent,
  });

  return numberFormat;
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
