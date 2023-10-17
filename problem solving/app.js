//write a function called reverseString that takes a string as an argument and return the string reversed.

 function reverseString(word){
    return word.split(" ").reverse().join(" ");

}
let reverseWord = reverseString("Problem Solving");

// let word = "Javascript is most popular programing language";
// let splitWord = word.split(" ").reverse().join(" ");

//slitWord.forEach(word) =>console.log("word");

// console.log(reverseWord);


//Create a function called extractDomain that takes an email address a string and return the domain part 

//ken4.fini@kenparnk-bangladesh.com

let email = "ken4.fini@kenparnk-bangladesh.com";
let atIndex = email.indexOf("@");

console.log(email.substring(atIndex+1));


function extractDomain(email){
    let atIndex = email.indexOf("@")+1;
    return email.substring(atIndex);

}

console.log(extractDomain("habiblimon@admin.com.bd"));



//write a function called wordExists that takes two strings: a sentence a word. The function should return true if the word exists in the sentence ans false otherwise.

// let sentence = "Javascript problem solving";
// let wordExist =  sentence.includes("solving");
// console.log(wordExist);

function wordExist(sentence, word){
    let wordExist = sentence.includes(word);
    if(wordExist){
        return `${word} is present in the sentence`;
    }else{
        return `Not Found !`;
    }
}

console.log(wordExist("Javascript Problem solving", "Java"));


//Get Words Longer Than N -> Create a Function called getLongWord that takes a string and number n. Return an array of word that are longer than n characters.

// "The quick brown fox jumps"

let newSentence = "javascript is one of the popular programming language";

let split = newSentence.split(" ").filter((word)=> word.length>=5);
console.log(split);

function getLongWord (sentence, n){
    let split = newSentence.split(" ").filter((word) => word.length > n);
    return split;
}



console.log(getLongWord("javascript most polpular ", "4"));


// create a function called removecharacter that takes a string and character to remove. The function should return the string witl all occurrences of the specified character remove.

//apple ->p -> ale 

let text= "apple is a fruit";
let newSlit = text.split(" ").join(" ");
console.log(newSlit);

function removecharacter (sentence, letter){
    return (newSlit = sentence.split(letter).join(""));
}

console.log(removecharacter("applee", "a"));




// create a function to remove duplicate items from an array

let fruits = ["apple", "Egg", "oranage", "banana", "banana"];
fruits.filter((word, index) => console.log(word));
