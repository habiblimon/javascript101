//class 01 JavaScrip Basicsc

console.log("*** class 01 / JavaScrip Basicsc ***");

 console.log("Hellow Javascript"); //string - 

 console.log(10+30); //number 


 //variable - box 

 var patro = "banana";
 var num = 10;
 console.log(patro);
 


 //typof 
 console.log(typeof patro);
 console.log(typeof num);
 console.log(typeof (patro+num));// if string and number adding togather it will be show string typeof.



 //operation  (+ - * /)

 console.log(typeof (10/10));//division
 console.log(typeof (10*2));//multiply
 console.log(typeof (30-10));//subtract
 console.log(typeof (10+10)); //addition

 //first we should define a variable with var
 //fist letter should be smaller
 //cameCase/underscore 
 //Name should be meaningful (avoid using , x, y, Z, a, b etc)

var numOne = 10; //camelCase
var num_Tow = 30; //under_score


var addition = numOne+num_Tow;
console.log("addition :", addition);


//to the power 
console.log(3 ** 3); // 3 x 3 x 3 = 27 

//Modulus

console.log(10 % 3); //10 / 3 = 3 ,  "(1)" reminder number.

//increment /decrement 

var numInc = 10;
numInc ++;

console.log("increment (++)", numInc);

var numDec = 10;
numDec --;
numDec --; // result should be show = 8

console.log("Decriment (--)", numDec);

//true or false

var isHot = true;
var isCold = false;

console.log(typeof isHot); //boolean


//undefind, null
var counter;

console.log(counter) // undefind 







//////////////////////////////////////////////
// **** CLass 02 ***** JS Variable, Conditions
//////////////////////////////////////////////

// link with js file with html file.
//variable dicreal in one row 

console.log("**** Class 02  JS Variable, Conditions ****")

var personName, age, job, stuInfo;
personName = "Habib";
age = 29;
job = "freelancer";
stuInfo = "NU";

//ES6+ LATEST VERSION
//let & const



console.log( personName, age, job, stuInfo);

// let variable golabal & local .


let car = "audi";

{
    let car = "BMW";
    console.log("local : ", car);
}

console.log("global : ", car)


// if else , else if .

//dynamic sentence  javascript using -> ``  '${let/var/const}'

let age2 = 18;
let prsn = "habib";

let sentence = `${prsn} is ${age2} yrs old`;
console.log(sentence);



////////////////////////////////////////////////
//Class 03 - Loops, Numbers Methods & Conditions 
////////////////////////////////////////////////
console.log("****Class-03  Loops, Numbers Methods & Conditions****");

//if else , else if

let mathMark = 65;
let engMark = 70;
let scienceMark =80;

const avgMark = (mathMark+engMark+scienceMark)/3;

console.log("Avarage Mark:", avgMark);

//JavaScript Number

let number = 34.34322; //floating point number or decimal
let roundNum =53; //1,2,68, round number, natural number, integer number.

let addition2 = number+roundNum;
console.log("Result :",addition2);
console.log("tofixed :",addition2.toFixed(2));//argument building function
console.log("Integer / Round Number :",parseInt(addition2)); // round number
console.log(" Round Number :",Math.round(addition2)); // round number
console.log(" Ceil Number :",Math.ceil(addition2)); // ceil number
console.log(" floor Number :",Math.floor(addition2)); // ceil number


//dice roll -> 1-6

let randomeNum = Math.floor(Math.random()*7); // 1 to 6-> value
console.log("Roll a dice :",randomeNum);



// javascript loop 
// 1-100
// for loop, while loop, 
for (let count = 1; count<10; count++){
    console.log(count);
}


//odd number : 1, 3, 5, 6, 7, 9, 
//even number : 2, 4, 6, 8, 10


///////////////////////////////////////////
// Class#04 (Javascript String Methods)
//////////////////////////////////////////

console.log("*** Class#04 || (Javascript String Methods) ***"); 


//string 2 type defind

let stringValue =" ";
let nameOfUser ="Abdullah "; //count blank space.
console.log("leaght of user :", nameOfUser.length);

//Make a New string 
let greeting ="good night";
let newGreeting = greeting.concat(", Habib");

console.log(newGreeting);





