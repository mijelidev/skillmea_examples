function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(length, min, max) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomInt(min, max));
  }
  return randomArray;
}


let numbers = generateRandomArray(50, 1, 1000);
console.log(numbers);



function sum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log("Součet čísel v poli je: " + sum);
}

function big(numbers) {
   let bigNumber = numbers[0];
   for (let i = 1; i < numbers.length; i++) {
     if (numbers[i] > bigNumber) {
       bigNumber = numbers[i];
     }
   }

   // Výsledek vypíšeme do konzole
   console.log("Největší číslo v poli je: " + bigNumber);

}
/** Multiple numbers */
function multiple(numnbers, multiple_number) {
  let multipleNumber = [];

  numbers.forEach((number) => {
    number = number * multiple_number;
    multipleNumber.push(number);
  });

  console.log(multipleNumber);
}


function repeatValue(myArray, value) {
  let count = 0;

  myArray.forEach(element => {
    if(element === value){
      count++;
    }
  });
  console.log("Počet " + value + " je: " +count);
}


function evanOddNumbers(numbers) {
  let odd = 0,
      even = 0;

  numbers.forEach(number => {
    if (number % 2 === 0){
      even++;
    }else{
      odd++;
    }
  });
  console.log("Počet lichých: " + odd + ", počet sudých: "+ even );
}

function writeXValue(numbers, XValue) {
    newArrayNumbers = [];
  for (let i = 0; i < numbers.length; i += XValue) {
      newArrayNumbers.push(numbers[i]);
  }
  console.log("Vypisuji každou "+ XValue + ", hodnoty: " + newArrayNumbers);

}






sum(numbers);
big(numbers);

let vaso = ["Vasho", "Karel", "Vasho"]
repeatValue(vaso, "Vasho")

multiple(numbers, 10);
evanOddNumbers(numbers);

writeXValue(numbers, 10);









