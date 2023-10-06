console.log("*** JAVASCRIPT LOOP ***");

//javascript loop 

// for , while, 


for (let count =1; count <= 10; count++){
    console.log(count);

    // if(count % 2 == 0){
    //     console.log("event number :", count);
    // }
}


//ODD number ->  1,3,5,7,9
//EVEN number -> 2, 4, 6, 8, 10
for (let counts =1; counts<=10; counts++){
    if(counts % 2 == 0){
        console.log("evenet number", counts);
    }
}

// == -> checks only the value
// === -> checks both type and value

let number2 = 3;

if(number2 === "3"){
    console.log("number is 3");
}else{
    console.log("no number found!");
}





