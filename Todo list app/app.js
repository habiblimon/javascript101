//selectors

const taskForm = document.getElementById("task-input-form");
const taskInput= document.getElementById("new-task-input");
const allTasks = document.querySelector(".tasks");

//form events

 taskForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(!taskInput.value){
        alert("Please, Insert a task !");
        return;
    }


    //creating a task div
    const taskDiv=document.createElement("div");
    taskDiv.classList.add("content");
    //taskDiv.innerHTML=taskInput.value;

    //creating input field.
    const inputTask = document.createElement("input");
    inputTask.type = "text";
    inputTask.value = taskInput.value;
    inputTask.setAttribute("readonly", "readonly");

    //creating a action div
    const actions=document.createElement("div");
    actions.classList.add("action");

    //creating edit button
    const editBtn=document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerText = "Edit";
    actions.appendChild(editBtn);

    //creating delete button
    const deleteBtn=document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";
    actions.appendChild(deleteBtn);

    //adding the input field to content div
    taskDiv.appendChild(inputTask);

    //adding actions div to the content 
    taskDiv.appendChild(actions);



    //adding the content div to all task div
    allTasks.appendChild(taskDiv);

    //edit a task field
    editBtn.addEventListener("click", (e)=>{
        if(editBtn.innerText.toLowerCase() === "edit"){
            inputTask.removeAttribute("readonly");
            editBtn.innerText = "Save";
            inputTask.focus();
        }else{
            editBtn.innerText = "Edit";
            inputTask.setAttribute("readonly", "readonly");
        }
    });

    deleteBtn.addEventListener("click", ()=>{
        allTasks.removeChild(taskDiv);
    });

    // console.log(taskInput.value);
    taskInput.value="";




 });


// document.getElementById("text").addEventListener("click", (e)=>{
//     console.log(e, e.target);
// });


// document.querySelector("body").addEventListener("click", (e)=>{

//     console.log(e.target);
// });