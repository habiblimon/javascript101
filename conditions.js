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





//condition ? ________ : __________
idDarkMode = true;
 idDarkMode === true ? console.log("Dark Moode enable ") : console.log("Dark Mode disabled !");