//class 01 JavaScrip Basicsc

console.log("*** class 01 ***");

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

console.log("**** Class 02 ****")

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









