console.log("***Java Script variable ***");


var boxOne = "orange";
var boxTwo = "apple";

var personName, job, age, studiesAt;


personName = "Habib";
job = "developer";
age = 30;
studiesAt = "university of Bangladesh";

console.log(personName, job, age, studiesAt);


//Reassign varial.
age =37;
age =39;
age =57;
console.log("age:", age);



//ES6+ letest variable 

//let & const

let personAge;
personAge = 30;
console.log("Before variable defined with let #AGE :", personAge);

persnAge =30;
var persnAge;
console.log("after variable defined with var ---", persnAge);

let carModel ="BMW"; //Gobal variable
{
    //only value pass inside of curlly breket . 
    let carModel ="BMW"; // local variable
    console.log(carModel);
}

console.log("Global variable value", carModel);



const userName = "Limon"; //fixed variable , can't same varibale name use 2nd time .

console.log("const variabe #unserName :", userName);














