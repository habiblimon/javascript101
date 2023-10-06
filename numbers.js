console.log("***JAVASCRIPT Number*** ");




let number = 34.73566; // floating point number or decimal number.
let roundNumber = 53; //1,2,76,456 round number /natural Number

let addition = number+roundNumber;
console.log("Result :", addition.toFixed(2)); // .toFixed(2/3/4) building function;
console.log("Integer / Round Number :", parseInt(addition)); // round number . skip .3234343 
console.log("Integer / Round Number :", Math.round(addition)); // 3.6 = 4 & 3.4 =3

let ceilNumber = Math.ceil(number); // always show upper value . 3.1 = 4 or  3.6 =4
console.log("Ceil :", ceilNumber);

let negativeNumber = -4;
let absNum = Math.abs(negativeNumber); //turn negative value to positive value .
console.log("Negative value to positve value : ", absNum);

let numbers = "45.89";
console.log("floar :", Math.floor(numbers)); //always skip decimal value . doesn't take upper value.
console.log(parseInt(numbers)); // typeof  make number - round figer
console.log(parseFloat(numbers)); //typeof make number - decimal number.

//dice roll ->1-6

let randomNumber = Math.random()*6+1; //0 to 1. 
console.log(randomNumber);

console.log("Dice ", Math.floor(randomNumber));


//**//