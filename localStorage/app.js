const form = document.querySelector("form");
const input = document.querySelector("input");
const taskDiv = document.querySelector(".task");



let itemArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")): [];

console.log(itemArray);

// function getItemsFromLocalStorage(){
//     if(localStorage.getItem("items")  === null){
//         itemArray = JSON.parse(localStorage.getItem("items"));
//         console.log("get from local", itemArray);
//     }else{
//         itemArray = [];
//         console.log(itemArray);
//     }
//     return itemArray;
// }


//getItemsFromLocalStorage();


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let item = input.value;

    createItemDom();
    createItemForLocal(item);
    deleteItemFromDOM();

});




function createItemDom(){
    // input.value ="";
    
    itemArray.forEach((itemValue) =>{
        taskDiv.innerHTML += `
         <li>${itemValue} <button>Delete</button></li>
     `;
    });
}


function createItemForLocal(item){
    itemArray.push(item);
    localStorage.setItem("items", JSON.stringify(itemArray));
   location.reload();
}



function deleteItemFromDOM(){
    let deleteBtn = document.querySelectorAll("button");

    deleteBtn.forEach((button, i) =>{
        button.addEventListener("click", ()=>{
            itemArray.splice (i, 1);
            localStorage.setItem("items", JSON.stringify(itemArray));
            location.reload();
        });
    });
}

createItemDom ();
deleteItemFromDOM();



