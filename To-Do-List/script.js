let inputs = document.getElementById('addTask');
let text =  document.querySelector(".task-container");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    }
    else{
        let newTask = document.createElement("ul");
        newTask.innerHTML = `${inputs.value} <i class="fa-solid fa-trash-can"></i>`;
        text.appendChild(newTask);          
        inputs.value = "";

        newTask.querySelector("i").addEventListener("click",remove);
        function remove() {
            newTask.remove();
        }
    }
}