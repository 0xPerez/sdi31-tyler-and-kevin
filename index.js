console.log('My code is running');
document.getElementById("submitButton").addEventListener("click", addTask);
addTask("This is an example task. Click the button to the right to delete me.")

function addTask(taskString){
    let task = ""
    if (taskString !== undefined && typeof(taskString)==='string') {
        task = taskString //use parameter if argument goes in
    } else {
        task = document.getElementById("taskEntry").value; //if addtask is not called programmatically, get the bar instead
    }
    if (task === ''){
        alert("You can't just do nothing! Enter a task before submitting")
        return false
    }
    
    //TODO change listener to pass task string
    const newTask = document.createElement("li"); // create new 

    newTask.innerHTML =
    `
    <span>
        ${task}
        <button class="taskDeleteButton">🗙</button>
    </span>
    `

    

    newTask.getElementsByClassName("taskDeleteButton")[0].addEventListener("click",removeTask)
    //Append task to task container UL
    document.getElementById("taskList").appendChild(newTask); // add our little guy to the task list
    document.getElementById("taskEntry").value = ""; // reset input bar to clean up
}

function markCompleted() {
    //Get calling element
    //Set class to "completed task" so CSS can take over, CSS should strike it/fade/etc
    //Remove listener
}

function removeTask() {
    let clickedButton = this
    clickedButton.parentNode.parentNode.remove()
    //Get calling element (deletebutton)
    //Find parent LI (may need to go up multiple levels)
    //Delete parent LI from DOM
}
