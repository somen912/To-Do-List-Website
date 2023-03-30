let keyControl = document.querySelector(".userSection .inputSection");
let list = document.querySelector(".todoList");
let button = document.querySelector(".userSection .enterButton");
let saveButton = document.querySelector(".saveButton");


keyControl.addEventListener("keyup",(event)=>{if(event.key=="Enter"){addToDo(keyControl.value); keyControl.value="";}});
button.addEventListener("click",()=>{addToDo(keyControl.value);keyControl.value="";})

// to save on local storage
saveButton.addEventListener("click",()=>{
    let myArray = [];
    let taskList = document.querySelectorAll(".todoList li");
    taskList.forEach((element)=>{myArray.push(element.textContent)});
    console.log(myArray);
    localStorage.setItem("Task",JSON.stringify(myArray));
})

// function to add list element
const addToDo = (item) =>{const itemList = document.createElement("li");
                          itemList.innerHTML=`<input class="checkBox" type="checkbox" name="" value="">${item}<i class="fa-solid fa-xmark"></i>`;
                          itemList.querySelector(".checkBox").addEventListener("click",()=>{itemList.classList.toggle("taskDone")});
                          itemList.querySelector("i").addEventListener("click",()=>{itemList.remove()})
                          list.appendChild(itemList);}

// to recall saved data
function getTask(){
                      const pending = JSON.parse(localStorage.getItem("Task"));
                      console.log(pending);
                      pending.forEach((element)=>{addToDo(element);})
                  }
// calling data recall function
getTask();
