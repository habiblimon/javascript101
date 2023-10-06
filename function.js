console.log("*** JAVASCRIPT Function ***");

// for (let count=1; count<=10; count++){
//     console.log(count);
// }


//..continue ....

//write our first Function
function forLoop(){
   // console.log("Fast Value :", 10);
   for (let count=1; count<=5; count++){
    console.log("for loop :", count);
}
}

forLoop();



//write a funtion that print out your name 
function userNameGenerator(){
    console.log("User Name");
}

userNameGenerator();
userNameGenerator();



//for loop 

function forLoop2(firstCount, lastCount){
    for(let counts=firstCount; counts<=lastCount; counts++){
        console.log("forLoop counts ", counts);
    }
}

forLoop2("2", "6");
forLoop2("1", "2");



function userNameG(firstName, lastName){
    console.log(`User name is ${firstName} ${lastName}`);  //template literals      (`   `)
}

userNameG("Habib", "limon");
userNameG("liton", "das");

//if else with function 

function temeratureCount(temperature){
    if (temperature <= 30){
        console.log("cold");
    }else if(temperature >=35){
        console.log("Hot");
    }else{
        console.log("Normal");
    }
}

 temeratureCount(31);



 //function return......

 function add(num1, num2){
   return num1+num2;
 }

console.log("ADD :",add(15,20));


// //Arrow function 
// const addNumbers = (a, b) => a+b; // => maneh  return . 
// console.log("Arrow function ADD:", addNumbers(10,12));


const addNumbers = (a, b, c) => {
    let total = a+b+c;
    return total;
}; 
console.log("Arrow function ADD:", addNumbers(10,12, 8));


//condition ? ________ : __________
const greeting = (person) =>{
    let name = person ? person : "stranger";
    return `Hello ${name}`;
}

console.log(greeting("Shakib AL Hasan"));


const userAuthenication = (user) =>{
    let auth = user ? `${user} is log in` : "in valied ";
    return auth;
}

let userV =userAuthenication ("habib limon");
console.log(userV);








