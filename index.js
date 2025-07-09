document.getElementById("submitButton").addEventListener("click", addTask);
document.getElementById("clearButton").addEventListener("click", clearStorage);
//Spawn exampletask

startTaskList()
function startTaskList() {
    document.getElementById("taskList").innerHTML = localStorage.getItem('taskList');
    if (document.getElementById("taskList").innerHTML<1){
        addTask("This is an example task. Click on my text to complete me")
        addTask("I am completed task, delete me using the X button.", true)
    }
    const textList = document.getElementsByClassName("taskText")
    for (let textBox of textList){
        textBox.addEventListener("click", markCompleted)
    }
    const delButtonList = document.getElementsByClassName("taskDeleteButton")
    for (let delButton of delButtonList){
        delButton.addEventListener("click", removeTask)
    }    

}

function addTask(taskString, complete = false) {
    let task = ""
    if (taskString !== undefined && typeof (taskString) === 'string') {
        task = taskString //use parameter if argument goes in
    } else {
        task = document.getElementById("taskEntry").value; //if addtask is not called programmatically, get the bar instead
    }
    if (task === '') {
        alert("You can't just do nothing! Enter a task before submitting") // Edge case check for empty taskEntry bar
        return false
    }

    const newTask = document.createElement("li"); // create new element

    newTask.innerHTML =
        `
    <span class= "task" id=${task}>
        <button class="taskDeleteButton">🗙</button>
        <span class = "taskText">
        &#8226 ${task} 
        </span>
       
    </span>
    `

    newTask.getElementsByClassName("taskText")[0].addEventListener("click", markCompleted)
    if (complete === true) {
        newTask.getElementsByClassName("taskText")[0].parentNode.className = "completedtask"
    }
    // Delete a task event
    newTask.getElementsByClassName("taskDeleteButton")[0].addEventListener("click", removeTask)
    //Append task to task container UL
    document.getElementById("taskList").appendChild(newTask); // add our little guy to the task list
    document.getElementById("taskEntry").value = ""; // reset input bar to clean up

    smashThatSaveButton()
    console.log(localStorage.getItem(task))
}

function markCompleted() {
    //Get calling element 
    let clickedButton = this

    //Set class to "completed task" so CSS can take over, CSS should strike it/fade/etc
    clickedButton.parentNode.className = "completedtask"

    // Remove event listener
    this.removeEventListener("click", markCompleted)
    smashThatSaveButton();
}

function removeTask() {
    let clickedButton = this
    clickedButton.parentNode.parentNode.remove()
    smashThatSaveButton();
}

function clearStorage(){
    localStorage.clear()
    alert("Storage Cleared! Hope it was on purpose :P")
}

function smashThatSaveButton(){
    localStorage.setItem('taskList', document.getElementById("taskList").innerHTML);
}