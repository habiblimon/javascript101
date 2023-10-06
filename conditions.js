console.log("***JAVASCRIPT Conditions JS ***");


// if else , else if (condition)

//temp ->30 ->"hot"
//temp -> >30 ->"normal"
//temp -> <=22 ->"cold"

let temperature =30;

if (temperature > 30){
    console.log("Weather is HOT");
}else if(temperature <=22){
    console.log("weather is COLD");
}else{
    console.log("Weathe is Normal");
}

let ageH = 35;
let person = "Habib";

let sentenceH = `${person} is ${ageH} years old use back {$} `;
console.log(sentenceH);


//course -> Math, English, Science
// Find out the average Mark of 3 courses
//Find the actual grate 
// 90 ->A+
//88 ->A
//60 ->B+
//50 ->C
// 40 ->D
//below 40 fail.

let mathMark=65;
let englishMark = 80;
let scienceMArk = 75;

const averageMark = (mathMark+englishMark+scienceMArk) / 3;

console.log("Avarage Marks", averageMark.toFixed(2));

if(averageMark >=90){
    console.log("A+");
}else if(averageMark >=80){
    console.log("A");
}else if(averageMark >=60){
    console.log("B+");
}else if(averageMark >=50){
    console.log("B")
}


let number = 34.73566; // floating point number or decimal number.
let roundNumber = 53; //1,2,76,456 round number /natural Number

let addition = number+roundNumber;
console.log("Result :", addition.toFixed(2)); // .toFixed(2/3/4) building function;
console.log("Integer / Round Number :", parseInt(addition)); // round number . skip .3234343 
console.log("Integer / Round Number :", Math.round(addition)); // 3.6 = 4 & 3.4 =3

let ceilNumber = Math.ceil(number);
console.log("Ceil :", ceilNumber);

let negativeNumber = -4;
let absNum = Math.abs(negativeNumber);
console.log(absNum);

let numbers = "45.89";
console.log("floar :", Math.floor(numbers));
console.log(parseInt(numbers)); // typeof  make number - round figer
console.log(parseFloat(numbers)); //typeof make number - decimal number.

//dice roll ->1-6

let randomNumber = Math.random()*6; //0 to 1. 
console.log(randomNumber);


//**//