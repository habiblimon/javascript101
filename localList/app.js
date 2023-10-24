//selectors 
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("items-list");
const itemTable = document.getElementById("item-table");
const clearBtn = document.getElementById("clear-btn");
const listContainer = document.getElementById("list-container");

const filter = document.getElementById("filter");



//Add item
//Remove item
//filter item
//clear All item


let count =1;
function addItem(e){
    //To stop brower reload.
    e.preventDefault();

    const newItem = itemInput.value;

    if(newItem ===""){
        alert("please add an item");
        return;
    }

   
    itemTable.innerHTML +=`
        <tr class="item">
            <th scope="row">${count}</th>
            <td class="item-name">${newItem}</td>
            <td><button class="btn btn-danger remove-item"><i class="bi bi-trash3"></i></button></td>
        </tr>
    `;

    //empty input data after posted input. 
    itemInput.value="";
    checkInterface();
    count++;

}

function removeItem(e){
    if(e.target.parentElement.classList.contains("remove-item")){
        e.target.parentElement.parentElement.parentElement.remove();
    }
    checkInterface();
   
}

function filterItems(e){
    const items = document.querySelectorAll(".item");
    const searchText = e.target.value.toLocaleLowerCase();
    
    items.forEach((item) =>{
        const itemName = item.children[1].textContent.toLocaleLowerCase();
       
        if(itemName.indexOf(searchText) !== -1){
            item.style.display ="";
        }else{
            item.style.display="none";
        }

    });
}


function clearList(){
    itemTable.innerHTML = "";
}


function checkInterface(){
    const items = document.querySelectorAll(".item");

    if(items.length === 0){
       listContainer.style.display = "none";
       
    }else{
        listContainer.style.display = "block";
    }
}






//Event Listen
itemForm.addEventListener("submit", addItem);
itemTable.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearList);
filter.addEventListener("input", filterItems);

checkInterface();