// for (let count=1; count<=10; count++){
//     console.log(count);
// }


//..continue ....

//write our fist Function
function forLoop(){
   // console.log("Fast Value :", 10);
   for (let count=1; count<=10; count++){
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

forLoop2("2", "6")



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




