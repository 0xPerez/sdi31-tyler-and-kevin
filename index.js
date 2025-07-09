console.log('My code is running');
document.getElementById("submitButton").addEventListener("click", addTask);
//Spawn exampletask
addTask("This is an example task. Click the button to the right to delete me.")

function addTask(taskString){
    let task = ""
    if (taskString !== undefined && typeof(taskString)==='string') {
        task = taskString //use parameter if argument goes in
    } else {
        task = document.getElementById("taskEntry").value; //if addtask is not called programmatically, get the bar instead
    }
    if (task === ''){
        alert("You can't just do nothing! Enter a task before submitting") // Edge case check for empty taskEntry bar
        return false
    }
    
    const newTask = document.createElement("li"); // create new element

    newTask.innerHTML =
    `
    <span class= "task">
        <span class = "taskText">
        ${task} 
        </span>
        <button class="taskDeleteButton">🗙</button>
    </span>
    `

    // Mark an event as complete
    newTask.getElementsByClassName("taskText")[0].addEventListener("click",markCompleted)
    // Delete a task event
    newTask.getElementsByClassName("taskDeleteButton")[0].addEventListener("click",removeTask)
    //Append task to task container UL
    document.getElementById("taskList").appendChild(newTask); // add our little guy to the task list
    document.getElementById("taskEntry").value = ""; // reset input bar to clean up
}

function markCompleted() {
    //Get calling element 
    let clickedButton = this 
    
    //Set class to "completed task" so CSS can take over, CSS should strike it/fade/etc
    clickedButton.parentNode.className = "completedtask" 
    console.log("Completed!");
    // Remove event listener
    this.removeEventListener("click",markCompleted)
}

function removeTask() {
    let clickedButton = this
    clickedButton.parentNode.parentNode.remove()
}
