console.log("*** Javascript string ***");

//string  variableName.length = count all word with space .

let stringValue =""; 
let nameOfUser = "Abdullah ";
let sentence = "Bangladesh cricket team";

console.log("lenght of user :", nameOfUser.length);// 11 (with space)

console.log("length of sentance :", sentence.length);

//Make a new string (add two string) - concat
let greeting2 = "good night";
let newGreeting = greeting2.concat(", abdullah"); // concat with variable value .

let firstName = "Habib";
let lastName = "limon";

console.log(firstName +" "+ lastName);
console.log(newGreeting);

//subString - take a portion of string .
let newSentence1 = sentence.substring(0, 9);
console.log("subString :", newSentence1);

//slice - take a portion of a string (it takes negative value as well)
let slice = sentence.slice(-20, -3); //
console.log(slice);

let blogPost = 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit officia ratione ullam voluptatem autem nihil mollitia harum aliquam quasi! Blanditiis quae minima omnis, tenetur non modi, consequatur a voluptatum eaque voluptas quasi asperiores possimus et animi tempora. Molestias, fugit dolores.z";

console.log(blogPost.slice(0, 25)+"......."); 

//charAt (index) ->(search a letter from a string )

let word = "Coffee";
let serchLetter = word.charAt(5);// /e
console.log(serchLetter);

//indexof (string) //-1 -> not found
let newSentence = "I love coding";
let searchWord = newSentence.indexOf("coding");

console.log(searchWord);


//includes (string ) // do string contains a substring 

let includes = newSentence.includes("coding");
console.log(includes);

//Case changing
let lowerCase = "Hellow world";
console.log(lowerCase.toLowerCase());

let upperCase = "hellow world";
console.log(upperCase.toUpperCase());


//trim -> removes space from a string 
let untidy = "    how are you";
console.log(untidy.trim()); // remove / cut start & end space .


//find if the word "hello" is present in the sentence !
let givenSentence = "hello, how is bob doing today!";
let lowerCaseGivenSentence = givenSentence.toLowerCase();
let searchFor ="hello";
let searchForTowlowercase = searchFor.toLowerCase();

if(lowerCaseGivenSentence.includes(searchForTowlowercase)){
    console.log(searchFor, "is found!");
}else{
    console.log("opps!....", searchFor, "is not found");
}



//one line code .

if(givenSentence.toLowerCase().includes(searchFor.toLowerCase())){
    console.log("Found.....");
}else{
    console.log("Not Found!");
}







